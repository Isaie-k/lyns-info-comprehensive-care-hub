import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

const GoogleMap = ({ className = "" }: GoogleMapProps) => {
  // Paris coordinates for LYNS INFO office
  const address = "123 Avenue des Services, 75001 Paris, France";
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <motion.div 
      className={`relative rounded-2xl overflow-hidden shadow-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Map Container */}
      <div className="relative w-full h-[400px] bg-muted">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LYNS INFO Location"
          className="grayscale contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
      </div>

      {/* Location Card Overlay */}
      <motion.div 
        className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">LYNS INFO - Siège Social</h3>
            <p className="text-muted-foreground text-xs mt-1">
              123 Avenue des Services<br />
              75001 Paris, France
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-secondary text-xs font-medium mt-2 hover:underline"
            >
              Obtenir l'itinéraire →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GoogleMap;
