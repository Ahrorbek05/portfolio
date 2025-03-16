import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export const Projects = () => {
  const { darkmode } = useContext(ThemeContext);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A productive task manager with drag-and-drop functionality",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/Ahrorbek05/CRUD-Todo-app",
      demo: "https://crud-todo-app-seven.vercel.app/",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      github: "#",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        darkmode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-lg overflow-hidden shadow-lg transition-colors duration-300 ${
                darkmode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    darkmode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center transition-colors duration-300 ${
                      darkmode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={`flex items-center transition-colors duration-300 ${
                        darkmode
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
