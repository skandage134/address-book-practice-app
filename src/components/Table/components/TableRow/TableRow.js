import { Fragment } from "react";

const TableRow = ({ index, row, displayedColumns, onClick }) => {
  const displayedValues = displayedColumns.map((columnName) => {
    return row[columnName];
  });

  return (
    <tr className="table__row" key={index} onClick={onClick}>
      {row && (
        <Fragment>
          {displayedValues.map((displayedValue, valIndex) => {
            return (
              <Fragment key={`column-${index}-${valIndex}`}>
                {displayedValue.includes(".jpg") ? (
                  <td key={`column-${index}-${valIndex}`}>
                    <img
                      className="table__image"
                      src={displayedValue}
                      alt="User"
                    />
                  </td>
                ) : (
                  <td key={`column-${index}-${valIndex}`}>{displayedValue}</td>
                )}
              </Fragment>
            );
          })}
        </Fragment>
      )}
    </tr>
  );
};

export default TableRow;
