import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllAssignments from "./AllAssignments";

import INFO from "../data/user";

import "./styles/assignments.css";

const Assignments = () => {
	const codedDescription = (
		<span>
			Throughout my CS506 academic journey at Boston University, I've completed
			a variety of <strong>challenging assignments and projects</strong>{" "}
			that have honed my skills in{" "}
			<strong>computer science and software engineering</strong>. These
			assignments have covered a wide range of topics, from{" "}
			<strong>advanced programming techniques</strong> to{" "}
			<strong>database systems</strong> and{" "}
			<strong>software engineering practices</strong>.
			<br />
			<br />
			Each assignment has pushed me to apply theoretical knowledge to
			practical problems, fostering my ability to{" "}
			<em>think critically</em> and <em>develop innovative solutions</em>.
			Whether it's optimizing algorithms, designing complex databases, or
			collaborating on full-stack applications, these academic projects
			have been instrumental in shaping my technical expertise and
			problem-solving approach.
		</span>
	);

	const codedTitle = <span>Academic Assignments</span>;

	useEffect(() => {
		document.title = `assignments | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="system-theme">
				<NavBar active="assignments" />
				<div className="content-wrapper">
					<div className="assignments-container">
						<div className="title assignments-title">
							{INFO.assignment && INFO.assignment.title !== ""
								? INFO.assignment.title
								: codedTitle}
						</div>

						<div className="subtitle assignments-subtitle">
							{INFO.assignment &&
							INFO.assignment.description !== ""
								? INFO.assignment.description
								: codedDescription}
						</div>

						<div className="assignments-list">
							<AllAssignments />
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

export default Assignments;
