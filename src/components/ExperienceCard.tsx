// import React from 'react';
// import { Calendar, MapPin, Code } from 'lucide-react';

// interface ExperienceCardProps {
//   title: string;
//   company: string;
//   location: string;
//   period: string;
//   description: string;
//   icon?: React.ReactNode;
// }

// const ExperienceCard: React.FC<ExperienceCardProps> = ({
//   title,
//   company,
//   location,
//   period,
//   description,
//   icon = <Code className="w-16 h-16 text-header " />
// }) => {
//   return (
//     <div className="experience-box min-h-[480px] flex flex-col">
//       <div className="text-center mb-4">
//         {icon}
//       </div>

//       <h3 className="text-3xl font-bold mb-2">{title}</h3>
//       <h4 className="text-2xl font-semibold text-gray-800 mb-2">{company}</h4>

//       <div className="flex flex-wrap text-gray-600 mb-4 justify-center">
//         <div className="flex items-center mr-6 mb-2">
//           <MapPin className="w-5 h-5 mr-1" />
//           <span className="text-base">{location}</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <Calendar className="w-5 h-5 mr-1" />
//           <span className="text-base">{period}</span>
//         </div>
//       </div>

//       <p className="text-lg text-gray-700 flex-grow mb-6 text-justify">
//         {description}
//       </p>

//     </div>
//   );
// };

// export default ExperienceCard;

import React from "react";
import { Calendar, MapPin, Code } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  icon?: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  description,
  icon = <Code className="w-16 h-16 text-header" />,
}) => {
  return (
    <motion.div
      className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[480px] flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Icon with gradient background */}
      <motion.div
        className="flex justify-center mb-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg [&>svg]:w-12 [&>svg]:h-12 [&>svg]:text-white">
          {icon}
        </div>
      </motion.div>

      <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        {title}
      </h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">{company}</h4>

      <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/50 rounded-full">
          <Calendar className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium">{period}</span>
        </div>
      </div>

      <p className="text-base text-gray-700 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
