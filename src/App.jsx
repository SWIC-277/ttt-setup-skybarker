import Square from "components/Square/Square";
import "./App.css";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove, reset } = useGame();

  return (
    <main>
      <h1>Tic Tac Toe</h1>

      {winner && <p>{winner} Wins!</p>}

      <div className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            id={index}
            handleClick={!winner && makeMove}
            marker={square}
          />
        ))}
      </div>
      <button className="resetButton" type="submit" onClick={reset}>
        Reset
      </button>
    </main>
  );
}

export default App;
