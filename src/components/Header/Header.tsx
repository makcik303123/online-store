import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { Button, ButtonType } from "../../ui/button";
import { Search } from "../Search";

const navLinks = ["Home", "Category", "About", "Contact"];

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img
          className={styles.logo}
          width={115}
          height={40}
          src={logo}
          alt="logo"
        />

        <ul className={styles.list}>
          {navLinks.map((link) => (
            <li className={styles.item}>{link}</li>
          ))}
        </ul>
      </div>

      <div className={styles.aside}>
        <Search placeHolder={"Search"} />
        <Button type={ButtonType.DEFOLT}>
          <span>Join the community</span>
        </Button>
        <div>VND ^</div>
      </div>
    </div>
  );
};
