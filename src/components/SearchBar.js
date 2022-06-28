import React, { useState } from "react";

function SearchBar({ username, setUsername, error }) {
	const [inputError, setInputError] = useState("d-none");

	return (
		<div
			style={{ width: "80%" }}
			className="input-group mt-3 mb-3 m-auto d-flex flex-column"
		>
			<div>
				<input
					id="userInput"
					type="text"
					className="form-control img-responsive"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
					placeholder="Search Github..."
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							if (error) {
								setInputError("d-block");
								setTimeout(() => {
									setInputError("d-none");
								}, 3000);
							}
						}
					}}
				/>
			</div>
			<div
				className={`alert alert-danger ${inputError} mt-3`}
				role="alert"
			>
				{error}
			</div>
		</div>
	);
}

export default SearchBar;
