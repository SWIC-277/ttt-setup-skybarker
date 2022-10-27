import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      const board2Update = [...state.board];

      if (board2Update[action.index] === null) {
        board2Update[action.index] = state.turn;
      }

      return {
        ...state,
        board: board2Update,
        turn: state.turn === "X" ? "O" : "X",
      };
    }
    case "declared_winner": {
      return {
        ...state,
        winner: action.winner,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
}

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
  });

  const makeMove = (index) => {
    dispatch({ type: "made_move", index });
  };

  const declareWinner = (winner) => {
    dispatch({ type: "declared_winner", winner });
  };

  return {
    ...state,
    makeMove,
    declareWinner,
  };
}
