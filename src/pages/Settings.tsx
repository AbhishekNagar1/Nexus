import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { Bell, Shield, Eye, Trash2 } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    research: true,
    messages: true,
    opportunities: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showInstitution: true,
    allowMessages: true
  });

  return (
    <Layout showFloatingSignIn={false}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/10 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-foreground/70">Manage your account preferences</p>
            </div>

            {/* Notifications */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell size={20} />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email notifications</Label>
                  <Switch 
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push notifications</Label>
                  <Switch 
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="research-updates">Research updates</Label>
                  <Switch 
                    id="research-updates"
                    checked={notifications.research}
                    onCheckedChange={(checked) => setNotifications({...notifications, research: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="message-notifications">New messages</Label>
                  <Switch 
                    id="message-notifications"
                    checked={notifications.messages}
                    onCheckedChange={(checked) => setNotifications({...notifications, messages: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="opportunity-alerts">Opportunity alerts</Label>
                  <Switch 
                    id="opportunity-alerts"
                    checked={notifications.opportunities}
                    onCheckedChange={(checked) => setNotifications({...notifications, opportunities: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye size={20} />
                  Privacy
                </CardTitle>
                <CardDescription>
                  Control who can see your information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visible">Make profile visible to others</Label>
                  <Switch 
                    id="profile-visible"
                    checked={privacy.profileVisible}
                    onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-email">Show email on profile</Label>
                  <Switch 
                    id="show-email"
                    checked={privacy.showEmail}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showEmail: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-institution">Show institution</Label>
                  <Switch 
                    id="show-institution"
                    checked={privacy.showInstitution}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showInstitution: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="allow-messages">Allow direct messages</Label>
                  <Switch 
                    id="allow-messages"
                    checked={privacy.allowMessages}
                    onCheckedChange={(checked) => setPrivacy({...privacy, allowMessages: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield size={20} />
                  Security
                </CardTitle>
                <CardDescription>
                  Manage your account security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Password</h4>
                  <p className="text-sm text-foreground/70">Last changed 30 days ago</p>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-foreground/70">Add an extra layer of security</p>
                  <Button variant="outline" size="sm">Enable 2FA</Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-medium">Connected Accounts</h4>
                  <p className="text-sm text-foreground/70">Manage your connected social accounts</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Connect Google</Button>
                    <Button variant="outline" size="sm">Connect GitHub</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="glass border-white/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Trash2 size={20} />
                  Danger Zone
                </CardTitle>
                <CardDescription>
                  Irreversible actions for your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-destructive">Delete Account</h4>
                  <p className="text-sm text-foreground/70">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-6">
              <Button>Save All Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;