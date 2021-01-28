import { render, screen } from "@testing-library/react";
import TitleSelect from "../../src/components/TitleSelect";

describe("TitleSelect", () => {
  it("renders the default district name", () => {
    render(
      <TitleSelect
        setDistrict={() => {}}
        districtId="total"
        districtName="Brasil"
      />,
    );

    expect(screen.getByText("Brasil")).toBeInTheDocument();
  });
});
