import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Filter } from "./Filter";
import { Page } from "./Page";
import styles from "./styles/UserDetail.module.css";

export const UserDetail = () => {
  const [data, setdata] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [allPages, setAllPages] = useState(0);

  useEffect(() => {
    appendAllData();
  }, [pageNum]);

  // -----Append data-----
  function appendAllData() {
    axios
      .get(`http://localhost:8080/user/page?page=${pageNum}`)
      .then((res) => {
        setAllPages(res.data.allPages);
        // console.log("data", res.data.allPages);
        setdata(res.data.pageFind);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div>
      <div className={styles.filter_div}>
        <Filter data={data} setdata={setdata} />
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
        <Page pageNum={pageNum} allPages={allPages} setPageNum={setPageNum} />
      </div>
    </div>
  );
};
