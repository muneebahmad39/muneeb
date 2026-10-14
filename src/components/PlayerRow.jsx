function PlayerRow({ player, index }) {
  return (
    <tr>
      <td>{index + 1}</td>

      <td>{player.name}</td>

      <td>{player.runs}</td>

      <td>{player.balls}</td>

      <td className={player.runs >= 50 ? "fifty" : "playing"}>
        {player.runs >= 50 ? "Fifty Scored" : "Playing"}
      </td>
    </tr>
  );
}

export default PlayerRow;