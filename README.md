<img src="src/assets/nexus_logo.svg" alt="Nexus Logo" width="200"/>

# Nexus - Academic Networking Platform
Visit the live site here: [Nexus](https://nexusrecruit.netlify.app/)

Connect with professors, universities, and research institutes. Find PhD opportunities, research positions, and academic collaborations worldwide.

## 🌟 Overview

Nexus is a modern academic networking platform designed to bridge the gap between researchers, students, and institutions. Our mission is to facilitate meaningful connections that drive academic excellence and foster global research collaboration.

## ✨ Features

- **🔍 Opportunity Discovery**: Browse PhD positions, research fellowships, and academic jobs  
- **👥 Academic Networking**: Connect with researchers, professors, and institutions worldwide  
- **💬 Messaging System**: Direct communication with potential collaborators  
- **📱 Community Hub**: Share insights and engage with the academic community  
- **🔐 Secure Authentication**: Protected user profiles and data  
- **📊 Profile Management**: Showcase your academic background and research interests  
- **🌐 Global Reach**: Access opportunities from top universities worldwide  

## 🚀 Technology Stack

- **Frontend**: React 18.3.1 with TypeScript  
- **Build Tool**: Vite 5.4.19  
- **UI Framework**: shadcn/ui (Radix UI + Tailwind CSS)  
- **Styling**: Tailwind CSS with custom glassmorphism effects  
- **State Management**: React Query + React Context API  
- **Authentication**: Supabase Auth  
- **Database**: Supabase  
- **Deployment**: Netlify  

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  
- Git  

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhishekNagar1/Nexus.git
   cd Nexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**  
   Navigate to `http://localhost:8080`

### Supabase Backend Setup

1. Create a `.env.local` (or `.env`) file in the project root:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Install Supabase CLI and link your project:
   ```bash
   npm install -g supabase
   supabase login
   supabase link --project-ref <your-project-ref>
   ```

3. Apply database migrations:
   ```bash
   supabase db push
   ```

4. Deploy edge functions:
   ```bash
   supabase functions deploy notifications
   ```

The backend migration includes:
- Core schema (`profiles`, `institutions`, `opportunities`, `applications`, `conversations`, `messages`, `notifications`, etc.)
- Row Level Security policies
- Auth/profile trigger for new users
- Search RPC (`search_opportunities`)
- Notification triggers
- Storage buckets and policies (`avatars`, `documents`, `publications`, `institution-logos`)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Design System

* **Dark Theme**: Sophisticated dark mode with proper contrast  
* **Glassmorphism**: Modern glass effects throughout the interface  
* **Responsive Design**: Mobile-first approach with touch-friendly interactions  
* **University Branding**: Integration with top university logos and branding  
* **Accessibility**: WCAG compliant with proper focus management  

## 🏗️ Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── ...
├── pages/               # Page components
│   ├── Index.tsx        # Landing page
│   ├── Opportunities.tsx
│   ├── Community.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── assets/              # Static assets (logos, images)
├── lib/                 # Utility functions
├── integrations/        # Third-party integrations
└── services/            # Supabase API services (opportunities, profile, messages)
```

### Backend Service Layer

Typed service files are available in `src/services`:
- `opportunityService.ts`
- `profileService.ts`
- `messageService.ts`

Auth/session management is implemented in:
- `src/hooks/useAuth.ts`

Supabase client and database types:
- `src/integrations/supabase/client.ts`
- `src/integrations/supabase/types.ts`

## 🌐 Deployment

### Netlify Deployment

* Connect your repository to Netlify  
* Build settings are automatically configured via `netlify.toml`  
* Deploy: Your site will be live at your Netlify URL  

**Build Configuration**

* Build command: `npm run build`  
* Publish directory: `dist`  
* Node version: `18`  

## 🤝 Contributing

### How to Contribute

1. Fork the repository  
2. Create a feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to the branch  
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request  

### Development Guidelines

* Follow TypeScript best practices  
* Use Tailwind CSS for styling  
* Ensure mobile responsiveness  
* Write clear commit messages  
* Test your changes thoroughly  

## 📄 License

This project is open source and available under the **MIT License**.

## 👨‍💻 Author

**Abhishek Nagar**

* Email: [abhisheknagar679@gmail.com](mailto:abhisheknagar679@gmail.com)  
* GitHub: [@AbhishekNagar1](https://github.com/AbhishekNagar1)  

## 🙏 Acknowledgments

* **Universities**: Thanks to all the institutions that inspire our mission  
* **Open Source Community**: For the amazing tools and libraries  
* **Contributors**: Everyone who helps make Nexus better  
* **Users**: The academic community that drives our purpose  

## 📞 Support

If you encounter any issues or have questions:

* Check the Issues page  
* Create a new issue if needed  
* Contact the maintainer: [abhisheknagar679@gmail.com](mailto:abhisheknagar679@gmail.com)  

## 🔮 Roadmap

* Advanced search and filtering  
* Real-time messaging system  
* Mobile application  
* Integration with academic databases  
* AI-powered opportunity matching  
* Multi-language support  

---

**Nexus - Connecting minds for academic excellence 🎓**
