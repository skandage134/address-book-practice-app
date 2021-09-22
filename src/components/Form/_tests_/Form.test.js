import { Form, FormSection, FormGroup } from "../Form";

import { render, screen, fireEvent } from "@testing-library/react";

const labelText = "Test Label";
const inputType = "text";
const inputValue = "Test Value";

describe("Form", () => {
  test("Should render Form", () => {
    const children = (
      <FormGroup
        labelText={labelText}
        inputType={inputType}
        inputValue={inputValue}
      />
    );
    render(<Form children={children} />);

    const container = document.querySelector(".form");
    expect(container).toBeDefined();
    expect(screen.getByText(labelText)).toBeDefined();
    expect(screen.getByRole("textbox")).toBeDefined();
  });
});

describe("FormSection", () => {
  test("Should render FormSection", () => {
    const children = (
      <FormGroup
        labelText={labelText}
        inputType={inputType}
        inputValue={inputValue}
      />
    );
    render(<FormSection customWidth={customWidth} children={children} />);

    const container = document.querySelector(".form__formSection");
    expect(container).toBeDefined();
    expect(screen.getByText(labelText)).toBeDefined();
    expect(screen.getByRole("textbox")).toBeDefined();
  });
});

describe("FormGroup", () => {
  test("Should render FormGroup", () => {
    render(
      <FormGroup
        labelText={labelText}
        inputType={inputType}
        inputValue={inputValue}
      />
    );

    expect(screen.getByText(labelText)).toBeDefined();
    expect(screen.getByRole("textbox")).toBeDefined();
  });
});
