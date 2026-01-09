import { Link } from "react-router-dom";
import { Shield, Sparkles, Wrench, HeartPulse, FileCheck, ArrowRight } from "lucide-react";
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
    title: "Protocoles",
    description: "Mise en place de protocoles de sécurité et d'hygiène conformes aux normes en vigueur.",
    icon: FileCheck,
    image: protocolesImg,
    color: "bg-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des Solutions Complètes pour Votre Tranquillité
          </h2>
          <p className="text-muted-foreground">
            Découvrez notre gamme de services professionnels conçus pour répondre à tous vos besoins en matière de sécurité, propreté et maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute bottom-4 left-4 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
