import { motion } from "framer-motion";
import { useState } from "react";
import { Hotel, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const HospitalitySection = () => {
  const [name, setName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !arrivalDate) {
      toast.error("Please provide your name and arrival time");
      return;
    }

    const message = encodeURIComponent(`Assalamu Alaikum Afeez,\n\nMy name is ${name}.\n\nI will be attending the Nikkah In Shaa Allah.\nExpected Arrival: ${arrivalDate}.\n\nPlease assist with accommodation arrangements.\n\nJazakAllahu Khairan.`);
    const whatsappUrl = `https://wa.me/2348112701287?text=${message}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Hotel className="w-8 h-8 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-3">
            Hospitality
          </h2>
          <p className="text-muted-foreground text-sm">
            Let us ensure your comfort in Offa
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="relative">
            <Input
              type="text"
              id="guestName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-transparent border-0 border-b-2 border-border rounded-none py-4 px-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-primary transition-colors"
            />
          </div>

          <div className="relative">
            <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Arrival Date & Time
            </label>
            <Input
              type="datetime-local"
              id="arrivalDate"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-border rounded-none py-4 px-0 text-foreground focus-visible:ring-0 focus-visible:border-primary transition-colors"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase text-xs tracking-widest font-bold transition-all duration-300"
          >
            <Send className="w-4 h-4 mr-2" />
            Request Accommodation
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default HospitalitySection;
