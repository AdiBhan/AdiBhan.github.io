import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../../data/user.js";
import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText1, link1, linkText2, link2, demoLink } = props;
	console.log(link1, link2);
	console.log("DEMO LINK", demoLink)
	function renderLogos() {
		if (Array.isArray(logos)) {
			return logos.map((logo, index) => (
				<img key={index} src={logo} alt={`logo-${index}`} />
			));
		} else {
			return <img src={logos} alt={`logo`} />;
		}
	}

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logos">{renderLogos()}</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-links">
						
						
						{link1? (
							<>
							<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
							<Link to={link1}>
								<div className="project-link-text">{linkText1}</div>
							</Link>
							</>
						) : (
							<div></div>
						)}
						<div>
						{link2  ? (
							<Link to={link2}>
								<div className="project-link-text">{linkText2}</div>
							</Link>
						) : (
							<div></div>
						)}
					{demoLink  ? (
							<Link to={link2}>
								<div className="project-link-text">{linkText2}</div>
							</Link>
						) : (
							<div></div>
						)}
					
					
</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
