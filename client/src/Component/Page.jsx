import React from "react";
import { useState, useEffect } from "react";

export const Page = ({ setPageNum, allPages, pageNum,  }) => {
//   console.log(allPages);

  // -----Pagination-----
  const pagesData = new Array(allPages).fill(null).map((v, i) => i);

  function lastPage() {
    setPageNum(Math.max(0, pageNum - 1));
  }

  function nextPage() {
    setPageNum(Math.max(allPages -1, pageNum +1));
  }
  return (
    <div className="page">
      <button onClick={lastPage}>Previous</button>
      {pagesData.map((pageItem, i) => {
        return (
          <button key={i} onClick={() => setPageNum(pageItem)}>
            {pageItem + 1}
          </button>
        );
      })}
      <button onClick={nextPage} >Next</button>
    </div>
  );
};