import styles from '../card/card.module.scss'
import {CardInfo} from "../cardInfo/CardInfo.tsx";
import {Promotion} from "../promotion/Promotion.tsx";
import {cardsType} from "../cardContainer/cardsProducts.data.ts";

interface CardProps {
    data: cardsType
}

export const Card = (props: CardProps) => {

    return (
        <div className={styles.card}>
            <img className={styles.productImage} src={props.data.image} alt="image"/>

            <div className={styles.cardBody}>
                <p className={styles.title}>{props.data.title}</p>
                <CardInfo info={props.data.cardInfo}/>
                <p className={styles.price}>{props.data.price}</p>
                {props.data.promotion && <Promotion promotion={props.data.promotion}/>}
            </div>
        </div>
    )
};

