import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Footer from "@/components/Footer";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>(cart.map((item) => item.id));

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return cart
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  const handleProceedToCheckout = () => {
    if (selectedItems.length === 0) return;
    navigate("/checkout", { state: { selectedItems } });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-card/20">
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 bg-gradient-cyber border border-primary/40 rounded-full flex items-center justify-center mx-auto shadow-glow-cyan">
                <ShoppingCart className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-cinzel font-bold text-3xl text-foreground">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground font-inter">
                Explore our catalog and add some legendary games to your collection.
              </p>
              <Button variant="hero" onClick={() => navigate("/catalog")}>
                Browse Catalog
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-card/20">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
              Your Arsenal
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
            <p className="text-muted-foreground font-inter mt-4">
              {cart.length} {cart.length === 1 ? "game" : "games"} in your cart
            </p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-primary/20 rounded-lg overflow-hidden shadow-panel hover:shadow-glow-cyan transition-all"
              >
                <div className="flex items-center p-4 space-x-4">
                  {/* Checkbox */}
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => toggleItemSelection(item.id)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />

                  {/* Game Cover */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Game Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cinzel font-bold text-lg text-foreground truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.genre}</p>
                    {item.platform && (
                      <p className="text-xs text-primary/80 mt-1">Platform: {item.platform}</p>
                    )}
                    {item.developer && (
                      <p className="text-xs text-muted-foreground/70">Developer: {item.developer}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <div className="font-cinzel font-bold text-2xl text-primary">
                      {item.price}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="flex-shrink-0 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="bg-gradient-panel border border-primary/30 rounded-lg p-6 shadow-glow-cyan backdrop-blur-xl sticky bottom-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-cinzel font-bold text-xl text-foreground mb-1">
                  Total Cost
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedItems.length} {selectedItems.length === 1 ? "item" : "items"} selected
                </p>
              </div>
              <div className="font-cinzel font-black text-4xl text-primary">
                ${calculateTotal()}
              </div>
            </div>

            <Button
              variant="hero"
              className="w-full h-12 text-base"
              onClick={handleProceedToCheckout}
              disabled={selectedItems.length === 0}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
