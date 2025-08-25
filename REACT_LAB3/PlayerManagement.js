import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";

function PlayerManagement() {
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState(null);

  const fetchPlayers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/players");
      setPlayers(res.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const deletePlayer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/players/${id}`);
      fetchPlayers();
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="mt-4">
      <PlayerForm
        fetchPlayers={fetchPlayers}
        editPlayer={editPlayer}
        setEditPlayer={setEditPlayer}
      />

      <PlayerList
        players={players}
        deletePlayer={deletePlayer}
        setEditPlayer={setEditPlayer}
      />
    </div>
  );
}

export default PlayerManagement;
