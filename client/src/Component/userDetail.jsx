import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Page } from "./Page";
import styles from "./styles/UserDetail.module.css";
export const UserDetail = () => {
  const [data, setdata] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [filter, setFilter]= useState("");
  const [allPages, setAllPages] = useState(0);

  
  useEffect(() => {
    appendAllData();
  }, [pageNum]);

  // -----append-----
  function appendAllData() {
    axios
      .get(`http://localhost:8080/user/page?page=${pageNum}`)
      .then((res) => {
        setAllPages(res.data.allPages);
        setdata(res.data.pageFind);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // -----Filter-----
  function filterData(e){
    let value= e.target.value;
    axios.get(`http://localhost:8080/user/filter/${value}`)
    .then((res)=>{
      setdata(res.data.search);
      console.log(res.data);
        setFilter(value);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
  }, [filter])

  // -----Pagination-----
  function lastPage() {
    setPageNum(Math.max(0, pageNum - 1));
  }

  function nextPage() {
    setPageNum(Math.max(allPages - 1, pageNum + 1));
  }

  const pagesData = new Array(allPages).fill(null).map((v, i) => i);

  return (
    <div>
      <div className={styles.filter_div}>
        <select onChange={filterData}>
          <option value="">Filter By Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>First</th>
            <th>last</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Location</th>
            <th>Pin</th>
          </tr>
        </thead>
        {data.map((ele) => {
          return (
            <tbody key={ele._id}>
              <tr>
                <td>
                  <img src={ele.picture} alt="" />
                </td>
                <td>{ele.first}</td>
                <td>{ele.last}</td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
                <td>{ele.location}</td>
                <td>{ele.pin}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className={styles.pagni_div}>
        <Page
          setPageNum={setPageNum}
          pagesData={pagesData}
          pageinate1={lastPage}
          pageinate2={nextPage}
        />
      </div>
    </div>
  );
};
