import { render, screen } from "@testing-library/react";
import Square from "./Square";

it("render a square with the correct marker ('X' or 'O')", () => {
  render(<Square marker="X" />);

  const square = screen.getByRole("button", { name: "X" });

  expect(square).toBeInTheDocument();
});
