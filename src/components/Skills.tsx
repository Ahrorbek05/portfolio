import { motion } from "framer-motion";
import  { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export const Skills = () => {
  const { darkmode } = useContext(ThemeContext);

  const skills = [
    "React",
    "Next",
    "JavaScript",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap 5",
    "Framer Motion",
    "Scss",
    "Redux",
    "RestAPI",
    "TypeScript",
    "Git",
    "Github",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className={`py-20 overflow-hidden transition-colors duration-300 ${
        darkmode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex space-x-8 text-lg font-medium whitespace-nowrap"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, duration: 17, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm min-w-[150px] text-center transition-colors duration-300 ${
                  darkmode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
