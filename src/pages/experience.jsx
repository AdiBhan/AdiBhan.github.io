import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./styles/experience.css";

const Experience = ({ 
  title, 
  company, 
  employmentType,
  date, 
  points,
  fileName = null // Optional: custom file name, will default to company name
}) => {
  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 }
  };

  // Generate filename from company name if not provided
  const getFileName = () => {
    if (fileName) return fileName;
    return `${company.replace(/\s+/g, '_')}.md`;
  };

  return (
    <motion.div
  
      variants={containerVariants}
      whileHover="hover"
    >
    
      <div className="file-content">
        <div className="experience-title">{title}</div>
        <div className="experience-subtitle">
          {company} · {employmentType}
        </div>
        <div className="experience-date">{date}</div>
        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;