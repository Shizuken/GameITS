import { FounderCard } from "@/components/FounderCard";
import Footer from "@/components/Footer";
import founderArthur from "@/assets/founder-arthur.jpg";
import founderLingga from "@/assets/founder-lingga.jpg";
import founderSasha from "@/assets/founder-sasha.jpg";
import founderResti from "@/assets/founder-resti.jpg";
import founderJuni from "@/assets/founder-juni.jpg";

const founders = [
  {
    name: "Arthur",
    title: "CEO",
    subtitle: "The Visionary Knight",
    image: founderArthur,
  },
  {
    name: "Lingga",
    title: "CCO",
    subtitle: "The Creative Alchemist",
    image: founderLingga,
  },
  {
    name: "Sasha",
    title: "CDO",
    subtitle: "The Design Sorceress",
    image: founderSasha,
  },
  {
    name: "Resti",
    title: "CMO",
    subtitle: "The Marketing Oracle",
    image: founderResti,
  },
  {
    name: "Juni",
    title: "CIO",
    subtitle: "The Tech Enchanter",
    image: founderJuni,
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-card/20 to-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-cyber opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-cinzel font-black text-5xl md:text-6xl text-foreground leading-tight">
                The Guild Council
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto" />
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Behind every legendary quest stands a council of visionaries. Our founders blend ancient wisdom with cutting-edge innovation, creating a realm where gamers discover their next epic adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <FounderCard key={index} {...founder} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-panel border border-primary/20 rounded-lg p-8 md:p-12 shadow-panel">
                <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>
                    Arcane Games was forged in the fires of passion for immersive storytelling and cutting-edge technology. We believe that gaming is more than entertainment—it's a portal to other worlds, a canvas for creativity, and a bridge connecting souls across the digital realm.
                  </p>
                  <p>
                    Our platform combines the sophistication of modern marketplaces with the mystique of fantasy realms, creating an experience that feels both professional and otherworldly. Every feature, every design choice, is crafted to make you feel like you're stepping into an ancient yet advanced archive of digital adventures.
                  </p>
                  <p className="text-primary font-semibold">
                    Join us in building the future of gaming—one legendary title at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { label: "Games Available", value: "5,000+" },
                { label: "Active Players", value: "2M+" },
                { label: "Developers", value: "500+" },
                { label: "Countries", value: "120+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 p-6 bg-card/50 border border-primary/20 rounded-lg hover:shadow-glow-cyan transition-all"
                >
                  <div className="font-cinzel font-black text-4xl text-primary animate-glow-pulse">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
