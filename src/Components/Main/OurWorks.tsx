import { motion } from "framer-motion";
import hangLamp from "/assets/hanglamp.webp";
import handle from "/assets/handlebrick.webp";
import shelf from "/assets/shelfbrick.webp";
import chargingdesk from "/assets/chargindesk.webp";
import bedDrawer from '/assets/beddrawer.webp'
import bedDrawer2 from '/assets/beddrawer2.webp';
import sideDrawer from '/assets/sidedrawer2.jpg';
import sideDrawer2 from '/assets/sidedrawer2.webp';

const OurWorks = () => {
  return (
    <section className="h-screen p-8">
      <h2 className="mb-10 text-4xl sm:text-6xl dark:text-white">Sneak Peek</h2>
      <div className="h-full w-full flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-full w-full bg-[url(/assets/bedroom.webp)] bg-cover bg-center rounded-lg shadow-lg flex justify-center items-center text-center text-white lg:grayscale hover:*:text-transparent hover:first:*:bg-black/30 hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
        >
          <div className="absolute h-full w-full bg-black/60 transition-all duration-500" />
          <h3 className="text-xl sm:text-3xl font-bold z-10 transition-all duration-500">
            Featured Work
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
          {/* Top Right Div 1 */}
          <motion.div
            initial={{ opacity: 0, y: "-100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={hangLamp}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Top Right Div 2 */}
          <motion.div
            initial={{ opacity: 0, y: "-100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={handle}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom Right Div 3 */}
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="bg-gradient-to-br from-yellow-800 to-yellow-950 rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={shelf}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom Right Div 4 */}
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={chargingdesk}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
          {/* Top Right Div 1 */}
          <motion.div
            initial={{ opacity: 0, y: "-100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={sideDrawer2}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Top Right Div 2 */}
          <motion.div
            initial={{ opacity: 0, y: "-100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={bedDrawer2}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom Right Div 3 */}
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="bg-gradient-to-br from-yellow-800 to-yellow-950 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 ease-in-out shadow-xl shadow-black overflow-clip"
          >
            <img
              alt="lamp"
              src={bedDrawer}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom Right Div 4 */}
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl shadow-black grayscale hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
          >
            <img
              alt="lamp"
              src={sideDrawer}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-full w-full bg-[url(/assets/bedroom2.webp)] rounded-lg shadow-lg flex justify-center items-center text-center text-white lg:grayscale hover:*:text-transparent hover:first:*:bg-black hover:grayscale-0 transition-all duration-300 ease-in-out overflow-clip"
        >
          <div className="absolute h-full w-full bg-black/60 transition-all duration-500" />
          <h3 className="text-xl sm:text-3xl font-bold z-10 transition-all duration-500">Featured Work</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;