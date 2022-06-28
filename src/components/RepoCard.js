import React from "react";

function RepoCard({ username, userdata, userdetail, repodata }) {
	return (
		<div className="flex-grow-1 mt-4">
			<div className="d-flex flex-row">
				{userdetail.map((item) => (
					<div
						className={`${item.className} h-50 p-2 fs-6 fw-bolder`}
						key={userdetail.indexOf(item)}
						style={
							item[Object.keys(item)[0]]
								? { display: "block" }
								: { display: "none" }
						}
					>
						{Object.keys(item)[0]}: {item[Object.keys(item)[0]]}
					</div>
				))}
			</div>
			<div>
				<h3 className="mt-5 mb-5 text-center">
					Latest Five Repositories
				</h3>
				<ul style={{ listStyleType: "none" }}>
					{repodata &&
						repodata.map((item) => (
							<li
								className="border-top border-bottom mb-3"
								key={repodata.indexOf(item)}
							>
								<a href={item.html_url}>{item.name}</a>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default RepoCard;
