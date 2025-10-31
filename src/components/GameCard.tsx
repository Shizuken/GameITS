import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface GameCardProps {
  title: string;
  genre: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

export const GameCard = ({ title, genre, description, price, image, rating = 4.5 }: GameCardProps) => {
  return (
    <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden shadow-panel hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Floating Genre Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full text-xs text-primary font-inter">
            {genre}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-cinzel font-bold text-lg text-foreground line-clamp-1">{title}</h3>
          <div className="flex items-center space-x-1 text-xs">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-muted-foreground">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 font-inter">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-cinzel font-bold text-xl text-primary">{price}</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-xs">
              Details
            </Button>
            <Button variant="hero" size="sm" className="text-xs">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-cyber" />
      </div>
    </div>
  );
};
