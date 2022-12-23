import React from "react";

export const Page = ({ setPageNum, pagesData, pageinate1, pageinate2 }) => {
  return (
    <div className="bog_page">
      <button onClick={pageinate1}>Previous</button>
      {pagesData.map((pageItem, i) => {
        return (
          <button key={i} onClick={() => setPageNum(pageItem)}>
            {pageItem + 1}
          </button>
        );
      })}
      <button onClick={pageinate2}>Next</button>
    </div>
  );
};
