import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Gallery images imports
import security1 from "@/assets/gallery/security-1.jpg";
import security2 from "@/assets/gallery/security-2.jpg";
import cleaning1 from "@/assets/gallery/cleaning-1.jpg";
import cleaning2 from "@/assets/gallery/cleaning-2.jpg";
import maintenance1 from "@/assets/gallery/maintenance-1.jpg";
import maintenance2 from "@/assets/gallery/maintenance-2.jpg";
import hygiene1 from "@/assets/gallery/hygiene-1.jpg";
import hygiene2 from "@/assets/gallery/hygiene-2.jpg";
import protocol1 from "@/assets/gallery/protocol-1.jpg";
import protocol2 from "@/assets/gallery/protocol-2.jpg";

const categories = [
  { id: "all", label: "Tous" },
  { id: "gardiennage", label: "Gardiennage" },
  { id: "nettoyage", label: "Nettoyage" },
  { id: "entretien", label: "Entretien" },
  { id: "hygiene", label: "Hygiène" },
  { id: "protocoles", label: "Protocoles" },
];

const galleryItems = [
  { id: 1, src: security1, category: "gardiennage", title: "Surveillance Corporate" },
  { id: 2, src: security2, category: "gardiennage", title: "Patrouille Nocturne" },
  { id: 3, src: cleaning1, category: "nettoyage", title: "Nettoyage Bureau" },
  { id: 4, src: cleaning2, category: "nettoyage", title: "Entretien des Sols" },
  { id: 5, src: maintenance1, category: "entretien", title: "Maintenance Technique" },
  { id: 6, src: maintenance2, category: "entretien", title: "Entretien Espaces Verts" },
  { id: 7, src: hygiene1, category: "hygiene", title: "Désinfection Professionnelle" },
  { id: 8, src: hygiene2, category: "hygiene", title: "Station Hygiène" },
  { id: 9, src: protocol1, category: "protocoles", title: "Documentation Sécurité" },
  { id: 10, src: protocol2, category: "protocoles", title: "Centre de Contrôle" },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos Réalisations
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galerie de Projets
          </h2>
          <p className="text-muted-foreground">
            Découvrez nos interventions et projets réalisés pour nos clients à travers cette galerie.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.id === "all" && <Filter className="w-4 h-4 mr-2" />}
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground font-semibold">{item.title}</p>
                  <p className="text-primary-foreground/70 text-sm capitalize">
                    {categories.find(c => c.id === item.category)?.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
                  <p className="text-background text-xl font-semibold">{selectedImage.title}</p>
                  <p className="text-background/70 capitalize">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
