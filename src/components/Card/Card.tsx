import styles from "../Card/Card.module.scss";
import {CardInfo} from "../../ui/cardInfo/CardInfo.tsx";
import {ICard} from "../../db/cardsProducts.data.ts";
import present from "../../assets/./Card/present.svg";
import {Link} from "react-router-dom";

interface CardProps {
    data: ICard;
    cardId: number
}

export const Card = (props: CardProps) => {
    return (
        <Link to={`/category/${props.cardId + 1}`}>
            <div className={styles.card}>
                <img className={styles.image} src={props.data.image} alt="image"/>

                <div className={styles.cardBody}>
                    <p className={styles.title}>{props.data.title}</p>
                    <div>
                        <CardInfo info={props.data.cardInfo}/>
                        <p className={styles.price}>{props.data.price}</p>
                        {props.data.promotion && (
                            <div className={styles.promotion}>
                                <img src={present} alt="promotion"/>
                                <span className={styles.promo__dot}></span>
                                <p>{props.data.promotion}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};
