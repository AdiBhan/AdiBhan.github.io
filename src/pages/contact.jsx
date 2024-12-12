import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	const codedDescription = (
		<span>
			Eager to discuss how my skills can contribute to your team? I'd love
			to connect! Whether it's about my projects, technical expertise, or
			how I can add value to your organization, I'm always ready for a
			productive conversation. Reach out via email at
			<strong> {INFO.main.email}</strong> or connect with me on LinkedIn
			below. I'm open to video calls, phone chats, or in-person meetings
			to explore potential opportunities.
		</span>
	);

	const codedTitle = <span>Please get in touch!</span>;

	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
	}, []);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { duration: 0.6 }
		}
	};

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { 
				duration: 0.5,
				delay: 0.2 
			}
		}
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { 
				duration: 0.5,
				delay: 0.3 
			}
		}
	};

	return (
		<React.Fragment>
			<div className="system-theme">
				<NavBar active="contact" />
				<motion.div 
					className="content-wrapper"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<motion.div 
						className="contact-container"
						variants={containerVariants}
					>
						<motion.div 
							className="title contact-title"
							variants={titleVariants}
						>
							{INFO.contact.title !== ""
								? INFO.contact.title
								: codedTitle}
						</motion.div>

						<motion.div 
							className="subtitle contact-subtitle"
							variants={contentVariants}
						>
							{INFO.contact.description !== ""
								? INFO.contact.description
								: codedDescription}
						</motion.div>
					</motion.div>

					<motion.div 
						className="socials-container"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ 
							duration: 0.5,
							delay: 0.4 
						}}
					>
						<motion.div 
							className="contact-socials"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ 
								duration: 0.5,
								delay: 0.5 
							}}
						>
							<Socials />
						</motion.div>
					</motion.div>

					<motion.div 
						className="page-footer"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ 
							duration: 0.5,
							delay: 0.6 
						}}
					>
						<Footer />
					</motion.div>
				</motion.div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

