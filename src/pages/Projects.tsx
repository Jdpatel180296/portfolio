import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projects = [
    {
      title: "Early Skin Cancer Detection",
      period: "Jan 2025 - May 2025",
      description:
        "Developed a deep learning model for melanoma detection using smartphone-quality images. Used CNNs (EfficientNet, ResNet, MobileNet) with metadata fusion to achieve 92.9% AUC.",
      technologies: [
        "Python",
        "TensorFlow",
        "NumPy",
        "EfficientNet",
        "ResNet",
        "MobileNet",
      ],
      githubLink:
        "https://github.com/Jdpatel180296/cs5661-dsproject-Early-Skin-Cancer-Detection-Bringing-Dermatology-to-Everyone",
      image: "/photo/skin_cancer.png", // update this path or use placeholder if not available
    },
    {
      title: "Amazon Employee Access Challenge",
      period: "Oct 2024 - Dec 2024",
      description:
        "The Amazon Employee Access Challenge addresses the critical task of predicting employee access requirements within Amazon's internal network",
      technologies: ["Python", "Numpy", "Node.js", "GPT-4 API", "Convex"],
      githubLink:
        "https://github.com/Jdpatel180296/AmazonEmployeeAccessChalange",
      image: "/photo/Amazon_emp.jpeg",
    },
    {
      title: "AI Town Simulation",
      period: "Oct 2023 - Dec 2023",
      description:
        "Developed an interactive AI simulation where autonomous agents roam a virtual town and engage in dynamic conversations using GPT-4 API.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "GPT-4 API",
        "Convex",
      ],
      githubLink: "https://github.com/Jdpatel180296/ai-town",
      image: "/photo/AI_town.jpg",
    },
    {
      title: "Restaurant Application",
      period: "Sep 2023 - Nov 2023",
      description:
        "Mobile application for restaurant management with table reservation via QR codes and live traffic monitoring for revenue prediction.",
      technologies: ["React Native", "Firebase", "JavaScript", "Node.js"],
      githubLink: "https://github.com/Jdpatel180296/app",
      image: "/photo/Restaurent_app.PNG",
    },
    {
      title: "E-Commerce Platform",
      period: "Jan 2022 - Apr 2022",
      description:
        "Full-stack e-commerce platform with product management, user authentication, and secure payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      liveLink: "https://desilooklifestyle.com/",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <motion.section
      id={id}
      className="min-h-screen relative py-20 px-3 flex flex-col justify-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100"></div>

      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-10 h-10 text-purple-600" />
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Innovative solutions combining{" "}
            <strong>AI, Full-Stack Development</strong>, and{" "}
            <strong>Cloud Technologies</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
