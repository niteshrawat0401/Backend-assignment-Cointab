import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Filter = ({ data, setdata }) => {
  const [filter, setFilter] = useState();

  
  // ------Filter data-------
  function filterData(e) {
    let value = e.target.value;
    axios
      .get(`http://localhost:8080/user/filter/${value}`)
      .then((res) => {
        setdata(res.data.search);
        // console.log(res.data.search);
        setFilter(value);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  useEffect(() => {}, [filter]);
  return (
    <div>
      <select onChange={filterData}>
        <option value="">Filter By Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};
