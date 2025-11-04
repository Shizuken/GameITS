import { useState } from "react";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid3x3, List } from "lucide-react";
import Footer from "@/components/Footer";
import gameHero1 from "@/assets/game-hero-1.jpg";
import gameHero2 from "@/assets/game-hero-2.jpg";
import gameHero3 from "@/assets/game-hero-3.jpg";

const allGames = [
  {
    id: "legends-of-the-abyss",
    title: "Legends of the Abyss",
    genre: "Dark Fantasy RPG",
    description: "Venture into ancient ruins beneath a cyan-glowing mystical sky.",
    price: "$49.99",
    image: gameHero1,
    rating: 4.9,
  },
  {
    id: "neon-dystopia",
    title: "Neon Dystopia",
    genre: "Cyberpunk Noir",
    description: "Navigate a neon-lit cityscape filled with intrigue.",
    price: "$39.99",
    image: gameHero2,
    rating: 4.7,
  },
  {
    id: "shadow-knight-chronicles",
    title: "Shadow Knight Chronicles",
    genre: "Action Adventure",
    description: "Don the obsidian armor of a legendary knight.",
    price: "$59.99",
    image: gameHero3,
    rating: 4.8,
  },
  {
    id: "mystical-warfare",
    title: "Mystical Warfare",
    genre: "Strategy",
    description: "Command mystical armies in tactical battles.",
    price: "$29.99",
    image: gameHero1,
    rating: 4.6,
  },
  {
    title: "Cyber Infiltrator",
    genre: "Stealth",
    description: "Hack systems and infiltrate megacorps.",
    price: "$34.99",
    image: gameHero2,
    rating: 4.5,
  },
  {
    title: "Rune Master",
    genre: "Puzzle RPG",
    description: "Solve ancient puzzles and master rune magic.",
    price: "$24.99",
    image: gameHero3,
    rating: 4.7,
  },
];

const genres = ["All", "RPG", "Strategy", "Action", "Stealth", "Puzzle"];
const sortOptions = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Rating"];

export default function Catalog() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Popular");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-card/20">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
              Game Archive
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
            <p className="text-muted-foreground font-inter mt-4">
              Browse our collection of legendary adventures
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters */}
            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } lg:block w-full lg:w-64 space-y-6`}
            >
              {/* Genre Filter */}
              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-panel">
                <h3 className="font-cinzel font-bold text-lg text-foreground mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-primary" />
                  Genre
                </h3>
                <div className="space-y-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre)}
                      className={`w-full text-left px-4 py-2 rounded-md font-inter text-sm transition-all ${
                        selectedGenre === genre
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-panel">
                <h3 className="font-cinzel font-bold text-lg text-foreground mb-4">
                  Sort By
                </h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedSort(option)}
                      className={`w-full text-left px-4 py-2 rounded-md font-inter text-sm transition-all ${
                        selectedSort === option
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Game Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {allGames.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "outline"}
                      size="sm"
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm">Next</Button>
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
