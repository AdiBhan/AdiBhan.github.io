import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { y: 10, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	};

	const iconVariants = {
		hover: {
			scale: 1.1,
			rotate: [-5, 5, 0],
			transition: {
				duration: 0.3
			}
		},
		tap: { scale: 0.95 }
	};

	const linkVariants = {
		hover: {
			x: 5,
			transition: {
				duration: 0.2,
				ease: "easeInOut"
			}
		}
	};

	const socials = [
		{
			icon: faGithub,
			link: INFO.socials.github,
			text: "Follow on GitHub"
		},
		{
			icon: faLinkedin,
			link: INFO.socials.linkedin,
			text: "Connect on LinkedIn"
		}
	];

	return (
		<motion.div 
			className="socials"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{socials.map((social, index) => (
				<motion.div 
					key={index}
					className="social"
					variants={itemVariants}
				>
					<motion.a
						href={social.link}
						target="_blank"
						rel="noreferrer"
						whileHover="hover"
						whileTap="tap"
						variants={linkVariants}
					>
						<motion.div 
							className="social-icon"
							variants={iconVariants}
						>
							<FontAwesomeIcon
								icon={social.icon}
								className="social-icon"
							/>
						</motion.div>
						<motion.div 
							className="social-text"
							variants={linkVariants}
						>
							{social.text}
						</motion.div>
					</motion.a>
				</motion.div>
			))}

			<motion.div 
				className="email"
				variants={itemVariants}
			>
				<motion.div 
					className="email-wrapper"
					whileHover="hover"
					whileTap="tap"
					variants={linkVariants}
				>
					<motion.a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
						variants={linkVariants}
					>
						<motion.div 
							className="social-icon"
							variants={iconVariants}
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</motion.div>

						<motion.div 
							className="social-text"
							variants={linkVariants}
						>
							{INFO.main.email}
						</motion.div>
					</motion.a>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Socials;