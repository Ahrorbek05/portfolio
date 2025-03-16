import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";
export const About = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        darkmode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ),
              title: "Background",
              description:
                "I am a front-end developer with a strong passion for creating interactive and visually appealing web applications.",
            },
            {
              icon: (
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ),
              title: "Development",
              description:
                "Proficient in React.js, Next.js, and Tailwind CSS, with experience in building dynamic web applications.",
            },
            {
              icon: (
                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ),
              title: "Goals",
              description:
                "My goal is to become a full-stack developer and contribute to innovative projects using modern technologies.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow 
             bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
