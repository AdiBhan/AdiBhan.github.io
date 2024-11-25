import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	// Animation variants
	const navContainerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1
			}
		}
	};

	const navItemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { duration: 0.5 }
		}
	};

	const navItems = [
		{ path: "/", label: "Home", id: "home" },
		{ path: "/about", label: "About", id: "about" },
		{ path: "/contact", label: "Contact", id: "contact" },
		{ path: "/assignments", label: "Assignments", id: "assignments" }
	];

	// Underline animation for active link
	const underlineVariants = {
		hidden: { scaleX: 0 },
		visible: { 
			scaleX: 1,
			transition: { duration: 0.3 }
		}
	};

	return (
		<motion.div 
			className="nav-container"
			initial="hidden"
			animate="visible"
			variants={navContainerVariants}
		>
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						{navItems.map((item) => (
							<motion.li
								key={item.id}
								variants={navItemVariants}
								className={
									active === item.id
										? "nav-item active"
										: "nav-item"
								}
								whileHover={{ 
									scale: 1.05,
									transition: { duration: 0.2 }
								}}
								whileTap={{ scale: 0.95 }}
							>
								<Link to={item.path}>
									{item.label}
									{active === item.id && (
										<motion.div
											className="nav-item-underline"
											initial="hidden"
											animate="visible"
											variants={underlineVariants}
											style={{
												position: 'absolute',
												bottom: '-2px',
												left: 0,
												right: 0,
												height: '2px',
												background: 'currentColor',
												originX: 0
											}}
										/>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</div>
			</nav>
		</motion.div>
	);
};

export default NavBar;