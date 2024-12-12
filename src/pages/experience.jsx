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
  image = "https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg",
  fileName = null
}) => {
  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 }
  };

  const getFileName = () => {
    if (fileName) return fileName;
    return `${company.replace(/\s+/g, '_')}.md`;
  };

  return (
    <motion.div
      className="file-card"
      variants={containerVariants}
      whileHover="hover"
    >
      <div className="file-header">
        <FontAwesomeIcon icon={faFile} />
        {getFileName()}
      </div>
      <div className="experience-image-container">
        <img
          src={image}
          alt={company}
          className="experience-image"
        />
      </div>
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