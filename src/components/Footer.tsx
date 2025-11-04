import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E2E2E] border-t border-primary/30 mt-auto">
      {/* Decorative top border with glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow-cyan" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-cinzel font-bold text-lg text-foreground mb-4">
              Navigation
            </h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/catalog" className="block text-muted-foreground hover:text-primary transition-colors">
                Catalog
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-primary transition-colors">
                Cart
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-cinzel font-bold text-lg text-foreground mb-4">
              Support
            </h3>
            <nav className="space-y-2">
              <Link to="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </Link>
              <a href="mailto:contact@gameits.com" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-cinzel font-bold text-lg text-foreground mb-4">
              Join the Guild
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-cyan transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-cyan transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-cyan transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-cyan transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@gameits.com"
                className="w-10 h-10 bg-card border border-primary/20 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-cyan transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="font-inter">
              © {currentYear} GameITS. All rights reserved.
            </p>
            <p className="font-cinzel text-primary/70 mt-2 md:mt-0">
              A Digital Guild for Legendary Adventurers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
