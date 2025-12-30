import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img4806 from "@/assets/IMG_4806.JPG";
import img4807 from "@/assets/IMG_4807.JPG";
import img4808 from "@/assets/IMG_4808.JPG";
import img4809 from "@/assets/IMG_4809.JPG";
import img4811 from "@/assets/IMG_4811.JPG";
import img4812 from "@/assets/IMG_4812.JPG";
import img4813 from "@/assets/IMG_4813.JPG";
import img4815 from "@/assets/IMG_4815.JPG";

const GallerySection = () => {
  const images = [
    { src: img4806, alt: "Azeezat & Afeez - Memory 1" },
    { src: img4807, alt: "Azeezat & Afeez - Memory 2" },
    { src: img4808, alt: "Azeezat & Afeez - Memory 3" },
    { src: img4809, alt: "Azeezat & Afeez - Memory 4" },
    { src: img4811, alt: "Azeezat & Afeez - Memory 5" },
    { src: img4812, alt: "Azeezat & Afeez - Memory 6" },
    { src: img4813, alt: "Azeezat & Afeez - Memory 7" },
    { src: img4815, alt: "Azeezat & Afeez - Memory 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
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
            Moments that led us here
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Slideshow Container */}
          <div className="relative aspect-[3/4] md:aspect-[4/3] overflow-hidden shadow-elevated">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-card transition-colors duration-300 shadow-soft"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-card transition-colors duration-300 shadow-soft"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-primary font-serif text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-background opacity-100"
                    : "opacity-50 hover:opacity-75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8 italic"
        >
          Cherished moments from our journey together
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
