import React from "react";
import styles from "./button.module.scss";

export const Button = ({ children, type }: any) => {
  const background = type === "multi" ? "1" : "2";

  return <button className={styles.button}>{children}</button>;
};
