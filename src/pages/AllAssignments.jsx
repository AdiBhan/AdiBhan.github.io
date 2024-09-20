import React from "react";
import { Link } from "react-router-dom";
import INFO from "../data/user";
import "./styles/allAssignments.css";

const AllAssignments = () => {
	return (
		<div className="all-assignments-container">
			{INFO.assignments.map((assignment, index) => (
				<div className="assignment-card" key={index}>
					<div className="assignment-title">{assignment.title}</div>
					<div className="assignment-description">
						{assignment.description}
					</div>
					<div className="assignment-logos">
						{assignment.logos.map((logo, logoIndex) => (
							<img
								key={logoIndex}
								src={logo}
								alt={`Logo ${logoIndex + 1}`}
								className="assignment-logo"
							/>
						))}
					</div>
					<div className="assignment-links">
						<a
							href={assignment.link}
							target="_blank"
							rel="noreferrer"
						>
							{assignment.linkText}
						</a>
			
					</div>
				</div>
			))}
		</div>
	);
};

export default AllAssignments;
