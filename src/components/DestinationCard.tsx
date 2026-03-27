import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { Place } from "@/data/places";

interface DestinationCardProps {
  place: Place;
  index: number;
}

const DestinationCard = ({ place, index }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link to={`/place/${place.id}`} className="destination-card block group h-full">
        <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src={place.image}
            alt={place.name}
            loading="lazy"
            className="destination-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient-bottom" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="glass-card px-3 py-1 rounded-full text-xs font-body font-semibold text-white">
              {place.category}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-1 text-white/70 mb-2">
              <MapPin className="w-3 h-3" />
              <span className="font-body text-xs">{place.location}</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight mb-2">
              {place.name}
            </h3>
            <p className="font-body text-xs text-white/70 line-clamp-2 mb-3">
              {place.shortDescription}
            </p>
            <div className="flex items-center gap-1 text-gold font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
