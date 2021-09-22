import { useState, useEffect } from "react";

import { fetchPersons } from "services/PersonService";
import Table from "components/Table/Table";
import CustomPagination from "components/Pagination";
import PersonDetails from "pages/PersonDetails";

import * as style from "./PersonTable.module.scss";

const tableHeader = [
  { columnName: "User" },
  { columnName: "First Name" },
  { columnName: "Last Name" },
];

const PersonTable = () => {
  const [page, setPage] = useState(1);
  const [personList, setPersonList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handlePageChange = (page) => {
    setPage(page);
  };

  const onSelectRow = (row) => {
    setSelectedRow(row);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPersons(page);
      if (response.status === 200) {
        const responseBody = await response.data;

        const personList = responseBody.results.map((result) => {
          return {
            firstName: result.name.first,
            lastName: result.name.last,
            phoneNumber: result.phone,
            imageUrl: result.picture.large,
          };
        });

        setPersonList(personList);
      } else {
        setHasError(true);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div className={style.BodyContainer}>
      <div className={style.PersonTable}>
        <Table
          tableHeader={tableHeader}
          tableBody={personList}
          hasError={hasError}
          displayedColumns={["imageUrl", "firstName", "lastName"]}
          onSelectRow={onSelectRow}
        />
        <CustomPagination page={page} onPageChange={handlePageChange} />
      </div>
      <PersonDetails person={selectedRow} onClose={() => setSelectedRow({})} />
    </div>
  );
};

export default PersonTable;
