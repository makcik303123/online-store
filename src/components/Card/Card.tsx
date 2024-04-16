import styles from "../Card/Card.module.scss";
import { CardInfo } from "../../ui/cardInfo/CardInfo.tsx";
import { ICard } from "../../db/cardsProducts.data.ts";
import present from "../../assets/./Card/present.svg";

interface CardProps {
	data: ICard;
}

export const Card = (props: CardProps) => {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={props.data.image} alt="image" />

			<div className={styles.cardBody}>
				<p className={styles.title}>{props.data.title}</p>
				<div>
					<CardInfo info={props.data.cardInfo} />
					<p className={styles.price}>{props.data.price}</p>
					{props.data.promotion && (
						<div className={styles.promotion}>
							<img src={present} alt="" />
							<span className={styles.promo__dot}></span>
							<p>{props.data.promotion}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
