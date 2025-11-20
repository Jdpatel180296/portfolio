import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, name }) => {
  return (
    <motion.div
      className="icon-container flex flex-col items-center"
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="skill-icon mb-3">
        <Icon className="w-10 h-10" />
      </div>
      <span className="text-lg font-medium text-center text-gray-800">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillIcon;
