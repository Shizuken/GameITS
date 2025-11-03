import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, ArrowLeft, Monitor, Gamepad2, Smartphone, Send } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { LoginDialog } from "@/components/LoginDialog";
import { useToast } from "@/hooks/use-toast";
import gameHero1 from "@/assets/game-hero-1.jpg";
import gameHero2 from "@/assets/game-hero-2.jpg";
import gameHero3 from "@/assets/game-hero-3.jpg";

// Sample game data
const gamesData: Record<string, any> = {
  "legends-of-the-abyss": {
    id: "legends-of-the-abyss",
    title: "Legends of the Abyss",
    genre: "Dark Fantasy RPG",
    description: "Venture into ancient ruins beneath a cyan-glowing mystical sky. Face epic challenges as you seek forgotten treasures and dark secrets buried in the depths of the Abyss. This immersive RPG combines stunning visuals with deep storytelling.",
    developer: "Mystic Studios",
    price: "$49.99",
    image: gameHero1,
    rating: 4.9,
    tags: ["RPG", "Fantasy", "Single Player", "Story Rich"],
    platforms: ["PC", "Console"],
  },
  "neon-dystopia": {
    id: "neon-dystopia",
    title: "Neon Dystopia",
    genre: "Cyberpunk Noir",
    description: "Navigate a neon-lit cityscape filled with intrigue and danger. Uncover conspiracies in this atmospheric sci-fi thriller where every choice matters. Experience a gripping narrative set in a dystopian future.",
    developer: "CyberForge Games",
    price: "$39.99",
    image: gameHero2,
    rating: 4.7,
    tags: ["Adventure", "Cyberpunk", "Story Rich", "Noir"],
    platforms: ["PC", "Console", "Mobile"],
  },
  "shadow-knight-chronicles": {
    id: "shadow-knight-chronicles",
    title: "Shadow Knight Chronicles",
    genre: "Action Adventure",
    description: "Don the obsidian armor of a legendary knight. Battle through dark realms with glowing cyan runes as your only light. Master combat skills and uncover the mysteries of the Shadow Realm.",
    developer: "Dark Realm Studios",
    price: "$59.99",
    image: gameHero3,
    rating: 4.8,
    tags: ["Action", "Adventure", "Combat", "Dark Fantasy"],
    platforms: ["PC", "Console"],
  },
};

export default function GameDetails() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLoggedIn] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [comments, setComments] = useState([
    { username: "ShadowKnight92", text: "This game is absolutely incredible! The graphics are stunning and the storyline keeps you hooked for hours." },
    { username: "MysticMage", text: "Best RPG I've played this year. The combat system is so smooth and the world-building is phenomenal." },
    { username: "CyberNinja", text: "10/10 would recommend. The atmosphere is dark and immersive, exactly what I was looking for." },
  ]);
  const [newComment, setNewComment] = useState("");

  const game = gameId ? gamesData[gameId] : null;

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel font-bold text-3xl text-foreground mb-4">Game Not Found</h1>
          <Button onClick={() => navigate("/catalog")}>Return to Catalog</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowLoginDialog(true);
      return;
    }
    addToCart(game);
    toast({
      title: "Added to Cart",
      description: `${game.title} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      setShowLoginDialog(true);
      return;
    }
    addToCart(game);
    navigate("/checkout");
  };

  const platformIcons = {
    PC: Monitor,
    Console: Gamepad2,
    Mobile: Smartphone,
  };

  const handlePostComment = () => {
    if (!isLoggedIn) {
      setShowLoginDialog(true);
      return;
    }
    if (newComment.trim()) {
      setComments([...comments, { username: "CurrentUser", text: newComment }]);
      setNewComment("");
      toast({
        title: "Comment Posted",
        description: "Your comment has been added successfully.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-card/20">
      <LoginDialog
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onLoginSuccess={() => {}}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
      </div>

      {/* Game Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </section>

      {/* Game Info */}
      <section className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm text-primary font-inter backdrop-blur-sm mb-4">
                {game.genre}
              </span>
              <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-4">
                {game.title}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-foreground font-semibold">{game.rating}</span>
                </div>
                <span className="text-muted-foreground">by {game.developer}</span>
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-panel">
              <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">About</h2>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {game.description}
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-panel">
              <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-panel border border-primary/30 rounded-lg p-6 shadow-glow-cyan backdrop-blur-xl sticky top-24 space-y-6">
              <div>
                <h3 className="font-cinzel font-bold text-2xl text-foreground mb-2">
                  {game.title}
                </h3>
                <div className="font-cinzel font-black text-4xl text-primary">
                  {game.price}
                </div>
              </div>

              <div>
                <h4 className="font-inter text-sm text-muted-foreground mb-3">Available on</h4>
                <div className="flex space-x-4">
                  {game.platforms.map((platform: string) => {
                    const Icon = platformIcons[platform as keyof typeof platformIcons];
                    return (
                      <div
                        key={platform}
                        className="flex flex-col items-center space-y-1"
                      >
                        <div className="w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">{platform}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="hero"
                  className="w-full h-12 text-base"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 text-base"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="container mx-auto px-4 pb-16 mt-8">
          <div className="bg-gradient-panel border border-primary/30 rounded-lg p-8 shadow-glow-cyan backdrop-blur-xl">
            <h2 className="font-cinzel font-bold text-2xl text-foreground mb-6">
              Guild Chatboard
            </h2>

            {/* Comments List */}
            <div className="space-y-4 mb-6">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-card/50 border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-colors"
                >
                  <p className="font-inter text-sm text-primary font-semibold mb-2">
                    {comment.username}
                  </p>
                  <p className="font-inter text-foreground leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Post Comment */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={isLoggedIn ? "Share your thoughts..." : "Log in to post a comment"}
                  disabled={!isLoggedIn}
                  className="bg-card/50 border-primary/30 focus:border-primary focus:shadow-glow-cyan transition-all h-12"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handlePostComment();
                    }
                  }}
                />
                <Button
                  onClick={handlePostComment}
                  variant="hero"
                  className="h-12 px-6"
                  disabled={!isLoggedIn || !newComment.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </Button>
              </div>
              {!isLoggedIn && (
                <p className="text-sm text-muted-foreground font-inter">
                  You must be logged in to post comments.{" "}
                  <button
                    onClick={() => setShowLoginDialog(true)}
                    className="text-primary hover:underline font-semibold"
                  >
                    Log in here
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
