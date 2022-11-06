import check4Winner from "services/game.service";

export default function reducer(state, action) {
  let board2Update = [...state.board];
  let currentTurn = state.turn;
  switch (action.type) {
    case "made_move": {
      if (!board2Update[action.index]) {
        board2Update[action.index] = state.turn;
        currentTurn = state.turn === "X" ? "O" : "X";
      }

      return {
        board: board2Update,
        turn: currentTurn,
        winner: check4Winner(board2Update, state.turn) ? state.turn : null,
      };
    }
    case "reset": {
      board2Update = Array(9).fill(null);
      return {
        board: board2Update,
        turn: Math.floor(Math.random() * 2) ? "X" : "O",
      };
    }

    default:
      throw new Error("Invalid Action");
  }
}
