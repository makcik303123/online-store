import styles from "./Category.module.scss";
import { CardsField, Header, MultiFilter } from "../../components";
import { ourDogs } from "../../db";
import { useState } from "react";
import { Heading } from "../../ui";

export const Category = () => {
	const [filterState, setFilterState] = useState(true);

	return (
		<>
			<Header />
			<div className="container">
				<section>
					<div className={styles.category}>
						<MultiFilter />
						<div className={styles.field}>
							<div className={styles.field__header}>
								<div className={styles.header__left}>
									<Heading>Small Dog</Heading>
									<p>52 puppies</p>
								</div>
								<div className={styles.header__right}>
									<button>Filter</button>
									<select>
										<option value="">Sort</option>
										<option value="">Sort</option>
										<option value="">Sort</option>
										<option value="">Sort</option>
									</select>
								</div>
							</div>
							<CardsField cards={ourDogs} filterState={filterState} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
