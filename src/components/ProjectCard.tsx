import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  neutralBg?: boolean;
}

const ProjectCard = ({ title, category, image, index, neutralBg }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded border border-border bg-surface cursor-pointer"
    >
      {/* Image */}
      <div className={`aspect-[16/10] overflow-hidden relative ${neutralBg ? 'bg-muted' : ''}`}>
        <img
          src={image}
          alt={title}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${neutralBg ? 'object-contain p-4' : 'object-cover'}`}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-5 transition-colors duration-300 group-hover:bg-white">
        <p className="text-xs font-mono text-muted-foreground transition-colors duration-300 group-hover:text-black">{category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
