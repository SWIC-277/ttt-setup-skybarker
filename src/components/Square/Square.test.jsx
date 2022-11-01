import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Square from "./Square";

describe("Square", () => {
  it("render a square with the correct marker and id ('X' or 'O')", () => {
    const ID = 0;
    const MARKER = "X";

    render(<Square marker={MARKER} id={ID} handleClick={() => {}} />);

    const square = screen.getByRole("button", { name: MARKER });

    expect(square).toHaveAttribute("id", ID.toString());
  });

  it("render a square without a marker", () => {
    const ID = 0;
    render(<Square id={ID} handleClick={() => {}} />);

    const square = screen.getByRole("button");

    expect(square).toHaveAttribute("id", ID.toString());
  });

  it("calls the click handler function whenever clicked", async () => {
    const ID = 1;
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Square id={ID} handleClick={handleClick} />);

    const square = screen.getByRole("button");

    await user.click(square);

    expect(handleClick).toBeCalled();
  });
});
