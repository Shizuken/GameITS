interface FounderCardProps {
  name: string;
  title: string;
  subtitle: string;
  image: string;
}

export const FounderCard = ({ name, title, subtitle, image }: FounderCardProps) => {
  return (
    <div className="group relative bg-gradient-panel border border-primary/20 rounded-lg overflow-hidden shadow-panel hover:shadow-glow-cyan transition-all duration-500 hover:-translate-y-2">
      {/* Portrait */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Magical Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 animate-shimmer bg-[length:200%_100%] transition-opacity duration-500" />
        
        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6 space-y-2 relative z-10">
        <h3 className="font-cinzel font-bold text-2xl text-foreground">{name}</h3>
        <p className="text-primary font-inter font-semibold text-sm tracking-wide">{title}</p>
        <p className="text-muted-foreground font-inter text-sm italic">{subtitle}</p>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute -inset-1 bg-gradient-cyber opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
};
