import Pagination from "@mui/material/Pagination";

import "./Pagination.scss";

export const CustomPagination = ({ page, onPageChange }) => {
  return (
    <div className="paginationContainer">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          onPageChange(value);
        }}
        sx={{
          color: "white",
        }}
      />
    </div>
  );
};

export default CustomPagination;
