import { render, screen } from "@testing-library/react";
import "../__mocks__/match-media";
import HomePage from "../pages";
import districtFactory from "../__factories__/districtFactory";
import { District } from "../interfaces";

describe("HomePage", () => {
  it("should render the brazil map", () => {
    const total = districtFactory({ state: "total" });
    const ac = districtFactory({ state: "AC" });
    const districts: District[] = [total, ac];
    const updatedAt = new Date().toString();

    render(<HomePage data={districts} updatedAt={updatedAt} />);

    expect(screen.getByLabelText("Map of Brazil")).toBeInTheDocument();
  });
});
