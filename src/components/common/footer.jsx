import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./styles/footer.css";

const Footer = () => {
	const footerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1
			}
		}
	};

	const linkVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 }
		}
	};

	const footerItems = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		
		{ path: "/contact", label: "Contact" },
		{ path: "/assignments", label: "Assignments" }
	];

	const underlineVariants = {
		initial: { width: 0 },
		hover: {
			width: "100%",
			transition: { duration: 0.3 }
		}
	};

	return (
		<motion.div
			className="footer"
			initial="hidden"
			animate="visible"
			variants={footerVariants}
		>
			<motion.div 
				className="footer-links"
				variants={footerVariants}
			>
				<motion.ul 
					className="footer-nav-link-list"
					variants={footerVariants}
				>
					{footerItems.map((item, index) => (
						<motion.li
							key={index}
							className="footer-nav-link-item"
							variants={linkVariants}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link to={item.path}>
								<motion.span
									style={{ position: 'relative', display: 'inline-block' }}
									whileHover="hover"
								>
									{item.label}
									<motion.div
										style={{
											position: 'absolute',
											bottom: '-2px',
											left: 0,
											height: '2px',
											background: 'currentColor',
											opacity: 0.7
										}}
										variants={underlineVariants}
										initial="initial"
									/>
								</motion.span>
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			<motion.div 
				className="footer-credits"
				variants={footerVariants}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
			>
				<motion.div 
					className="footer-credits-text"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					© 2024 Adi Bhan
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Footer;