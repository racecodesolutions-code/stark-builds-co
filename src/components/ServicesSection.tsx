import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, ShoppingCart, Rocket, Zap } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", description: "Custom web applications built with modern frameworks and best practices." },
  { icon: Palette, title: "UI/UX Design", description: "Interfaces designed for clarity, speed, and user delight." },
  { icon: ShoppingCart, title: "E-commerce", description: "High-converting online stores with seamless checkout experiences." },
  { icon: Rocket, title: "MVP for Startups", description: "Ship your product fast without sacrificing code quality." },
  { icon: Zap, title: "Performance Optimization", description: "Audit, optimize, and accelerate existing applications." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Services"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What we <span className="text-gradient-red">build</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-6 py-8 border-b border-border group hover:pl-4 transition-all duration-300"
            >
              <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md">
                  {service.description}
                </p>
              </div>
              <span className="ml-auto font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {`0${i + 1}`}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
