import React from "react";

const PlayerList = ({ players, deletePlayer, setEditPlayer }) => {
  return (
    <table className="table table-bordered table-striped mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          <th>Club</th>
          <th>Goals</th>
          <th>Matches Played</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.age}</td>
            <td>{player.position}</td>
            <td>{player.club}</td>
            <td>{player.goals}</td>
            <td>{player.matchesPlayed}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={() => setEditPlayer(player)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deletePlayer(player.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerList;
