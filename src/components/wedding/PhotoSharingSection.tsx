import { motion } from "framer-motion";
import { Camera, Upload, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhotoSharingSection = () => {
  const googleDriveLink = "https://drive.google.com/drive/folders/18NXnEYEGf1cSkUB3PDI8jVltLI-x7HkY?usp=drive_link";

  return (
    <section id="photos" className="py-24 px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Photo Album
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
            Our Cherished Memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <Heart className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We would love to see our special day through your eyes! Upload your photos and videos 
              to our shared album, and help us treasure every moment together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Upload Photos Button */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-8 rounded-xl shadow-soft flex flex-col gap-3"
            >
              <a
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Upload className="w-8 h-8" />
                <span className="font-serif text-xl">Upload Photos</span>
                <span className="text-xs opacity-80 font-normal">Share your captured moments</span>
              </a>
            </Button>
            
            {/* View Gallery Button */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 h-auto py-8 rounded-xl flex flex-col gap-3"
            >
              <a
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="w-8 h-8" />
                <span className="font-serif text-xl">View Gallery</span>
                <span className="text-xs opacity-80 font-normal">Browse photos from guests</span>
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-xs mt-6 text-center">
            Opens in Google Drive
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8 italic"
        >
          Thank you for being part of our celebration
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoSharingSection;
