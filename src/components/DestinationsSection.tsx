import { useState } from "react";
import { motion } from "framer-motion";
import { places, categories } from "@/data/places";
import DestinationCard from "./DestinationCard";

const DestinationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? places
    : places.filter((p) => p.category === activeCategory);

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold">
            Top Destinations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Places That Define{" "}
            <span className="text-gradient italic">Bihar</span>
          </h2>
          <div className="section-divider mt-6" />
          <p className="font-body text-muted-foreground mt-6 max-w-2xl mx-auto">
            From UNESCO World Heritage Sites to hidden natural wonders — discover the
            15 most iconic destinations across Bihar.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "btn-primary-gradient"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((place, i) => (
            <DestinationCard key={place.id} place={place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
