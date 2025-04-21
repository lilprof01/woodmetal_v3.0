import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const targetRef = useRef(null);
  const inView = useInView(targetRef, { once: true });
  return (
    <section
      ref={targetRef}
      className=" relative flex flex-col justify-center gap-8 dark:text-white text-left p-20 lg:px-10"
    >
      <div className="hidden lg:block h-[100px] lg:h-[200px] w-[100px] lg:w-[200px] bottom-4 right-10 absolute bg-transparent border-2 border-yellow-700">
        <motion.div
          className="absolute h-full w-full bg-[url(/styly.jpg)] bg-cover bg-center -top-2 -left-2 bounce"
        />
      </div>
      <motion.h2
        animate={inView ? { opacity: 1, y: "0px" } : { opacity: 0, y: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="z-10 text-4xl sm:text-6xl"
      >
        About Us
      </motion.h2>
      <motion.p
        animate={inView ? { opacity: 1, y: "0px" } : { opacity: 0, y: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-sm sm:text-xl z-10 w-3/4"
      >
        At WoodMetal, we believe that your home is a reflection of your
        personality and style. With years of experience in crafting bespoke
        furniture and metalwork, we are dedicated to transforming your living
        spaces into works of art. Our team of skilled artisans and designers
        work tirelessly to bring your vision to life, blending functionality
        with elegance to create timeless pieces that stand out.
        <br />
        <br />
        Sustainability is at the heart of what we do. We source premium
        materials responsibly and ensure that every piece we create is built to
        last. From intricate metal designs to luxurious wooden furnishings, our
        creations are a testament to our commitment to quality and
        craftsmanship. Whether you're looking to revamp your interiors, enhance
        your exteriors, or add a touch of sophistication to your space,
        WoodMetal is here to make it happen.
      </motion.p>
    </section>
  );
};

export default AboutUs;
