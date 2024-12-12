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
        title: "Incoming Software Development Intern",
        company: "UKG (Ultimate Kronos Group)",
        employmentType: "Internship",
        date: "January 2025 - April 2025",
        fileName: "UKG.md",
        image: `data:image/svg+xml,${encodeURIComponent(`
            <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="ukg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#003366;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0066cc;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="800" height="200" fill="url(#ukg-grad)"/>
                <circle cx="700" cy="50" r="60" fill="#ffffff" fill-opacity="0.1"/>
                <path d="M0 140 Q 400 80 800 140" stroke="#ffffff" stroke-opacity="0.2" fill="none" stroke-width="2"/>
                <text x="40" y="100" font-family="Arial" font-size="24" fill="white">UKG</text>
                <text x="40" y="140" font-family="Arial" font-size="18" fill="white" opacity="0.8">Software Development Intern</text>
            </svg>
        `)}`,
        points: ["Incoming software engineering intern selected to join UKG's enterprise software development team"],
    },
    {
        title: "Full Stack Developer",
        company: "Boston University College of Engineering",
        employmentType: "Part-time",
        date: "Feb 2023 - December 2024",
        fileName: "BU_Engineering.md",
        image: `data:image/svg+xml,${encodeURIComponent(`
            <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="bu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#CC0000;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#990000;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="800" height="200" fill="url(#bu-grad)"/>
                <path d="M750 0 L800 0 L800 50" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
                <path d="M0 150 L800 150" stroke="white" stroke-width="1" opacity="0.2" stroke-dasharray="10,5"/>
                <text x="40" y="100" font-family="Arial" font-size="24" fill="white">Boston University</text>
                <text x="40" y="140" font-family="Arial" font-size="18" fill="white" opacity="0.8">College of Engineering</text>
            </svg>
        `)}`,
        points: [
            "Spearheaded the design and development of an interactive web application as a centerpiece display for the College of Engineering lobby.",
            "Architected system with PostgreSQL and WebSockets for real-time updates.",
            "Integrated Meta API and Google Maps API for enhanced user experience.",
            "Built with Node.js, Next.js, TypeScript, and Sass.",
            "Deployed using Docker and GitHub Actions on BU Cloud Services.",
        ],
    },
    {
        title: "Instructor",
        company: "Hack4Impact",
        employmentType: "Part-time",
        date: "Aug 2023 - Dec 2023",
        image: `data:image/svg+xml,${encodeURIComponent(`
            <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="h4i-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#3498DB;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="800" height="200" fill="url(#h4i-grad)"/>
                <circle cx="650" cy="100" r="80" fill="#ffffff" fill-opacity="0.1"/>
                <path d="M0 100 Q 400 150 800 100" stroke="#ffffff" stroke-opacity="0.2" fill="none" stroke-width="2"/>
                <text x="40" y="100" font-family="Arial" font-size="24" fill="white">Hack4Impact</text>
                <text x="40" y="140" font-family="Arial" font-size="18" fill="white" opacity="0.8">Instructor</text>
            </svg>
        `)}`,
        points: [
            "Instructed 30 first-year students in web development fundamentals.",
            "Guided weather application project using OpenWeatherAPI.",
            "Fostered collaborative learning environment.",
            "Mentored new coders in individual and group settings.",
        ],
    },
    {
        title: "Cybersecurity Intern",
        company: "Metropolitan Area Planning Council",
        employmentType: "Part-time",
        date: "May 2023 - Aug 2023",
        fileName: "MAPC.md",
        image: `data:image/svg+xml,${encodeURIComponent(`
            <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="mapc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#1a472a;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2e8b57;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="800" height="200" fill="url(#mapc-grad)"/>
                <path d="M700 0 L800 100 L700 200" fill="#ffffff" fill-opacity="0.1"/>
                <path d="M0 180 Q 400 120 800 180" stroke="#ffffff" stroke-opacity="0.2" fill="none" stroke-width="2"/>
                <text x="40" y="100" font-family="Arial" font-size="24" fill="white">Metropolitan Area Planning Council</text>
                <text x="40" y="140" font-family="Arial" font-size="18" fill="white" opacity="0.8">Cybersecurity Intern</text>
            </svg>
        `)}`,
        points: [
            "Developed Python scripts for UpGuard API data analysis across 85 municipalities.",
            "Automated weekly security reports using Pandas and MongoDB Atlas.",
            "Created visualizations for cybersecurity whitepaper.",
            "Achieved 10% improvement in regional security posture.",
        ],
    },
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