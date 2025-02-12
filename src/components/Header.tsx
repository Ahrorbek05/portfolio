import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        className="text-xl font-bold"
                    >
                        Akhror Dev
                    </motion.div>
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
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
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
