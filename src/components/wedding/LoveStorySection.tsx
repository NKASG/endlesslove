import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoveStorySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-cream-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-gold-300/30 rotate-45 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-300/30 rotate-12 hidden md:block" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 font-serif text-lg tracking-widest uppercase">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-purple-800 mt-4">
            Our Love Story
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <Heart className="w-5 h-5 text-gold-500 fill-gold-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative quote marks */}
          <div className="absolute -top-8 -left-4 text-8xl font-serif text-gold-300/40 leading-none hidden md:block">
            "
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-elegant border border-gold-200/50">
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-purple-700 font-serif leading-relaxed"
              >
                We met through family, a simple introduction that would change everything. 
                What began as a spark of friendship soon grew into a love that felt like 
                it was meant to be.
              </motion.p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-24 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 mx-auto"
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-purple-700 font-serif leading-relaxed"
              >
                Late-night talks, shared meals, and movie marathons became our moments of magic. 
                We found in each other a rare understanding, where laughter flowed as easily as silence.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-purple-800 font-serif leading-relaxed italic"
              >
                In each other's eyes, we discovered home, and in each other's hearts, 
                we found forever.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <div className="flex items-center gap-3 text-gold-600">
                <span className="font-serif text-2xl">A</span>
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span className="font-serif text-2xl">A</span>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative quote marks */}
          <div className="absolute -bottom-8 -right-4 text-8xl font-serif text-gold-300/40 leading-none rotate-180 hidden md:block">
            "
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStorySection;
