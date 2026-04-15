import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  image: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  tag?: string;
  link?: string;
}

const HoverCard = ({ 
  image, 
  title, 
  subtitle, 
  className = "", 
  imageClassName = "object-cover",
  tag,
  link
}: HoverCardProps) => {
  const CardContent = (
    <>
      {tag && (
        <div className="absolute top-2 left-0 z-20">
          <div className="bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-r-sm shadow-lg">
            {tag}
          </div>
        </div>
      )}
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
          className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/60 backdrop-blur-sm px-4 text-center"
          initial={{ opacity: 0 }}
          variants={{
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          {title && (
            <h3 className="font-display text-lg font-bold text-primary-foreground leading-tight">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-primary-foreground/80 mt-1 whitespace-pre-line">{subtitle}</p>
          )}
        </motion.div>
      )}
    </>
  );

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      whileHover="hover"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

export default HoverCard;
