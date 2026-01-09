import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            La Confiance de Nos Clients
          </h2>
          <p className="text-muted-foreground">
            Découvrez ce que nos clients disent de nos services et de notre engagement envers l'excellence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: 10 }}
              >
                <Quote className="w-6 h-6 text-secondary" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 500 }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
