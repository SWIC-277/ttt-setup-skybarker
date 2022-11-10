import reducer from "./reducer";

it("should only update the board with the current turn for a 'null' position (only once)", () => {
  const state = {
    board: [null, null, null, null, null, null, null, null, null],
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 0,
  };

  const newState = reducer(state, action);
  const newState2 = reducer(newState, action);

  expect(newState.board[0]).toBe("X");
  expect(newState2.board[0]).toBe("X");
});

it("updates the winner after a winning move", () => {
  const state = {
    board: ["X", "O", "X", "O", "X", "O", null, null, null],
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 6,
  };

  const newState = reducer(state, action);

  expect(newState.winner).toBe("X");
});

it("does not update turn on an invalid click", () => {
  const state = {
    board: ["X", null, null, null, null, null, null, null, null],
    turn: "O",
  };

  const action = {
    type: "made_move",
    index: 0,
  };

  const newState = reducer(state, action);

  expect(newState.turn).toBe("O");
});

it("resets the game when the reset button is clicked", () => {
  const state = {
    board: ["X", "O", null, null, null, null, null, null, null],
  };

  const action = {
    type: "reset",
  };

  const newState = reducer(state, action);

  expect(newState.board).toBe([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
});
