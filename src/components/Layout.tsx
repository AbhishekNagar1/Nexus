import { ReactNode } from "react";
import Header from "@/components/Header";
import ProfessionalFooter from "@/components/ProfessionalFooter";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <ProfessionalFooter />
    </div>
  );
};

export default Layout;