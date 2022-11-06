import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: Math.floor(Math.random() * 2) ? "X" : "O",
  });

  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const reset = (event) => {
    dispatch({ type: "reset" });
  };

  const { board, turn, winner } = state;

  return {
    board,
    turn,
    winner,
    makeMove,
    reset,
  };
}
