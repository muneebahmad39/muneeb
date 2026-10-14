function Tr({player , index}) {
    return <tr>
        <td>{index + 1}</td>
        {player.balls > player.score ? <td style={{ color: "red" }}>{player.name}</td> : <td style={{ color: "green" }}>{player.name}</td>}
        <td>{player.balls}</td>
        <td>{player.score}</td>
    </tr>
}
export default Tr