import React, { useEffect } from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";

import "./styles/homepage.css";
import { 
	faFolder, 
	faTerminal, 
	faCode,
	faFile,
	faCog,
	faWindowMaximize
  } from "@fortawesome/free-solid-svg-icons";
const Homepage = () => {
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
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.645, 0.045, 0.355, 1]
			}
		}
	};

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		}
	};

	const socialVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: index => ({
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.3 + index * 0.1,
				duration: 0.4,
				type: "spring",
				stiffness: 150
			}
		})
	};

	const codedDescription = (
		<motion.span variants={textVariants}>
			Senior majoring in Computer Science at Boston University, set to
			graduate in May 2025. {" "}
			<motion.strong
				whileHover={{ color: "var(--primary-color)" }}
				transition={{ duration: 0.2 }}
			>
				Full-stack developer
			</motion.strong>{" "}
			with experience in web applications, SQL databases, cybersecurity, and a
			track record of success in hackathons. Passionate about leveraging
			technology to solve real-world problems, with skills ranging from
			Python and Java to React and cloud platforms.
		</motion.span>
	);

	const titleText = "I'm on a mission to craft apps that solve real-world challenges, turning complex problems into engaging, user-centric solutions.";

	useEffect(() => {
		document.title = `${INFO.main.title}`;
	}, []);

	const socials = [
		{ icon: faLinkedin, link: INFO.socials.linkedin },
		{ icon: faGithub, link: INFO.socials.github },
		{ icon: faMailBulk, link: `mailto:${INFO.main.email}` }
	];
	const terminalSequence = [
		" Loading profile...",
		1000,
		" Initializing portfolio...",
		1000,
		{titleText},
		3000,
	  ];

	return (
		<React.Fragment>
		  <div className="page-content system-theme">
			<NavBar active="home" />
			<motion.div
			  className="content-wrapper terminal-window"
			  variants={containerVariants}
			  initial="hidden"
			  animate="visible"
			>
			  <div className="window-header">
				<div className="window-controls">
				  <span className="control red"></span>
				  <span className="control yellow"></span>
				  <span className="control green"></span>
				</div>
				<div className="window-title">
				  <FontAwesomeIcon icon={faTerminal} /> portfolio.exe
				</div>
			  </div>
	
			  <div className="homepage-container">
				<div className="homepage-first-area">
				  <motion.div
					className="homepage-first-area-left-side"
					variants={itemVariants}
				  >
					<motion.div 
					  className="title homepage-title terminal-text"
					  variants={textVariants}
					>
					  <TypeAnimation
						sequence={terminalSequence}
						speed={50}
						className="terminal-output"
						style={{ fontSize: '1em' }}
					  />
					</motion.div>
	
					<motion.div
					  className="subtitle homepage-subtitle file-content"
					  variants={textVariants}
					>
					  <div className="file-header">
						<FontAwesomeIcon icon={faFile} /> About.md
					  </div>
					  {codedDescription}
					</motion.div>
				  </motion.div>
	
				  <motion.div
					className="homepage-first-area-right-side"
					variants={itemVariants}
				  >
					<div className="homepage-image-container">
					  <motion.div
						className="homepage-image-wrapper system-window"
						initial="hidden"
                        animate="visible"
                        variants={containerVariants}
					  >
						<div className="window-header">
						  <FontAwesomeIcon icon={faWindowMaximize} /> profile.jpg
						</div>
						<img
						  src={INFO.main.profile_img}
						  alt="about"
						  className="homepage-image"
						/>
					  </motion.div>
					</div>
				  </motion.div>
				</div>
	
				<motion.div 
				  className="homepage-socials system-dock"
				  variants={itemVariants}
				>
				  {socials.map((social, index) => (
					<motion.a
					  key={social.link}
					  href={social.link}
					  target="_blank"
					  rel="noreferrer"
					  custom={index}
					  variants={socialVariants}
					  className="dock-icon"
					  whileHover={{ 
						scale: 1.1,
						y: -2
					  }}
					  whileTap={{ scale: 0.95 }}
					>
					  <FontAwesomeIcon
						icon={social.icon}
						className="homepage-social-icon"
					  />
					</motion.a>
				  ))}
				</motion.div>
	
				<motion.div
				  className="homepage-projects system-folder"
				  variants={itemVariants}
				>
				  <div className="folder-header">
					<FontAwesomeIcon icon={faFolder} /> projects/
				  </div>
				  <AllProjects />
				</motion.div>
			  </div>
			</motion.div>
		  </div>
		</React.Fragment>
	  );
	};
export default Homepage;