import Square from "components/Square/Square";
import "./App.css";
import useGame from "./hooks/useGame";

function App() {
  const { board, makeMove, winner, turn } = useGame();

  return board.map((square, index) => (
    <Square key={index} id={index} handleClick={makeMove} />
  ));
}

export default App;
