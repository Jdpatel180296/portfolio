import React from "react";
import { Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string[];
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  image,
  description,
}) => {
  return (
    <motion.div
      className="backdrop-blur-sm bg-white/50 border border-white/30 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <a href={image} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
          />
        </a>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
          {title}
        </h3>

        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-sm">{date}</span>
        </div>

        <div className="mb-3">
          <h4 className="text-base font-semibold text-gray-500 mb-2">ISSUER</h4>
          <div className="flex items-center">
            <Award className="w-4 h-4 text-header mr-2" />
            <span className="text-sm font-medium">{issuer}</span>
          </div>
        </div>

        {description.length > 0 && (
          <div className="mb-3">
            <h4 className="text-base font-semibold text-gray-500 mb-2">
              HIGHLIGHTS
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {description.slice(0, 2).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {description.length > 2 && (
                <li className="text-header font-medium">
                  + {description.length - 2} more achievements
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
