import { motion } from "framer-motion";
import coupleImage1 from "@/assets/couple-1.jpg";
import coupleImage2 from "@/assets/couple-2.jpg";
import coupleImage3 from "@/assets/couple-3.jpg";

const GallerySection = () => {
  const images = [
    { src: coupleImage1, alt: "Azeezat & Afeez - Portrait 1", rotation: "rotate-2" },
    { src: coupleImage2, alt: "Azeezat & Afeez - Portrait 2", rotation: "" },
    { src: coupleImage3, alt: "Azeezat & Afeez - Portrait 3", rotation: "-rotate-2" },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Two hearts becoming one
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative group ${index === 1 ? "md:-mt-12 z-10" : ""}`}
            >
              <div
                className={`aspect-[3/4] overflow-hidden shadow-elevated transition-all duration-500 ${image.rotation} hover:rotate-0 ${
                  index === 1 ? "border-4 border-card" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
