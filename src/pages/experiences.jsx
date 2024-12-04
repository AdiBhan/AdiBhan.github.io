import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import Experience from "./experience";
import "./styles/experience.css";

const Experiences = () => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Boston University College of Engineering",
      employmentType: "Part-time",
      date: "Feb 2023 - Present",
      fileName: "BU_Engineering.md",
      points: [
        "Spearheaded the design and development of an interactive web application as a centerpiece display for the College of Engineering lobby.",
        "Architected system with PostgreSQL and WebSockets for real-time updates.",
        "Integrated Meta API and Google Maps API for enhanced user experience.",
        "Built with Node.js, Next.js, TypeScript, and Sass.",
        "Deployed using Docker and GitHub Actions on BU Cloud Services."
      ]
    },
    {
      title: "Instructor",
      company: "Hack4Impact",
      employmentType: "Part-time",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Instructed 30 first-year students in web development fundamentals.",
        "Guided weather application project using OpenWeatherAPI.",
        "Fostered collaborative learning environment.",
        "Mentored new coders in individual and group settings."
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "Metropolitan Area Planning Council",
      employmentType: "Part-time",
      date: "May 2023 - Aug 2023",
      fileName: "MAPC.md",
      points: [
        "Developed Python scripts for UpGuard API data analysis across 85 municipalities.",
        "Automated weekly security reports using Pandas and MongoDB Atlas.",
        "Created visualizations for cybersecurity whitepaper.",
        "Achieved 10% improvement in regional security posture."
      ]
    }
  ];

  return (
    <motion.div
      className="homepage-experiences system-folder"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="folder-header">
        <FontAwesomeIcon icon={faFolder} /> experiences/
      </div>
      <div className="experiences-grid">
        {experienceData.map((experience, index) => (
          <Experience
            key={index}
            {...experience}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;