import React from "react";
import { useState, useEffect } from "react";

export const Page = ({ setPageNum, allPages, pageNum }) => {

  // -----Pagination------
  
  function lastPage() {
    setPageNum(Math.max(0, pageNum - 1));
  }
  function nextPage() {
    setPageNum(Math.max(allPages - 1, pageNum + 1));
  }

  const pagesData = new Array(allPages).fill(null).map((v, i) => i);

  return (
    <div className="page">
      <button onClick={lastPage}>Previous</button>
      {pagesData.map((item, index) => {
        return (
          <button key={index} onClick={() => setPageNum(item)}>
            {item + 1}
          </button>
        );
      })}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};
