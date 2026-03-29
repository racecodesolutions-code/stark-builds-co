import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We understand your goals, users, and constraints.",
    code: "init()",
  },
  {
    num: "02",
    title: "Architecture",
    description: "We design the technical foundation and system structure.",
    code: "design()",
  },
  {
    num: "03",
    title: "Development",
    description: "We build, iterate, and refine with weekly updates.",
    code: "build()",
  },
  {
    num: "04",
    title: "Launch & Support",
    description: "We deploy, monitor, and optimize for real-world performance.",
    code: "deploy()",
  },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Process"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            How we <span className="text-gradient-red">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-surface border border-border rounded p-6 group hover:border-primary/40 transition-colors"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}

              <span className="font-mono text-3xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {step.description}
              </p>
              <code className="font-mono text-xs text-primary/60">
                {step.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
