import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setProductFilter } from "../../store/slice/productSlice";
import { productFilterSelector } from "../../store/selector";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const productFilter = useSelector(productFilterSelector);

  const onPageChange = (currentPage) => {
    dispatch(setProductFilter({ ...productFilter, page: currentPage + 1 }));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={1}
      onPageChange={({ selected }) => {
        onPageChange(selected);
      }}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      activeClassName={"pagination-active"}
      containerClassName={"flex list-none pagination gap-3"}
    />
  );
};

export default Pagination;
