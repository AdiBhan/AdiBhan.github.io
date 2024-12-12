import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	const codedDescription = (
		<span>
			I've been actively involved in{" "}
			<strong>diverse tech projects since 2022</strong>, blending my
			academic knowledge with real-world applications. From creating an{" "}
			<strong>award-winning digital ad generator</strong> at Boston Hacks
			to developing a <strong>carbon footprint estimator</strong> for
			online shoppers, I've consistently pushed the boundaries of what
			technology can achieve.
			<br />
			<br />
			My work spans <strong>full-stack web development</strong>,{" "}
			<strong>cybersecurity analysis</strong>, and{" "}
			<strong>innovative app creation</strong>, always with a focus on
			solving real-world problems. Whether it's crafting a{" "}
			<strong>
				centerpiece web application for Boston University's College of
				Engineering
			</strong>{" "}
			or conducting{" "}
			<strong>
				comprehensive cybersecurity assessments for Massachusetts
				municipalities
			</strong>
			, I bring a mix of{" "}
			<em>technical skill and creative problem-solving</em> to every
			project.
		</span>
	);

	const codedTitle = <span>Projects</span>;

	useEffect(() => {
		document.title = `Projects | ${INFO?.main?.title || "Portfolio"}`;
	}, []);

	return (
		<React.Fragment>
			<div className="system-theme">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
							{INFO?.project?.title !== ""
								? INFO.project.title
								: codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
							{INFO?.project?.description !== ""
								? INFO.project.description
								: codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
