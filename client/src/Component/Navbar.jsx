import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav_div}>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
    </div>
  );
};
