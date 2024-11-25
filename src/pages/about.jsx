import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import "./styles/about.css";

const About = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
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

	const codedDescription = (
		<motion.span
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.p variants={itemVariants}>
				As a senior Computer Science student at Boston University, I
				bring a unique blend of academic knowledge and hands-on
				experience in full-stack development and cybersecurity. My
				journey has taken me from crafting innovative web applications
				for BU's College of Engineering to conducting vulnerability
				assessments for metro-Boston municipalities. I thrive on
				transforming complex challenges into user-friendly solutions,
				whether it's generating instant digital advertisements or
				creating carbon footprint estimators for online shoppers.
			</motion.p>
			<motion.p variants={itemVariants}>
				Beyond my technical pursuits, I'm an active member of the BU
				community, involved in clubs like Hack4Impact and the Speech and
				Debate Club. These experiences have honed my collaboration
				skills and fueled my passion for using technology to make a
				positive impact. As a Spark! Ambassador and instructor, I've
				discovered my love for sharing knowledge and inspiring fellow
				students in the world of coding.
			</motion.p>
			<motion.p variants={itemVariants}>
				I'm driven by the excitement of hackathons, the satisfaction of
				solving real-world problems, and the constant evolution of
				technology. Whether I'm diving into a new programming language,
				exploring the latest in cybersecurity, or brainstorming the next
				big app idea, I approach each challenge with enthusiasm and a
				commitment to excellence. I'm always eager to learn, adapt, and
				push the boundaries of what's possible in the ever-changing
				landscape of computer science.
			</motion.p>
		</motion.span>
	);

	useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="about" />
				<motion.div
					className="content-wrapper"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="about-container">
						<motion.div 
							className="about-main"
							initial="hidden"
							animate="visible"
							variants={containerVariants}
						>
							<motion.div 
								className="about-right-side"
								variants={itemVariants}
							>
								<motion.div 
									className="title about-title"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									{INFO.about.title !== ""
										? INFO.about.title
										: "Get to know me!"}
								</motion.div>

								<motion.div 
									className="subtitle about-subtitle"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									{INFO.about.description !== ""
										? INFO.about.description
										: codedDescription}
								</motion.div>
							</motion.div>

							<motion.div 
								className="about-left-side"
								variants={itemVariants}
							>
								<motion.div 
									className="about-image-container"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									<motion.div 
										className="about-image-wrapper"
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
									>
										<motion.img
											src={INFO.main.profile_img}
											alt="about"
											className="about-image"
											whileHover={{ 
												scale: 1.1,
												transition: { duration: 0.3 }
											}}
										/>
									</motion.div>
								</motion.div>

								<motion.div 
									className="about-socials"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
								>
									<Socials />
								</motion.div>
							</motion.div>
						</motion.div>
						<motion.div 
							className="about-socials-mobile"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<Socials />
						</motion.div>
					</div>
					<motion.div
						className="page-footer"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<Footer />
					</motion.div>
				</motion.div>
			</div>
		</React.Fragment>
	);
};

export default About;