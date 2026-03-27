import { motion } from "framer-motion";
import { ChevronDown, MapPin, Compass } from "lucide-react";
import heroImage from "@/assets/hero-bihar.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ancient temple in Bihar at golden hour"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 overlay-gradient-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-2 mb-4"
        >
          <Compass className="w-5 h-5 text-gold" />
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Discover the Land of Enlightenment
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl"
        >
          Explore the Heart of{" "}
          <span className="italic text-gold">Bihar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-white/80 mt-6 max-w-2xl"
        >
          From the sacred Bodhi Tree to ancient university ruins — embark on a journey
          through 3,000 years of history, spirituality, and natural beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a href="#destinations" className="btn-primary-gradient flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Explore Destinations
          </a>
          <a
            href="#about"
            className="font-body font-semibold px-8 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
          >
            About Bihar
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex gap-8 sm:gap-16 mt-16"
        >
          {[
            { value: "3000+", label: "Years of History" },
            { value: "15+", label: "UNESCO Sites" },
            { value: "38", label: "Districts" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
