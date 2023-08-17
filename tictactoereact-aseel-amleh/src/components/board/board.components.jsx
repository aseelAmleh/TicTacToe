import { useState } from "react";
import evaluate from "../../eval/eval";
import "./board.css";
const Board = (props) => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);
  const clickCell = (index) => {
    if (cells[index] !== "") return;
    const newCell = [...cells];
    newCell[index] = props.turn;
    setCells(newCell);
    props.setTurn(props.turn === "X" ? "O" : "X");
    const result = evaluate(newCell);
    console.log(result);
    if (result) {
      setWinner(result);
      if (result === "X")
        props.setWins(wins => { return { ...wins, xWins: wins.xWins + 1 } });
      else if (result === "O")
        props.setWins(wins => { return { ...wins, oWins: wins.oWins + 1 } });
        setWinner(result);
    }

  };
  const restart = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    props.setTurn("X");
  };

  

  return (
    <div className="container">
      {
      cells.map((cell, index) => (
        <div
          onClick={() => clickCell(index)}
          key={index}
          className={`cell ${cell}`}>{cell} </div>
      ))
      }
      {winner !== null && (
        <div className="result">
          {winner === "draw" ? "ReAttempt" : "Winner is: " + winner}
          <br />
          <button onClick={restart}>Restart!</button>
        </div>
      )}
    </div>
  );
};
export default Board;
