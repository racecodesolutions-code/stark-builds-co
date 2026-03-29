import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";

const FeaturedProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Featured"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Case <span className="text-gradient-red">study</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="rounded overflow-hidden border border-border">
            <img
              src={project1}
              alt="Analytics Dashboard"
              className="w-full h-auto"
              loading="lazy"
              width={1024}
              height={640}
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">Analytics Dashboard</h3>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">
                  Problem
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The client needed a unified analytics platform to consolidate
                  data from multiple sources into actionable insights.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">
                  Solution
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We built a real-time dashboard with custom data visualizations,
                  automated reporting, and role-based access control.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">
                  Result
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  3x faster data processing, 40% reduction in manual reporting
                  time, and improved decision-making across the organization.
                </p>
              </div>
            </div>

            <div className="flex gap-3 font-mono text-xs">
              <span className="bg-surface border border-border px-3 py-1.5 rounded text-muted-foreground">
                React
              </span>
              <span className="bg-surface border border-border px-3 py-1.5 rounded text-muted-foreground">
                TypeScript
              </span>
              <span className="bg-surface border border-border px-3 py-1.5 rounded text-muted-foreground">
                D3.js
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
