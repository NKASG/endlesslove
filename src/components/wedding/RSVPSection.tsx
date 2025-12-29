import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const contacts = [
  {
    name: "Mohammed",
    phone: "0913 248 0856",
    whatsapp: "2349132480856",
  },
  {
    name: "Afeez",
    phone: "0811 270 1287",
    whatsapp: "2348112701287",
  },
];

const RSVPSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground text-sm">
            We would be honored by your presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <h3 className="font-serif text-2xl text-primary mb-2">
                {contact.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {contact.phone}
              </p>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b-2 border-border pb-2 hover:border-accent transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
