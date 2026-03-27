import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Ticket, Calendar, Navigation, Star } from "lucide-react";
import { places } from "@/data/places";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const place = places.find((p) => p.id === id);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">Place not found</h2>
          <Link to="/" className="btn-primary-gradient inline-block mt-4">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const otherPlaces = places.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all destinations
              </Link>
              <div className="flex items-center gap-2 text-white/70 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">{place.location}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {place.name}
              </h1>
              <span className="inline-block mt-3 glass-card px-4 py-1.5 rounded-full text-sm font-body font-semibold text-white">
                {place.category}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                About this Destination
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base lg:text-lg">
                {place.fullDescription}
              </p>

              {/* Highlights */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" /> Key Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {place.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-6 border border-border space-y-5">
                <h3 className="font-display text-lg font-bold text-foreground">Visitor Info</h3>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">Best Time</span>
                    <p className="font-body text-sm text-foreground font-medium">{place.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">Timings</span>
                    <p className="font-body text-sm text-foreground font-medium">{place.timings}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">Entry Fee</span>
                    <p className="font-body text-sm text-foreground font-medium">{place.entryFee}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">How to Reach</span>
                    <p className="font-body text-sm text-foreground font-medium">{place.howToReach}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* More destinations */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              More Destinations
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherPlaces.map((p) => (
                <Link
                  key={p.id}
                  to={`/place/${p.id}`}
                  className="destination-card block group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="destination-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 overlay-gradient-bottom" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-display text-base font-bold text-white">{p.name}</h4>
                      <span className="font-body text-xs text-white/70">{p.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
