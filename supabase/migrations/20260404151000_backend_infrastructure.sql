-- Nexus backend infrastructure
-- Creates schema, RLS, policies, triggers, helper functions, and storage rules.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  first_name text,
  last_name text,
  institution text,
  role text not null default 'student' check (role in ('student', 'professor', 'institution')),
  bio text,
  website text,
  location text,
  avatar_url text,
  cv_url text,
  is_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.institutions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  website text,
  logo_url text,
  ranking integer,
  type text check (type in ('university', 'research_institute', 'company')),
  created_at timestamptz not null default now()
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  type text not null check (type in ('phd', 'postdoc', 'research_position', 'internship', 'fellowship')),
  institution_id uuid references public.institutions(id),
  professor_id uuid not null references public.profiles(id) on delete cascade,
  requirements jsonb not null default '{}'::jsonb,
  application_deadline date,
  funding_amount numeric,
  duration_months integer,
  location text,
  is_active boolean not null default true,
  tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  applicant_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'under_review', 'accepted', 'rejected', 'withdrawn')),
  cover_letter text,
  cv_url text,
  additional_documents jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewer_notes text,
  unique (opportunity_id, applicant_id)
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  participants uuid[] not null,
  title text,
  type text not null default 'direct' check (type in ('direct', 'group', 'opportunity_related')),
  opportunity_id uuid references public.opportunities(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint participants_min_size check (coalesce(array_length(participants, 1), 0) >= 2)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  message_type text not null default 'text' check (message_type in ('text', 'file', 'image', 'system')),
  file_url text,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.publications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  authors uuid[] not null,
  abstract text,
  doi text,
  journal text,
  publication_date date,
  pdf_url text,
  keywords text[] not null default '{}',
  citation_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type text not null,
  title text not null,
  message text,
  data jsonb not null default '{}'::jsonb,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.connections (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles(id) on delete cascade,
  addressee_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'blocked')),
  created_at timestamptz not null default now(),
  accepted_at timestamptz,
  unique (requester_id, addressee_id),
  constraint no_self_connection check (requester_id <> addressee_id)
);

create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_institution on public.profiles(institution);
create index if not exists idx_opportunities_type on public.opportunities(type);
create index if not exists idx_opportunities_institution on public.opportunities(institution_id);
create index if not exists idx_opportunities_active on public.opportunities(is_active);
create index if not exists idx_applications_status on public.applications(status);
create index if not exists idx_messages_conversation on public.messages(conversation_id);
create index if not exists idx_notifications_user_unread on public.notifications(user_id, is_read);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists opportunities_set_updated_at on public.opportunities;
create trigger opportunities_set_updated_at
before update on public.opportunities
for each row execute function public.set_updated_at();

drop trigger if exists conversations_set_updated_at on public.conversations;
create trigger conversations_set_updated_at
before update on public.conversations
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, first_name, last_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    coalesce(new.raw_user_meta_data ->> 'role', 'student')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.search_opportunities(search_term text)
returns table (
  id uuid,
  title text,
  description text,
  type text,
  institution_name text,
  professor_name text,
  location text,
  rank real
)
language plpgsql
as $$
begin
  return query
  select
    o.id,
    o.title,
    o.description,
    o.type,
    i.name as institution_name,
    coalesce(p.first_name || ' ' || p.last_name, '') as professor_name,
    o.location,
    ts_rank(
      to_tsvector('english', coalesce(o.title, '') || ' ' || coalesce(o.description, '') || ' ' || coalesce(i.name, '')),
      plainto_tsquery('english', search_term)
    ) as rank
  from public.opportunities o
  left join public.institutions i on i.id = o.institution_id
  left join public.profiles p on p.id = o.professor_id
  where o.is_active = true
    and to_tsvector('english', coalesce(o.title, '') || ' ' || coalesce(o.description, '') || ' ' || coalesce(i.name, ''))
      @@ plainto_tsquery('english', search_term)
  order by rank desc;
end;
$$;

create or replace function public.create_notification_for_application()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_professor_id uuid;
begin
  select professor_id into v_professor_id
  from public.opportunities
  where id = new.opportunity_id;

  if v_professor_id is not null then
    insert into public.notifications (user_id, type, title, message, data)
    values (
      v_professor_id,
      'new_application',
      'New application received',
      'A student submitted a new application.',
      jsonb_build_object('application_id', new.id, 'opportunity_id', new.opportunity_id)
    );
  end if;
  return new;
end;
$$;

drop trigger if exists on_application_created on public.applications;
create trigger on_application_created
after insert on public.applications
for each row execute function public.create_notification_for_application();

create or replace function public.create_notification_for_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.notifications (user_id, type, title, message, data)
  select participant_id, 'new_message', 'New message', 'You have a new message.', jsonb_build_object('conversation_id', new.conversation_id, 'message_id', new.id)
  from unnest((select participants from public.conversations where id = new.conversation_id)) as participant_id
  where participant_id <> new.sender_id;
  return new;
end;
$$;

drop trigger if exists on_message_created on public.messages;
create trigger on_message_created
after insert on public.messages
for each row execute function public.create_notification_for_message();

alter table public.profiles enable row level security;
alter table public.opportunities enable row level security;
alter table public.applications enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.notifications enable row level security;
alter table public.connections enable row level security;
alter table public.publications enable row level security;
alter table public.institutions enable row level security;

