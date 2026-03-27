import { MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-earth py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-display text-xl font-bold text-white">Bihar Bharaman</span>
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Discover the land where enlightenment was born. Explore ancient heritage,
              vibrant culture, and natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Destinations", "About Bihar", "Plan Your Trip"].map((l) => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase().replace(/ /g, "")}`} className="font-body text-sm text-white/60 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Places */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Top Places</h4>
            <ul className="space-y-2">
              {["Mahabodhi Temple", "Nalanda Ruins", "Rajgir", "Vaishali", "Golghar"].map((p) => (
                <li key={p}>
                  <span className="font-body text-sm text-white/60">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2 font-body text-sm text-white/60">
              <p>Bihar State Tourism Development Corporation</p>
              <p>Patna, Bihar, India</p>
              <p>tourism.bihar.gov.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-white/40 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> for Bihar Tourism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
