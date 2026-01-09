import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="w-7 h-7 text-secondary" />
              </motion.div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
