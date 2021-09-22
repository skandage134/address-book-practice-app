import { CustomPagination } from "../Pagination";

import { render, screen, fireEvent } from "@testing-library/react";

const onPageChange = jest.fn();

describe("CustomPagination", () => {
  test("Should render CustomPagination", () => {
    render(<CustomPagination onPageChange={onPageChange} />);
    expect(screen.getAllByRole("navigation")).toBeDefined();
  });

  test("Should call onPageChange event when button clicked", () => {
    render(<CustomPagination onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText(/2/i));
    expect(onPageChange).toHaveBeenCalledTimes(1);
  });
});
