import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    tag: "01",
    title: "Performance-First",
    description: "Every line of code is optimized. We don't ship slow.",
  },
  {
    tag: "02",
    title: "Scalable Architecture",
    description: "Built to grow from MVP to millions of users.",
  },
  {
    tag: "03",
    title: "Clean Code",
    description: "Maintainable, readable, and engineered for longevity.",
  },
  {
    tag: "04",
    title: "UX as Engineering",
    description: "Design isn't a layer — it's part of the architecture.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// About"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Code is not just logic —{" "}
            <span className="text-gradient-red">it's experience</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We approach every project as a product. Every decision — from
            architecture to animation — serves the end user and the
            business goal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded p-6 hover:border-primary/40 transition-colors group"
            >
              <span className="font-mono text-xs text-primary">{pillar.tag}</span>
              <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
