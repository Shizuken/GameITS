import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-cyber border border-primary/40 rounded-full shadow-glow-cyan animate-glow-pulse mb-4">
          <span className="font-cinzel font-black text-4xl text-primary">?</span>
        </div>
        <h1 className="font-cinzel font-black text-6xl md:text-8xl text-foreground">404</h1>
        <p className="text-xl text-muted-foreground font-inter">This path leads nowhere, traveler</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 shadow-glow-cyan font-inter font-semibold transition-all hover:scale-105"
        >
          Return to the Realm
        </a>
      </div>
    </div>
  );
};

export default NotFound;
