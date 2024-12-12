import React, { useEffect } from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
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
	faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import Experiences from "./experiences";

const Homepage = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.645, 0.045, 0.355, 1],
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const socialVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: (index) => ({
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.3 + index * 0.1,
				duration: 0.4,
				type: "spring",
				stiffness: 150,
			},
		}),
	};

	const codedDescription = (
<motion.div variants={textVariants} className="description-container">
    <motion.p className="description-paragraph">
	<div className="profile-header">
            <motion.div 
                className="profile-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <img 
                    src={INFO.main.profile_img} 
                    alt="Profile"
                    className="profile-image"
                />
            </motion.div>
            <motion.p className="description-paragraph main-intro">
                <motion.span>
                    Senior studying Computer Science at Boston University and a passionate software developer dedicated to creating scalable, efficient, and impactful solutions.
                </motion.span>
            </motion.p>
        </div>
    </motion.p>

    <motion.p className="description-paragraph skill-section">
        <span className="section-label">Focus Areas →</span>
        <motion.span
            className="skill-chip"
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
        >
            Web Development
        </motion.span>
        <motion.span
            className="skill-chip"
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
        >
            Mobile Development
        </motion.span>
        <motion.span
            className="skill-chip"
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
        >
            Cybersecurity
        </motion.span>
    </motion.p>

    <motion.p className="description-paragraph tech-stack">
        <span className="section-label">Tech Stack →</span>
        <motion.div className="tech-tags">
            {["Python", "Java", "C#", "React", "Node.js", "Spring Boot", "ASP.NET Core"].map((tech) => (
                <motion.span
                    key={tech}
                    className="tech-tag"
                    whileHover={{ y: -2 }}
                >
                    {tech}
                </motion.span>
            ))}
        </motion.div>
    </motion.p>
</motion.div>
	);

	useEffect(() => {
		document.title = `${INFO.main.title}`;
	}, []);

	const socials = [
		{ icon: faLinkedin, link: INFO.socials.linkedin },
		{ icon: faGithub, link: INFO.socials.github },
		{ icon: faMailBulk, link: `mailto:${INFO.main.email}` },
	];



	return (
		<React.Fragment>
			<link
				href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
				rel="stylesheet"
			></link>
			<div className=" system-theme">
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
										sequence={INFO.terminalSequence}
										speed={50}
										repeat={0}
										className="terminal-output"
										style={{
											fontSize: "0.5em",
											whiteSpace: "pre-wrap",
										}}
									/>
								</motion.div>

								<motion.div
									className="subtitle homepage-subtitle file-content"
									variants={textVariants}
								>
									{" "}
									<div className="file-header">
										<FontAwesomeIcon icon={faFile} />{" "}
										./About.md
									</div>
									{codedDescription}{" "}
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
													y: -2,
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
								</motion.div>
							</motion.div>
						</div>

						<motion.div
							className="homepage-projects system-folder"
							variants={itemVariants}
						>
							<div className="folder-header">
								<FontAwesomeIcon icon={faFolder} /> projects/
							</div>
							<AllProjects />
						</motion.div>
						<Experiences />
					</div>
				</motion.div>
			</div>{" "}
		
		</React.Fragment>
	);
};

export default Homepage;
