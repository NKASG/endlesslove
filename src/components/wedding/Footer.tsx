import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card text-center border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="font-serif text-4xl text-primary">A</span>
          <Heart className="w-5 h-5 text-accent fill-accent" />
          <span className="font-serif text-4xl text-primary">A</span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
          January 2026
        </p>
        <p className="font-serif text-lg text-primary/80 italic">
          "And among His Signs is that He created for you mates from among yourselves, 
          that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          — Quran 30:21
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
