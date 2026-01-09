import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            À Propos de LYNS INFO
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Votre partenaire de confiance pour la sécurité et l'entretien de vos espaces depuis 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                Notre Histoire
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une Expertise Forgée par l'Expérience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fondée en 2010, LYNS INFO est née de la volonté d'offrir des services de qualité supérieure dans les domaines de la sécurité, du nettoyage et de l'entretien. Notre équipe de professionnels passionnés s'engage chaque jour à dépasser les attentes de nos clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Au fil des années, nous avons développé une expertise reconnue et bâti des relations de confiance durables avec plus de 500 clients, des petites entreprises aux grandes corporations.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Contactez-nous
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroBg}
                alt="Équipe LYNS INFO"
                className="rounded-2xl shadow-card-hover w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card">
                <p className="font-display text-4xl font-bold text-secondary">15+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              Nos Valeurs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Ce Qui Nous Guide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque intervention, sans compromis sur la qualité.",
              },
              {
                icon: Eye,
                title: "Transparence",
                description: "Une communication claire et honnête avec nos clients à chaque étape.",
              },
              {
                icon: Award,
                title: "Professionnalisme",
                description: "Des équipes formées et certifiées pour des résultats impeccables.",
              },
              {
                icon: Users,
                title: "Engagement",
                description: "Un dévouement total envers la satisfaction de nos clients.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Découvrez comment LYNS INFO peut transformer la sécurité et l'entretien de vos espaces.
          </p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
