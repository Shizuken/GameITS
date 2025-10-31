import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, ShoppingCart, Award, Globe } from "lucide-react";

const metrics = [
  {
    label: "Total Revenue",
    value: "$2,458,920",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    label: "Units Sold",
    value: "48,392",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "text-primary",
  },
  {
    label: "Active Users",
    value: "2.1M",
    change: "+15.8%",
    icon: Users,
    color: "text-primary",
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "+0.4%",
    icon: TrendingUp,
    color: "text-primary",
  },
];

const topGames = [
  { name: "Legends of the Abyss", sales: 15420, revenue: "$770,100", rating: 4.9, trend: "+18%" },
  { name: "Neon Dystopia", sales: 12380, revenue: "$495,220", rating: 4.7, trend: "+12%" },
  { name: "Shadow Knight Chronicles", sales: 9840, revenue: "$590,160", rating: 4.8, trend: "+8%" },
  { name: "Arcane Warfare", sales: 8220, revenue: "$246,600", rating: 4.6, trend: "+5%" },
];

const regionalData = [
  { region: "North America", sales: "$892,400", percentage: "36%", change: "+14%" },
  { region: "Europe", sales: "$721,300", percentage: "29%", change: "+11%" },
  { region: "Asia Pacific", sales: "$589,200", percentage: "24%", change: "+22%" },
  { region: "Other", sales: "$256,020", percentage: "11%", change: "+8%" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-card/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-cinzel font-black text-4xl md:text-5xl text-foreground mb-2">
            Command Center
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full" />
          <p className="text-muted-foreground font-inter mt-4">
            Strategic overview of your digital empire
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="relative bg-gradient-panel border-primary/20 p-6 shadow-panel hover:shadow-glow-cyan transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-cyber opacity-0 group-hover:opacity-100 rounded-full blur-3xl transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                    <span className="text-xs font-inter text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                      {metric.change}
                    </span>
                  </div>
                  <div className="font-cinzel font-black text-3xl text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">{metric.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Growth Chart */}
          <Card className="bg-gradient-panel border-primary/20 p-6 shadow-panel">
            <h3 className="font-cinzel font-bold text-xl text-foreground mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Sales Growth
            </h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 78, 82, 90, 75, 88, 95].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg hover:from-primary hover:to-primary transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground mt-2 font-inter">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Games */}
          <Card className="bg-gradient-panel border-primary/20 p-6 shadow-panel">
            <h3 className="font-cinzel font-bold text-xl text-foreground mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Top Selling Games
            </h3>
            <div className="space-y-4">
              {topGames.map((game, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-card/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex-1">
                    <div className="font-inter font-semibold text-foreground text-sm">
                      {game.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {game.sales.toLocaleString()} units
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-inter font-bold text-primary text-sm">{game.revenue}</div>
                    <div className="text-xs text-primary">{game.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Regional Sales */}
        <Card className="bg-gradient-panel border-primary/20 p-6 shadow-panel">
          <h3 className="font-cinzel font-bold text-xl text-foreground mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-primary" />
            Regional Sales Distribution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionalData.map((region, index) => (
              <div
                key={index}
                className="p-4 bg-card/50 border border-primary/10 rounded-lg hover:shadow-glow-cyan transition-all"
              >
                <div className="font-inter font-semibold text-foreground mb-2">{region.region}</div>
                <div className="font-cinzel font-bold text-2xl text-primary mb-1">
                  {region.sales}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{region.percentage} of total</span>
                  <span className="text-primary font-semibold">{region.change}</span>
                </div>
                <div className="mt-3 w-full h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                    style={{ width: region.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
