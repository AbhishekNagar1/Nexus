import { ReactNode } from "react";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";
import FloatingSignIn from "@/components/FloatingSignIn";

interface LayoutProps {
  children: ReactNode;
  showFloatingSignIn?: boolean;
}

const Layout = ({ children, showFloatingSignIn = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {showFloatingSignIn && <FloatingSignIn />}
      <main className="pt-24">
        {children}
      </main>
      <ProfessionalFooter />
    </div>
  );
};

export default Layout;