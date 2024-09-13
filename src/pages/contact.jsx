import React, { useEffect } from "react";

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

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
							{INFO.contact.title !== ""
								? INFO.contact.title
								: codedTitle}
						</div>

						<div className="subtitle contact-subtitle">
							{INFO.contact.description !== ""
								? INFO.contact.description
								: codedDescription}
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
