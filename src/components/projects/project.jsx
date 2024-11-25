import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";

const Project = ({ logos, title, description, linkText1, link1, linkText2, link2, demoLink }) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		},
		hover: {
			y: -3,
			transition: {
				duration: 0.2,
				ease: "easeInOut"
			}
		}
	};

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { 
			opacity: 1, 
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		},
		hover: {
			scale: 1.05,
			rotate: [-2, 2, -2, 0],
			transition: { duration: 0.3 }
		}
	};

	const linkVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: { 
			opacity: 1, 
			x: 0,
			transition: { duration: 0.2 }
		},
		hover: {
			x: 3,
			transition: { duration: 0.2 }
		}
	};

	return (
		<motion.div
			className="project"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
		>
			<motion.div 
				className="project-container"
				layoutId={`project-${title}`}
			>
				<motion.div className="project-logos">
					{Array.isArray(logos) ? 
						logos.map((logo, index) => (
							<motion.img
								key={index}
								src={logo}
								alt={`logo-${index}`}
								variants={logoVariants}
								whileHover="hover"
							/>
						)) : 
						<motion.img
							src={logos}
							alt="logo"
							variants={logoVariants}
							whileHover="hover"
						/>
					}
				</motion.div>

				<motion.div 
					className="project-title"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1 }}
				>
					{title}
				</motion.div>

				<motion.div 
					className="project-description"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					{description}
				</motion.div>

				<motion.div className="project-links">
					{link1 && (
						<motion.div
							className="project-link"
							variants={linkVariants}
							whileHover="hover"
						>
							<FontAwesomeIcon icon={faLink} className="project-link-icon" />
							<Link to={link1}>
								<div className="project-link-text">{linkText1}</div>
							</Link>
						</motion.div>
					)}

					{link2 && (
						<motion.div
							className="project-link"
							variants={linkVariants}
							whileHover="hover"
						>
							<FontAwesomeIcon icon={faLink} className="project-link-icon" />
							<Link to={link2}>
								<div className="project-link-text">{linkText2}</div>
							</Link>
						</motion.div>
					)}

					{demoLink && (
						<motion.a
							href={demoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="demo-link"
							variants={linkVariants}
							whileHover="hover"
						>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							<span>Live Demo</span>
						</motion.a>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Project;