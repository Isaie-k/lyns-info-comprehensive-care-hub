import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

// Gallery images imports
import security1 from "@/assets/gallery/security-1.jpg";
import security2 from "@/assets/gallery/security-2.jpg";
import security3 from "@/assets/gallery/security-3.jpg";
import cleaning1 from "@/assets/gallery/cleaning-1.jpg";
import cleaning2 from "@/assets/gallery/cleaning-2.jpg";
import cleaning3 from "@/assets/gallery/cleaning-3.jpg";
import maintenance1 from "@/assets/gallery/maintenance-1.jpg";
import maintenance2 from "@/assets/gallery/maintenance-2.jpg";
import maintenance3 from "@/assets/gallery/maintenance-3.jpg";
import hygiene1 from "@/assets/gallery/hygiene-1.jpg";
import hygiene2 from "@/assets/gallery/hygiene-2.jpg";
import hygiene3 from "@/assets/gallery/hygiene-3.jpg";
import protocol1 from "@/assets/gallery/protocol-1.jpg";
import protocol2 from "@/assets/gallery/protocol-2.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";

const categories = [
  { id: "all", label: "Tous" },
  { id: "gardiennage", label: "Gardiennage" },
  { id: "nettoyage", label: "Nettoyage" },
  { id: "entretien", label: "Entretien" },
  { id: "hygiene", label: "Hygiène" },
  { id: "evenements", label: "Événements" },
];

const galleryItems = [
  { id: 1, src: security1, category: "gardiennage", title: "Surveillance Corporate" },
  { id: 2, src: security2, category: "gardiennage", title: "Patrouille Nocturne" },
  { id: 3, src: security3, category: "gardiennage", title: "Sécurité Événementielle" },
  { id: 4, src: cleaning1, category: "nettoyage", title: "Nettoyage Bureau" },
  { id: 5, src: cleaning2, category: "nettoyage", title: "Entretien des Sols" },
  { id: 6, src: cleaning3, category: "nettoyage", title: "Nettoyage Industriel" },
  { id: 7, src: maintenance1, category: "entretien", title: "Maintenance Technique" },
  { id: 8, src: maintenance2, category: "entretien", title: "Entretien Espaces Verts" },
  { id: 9, src: maintenance3, category: "entretien", title: "Jardinage Nocturne" },
  { id: 10, src: hygiene1, category: "hygiene", title: "Désinfection Professionnelle" },
  { id: 11, src: hygiene2, category: "hygiene", title: "Station Hygiène" },
  { id: 12, src: hygiene3, category: "hygiene", title: "Équipe Sanitaire" },
  { id: 13, src: event1, category: "evenements", title: "Préparation Gala" },
  { id: 14, src: event2, category: "evenements", title: "Sécurité VIP" },
  { id: 15, src: event3, category: "evenements", title: "Gestion de Foule" },
  { id: 16, src: event4, category: "evenements", title: "Configuration Conférence" },
  { id: 17, src: protocol1, category: "evenements", title: "Documentation Sécurité" },
  { id: 18, src: protocol2, category: "evenements", title: "Centre de Contrôle" },
];

const ITEMS_PER_PAGE = 9;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    return activeFilter === "all" 
      ? galleryItems 
      : galleryItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Galerie & Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez nos réalisations à travers cette galerie de projets, événements et interventions.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <ScrollReveal>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Button
                    variant={activeFilter === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange(category.id)}
                    className="transition-all duration-300"
                  >
                    {category.id === "all" && <Filter className="w-4 h-4 mr-2" />}
                    {category.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover"
                  onClick={() => setSelectedImage(item)}
                >
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-primary-foreground font-semibold text-lg">{item.title}</p>
                    <p className="text-primary-foreground/70 text-sm capitalize">
                      {categories.find(c => c.id === item.category)?.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <motion.div
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10 transition-all duration-300"
                    >
                      {page}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Results count */}
          <motion.p 
            className="text-center text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Affichage de {paginatedItems.length} sur {filteredItems.length} projets
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Navigation arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-background text-2xl font-display font-semibold">{selectedImage.title}</p>
                <p className="text-background/70 capitalize text-lg">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </p>
              </motion.div>
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
