import { Link, useLocation } from "react-router-dom";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Store" },
    { path: "/catalog", label: "Catalog" },
    { path: "/about", label: "About Us" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-primary/20 shadow-panel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-cyber border border-primary/40 rounded-md flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan group-hover:scale-110 transition-all">
              <span className="font-cinzel font-bold text-primary text-xl">G</span>
            </div>
            <span className="font-cinzel font-bold text-lg hidden sm:block">GameITS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-inter text-sm transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary shadow-glow-cyan"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search games..."
                className="pl-10 w-64 bg-card/50 border-primary/20 focus:border-primary focus:shadow-glow-cyan transition-all"
              />
            </div>
          </div>

          {/* Cart & Login Button & Menu */}
          <div className="flex items-center space-x-3">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-xs text-white font-bold">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Login
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-primary/20 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md font-inter text-sm transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
