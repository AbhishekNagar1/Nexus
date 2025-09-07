import { ReactNode } from "react";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import AuthControls from "@/components/AuthControls";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AuthControls />
      <main className="pt-16 md:pt-24">
        {children}
      </main>
      <ProfessionalFooter />
    </div>
  );
};

export default Layout;