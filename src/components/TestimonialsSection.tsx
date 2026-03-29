import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "RaceCode delivered a product that exceeded expectations — fast, clean, and ready to scale.",
    author: "Alex K.",
    role: "Founder, TechStart",
  },
  {
    quote: "They don't just write code, they build systems. Our platform handles 10x the traffic now.",
    author: "Maria S.",
    role: "CTO, GrowthBase",
  },
  {
    quote: "The attention to performance and detail was exceptional. Best dev team we've worked with.",
    author: "David R.",
    role: "Product Lead, Nextera",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Testimonials"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient-red">builders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary/30 pl-6"
            >
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
