import React from "react";
import { motion } from "framer-motion";
import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const projectVariants = {
		hidden: { 
			opacity: 0,
			y: 30,
		},
		visible: { 
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		}
	};

	return (
		<motion.div 
			className="all-projects-container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{INFO.projects.map((project, index) => (
				<motion.div 
					className="all-projects-project" 
					key={index}
					variants={projectVariants}
					whileHover={{ 
						scale: 1.02,
						transition: { duration: 0.2 }
					}}
					whileTap={{ scale: 0.98 }}
				>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText1={project.linkText1}
						link1={project.link1}
						linkText2={project.linkText2}
						link2={project.link2}
						demoLink={project.demoLink}
					/>
				</motion.div>
			))}
		</motion.div>
	);
};

export default AllProjects;