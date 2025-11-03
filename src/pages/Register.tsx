import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Guild!",
      description: "Your account has been created successfully.",
    });
    navigate("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-cyber opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-40 animation-delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50 animation-delay-2000" />
      </div>

      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gradient-panel border border-primary/30 rounded-lg shadow-glow-cyan p-8 backdrop-blur-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-cyber border border-primary/40 rounded-lg mb-4 shadow-glow-cyan animate-glow-pulse">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-cinzel font-black text-3xl text-foreground mb-2">
              Join the Guild
            </h1>
            <p className="text-muted-foreground font-inter text-sm">
              Register to access the realm
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="font-inter text-foreground">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-inter text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
              />
            </div>

            {/* Linked E-Wallet */}
            <div className="space-y-2">
              <Label htmlFor="ewallet" className="font-inter text-foreground">
                Linked E-Wallet
              </Label>
              <Input
                id="ewallet"
                type="text"
                placeholder="Enter your e-wallet account"
                required
                className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-inter text-foreground">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                required
                className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
              />
            </div>

            {/* Region */}
            <div className="space-y-2">
              <Label htmlFor="region" className="font-inter text-foreground">
                Region
              </Label>
              <Input
                id="region"
                type="text"
                placeholder="Enter your region/country"
                required
                className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="font-inter text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  required
                  className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              className="w-full h-12 text-base animate-ember-pulse mt-6"
            >
              Create Account
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm font-inter text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
