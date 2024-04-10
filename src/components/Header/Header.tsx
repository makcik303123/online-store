import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";

const navLinks = ["Home", "Category", "About", "Contact"];

export const Header = () => {
  return (
    <div className={styles.header}>
      <img width={115} height={40} src={logo} alt="logo" />
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};
