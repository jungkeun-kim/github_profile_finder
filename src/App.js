import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import GitHub from "./components/GitHub";
import UserCard from "./components/UserCard";
import RepoCard from "./components/RepoCard";

function App() {
	const [username, setUsername] = useState("");
	const [userdata, setUserdata] = useState(null);
	const [userinfo, setUserinfo] = useState([]);
	const [userdetail, setUserdetail] = useState([]);
	const [repodata, setRepodata] = useState([]);
	const [error, setError] = useState(null);

	const [fontcolor, setFontcolor] = useState("black");
	let fontcolors = [
		"text-primary",
		"text-success",
		"text-danger",
		"text-warning",
		"text-info",
	];

	const getUserData = () => {
		GitHub.getGithubUserData(username)
			.then((data) => {
				console.log({ data });
				if (data.status === 404 || data.status === 500) {
					return setError(data.message);
				}

				setUserdata(data);
				setUserinfo([
					{ Company: data?.company },
					{ Blog: data?.blog },
					{ Location: data?.location },
				]);
				setUserdetail([
					{
						"Public Repos": data?.public_repos,
						className:
							"badge bg-secondary m-1 shadow shadow-intensity-xl fw-bold",
					},
					{
						"Public Gists": data?.public_gists,
						className:
							"badge bg-warning text-white m-1 shadow shadow-intensity-xl fw-bold",
					},
					{
						Followers: data?.followers,
						className:
							"badge bg-info text-white m-1 shadow shadow-intensity-xl fw-bold",
					},
					{
						Following: data?.following,
						className:
							"badge bg-success m-1 shadow shadow-intensity-xl fw-bold",
					},
				]);
			})
			.catch((e) => {
				setError(e.message);
			});
	};

	const getRepoData = () => {
		GitHub.getGithubRepoData(username)
			.then((data) => {
				if (data.status === 404 || data.status === 500) {
					return setError(data.message);
				} else {
					setError(null);

					let repos = [];

					data.forEach(function (item) {
						const subset = (({ name, html_url, updated_at }) => ({
							name,
							html_url,
							updated_at,
						}))(item);
						repos.push(subset);
					});

					repos.sort((a, b) => {
						return (
							new Date(b.updated_at).getTime() -
							new Date(a.updated_at).getTime()
						);
					});

					setRepodata(repos.slice(0, 5));
				}
			})
			.catch((e) => {
				console.log({ e });
				setError(e.message);
			});
	};

	useEffect(() => {
		setFontcolor(fontcolors[Math.floor(Math.random() * fontcolors.length)]);

		if (username) {
			getUserData();
			getRepoData();
		}
	}, [username]);

	return (
		<div className="App">
			<NavBar fontcolor={fontcolor} />
			<SearchBar
				username={username}
				setUsername={setUsername}
				userdata={userdata}
				error={error}
			/>
			<div className="content">
				<div
					id="mainWrapper"
					style={{ width: "80%" }}
					className="d-flex justify-content-start m-auto border"
				>
					{!error ? (
						<>
							<UserCard
								username={username}
								userdata={userdata}
								userinfo={userinfo}
								fontcolor={fontcolor}
							/>
							<RepoCard
								username={username}
								userdata={userdata}
								userdetail={userdetail}
								repodata={repodata}
							/>
						</>
					) : (
						<div>
							<p>{error}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
