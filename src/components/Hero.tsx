import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export const Hero = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300
      ${
        darkmode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-10 -left-10 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"
        />
      </div>

      <div className="text-center px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Ahrorbek</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-pulse"
        >
          A Frontend Developer
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer"
        >
          <ArrowDown
            className="mx-auto animate-bounce text-blue-600 dark:text-blue-400"
            size={32}
          />
        </motion.button>
      </div>
    </section>
  );
};
