import React from "react";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";
import { Sparkles, Code, Rocket } from "lucide-react";

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full relative px-4 py-16 flex items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 animate-gradient-xy"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="flex justify-center md:order-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Subtle gradient border ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-75 dark:opacity-50 blur-lg"></div>

            <motion.div
              className="relative w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/photo/JD.JPG"
                alt="Jaydeep Gondaliya"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left md:order-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-lg justify-center md:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Code className="w-5 h-5" />
              <span>Full-Stack &amp; Mobile Developer</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Jaydeep Gondaliya
            </motion.h1>

            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligent
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Scalable
              </span>{" "}
              Systems
            </motion.h2>
          </div>

          <motion.div
            className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
              📱 Full-stack and mobile developer building{" "}
              <strong>web apps, mobile apps and the APIs behind them</strong>.
              Shipped a cross-platform <strong>React Native</strong> app for
              iOS &amp; Android, and now modernizing legacy websites into
              full-stack platforms with <strong>mobile-ready REST APIs</strong>.
              <br />
              <br />
              💡 Strong backend in <strong>Node.js, Java &amp; Spring Boot</strong>,{" "}
              <strong>PostgreSQL, MongoDB, Redis</strong>, and cloud deployments
              on <strong>AWS &amp; Azure</strong>. Currently growing into native{" "}
              <strong>iOS development with Swift, UIKit &amp; Core Data</strong>.
              <br />
              <br />
              🎓 Master's in CS @ CSULA (GPA 3.89) |{" "}
              <strong>AI, LLM Integration &amp; NLP</strong>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialIcons />

            <a
              href="/Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              target="_blank"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Download Resume
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