drop policy if exists "Public profiles are viewable by everyone" on public.profiles;
create policy "Public profiles are viewable by everyone"
on public.profiles for select using (true);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update using (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Institutions are viewable by everyone" on public.institutions;
create policy "Institutions are viewable by everyone"
on public.institutions for select using (true);

drop policy if exists "Authenticated users can create institutions" on public.institutions;
create policy "Authenticated users can create institutions"
on public.institutions for insert to authenticated with check (true);

drop policy if exists "Opportunities are viewable by everyone" on public.opportunities;
create policy "Opportunities are viewable by everyone"
on public.opportunities for select using (is_active = true);

drop policy if exists "Professors can create opportunities" on public.opportunities;
create policy "Professors can create opportunities"
on public.opportunities for insert to authenticated
with check (auth.uid() = professor_id);

drop policy if exists "Professors can update own opportunities" on public.opportunities;
create policy "Professors can update own opportunities"
on public.opportunities for update
using (auth.uid() = professor_id)
with check (auth.uid() = professor_id);

drop policy if exists "Users can view related applications" on public.applications;
create policy "Users can view related applications"
on public.applications for select
using (
  auth.uid() = applicant_id
  or auth.uid() in (
    select professor_id from public.opportunities where id = opportunity_id
  )
);

drop policy if exists "Users can create own applications" on public.applications;
create policy "Users can create own applications"
on public.applications for insert to authenticated
with check (auth.uid() = applicant_id);

drop policy if exists "Professors can review applications" on public.applications;
create policy "Professors can review applications"
on public.applications for update
using (
  auth.uid() in (select professor_id from public.opportunities where id = opportunity_id)
)
with check (
  auth.uid() in (select professor_id from public.opportunities where id = opportunity_id)
);

drop policy if exists "Participants can view conversations" on public.conversations;
create policy "Participants can view conversations"
on public.conversations for select
using (auth.uid() = any(participants));

drop policy if exists "Participants can create conversations" on public.conversations;
create policy "Participants can create conversations"
on public.conversations for insert to authenticated
with check (auth.uid() = any(participants));

drop policy if exists "Participants can update conversations" on public.conversations;
create policy "Participants can update conversations"
on public.conversations for update
using (auth.uid() = any(participants))
with check (auth.uid() = any(participants));

drop policy if exists "Participants can view messages" on public.messages;
create policy "Participants can view messages"
on public.messages for select
using (
  conversation_id in (
    select id from public.conversations where auth.uid() = any(participants)
  )
);

drop policy if exists "Participants can send messages" on public.messages;
create policy "Participants can send messages"
on public.messages for insert to authenticated
with check (
  auth.uid() = sender_id
  and conversation_id in (
    select id from public.conversations where auth.uid() = any(participants)
  )
);

drop policy if exists "Sender can edit messages for 5 minutes" on public.messages;
create policy "Sender can edit messages for 5 minutes"
on public.messages for update
using (
  auth.uid() = sender_id
  and created_at >= now() - interval '5 minutes'
)
with check (
  auth.uid() = sender_id
  and created_at >= now() - interval '5 minutes'
);

drop policy if exists "Users can view own notifications" on public.notifications;
create policy "Users can view own notifications"
on public.notifications for select using (auth.uid() = user_id);

drop policy if exists "Users can update own notifications" on public.notifications;
create policy "Users can update own notifications"
on public.notifications for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can view own connections" on public.connections;
create policy "Users can view own connections"
on public.connections for select
using (auth.uid() = requester_id or auth.uid() = addressee_id);

drop policy if exists "Users can create own connection requests" on public.connections;
create policy "Users can create own connection requests"
on public.connections for insert to authenticated
with check (auth.uid() = requester_id);

drop policy if exists "Users can update own connections" on public.connections;
create policy "Users can update own connections"
on public.connections for update
using (auth.uid() = requester_id or auth.uid() = addressee_id)
with check (auth.uid() = requester_id or auth.uid() = addressee_id);

drop policy if exists "Publications are viewable by everyone" on public.publications;
create policy "Publications are viewable by everyone"
on public.publications for select using (true);

drop policy if exists "Authenticated users can create publications" on public.publications;
create policy "Authenticated users can create publications"
on public.publications for insert to authenticated
with check (auth.uid() = any(authors));

insert into storage.buckets (id, name, public)
values
  ('avatars', 'avatars', true),
  ('documents', 'documents', false),
  ('publications', 'publications', true),
  ('institution-logos', 'institution-logos', true)
on conflict (id) do nothing;

drop policy if exists "Avatar images are publicly accessible" on storage.objects;
create policy "Avatar images are publicly accessible"
on storage.objects for select
using (bucket_id = 'avatars');

drop policy if exists "Users can upload their own avatar" on storage.objects;
create policy "Users can upload their own avatar"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'avatars'
  and auth.uid()::text = (storage.foldername(name))[1]
);

drop policy if exists "Users can update their own avatar" on storage.objects;
create policy "Users can update their own avatar"
on storage.objects for update to authenticated
using (
  bucket_id = 'avatars'
  and auth.uid()::text = (storage.foldername(name))[1]
)
with check (
  bucket_id = 'avatars'
  and auth.uid()::text = (storage.foldername(name))[1]
);

drop policy if exists "Users can view own documents" on storage.objects;
create policy "Users can view own documents"
on storage.objects for select
using (
  bucket_id = 'documents'
  and auth.uid()::text = (storage.foldername(name))[1]
);

drop policy if exists "Users can upload own documents" on storage.objects;
create policy "Users can upload own documents"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'documents'
  and auth.uid()::text = (storage.foldername(name))[1]
);

drop policy if exists "Users can update own documents" on storage.objects;
create policy "Users can update own documents"
on storage.objects for update to authenticated
using (
  bucket_id = 'documents'
  and auth.uid()::text = (storage.foldername(name))[1]
)
with check (
  bucket_id = 'documents'
  and auth.uid()::text = (storage.foldername(name))[1]
);
