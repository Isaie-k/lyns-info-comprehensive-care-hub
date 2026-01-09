import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "securite-entreprise-2025",
    title: "Les Tendances de la Sécurité en Entreprise pour 2025",
    excerpt: "Découvrez les nouvelles technologies et pratiques qui transforment le secteur de la sécurité professionnelle.",
    category: "Sécurité",
    author: "Marc Lefebvre",
    date: "5 Janvier 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    slug: "nettoyage-ecologique",
    title: "Le Nettoyage Écologique : Un Choix Responsable",
    excerpt: "Comment les produits de nettoyage écologiques contribuent à un environnement de travail plus sain.",
    category: "Nettoyage",
    author: "Sophie Martin",
    date: "28 Décembre 2024",
    readTime: "4 min",
  },
  {
    id: 3,
    slug: "protocoles-hygiene-post-covid",
    title: "Protocoles d'Hygiène Post-COVID : Les Bonnes Pratiques",
    excerpt: "Les mesures essentielles à maintenir pour garantir la sécurité sanitaire de vos espaces.",
    category: "Hygiène",
    author: "Dr. Anne Dubois",
    date: "15 Décembre 2024",
    readTime: "6 min",
  },
  {
    id: 4,
    slug: "entretien-espaces-verts",
    title: "L'Entretien des Espaces Verts en Hiver",
    excerpt: "Conseils pratiques pour préparer et protéger vos jardins pendant la saison froide.",
    category: "Entretien",
    author: "Pierre Moreau",
    date: "10 Décembre 2024",
    readTime: "3 min",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Actualités & Conseils
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Restez informé des dernières tendances et bonnes pratiques dans nos domaines d'expertise.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 relative">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>

                  <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
