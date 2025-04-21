import { House, Amphora, Armchair, InspectionPanel } from "lucide-react";
import { motion } from "framer-motion";

const HeroTag = () => {
  return (
    <motion.div
      initial={{ y: "0px", opacity: 0 }}
      animate={{ y: "-30px", opacity: 1 }}
      transition={{delay: 2, duration: 1.5, ease: "easeInOut" }}
      className="h-screen lg:h-[20vh] bg-gradient-to-r from-yellow-700/60 to-black/60 max-w-[80vw] lg:min-w-[80vw] px-6 mx-auto z-20 text-white text-2xl flex flex-col lg:flex-row justify-between items-center overflow-hidden"
    >
      <motion.div className="bg-black w-full h-full flex justify-center items-center text-center gap-2 cursor-pointer hover:*:opacity-100">
        <Amphora size={30} strokeWidth={1} /> Interiors{" "}
        <span className="opacity-35  transition-all duration-400">&gt;</span>
      </motion.div>
      <motion.div className="bg-yellow-950 w-full h-full flex justify-center items-center text-center gap-2 cursor-pointer hover:*:opacity-100">
        <Armchair size={30} strokeWidth={1} />
        Furnishing{" "}
        <span className="opacity-35  transition-all duration-400">&gt;</span>
      </motion.div>
      <motion.div className="bg-yellow-800 w-full h-full flex justify-center items-center text-center gap-2 cursor-pointer hover:*:opacity-100">
        <House size={30} strokeWidth={1} /> Exteriors{" "}
        <span className="opacity-35  transition-all duration-400">&gt;</span>
      </motion.div>
      <motion.div className="bg-yellow-700 w-full h-full flex justify-center items-center text-center gap-2 cursor-pointer hover:*:opacity-100">
        <InspectionPanel size={30} strokeWidth={1} /> Metal Works{" "}
        <span className="opacity-35  transition-all duration-400">&gt;</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroTag;
