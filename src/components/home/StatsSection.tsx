import { Users, Building2, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Satisfaits",
  },
  {
    icon: Building2,
    value: "1000+",
    label: "Sites Protégés",
  },
  {
    icon: Award,
    value: "15",
    label: "Années d'Expérience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilité",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
