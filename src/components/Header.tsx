import { useState, useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        darkmode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Akhror Dev
          </motion.div>

          {/* Navbar Items */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkmode)}
            className="p-2 rounded-full transition duration-300 
              bg-gray-300 dark:bg-gray-700"
          >
            {darkmode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};
