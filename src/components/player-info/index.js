import React from "react";
import players1 from "../../players.json";
export default function PlayerDetail({ close, i, addPlayer, selectedPlayers }) {
	const [players] = React.useState([...players1]);
	const isdisabled = selectedPlayers.find(x => x.name === players[i].name);
	return (
		//Style fixed to center
		<div
			className="card outlined mt-0"
			style={{
				position: "fixed",
				left: "50%",
				transform: "translateX(-50%)",
				padding: "20px",
				width: "500px",
				top: "30%",
			}}
			data-testid={"player-" + players[i].name.split(" ").join("-") + "-details"}
		>
			<h1 className="card-title" style={{ textAlign: "center" }}>
				Player Detail
			</h1>
			<p>
				<strong>Name:</strong> <span data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-name"}>{players[i].name}</span>
			</p>
			<p>
				<strong>Type:</strong> <span data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-type"}>{players[i].type}</span>
			</p>
			<p>
				<strong>Batting:</strong> <span data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-batting"}>{players[i].battingSkill}</span>
			</p>
			<p>
				<strong>Bowling:</strong> <span data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-bowling"}>{players[i].bowlingSkill}</span>
			</p>
			<button
				disabled={isdisabled}
				onClick={() => addPlayer(i)}
				data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-add"}
			>
				Select
			</button>
			<button onClick={close} className="danger" data-testid={"player-detail-" + players[i].name.split(" ").join("-") + "-close"}>
				Close
			</button>
		</div>
	);
}
