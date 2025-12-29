import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const duas = [
  "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. (May Allah bless you both, and gather you together in goodness.)",
  "O Allah, let them find peace and happiness in each other.",
  "May your marriage be a bridge to Jannah for both of you.",
  "O Allah, bless their home with love, laughter, and pious offspring.",
  "Lord, grant them the patience of lovers and the wisdom of friends.",
  "May Allah make your marriage full of joy, love, and mercy.",
  "O Allah, protect their bond from the whispers of Shaytan.",
  "May you be the coolness of each other's eyes in this world and the next.",
];

const DuaSection = () => {
  const [currentDua, setCurrentDua] = useState(duas[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateDua = () => {
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * duas.length);
    setTimeout(() => {
      setCurrentDua(duas[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Prayers for the Couple
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-12">
            May Allah bless this union
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-secondary/50 p-10 md:p-14 border-l-4 border-primary shadow-soft"
        >
          <Quote className="w-10 h-10 text-border absolute top-6 left-6" />
          <Quote className="w-10 h-10 text-border absolute bottom-6 right-6 rotate-180" />

          <motion.p
            key={currentDua}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed min-h-[100px] flex items-center justify-center px-8"
          >
            "{currentDua}"
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={generateDua}
            variant="ghost"
            className="mt-10 text-xs uppercase tracking-widest border-b-2 border-accent rounded-none pb-2 hover:bg-transparent hover:border-primary transition-colors"
          >
            Read Another Prayer
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DuaSection;
