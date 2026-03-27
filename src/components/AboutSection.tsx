import { motion } from "framer-motion";
import { BookOpen, Landmark, Trees, Sparkles } from "lucide-react";

const features = [
  {
    icon: Landmark,
    title: "Ancient Heritage",
    desc: "Home to the world's first university (Nalanda), the birthplace of democracy (Vaishali), and the land where Buddha attained enlightenment.",
  },
  {
    icon: BookOpen,
    title: "Spiritual Crossroads",
    desc: "Bihar is sacred to Buddhists, Hindus, Jains, and Sikhs — a rare convergence of faiths that shaped human civilization.",
  },
  {
    icon: Trees,
    title: "Natural Beauty",
    desc: "From the Valmiki Tiger Reserve to Kakolat Falls, Bihar's landscapes range from lush forests to serene riverbanks.",
  },
  {
    icon: Sparkles,
    title: "Living Culture",
    desc: "Madhubani paintings, Chhath Puja, Sonepur Mela, and the warmth of Bihari hospitality keep traditions alive.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold">
              About Bihar
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
              Where History{" "}
              <span className="text-gradient italic">Breathes</span>
            </h2>
            <div className="section-divider mt-6 !mx-0" />
            <p className="font-body text-muted-foreground mt-6 text-base lg:text-lg leading-relaxed">
              Bihar, derived from the word <em>"Vihara"</em> (Buddhist monastery), is the
              cradle of Indian civilization. It was here in ancient Magadha that empires
              rose, religions were born, and the first seeds of democracy were sown. The
              Maurya and Gupta dynasties — India's golden ages — had their capitals here.
            </p>
            <p className="font-body text-muted-foreground mt-4 text-base lg:text-lg leading-relaxed">
              Today, Bihar invites you to walk the same paths as Buddha, Mahavira, Ashoka,
              and Chanakya — to feel the pulse of a land that has shaped humanity for over
              three millennia.
            </p>
          </motion.div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
