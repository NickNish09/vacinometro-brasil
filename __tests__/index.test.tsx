import { render, screen } from "@testing-library/react";
import HomePage from "../pages";

describe("HomePage", () => {
  it("should render the Vacinômetro title", () => {
    render(<HomePage />);
    expect(screen.getByText("Vacinômetro")).toBeInTheDocument();
  });
});
