import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export const Contact = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        darkmode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                ),
                title: "Email",
                text: "akramjonovahrorbek96@gmail.com",
              },
              {
                icon: (
                  <Phone className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                ),
                title: "Phone",
                text: "+998 93 977 21 91",
              },
              {
                icon: (
                  <MapPin className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                ),
                title: "Location",
                text: "Fergana, Uzbekistan",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform"
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border text-black border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border text-black  border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border text-black  border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors font-semibold">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
