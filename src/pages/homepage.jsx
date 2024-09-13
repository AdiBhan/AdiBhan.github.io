import React, { useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	const codedDescription = (
		<span>
			Senior majoring in Computer Science at Boston University, set to
			graduate in May 2025. <strong>Full-stack developer</strong> with
			experience in web applications, SQL databases, cybersecurity, and a
			track record of success in hackathons. Passionate about leveraging
			technology to solve real-world problems, with skills ranging from
			Python and Java to React and cloud platforms.
		</span>
	);

	const codedTitle = (
		<span>
			"I'm on a mission to craft delightful apps that solve real-world
			challenges, turning complex problems into engaging, user-centric
			solutions"
		</span>
	);

	useEffect(() => {
		document.title = `${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title !== ""
										? INFO.homepage.title
										: codedTitle}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description !== ""
										? INFO.homepage.description
										: codedDescription}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={INFO.main.profile_img}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
