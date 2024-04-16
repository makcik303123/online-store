import { productInfoType } from "../../db/cardsProducts.data.ts";
import styles from "./cardInfo.module.scss";
import { dogInfoType } from "../../db/cardsDogs.data.ts";

interface CardInfoProps {
	info: productInfoType | dogInfoType;
}

export const CardInfo = (props: CardInfoProps) => {
	const cardInfo = Object.entries(props.info);

	return (
		<div className={styles.cardInfoContainer}>
			{cardInfo.map((p, index) => {
				const classDot = index % 2 === 1 ? styles.dot : "";
				const [name, value] = p;

				return (
					<p key={index} className={classDot}>
						<span className={styles.name}>{name}: </span>
						<span className={styles.value}>{value}</span>
					</p>
				);
			})}
		</div>
	);
};
