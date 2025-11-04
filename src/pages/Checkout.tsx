import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const selectedItems = location.state?.selectedItems || cart.map((item) => item.id);
  const itemsToPurchase = cart.filter((item) => selectedItems.includes(item.id));

  const total = itemsToPurchase
    .reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")), 0)
    .toFixed(2);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      toast({
        title: "Payment Successful!",
        description: "Your games have been added to your library.",
      });

      setTimeout(() => {
        clearCart();
        navigate("/dashboard");
      }, 2000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-card/20 flex items-center justify-center">
        <div className="text-center space-y-6 animate-in fade-in zoom-in">
          <div className="w-24 h-24 bg-gradient-cyber border border-primary/40 rounded-full flex items-center justify-center mx-auto shadow-glow-cyan animate-glow-pulse">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-cinzel font-black text-4xl text-foreground">
            Payment Complete!
          </h1>
          <p className="text-muted-foreground font-inter">
            Your games are now in your library. Redirecting...
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-card/20">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
              Complete Your Quest
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="md:col-span-2">
              <div className="bg-gradient-panel border border-primary/30 rounded-lg p-6 shadow-glow-cyan backdrop-blur-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h2 className="font-cinzel font-bold text-2xl text-foreground">
                    Payment Details
                  </h2>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="ewallet" className="font-inter text-foreground">
                      E-Wallet Account
                    </Label>
                    <Input
                      id="ewallet"
                      type="text"
                      placeholder="GoPay/OVO/Dana account number"
                      required
                      className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pin" className="font-inter text-foreground">
                      PIN
                    </Label>
                    <Input
                      id="pin"
                      type="password"
                      placeholder="Enter your PIN"
                      maxLength={6}
                      required
                      className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-pin" className="font-inter text-foreground">
                      Confirm PIN
                    </Label>
                    <Input
                      id="confirm-pin"
                      type="password"
                      placeholder="Re-enter your PIN"
                      maxLength={6}
                      required
                      className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full h-12 text-base"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Confirm Payment - $${total}`}
                  </Button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-panel sticky top-24">
                <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {itemsToPurchase.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-inter font-semibold text-sm text-foreground truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{item.genre}</p>
                        <p className="text-sm text-primary font-semibold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground font-inter">Subtotal</span>
                    <span className="text-foreground font-semibold">${total}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground font-inter">Tax</span>
                    <span className="text-foreground font-semibold">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-lg text-foreground">Total</span>
                    <span className="font-cinzel font-bold text-2xl text-primary">${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
