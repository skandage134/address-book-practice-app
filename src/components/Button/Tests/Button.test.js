import { ButtonContainer, Button } from "../Button";

import { render, screen, fireEvent } from "@testing-library/react";

const buttonText = "Test Button";
const buttonClass = "primary";
const onClick = jest.fn();

describe("ButtonContainer", () => {
  test("Should render ButtonContainer", () => {
    const position = "center";
    const children = (
      <Button
        buttonText={buttonText}
        buttonClass={buttonClass}
        onClick={onClick}
      />
    );

    render(<ButtonContainer position={position} children={children} />);

    expect(screen.getByRole("button")).toHaveClass("btn--primary");
  });
});

describe("Button", () => {
  test("Should render primary Button", () => {
    render(
      <Button
        buttonText={buttonText}
        buttonClass={buttonClass}
        onClick={onClick}
      />
    );

    expect(screen.getByRole("button")).toHaveClass("btn--primary");
  });

  test("Should render secondary Button", () => {
    render(
      <Button
        buttonText={buttonText}
        buttonClass={"secondary"}
        onClick={onClick}
      />
    );

    expect(screen.getByRole("button")).toHaveClass("btn--secondary");
  });

  test("Should call onClick event when button clicked", () => {
    render(
      <Button
        buttonText={buttonText}
        buttonClass={buttonClass}
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByText(/test button/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
