import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface cardProps {
  y?: string;
  scale?: number;
  duration: number;
  style: string;
  title: string;
  text: string;
}

const Card: React.FC<cardProps> = ({
  y,
  scale,
  duration,
  style,
  title,
  text,
}) => {
  const targetRef = useRef(null);
  const inView = useInView(targetRef, { once: false });
  return (
    <motion.div
      ref={targetRef}
      animate={
        inView
          ? { opacity: 1, y: "0px", scale: scale }
          : { opacity: 0, y: y, scale: 0.8 }
      }
      transition={{ duration: duration, ease: "easeInOut" }}
      className={`${style} p-8 shadow-lg flex flex-col justify-center items-center text-center text-white`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </motion.div>
  );
};

export default Card;
