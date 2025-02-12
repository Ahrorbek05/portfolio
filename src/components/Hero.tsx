import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
export const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white"
        >
            <div className="text-center px-6">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Hi, I'm <span className="text-blue-600">Ahrorbek</span>
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 animate-pulse"
                >
                    A Frontend Developer
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                >
                    <button
                        onClick={() => scrollToSection("about")}
                        className="cursor-pointer"
                    >
                        <ArrowDown className="mx-auto animate-bounce" size={32} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
