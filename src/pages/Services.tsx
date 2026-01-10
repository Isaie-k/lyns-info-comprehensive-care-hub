import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Wrench, HeartPulse, FileCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gardiennageImg from "@/assets/services/gardiennage.jpg";
import nettoyageImg from "@/assets/services/nettoyage.jpg";
import entretienImg from "@/assets/services/entretien.jpg";
import hygieneImg from "@/assets/services/hygiene.jpg";
import protocolesImg from "@/assets/services/protocoles.jpg";

const services = [
  {
    id: "gardiennage",
    title: "Gardiennage",
    subtitle: "Sécurité Professionnelle",
    description: "Nos services de gardiennage assurent la protection de vos espaces résidentiels et commerciaux avec des agents formés et équipés. Nous offrons une présence sécuritaire 24h/24 et 7j/7 pour votre tranquillité d'esprit.",
    icon: Shield,
    image: gardiennageImg,
    features: [
      "Surveillance 24h/24, 7j/7",
      "Agents certifiés et formés",
      "Patrouilles régulières",
      "Gestion des accès",
      "Rapports d'incidents détaillés",
      "Intervention rapide",
    ],
  },
  {
    id: "nettoyage",
    title: "Nettoyage",
    subtitle: "Propreté Impeccable",
    description: "Notre équipe de nettoyage professionnelle utilise des équipements de pointe et des produits écologiques pour maintenir vos espaces de travail et de vie dans un état impeccable.",
    icon: Sparkles,
    image: nettoyageImg,
    features: [
      "Nettoyage de bureaux",
      "Entretien de locaux commerciaux",
      "Nettoyage de vitres",
      "Shampooing moquettes",
      "Produits écologiques",
      "Horaires flexibles",
    ],
  },
  {
    id: "entretien",
    title: "Entretien",
    subtitle: "Maintenance Complète",
    description: "Des services d'entretien général incluant le jardinage et la maintenance des espaces extérieurs et intérieurs pour préserver la beauté et la fonctionnalité de vos propriétés.",
    icon: Wrench,
    image: entretienImg,
    features: [
      "Jardinage et espaces verts",
      "Petites réparations",
      "Maintenance préventive",
      "Gestion des déchets verts",
      "Arrosage automatique",
      "Taille et élagage",
    ],
  },
  {
    id: "hygiene",
    title: "Hygiène",
    subtitle: "Désinfection & Santé",
    description: "Services de désinfection professionnelle pour garantir un environnement sain et sécurisé. Nous utilisons des techniques et produits conformes aux normes sanitaires les plus strictes.",
    icon: HeartPulse,
    image: hygieneImg,
    features: [
      "Désinfection des surfaces",
      "Traitement anti-bactérien",
      "Protocole COVID-19",
      "Produits certifiés",
      "Analyse de risques",
      "Suivi sanitaire",
    ],
  },
  {
    id: "protocoles",
    title: "Protocoles Événementiels",
    subtitle: "Gestion d'Événements",
    description: "Organisation et gestion complète de vos événements : sécurité, accueil VIP, logistique, coordination des équipes et mise en place de protocoles sur mesure pour garantir le succès de vos manifestations.",
    icon: FileCheck,
    image: protocolesImg,
    features: [
      "Sécurité événementielle",
      "Accueil et contrôle d'accès",
      "Gestion de foule",
      "Coordination logistique",
      "Personnel dédié",
      "Préparation des lieux",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Nos Services
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Des solutions professionnelles complètes pour la sécurité, la propreté et l'entretien de vos espaces.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 scroll-mt-24 ${
                index !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                    {service.subtitle}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link to="/contact">Demander un Devis</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
