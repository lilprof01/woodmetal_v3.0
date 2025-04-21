import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center gap-4 text-white text-center p-6 overflow-hidden">
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="bg-[url(/hero2.jpg)] bg-cover bg-center h-full w-full absolute"
      />
      <div className="bg-black/70 absolute h-full w-full" />
      <motion.h1
        initial={{ y: "-100px", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-white z-10 text-5xl sm:text-7xl font-delius"
      >
        Your Home, Your Style...
      </motion.h1>
      <motion.p
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: "0px", opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
        className="text-sm sm:text-xl z-10 lg:w-1/2"
      >
        Transform your living space with our bespoke furniture designs.
      </motion.p>
    </section>
  );
};

export default Hero;
