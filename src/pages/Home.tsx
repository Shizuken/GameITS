import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import gameHero1 from "@/assets/game-hero-1.jpg";
import gameHero2 from "@/assets/game-hero-2.jpg";
import gameHero3 from "@/assets/game-hero-3.jpg";

const featuredGames = [
  {
    id: "legends-of-the-abyss",
    title: "Legends of the Abyss",
    genre: "Dark Fantasy RPG",
    description: "Venture into ancient ruins beneath a cyan-glowing mystical sky. Face epic challenges as you seek forgotten treasures and dark secrets.",
    price: "$49.99",
    image: gameHero1,
  },
  {
    id: "neon-dystopia",
    title: "Neon Dystopia",
    genre: "Cyberpunk Noir",
    description: "Navigate a neon-lit cityscape filled with intrigue and danger. Uncover conspiracies in this atmospheric sci-fi thriller.",
    price: "$39.99",
    image: gameHero2,
  },
  {
    id: "shadow-knight-chronicles",
    title: "Shadow Knight Chronicles",
    genre: "Action Adventure",
    description: "Don the obsidian armor of a legendary knight. Battle through dark realms with glowing cyan runes as your only light.",
    price: "$59.99",
    image: gameHero3,
  },
];

const popularGames = [
  {
    id: "mystical-warfare",
    title: "Mystical Warfare",
    genre: "Strategy",
    description: "Command mystical armies in tactical battles across enchanted realms.",
    price: "$29.99",
    image: gameHero1,
    rating: 4.8,
  },
  {
    title: "Cyber Infiltrator",
    genre: "Stealth",
    description: "Hack systems and infiltrate megacorps in this stealth masterpiece.",
    price: "$34.99",
    image: gameHero2,
    rating: 4.6,
  },
  {
    title: "Rune Master",
    genre: "Puzzle RPG",
    description: "Solve ancient puzzles and master rune magic to unlock new powers.",
    price: "$24.99",
    image: gameHero3,
    rating: 4.7,
  },
  {
    title: "Shadow Realms",
    genre: "Horror",
    description: "Survive the darkness in this atmospheric horror experience.",
    price: "$39.99",
    image: gameHero1,
    rating: 4.5,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const currentGame = featuredGames[currentSlide];

  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[70vh] bg-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentGame.image}
            alt={currentGame.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm text-primary font-inter backdrop-blur-sm">
              {currentGame.genre}
            </span>
            <h1 className="font-cinzel font-black text-5xl md:text-7xl text-foreground leading-tight animate-float">
              {currentGame.title}
            </h1>
            <p className="text-lg text-muted-foreground font-inter max-w-xl">
              {currentGame.description}
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="hero" size="lg">
                Buy Now - {currentGame.price}
              </Button>
              <Button variant="outline" size="lg">
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/20 hover:shadow-glow-cyan transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/20 hover:shadow-glow-cyan transition-all z-20"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {featuredGames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8 shadow-glow-cyan"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-foreground mb-2">
                Popular Games
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
