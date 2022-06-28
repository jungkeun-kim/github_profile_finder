import React from "react";

function UserCard({ userdata, userinfo, fontcolor }) {
	let imgUrl =
		userdata && userdata.avatar_url
			? userdata.avatar_url
			: "https://images.velog.io/images/jaeeunxo1/post/b809e9c6-b5af-4cce-a13f-c9a745b4f4bb/768px-Ei-sc-github.svg.png";

	return (
		<div
			style={{ width: "30%" }}
			className="card m-4 shadow shadow-intensity-xl"
		>
			<div className="pt-5 pb-3 px-5">
				<img
					src={imgUrl}
					className="card-img-top rounded-circle"
					alt="Github user"
				/>
			</div>
			<div className="card-body">
				<h4
					className={`card-title pb-3 text-center fw-bold ${fontcolor}`}
				>
					{userdata && userdata.login
						? userdata.login
						: "Github User"}
				</h4>

				{userinfo.map((item) => (
					<p
						style={
							item[Object.keys(item)]
								? { display: "block" }
								: { display: "none" }
						}
						className="mx-2 fw-bold"
						key={userinfo.indexOf(item)}
					>
						{Object.keys(item)[0] === "Blog" ? (
							<>
								{Object.keys(item) + ": "}
								<a
									href={`${item.Blog}`}
									style={{ display: "inline-block" }}
								>
									{item[Object.keys(item)[0]]}
								</a>
							</>
						) : (
							`${Object.keys(item)}: ${item[Object.keys(item)]}`
						)}
					</p>
				))}
			</div>
			<a
				href={userdata && userdata.html_url}
				style={{ width: "85%" }}
				className="btn btn-dark mb-4 m-auto fw-bold shadow shadow-intensity-xl"
			>
				View Profile
			</a>
		</div>
	);
}

export default UserCard;
