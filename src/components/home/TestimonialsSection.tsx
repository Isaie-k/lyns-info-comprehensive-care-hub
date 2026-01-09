import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice Générale",
    company: "TechCorp France",
    content: "LYNS INFO assure la sécurité de nos bureaux depuis 3 ans. Leur professionnalisme et leur réactivité sont exemplaires. Je les recommande vivement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Gestionnaire Immobilier",
    company: "Résidences Premium",
    content: "Les équipes de nettoyage sont ponctuelles et très efficaces. Nos résidences n'ont jamais été aussi bien entretenues. Un service de qualité !",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "Directrice RH",
    company: "BioSanté Laboratoires",
    content: "Leur protocole d'hygiène et de désinfection a été crucial pendant la pandémie. Une équipe compétente qui comprend les enjeux sanitaires.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            La Confiance de Nos Clients
          </h2>
          <p className="text-muted-foreground">
            Découvrez ce que nos clients disent de nos services et de notre engagement envers l'excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
