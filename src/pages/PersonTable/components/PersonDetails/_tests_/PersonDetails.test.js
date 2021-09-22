import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import { PersonDetails } from "../PersonDetails";
import { history } from "../../App/App";

const personList = [
  {
    firstName: "Test1",
    lastName: "TestLastName1",
    phoneNumber: "999-999-9999",
    imageUrl: "https://randomuser.me/api/image1.jpg",
  },
  {
    firstName: "Test2",
    lastName: "TestLastName2",
    phoneNumber: "888-999-9999",
    imageUrl: "https://randomuser.me/api/image2.jpg",
  },
  {
    firstName: "Test3",
    lastName: "TestLastName3",
    phoneNumber: "777-999-9999",
    imageUrl: "https://randomuser.me/api/image3.jpg",
  },
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockImplementation(selector =>
    selector({
      pagination: {
        page: 1,
      },
      personData: {
        hasError: false,
        personList: personList,
      },
      person: {
        firstName: "Test1",
        lastName: "TestLastName1",
        phoneNumber: "999-999-9999",
        imageUrl: "https://randomuser.me/api/image1.jpg",
      },
    })
  ),
  useDispatch: jest.fn().mockImplementation(() => actionDispatcher => {}),
}));

jest.mock("../../App/App.js", () => ({
  history: {
    push: jest.fn(),
  },
}));

describe("PersonDetails", () => {
  test("Should render PersonDetails", () => {
    render(<PersonDetails />);

    const form = document.querySelector(".form");
    expect(form).toBeDefined();
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(3);
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("Should push history to home page when Back button clicked", () => {
    render(<PersonDetails />);
    fireEvent.click(screen.getByText(/Back to Results/i));
    expect(history.push).toHaveBeenCalledTimes(1);
  });
});
