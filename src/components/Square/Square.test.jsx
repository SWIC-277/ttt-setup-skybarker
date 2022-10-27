import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Square from "./Square";

describe("Square", () => {
  it("render a square with the correct marker and id ('X' or 'O')", () => {
    render(<Square marker="X" id={0} handleClick={() => {}} />);

    const square = screen.getByRole("button", { name: "X" });

    expect(square).toHaveAttribute("id", "0");
  });

  it("render a square without a marker", () => {
    render(<Square id={0} handleClick={() => {}} />);

    const square = screen.getByRole("button");

    expect(square).toHaveAttribute("id", "0");
  });

  it("calls the click handler function whenever clicked", async () => {
    const ID = 1;
    const handleClick = jest.fn((event) => event.target.id);
    const user = userEvent.setup();

    render(<Square id={ID} handleClick={handleClick} />);

    const square = screen.getByRole("button");

    await user.click(square);

    expect(handleClick.mock.results[0].value).toBe(ID.toString());
  });
});
