import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({totalPages}) => {
  return (
    <ReactPaginate 
    breakLabel="..."
    nextLabel=">"
    pageRangeDisplayed={1}
    onPageChange={({selected}) => {}}
    pageCount={totalPages}
    previousLabel="<"
    renderOnZeroPageCount={null}
    activeClassName={"pagination-active"}
    containerClassName={"flex list-none pagination gap-3"}
    />
  )
}

export default Pagination