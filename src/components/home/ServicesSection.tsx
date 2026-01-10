import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Sparkles, Wrench, HeartPulse, Calendar, ArrowRight } from "lucide-react";
import gardiennageImg from "@/assets/services/gardiennage.jpg";
import nettoyageImg from "@/assets/services/nettoyage.jpg";
import entretienImg from "@/assets/services/entretien.jpg";
import hygieneImg from "@/assets/services/hygiene.jpg";
import protocolesImg from "@/assets/services/protocoles.jpg";

const services = [
  {
    id: "gardiennage",
    title: "Gardiennage",
    description: "Services de sécurité professionnels pour vos espaces résidentiels et commerciaux, 24h/24 et 7j/7.",
    icon: Shield,
    image: gardiennageImg,
    color: "bg-primary",
  },
  {
    id: "nettoyage",
    title: "Nettoyage",
    description: "Nettoyage complet de bureaux, maisons et espaces commerciaux avec des équipements professionnels.",
    icon: Sparkles,
    image: nettoyageImg,
    color: "bg-secondary",
  },
  {
    id: "entretien",
    title: "Entretien",
    description: "Maintenance générale et jardinage pour préserver la beauté de vos espaces extérieurs et intérieurs.",
    icon: Wrench,
    image: entretienImg,
    color: "bg-accent",
  },
  {
    id: "hygiene",
    title: "Hygiène",
    description: "Désinfection et assainissement professionnel pour un environnement sain et sécurisé.",
    icon: HeartPulse,
    image: hygieneImg,
    color: "bg-secondary",
  },
  {
    id: "protocoles",
    title: "Protocoles Événementiels",
    description: "Organisation et gestion complète de vos événements : sécurité, accueil, logistique et coordination.",
    icon: Calendar,
    image: protocolesImg,
    color: "bg-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des Solutions Complètes pour Votre Tranquillité
          </h2>
          <p className="text-muted-foreground">
            Découvrez notre gamme de services professionnels conçus pour répondre à tous vos besoins en matière de sécurité, propreté et maintenance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                to={`/services#${service.id}`}
                className="group block relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    className={`absolute bottom-4 left-4 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-medium text-sm">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
