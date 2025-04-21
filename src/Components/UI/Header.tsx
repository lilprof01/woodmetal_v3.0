import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-[1000] h-[10vh] w-full p-10 flex justify-between items-center align-middle transition-all duration-400 ease-in-out ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex gap-1 text-3xl text-gray-400 w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="30"
          height="30"
          style={{transform: "scaleX(-1)"}}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2C-4.2 58.7 4.2 40.2 20.8 34z"
            fill="none"
            stroke="currentColor"
            strokeWidth="30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="30"
          height="30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.3c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-278.3L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 49.9 9.2 37.5 22.7 33.4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
      <nav className="w-1/2 text-white hidden lg:block">
        <ul className="flex justify-between">
          <li className="nav-link">
            <a href="#">Home</a>
          </li>
          <li className="nav-link">
            <a href="#">Shop</a>
          </li>
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Services</a>
          </li>
          <li className="nav-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
