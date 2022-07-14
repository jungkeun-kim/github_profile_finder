class GitHub {
	constructor() {
		this.clientID = "698ef61c96e417319d81";
		this.clientSecret = "1e863cb10c802b58536c3c655c04d98494392aac";
	}

	getGithubUserData = async (username) => {
		try {
			let response = await fetch(
				`https://api.github.com/users/${username}?client_id=${this.clientID} &client_secret=${this.clientSecret}`
			);

			if (response.status === 200) {
				return response.json();
			} else if (response.status === 404) {
				return { message: "User profile not found", status: 404 };
			} else {
				return { message: "Error fetching user data", status: 500 };
			}
		} catch (e) {
			console.log(
				"Error occurred while fetching GitHub user data: " + e.message
			);
		}
	};

	getGithubRepoData = async (username) => {
		try {
			let response = await fetch(
				`https://api.github.com/users/${username}/repos?client_id=${this.clientID} &client_secret=${this.clientSecret}`
			);
			if (response.ok) {
				const data = response.json();
				return data;
			} else if (response.status === 404) {
				return { message: "User profile not found", status: 404 };
			} else {
				return { message: "Error fetching user data", status: 500 };
			}
		} catch (e) {
			console.log(
				"Error occurred while fetching GitHub repo data: " + e.message
			);
		}
	};
}

export default new GitHub();
