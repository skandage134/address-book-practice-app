import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector } from "react-redux";

import { App } from "../App";

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
      person: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        imageUrl: "",
      },
    })
  ),
}));

describe("App", () => {
  test("Should render App component", () => {
    render(<App />);

    const app = document.querySelector(".app");
    expect(app).toBeDefined();
    const main = screen.getByRole("main");
    expect(main).toBeDefined();
    expect(useSelector).toHaveBeenCalledTimes(1);
  });
});
