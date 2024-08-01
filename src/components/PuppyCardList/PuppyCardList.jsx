import React from "react";
import PuppyCard from "../PuppyCard/PuppyCard";
import "./PuppyCardList.css";

function PuppyCardList({ players }) {
  return (
    <div className="player-list">
      {players.map((player) => (
        <PuppyCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default PuppyCardList;