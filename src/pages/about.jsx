import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	const codedDescription = (
		<span>
			<p>
				As a senior Computer Science student at Boston University, I
				bring a unique blend of academic knowledge and hands-on
				experience in full-stack development and cybersecurity. My
				journey has taken me from crafting innovative web applications
				for BU's College of Engineering to conducting vulnerability
				assessments for metro-Boston municipalities. I thrive on
				transforming complex challenges into user-friendly solutions,
				whether it's generating instant digital advertisements or
				creating carbon footprint estimators for online shoppers.
			</p>
			<p>
				Beyond my technical pursuits, I'm an active member of the BU
				community, involved in clubs like Hack4Impact and the Speech and
				Debate Club. These experiences have honed my collaboration
				skills and fueled my passion for using technology to make a
				positive impact. As a Spark! Ambassador and instructor, I've
				discovered my love for sharing knowledge and inspiring fellow
				students in the world of coding.
			</p>
			<p>
				I'm driven by the excitement of hackathons, the satisfaction of
				solving real-world problems, and the constant evolution of
				technology. Whether I'm diving into a new programming language,
				exploring the latest in cybersecurity, or brainstorming the next
				big app idea, I approach each challenge with enthusiasm and a
				commitment to excellence. I'm always eager to learn, adapt, and
				push the boundaries of what's possible in the ever-changing
				landscape of computer science.
			</p>
		</span>
	);

	const codedTitle = <span>Get to know me!</span>;

	useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== ""
										? INFO.about.title
										: codedTitle}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== ""
										? INFO.about.description
										: codedDescription}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={INFO.main.profile_img}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
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

export default About;
