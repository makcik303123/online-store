import React from "react";
import lupa from "../../assets/Header/Vector.svg";
import styles from "./input.module.scss";

export const Input = ({ placeHolder }: any) => {
	return (
		<div className={styles.wrapper}>
			<img src={lupa} alt="img" />
			<input type="text" placeholder={placeHolder} />
		</div>
	);
};
