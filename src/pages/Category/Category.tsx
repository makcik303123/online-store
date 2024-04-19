import React from "react";
import styles from "./Category.module.scss";
import { CardsField, MultiFilter } from "../../components";
import { ourDogs } from "../../db";

export const Category = () => {
	return (
		<>
			<div className="container">
				<div className={styles.category}>
					<MultiFilter />
					<CardsField cards={ourDogs} />
				</div>
			</div>
		</>
	);
};
