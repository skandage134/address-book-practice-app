import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import PersonTable from "../PersonTable";
import { history } from "../../App/App";
import { FetchPersons } from "../ReducerActions/FetchPersons.js";
import { SelectPerson } from "../ReducerActions/SelectPerson.js";
import { ChangePage } from "../ReducerActions/ChangePage.js";

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
    })
  ),
  useDispatch: jest.fn().mockImplementation(() => actionDispatcher => {}),
}));
jest.mock("../ReducerActions/FetchPersons.js");
jest.mock("../ReducerActions/SelectPerson.js");
jest.mock("../ReducerActions/ChangePage.js");

jest.mock("../../App/App.js", () => ({
  history: {
    push: jest.fn(),
  },
}));

describe("PersonTable", () => {
  test("Should render PersonTable", () => {
    FetchPersons.mockImplementation(() => () => {});
    SelectPerson.mockImplementation(() => () => {});
    ChangePage.mockImplementation(() => () => {});
    render(<PersonTable />);

    const container = document.querySelector(".table");
    expect(container).toBeDefined();
  });

  test("Should call SelectPerson action creator to be called when button clicked", () => {
    render(<PersonTable />);
    fireEvent.click(screen.getByText(/Test1/i).closest("tr"));
    expect(SelectPerson).toHaveBeenCalledTimes(1);
  });

  test("Should call ChangePage action creator to be called when button clicked", () => {
    render(<PersonTable />);
    fireEvent.click(screen.getByText("2"));
    expect(ChangePage).toHaveBeenCalledTimes(1);
  });
});
