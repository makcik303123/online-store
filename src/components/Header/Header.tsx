import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { Button, ButtonType } from "../../ui/button";

const navLinks = ["Home", "Category", "About", "Contact"];

export const Header = () => {
  return (
    <div className={styles.header}>
      <>
        <img
          className={styles.logo}
          width={115}
          height={40}
          src={logo}
          alt="logo"
        />
        <div className={styles.nav}>
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li className={styles.item}>{link}</li>
            ))}
          </ul>
        </div>
      </>
      <>
        <div>Search</div>
        <Button type={ButtonType.DEFOLT}>
          <span>Join the community</span>
        </Button>
        <div>Dropdown</div>
      </>
    </div>
  );
};
