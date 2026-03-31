import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  neutralBg?: boolean;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded border border-border bg-surface cursor-pointer"
    >
      {/* Image */}
      <div
        className="aspect-[16/10] overflow-hidden relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        {/* Title tooltip on hover */}
        {hovered && (
          <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded text-sm font-semibold text-foreground shadow-md animate-in fade-in-0 zoom-in-95 duration-200">
            {title}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-xs font-mono text-muted-foreground">{category}</p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

export default ProjectCard;
