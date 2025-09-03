const Footer = () => {
  return (
    <footer className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-4">
        <span className="text-sm text-foreground/60">Academic Community</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-foreground/40">Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;