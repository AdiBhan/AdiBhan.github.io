import React from "react";
import { Link } from "react-router-dom";
import INFO from "../data/user";
import "./styles/allAssignments.css";

const AllAssignments = () => {
	
	return (
		
		<div className="all-assignments-container">
			{INFO.assignments.slice().reverse().map((assignment, index) => (
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
						{assignment.demoText && (
							<a
								href={`../assets/videos/assign-0${assignment.title.replace("abhan03-assignment-", "")}.mp4`}
								target="_blank"
							
								rel="noopener noreferrer"
							> 
								{assignment.demoText}
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default AllAssignments;
