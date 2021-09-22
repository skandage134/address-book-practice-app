import { Table } from "../Table";

import { render, screen, fireEvent, within } from "@testing-library/react";

const tableHeader = [
  { columnName: "User" },
  { columnName: "First Name" },
  { columnName: "Last Name" },
];
const tableBody = [
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
const hasError = false;
const displayedColumns = ["imageUrl", "firstName", "lastName"];
const onSelectRow = jest.fn();

describe("Table", () => {
  test("Should render Table with rows when hasError false", () => {
    render(
      <Table
        tableHeader={tableHeader}
        tableBody={tableBody}
        hasError={hasError}
        displayedColumns={displayedColumns}
        onSelectRow={onSelectRow}
      />
    );

    tableBody.forEach(tableRow => {
      const fName = screen.getByText(tableRow.firstName);
      const lName = screen.getByText(tableRow.firstName);
      expect(fName).toBeDefined();
      expect(lName).toBeDefined();
    });
  });

  test("Should render Table with rows when hasError false", () => {
    const errorMessage =
      "Sorry, looks like there was a problem getting your records.";

    render(
      <Table
        tableHeader={tableHeader}
        tableBody={[]}
        hasError={true}
        displayedColumns={[]}
        onSelectRow={onSelectRow}
      />
    );

    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  test("Should call onSelectRow event when row clicked ", () => {
    render(
      <Table
        tableHeader={tableHeader}
        tableBody={tableBody}
        hasError={hasError}
        displayedColumns={displayedColumns}
        onSelectRow={onSelectRow}
      />
    );

    fireEvent.click(screen.getByText(/Test1/i).closest("tr"));
    expect(onSelectRow).toHaveBeenCalledTimes(1);
  });
});
