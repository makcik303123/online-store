import { Card } from "../Card/Card.tsx";
import styles from "./CardsField.module.scss";
import type { ICard } from "../../db/cardsProducts.data.ts";

interface CardsFieldProps {
	cards: ICard[];
	filterState?: boolean;
}

export const CardsField = ({ cards, filterState }: CardsFieldProps) => {
	const className =
		styles.cards__field + (filterState ? ` ${styles.with__filter}` : "");

	return (
		<div className={className}>
			{cards.map((card, index) => (
				<Card key={index} data={card} />
			))}
		</div>
	);
};
