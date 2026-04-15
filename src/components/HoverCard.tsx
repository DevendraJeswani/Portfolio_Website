import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  image: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
}

const HoverCard = ({ image, title, subtitle, className = "", imageClassName = "object-cover" }: HoverCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      whileHover="hover"
    >
      <motion.img
        src={image}
        alt={title || ""}
        className={`w-full h-full ${imageClassName}`}
        loading="lazy"
        variants={{
          hover: { scale: 0.95 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {(title || subtitle) && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          variants={{
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          {title && (
            <h3 className="font-display text-lg font-bold text-primary-foreground">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-primary-foreground/80 mt-1">{subtitle}</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default HoverCard;
