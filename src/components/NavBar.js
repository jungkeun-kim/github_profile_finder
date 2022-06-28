import React from "react";

function NavBar({ fontcolor }) {
	return (
		<nav
			className="navbar navbar-light d-flex justify-content-center"
			style={{ backgroundColor: "#e3f2fd" }}
		>
			<a
				className="navbar-brand text-uppercase"
				href="http://localhost:3001/"
			>
				<span
					style={{
						filter: "drop-shadow(0 0 10px #0000FF80)",
					}}
					className={`${fontcolor} fs-3 fw-bold`}
				>
					Github Profile Finder
				</span>
			</a>
		</nav>
	);
}

export default NavBar;
