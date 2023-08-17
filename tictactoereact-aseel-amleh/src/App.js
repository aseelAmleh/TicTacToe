
import './App.css'
import Header from "./components/header/header.components"
import Board from "./components/board/board.components"
import { useState } from 'react';
function App() {
  const [turn , setTurn] = useState("X");
  const [wins, setWins] = useState({ xWins: 0, oWins: 0 });

  return (
    <div className="App">
      <Header trn = {turn} Wins={wins}/>
      <Board  turn = {turn} setTurn={setTurn} setWins={setWins} />
    </div>
  );
}

export default App;
