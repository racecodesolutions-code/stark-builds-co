import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Grid overlay */}
      <div className="absolute inset-0 line-grid opacity-[0.04]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-6 tracking-widest uppercase">
            {"// RaceCode Solutions"}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            We Build Fast,{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-red">Scalable</span> Web Products
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Race-Code Solutions delivers high-performance websites and
            applications engineered for growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-8 py-3.5 font-semibold rounded hover:bg-primary/90 transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-8 py-3.5 font-semibold rounded hover:border-primary hover:text-primary transition-colors text-sm"
            >
              Start a Project →
            </a>
          </div>
        </motion.div>

        {/* Code decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 font-mono text-xs text-tertiary hidden md:block"
        >
          <span className="text-primary">{"<"}</span>
          <span className="text-muted-foreground">code</span>
          <span className="text-primary">{">"}</span>
          <span className="text-muted-foreground mx-2">build fast _ ship faster</span>
          <span className="text-primary">{"</"}</span>
          <span className="text-muted-foreground">code</span>
          <span className="text-primary">{">"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
