import { Header } from "../Header";

import { render, screen } from "@testing-library/react";

describe("Header", () => {
  test("Should render Header", () => {
    const headerText = "Test Header";
    render(<Header headerText={headerText} />);

    expect(screen.getByText(headerText)).toBeDefined();
  });
});
