import { motion } from "framer-motion";
export const Skills = () => {
    const skills = [
        {
            name: "React",
            level: 90,
        },
        {
            name: "JavaScript",
            level: 85,
        },
        {
            name: "Tailwind Css",
            level: 80,
        },
        {
            name: "TypeScript",
            level: 75,
        },
        {
            name: "HTML",
            level: 95,
        },
        {
            name: "CSS",
            level: 95,
        },
    ];
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Skills
                </motion.h2>
                <div className="max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="mb-6"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-gray-600">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <motion.div
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: `${skill.level}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1,
                                    }}
                                    className="h-full bg-blue-600 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
