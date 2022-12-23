import React from "react";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPage();
  }, []);

  // ------Post data------
  function postAllData() {
    if (data == false) {
      axios.post("http://localhost:8080/user")
      // .then((res) => {
        // console.log(res.data);
        getPage();
        setData(true);
      // });
      alert("Data Fetched");
    }
    else{
      alert("sata");
    }
  }

  // ------Get page------
  function getPage() {
    axios
      .get("http://localhost:8080/user/page?page=0")
      .then((res) => {
        let result = res.data.pageFind;
        console.log(result);
        if (result.length == 0) {
          setData(false);
          getPage();
        } else {
          setData(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // -----Delete------
  function deleteData() {
    if (data === true) {
      axios.delete("http://localhost:8080/user/delete").then((res) => {
        getPage();
      });
      alert("Delete records");
    } else {
      alert("Data is not present");
    }
  }

  return (
    <div className="outer_div">
      <button onClick={postAllData}>Fetch Users</button>
      <button onClick={deleteData}>Delete Users</button>
      <button onClick={() => navigate("/user")}>User Details</button>
    </div>
  );
};
