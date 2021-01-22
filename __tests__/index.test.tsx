import { render, screen } from "@testing-library/react";
import HomePage from "../pages";

describe("HomePage", () => {
  it("should render the brazil map", () => {
    render(<HomePage />);
    expect(screen.getByLabelText("Map of Brazil")).toBeInTheDocument();
  });
});
