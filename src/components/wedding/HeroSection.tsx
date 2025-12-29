import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-01-31T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-background overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234C1D95' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-12 relative"
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-accent/40 flex items-center justify-center bg-card shadow-elevated relative z-10 animate-pulse-glow">
          <span className="font-serif text-6xl md:text-7xl text-primary tracking-tight">A</span>
          <span className="font-serif text-4xl md:text-5xl text-accent mx-1 italic">&</span>
          <span className="font-serif text-6xl md:text-7xl text-primary tracking-tight">A</span>
        </div>
        <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
        <div className="absolute inset-0 rounded-full border border-accent/5 scale-150" />
      </motion.div>

      {/* Announcement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="uppercase tracking-[0.35em] text-xs font-bold text-muted-foreground mb-6"
      >
        The Nikkah Ceremony Of
      </motion.p>

      {/* Names */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-8 leading-tight"
      >
        Azeezat{" "}
        <span className="text-3xl md:text-4xl lg:text-5xl align-middle text-gradient-gold">&</span>{" "}
        Afeez
      </motion.h1>

      {/* Date & Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-12"
      >
        <span>January 31, 2026</span>
        <span className="w-2 h-2 bg-accent rounded-full" />
        <span>Offa, Kwara</span>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex gap-4 md:gap-8 mb-16"
      >
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, index) => (
          <div key={item.label} className="text-center">
            <motion.div
              key={item.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-card border border-border shadow-soft flex items-center justify-center mb-2"
            >
              <span className="font-serif text-2xl md:text-3xl text-primary">
                {String(item.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </header>
  );
};

export default HeroSection;
