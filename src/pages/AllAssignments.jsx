import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import INFO from "../data/user";
import "./styles/allAssignments.css";

const AllAssignments = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const cardVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		},
		hover: {
			y: -5,
			transition: {
				duration: 0.2,
				ease: "easeInOut"
			}
		}
	};

	const logoVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: { duration: 0.3 }
		},
		hover: {
			scale: 1.1,
			rotate: [-2, 2, 0],
			transition: { duration: 0.3 }
		}
	};

	const linkVariants = {
		hover: {
			scale: 1.05,
			x: 5,
			transition: { duration: 0.2 }
		},
		tap: { scale: 0.95 }
	};

	return (
		<motion.div
			className="all-assignments-container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{INFO.assignments.slice().reverse().map((assignment, index) => (
				<motion.div
					className="assignment-card"
					key={index}
					variants={cardVariants}
					whileHover="hover"
					initial="hidden"
					animate="visible"
					layout
				>
					<motion.div 
						className="assignment-title"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.1 }}
					>
						{assignment.title}
					</motion.div>
					
					<motion.div 
						className="assignment-description"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						{assignment.description}
					</motion.div>

					<motion.div 
						className="assignment-logos"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						{assignment.logos.map((logo, logoIndex) => (
							<motion.img
								key={logoIndex}
								src={logo}
								alt={`Logo ${logoIndex + 1}`}
								className="assignment-logo"
								variants={logoVariants}
								whileHover="hover"
							/>
						))}
					</motion.div>

					<motion.div 
						className="assignment-links"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						<motion.a
							href={assignment.link}
							target="_blank"
							rel="noreferrer"
							variants={linkVariants}
							whileHover="hover"
							whileTap="tap"
						>
							{assignment.linkText}
						</motion.a>

						{assignment.demoText && !assignment.demoLink && (
							<motion.a
								href={`../assets/videos/assign-0${assignment.title.replace("abhan03-assignment-", "")}.mp4`}
								target="_blank"
								rel="noopener noreferrer"
								variants={linkVariants}
								whileHover="hover"
								whileTap="tap"
							>
								{assignment.demoText}
							</motion.a>
						)}

						{assignment.demoLink && (
							<motion.a
								href={assignment.demoLink}
								target="_blank"
								rel="noopener noreferrer"
								variants={linkVariants}
								whileHover="hover"
								whileTap="tap"
							>
								{assignment.demoText}
							</motion.a>
						)}
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default AllAssignments;