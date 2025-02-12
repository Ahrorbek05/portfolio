import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
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
                    Get In Touch
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
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
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                            <span>akramjonovahrorbek96@gmail.com    </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-blue-600" />
                            <span>+998939772191</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-6 h-6 text-blue-600" />
                            <span>Uzbekistan Fergana</span>
                        </div>
                    </motion.div>
                    <motion.form
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
