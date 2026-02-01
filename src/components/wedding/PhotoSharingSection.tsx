import { motion } from "framer-motion";
import { Camera, Upload, ExternalLink, Heart } from "lucide-react";
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
            Share Your Moments
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
            Capture & Share the Joy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <Heart className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We would love to see our special day through your eyes! Upload your photos and videos 
              to our shared album, and help us treasure every moment together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/30 rounded-xl p-6 text-center">
              <Upload className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-serif text-lg text-primary mb-2">Upload Photos</h3>
              <p className="text-muted-foreground text-sm">
                Share your captured moments from the celebration
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-6 text-center">
              <Camera className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-serif text-lg text-primary mb-2">View Gallery</h3>
              <p className="text-muted-foreground text-sm">
                Browse photos shared by other guests
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-soft"
            >
              <a
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Camera className="w-5 h-5" />
                Open Photo Album
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <p className="text-muted-foreground text-xs mt-4">
              Opens in Google Drive • Upload or view photos
            </p>
          </div>
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
