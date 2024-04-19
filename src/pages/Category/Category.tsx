import styles from "./Category.module.scss";
import { CardsField, Header, MultiFilter } from "../../components";
import { ourDogs } from "../../db";

export const Category = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className={styles.category}>
					<MultiFilter />
					<CardsField cards={ourDogs} />
				</div>
			</div>
		</>
	);
};
