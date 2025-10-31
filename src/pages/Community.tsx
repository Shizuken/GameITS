import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users, Trophy, Calendar } from "lucide-react";

export default function Community() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-card/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
            The Guild Hall
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Connect with fellow adventurers, share your achievements, and join legendary events
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: MessageCircle, title: "Forums", desc: "Discuss strategies and lore" },
            { icon: Users, title: "Guilds", desc: "Join forces with allies" },
            { icon: Trophy, title: "Tournaments", desc: "Compete for glory" },
            { icon: Calendar, title: "Events", desc: "Special community gatherings" },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-panel border-primary/20 p-6 text-center shadow-panel hover:shadow-glow-cyan transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-cyber border border-primary/40 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">{feature.desc}</p>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon */}
        <Card className="bg-gradient-panel border-primary/20 p-12 text-center shadow-panel max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-cyber border border-primary/40 rounded-full shadow-glow-cyan animate-glow-pulse">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-cinzel font-black text-3xl text-foreground">
              Community Features Coming Soon
            </h2>
            <p className="text-muted-foreground font-inter leading-relaxed max-w-md mx-auto">
              We're forging new ways for adventurers to connect. Join our mailing list to be the first to know when the Guild Hall opens its doors.
            </p>
            <Button variant="hero" size="lg">
              Notify Me
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
