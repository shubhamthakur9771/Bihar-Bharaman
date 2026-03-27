import { motion } from "framer-motion";
import { Calendar, Thermometer, Train, Utensils } from "lucide-react";

const tips = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    desc: "October to March offers pleasant weather (15–25°C). Avoid the scorching summers (April–June) and heavy monsoons (July–September).",
  },
  {
    icon: Train,
    title: "How to Reach",
    desc: "Patna has an international airport (Jay Prakash Narayan) and is well connected by rail. The Buddhist circuit has excellent road connectivity.",
  },
  {
    icon: Thermometer,
    title: "Climate",
    desc: "Subtropical climate with hot summers, monsoon rains, and cool winters. Carry light cottons in summer and warm layers for winter mornings.",
  },
  {
    icon: Utensils,
    title: "Must-Try Cuisine",
    desc: "Don't miss Litti-Chokha, Sattu Paratha, Thekua, Makhana Kheer, and the legendary Bihari Kebabs. Bihar's food is hearty and soul-warming.",
  },
];

const PlanSection = () => {
  return (
    <section id="plan" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold">
            Travel Guide
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Plan Your <span className="text-gradient italic">Journey</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <tip.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {tip.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
