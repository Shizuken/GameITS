import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess?: () => void;
}

export const LoginDialog = ({ open, onOpenChange, onLoginSuccess }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLoginSuccess?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-panel border-primary/30 shadow-glow-cyan backdrop-blur-xl max-w-md">
        <DialogHeader>
          <DialogTitle className="font-cinzel font-black text-2xl text-foreground text-center">
            Enter the Realm
          </DialogTitle>
          <p className="text-muted-foreground font-inter text-sm text-center">
            Access the guild terminal
          </p>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="dialog-username" className="font-inter text-foreground">
              Username
            </Label>
            <Input
              id="dialog-username"
              type="text"
              placeholder="Enter your username"
              className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dialog-password" className="font-inter text-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="dialog-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          <Button
            type="submit"
            variant="hero"
            className="w-full h-12 text-base animate-ember-pulse"
          >
            Enter the Realm
          </Button>

          <div className="text-center">
            <p className="text-sm font-inter text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  navigate("/register");
                }}
                className="text-primary hover:underline font-semibold"
              >
                Join the Guild
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
