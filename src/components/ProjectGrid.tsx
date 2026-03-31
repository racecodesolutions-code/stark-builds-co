import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";

const allProjects = [
  { title: "Analytics Dashboard", category: "Web App", image: project1 },
  { title: "Fashion Store", category: "E-commerce", image: project2 },
  { title: "Startup Launch", category: "Landing Page", image: project3 },
  { title: "FinTech Mobile", category: "Web App", image: project4 },
  { title: "Property Platform", category: "Web App", image: project5 },
  { title: "FitTrack Pro", category: "Web App", image: project6 },
  { title: "Architectural Bureau", category: "Landing Page", image: project7 },
  { title: "News Portal", category: "Web App", image: project8 },
];

const ProjectGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            {"// Projects"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Selected <span className="text-gradient-red">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-sm border border-border px-8 py-3 rounded text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Load more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
