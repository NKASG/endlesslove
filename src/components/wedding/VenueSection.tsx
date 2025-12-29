import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative border border-accent/30 p-10 md:p-16 text-center"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent" />

          <MapPin className="w-8 h-8 text-accent mx-auto mb-6" />

          <h2 className="font-serif text-4xl md:text-5xl mb-3">
            M&M Event Center
          </h2>
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">
            Offa, Kwara State
          </p>
          <p className="text-primary-foreground/70 text-sm mb-10 max-w-md mx-auto">
            Join us as we celebrate our union in the presence of family and loved ones. 
            Your presence will be the greatest gift.
          </p>

          <Button
            asChild
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none px-10 py-6 text-sm font-bold uppercase tracking-widest"
          >
            <a
              href="https://maps.app.goo.gl/SkF9hNwYQCQhcBiH6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
