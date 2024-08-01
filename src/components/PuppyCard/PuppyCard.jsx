import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PuppyCard.css";
import axios from 'axios';

function PuppyCard({ player, parent }) {
  const navigate = useNavigate();
  const cardStyles = {
    width: parent === "details" ? "90%" : "27%",
    margin: parent === "details" ? "0 auto" : null,
  };

  const removePlayer = (id) => {
    axios
    .delete(`${import.meta.env.VITE_BASE_URL}/players/${id}`)
    .then((response) => {
      if (response.data.success) {
        alert("Player succesfully removed from roster!");
        navigate("/");
      }
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="player-card" style={cardStyles}>
      <p>Name: {player?.name}</p>
      <img src={player?.imageURL} alt={player?.name} />
      <p>Breed: {player?.breed}</p>
      {parent === "details" && <p>STATUS: {player?.status}</p>}
      {parent === "details" && <p>ID: {player?.id}</p>}
      
      
      {parent === "details" ? (
        <button onClick={() => removePlayer(player?.id)}>
          Remove Player from Roster
          </button>
      ) : (
        <button onClick={() => navigate(`/details/${player.id}`)}>
          See Details
          </button>
      )}
    </div>
  );
}

export default PuppyCard;