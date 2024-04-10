import styles from '../card/card.module.scss'
import {ourProductType} from "../cardContainer/cards.data.ts";
import {CardInfo} from "../cardInfo/cardInfo.tsx";


export const Card = (props: ourProductType) => {

    return (
        <div>
            <img src={props.image} alt=""/>

            <div className={styles.cardBody}>
                <p className={styles.title}>{props.title}</p>
                <CardInfo info={props.productInfo}/>
                <p className={styles.price}>{props.price}</p>
                {props.promotion && <div style={{background: 'black', height: '10px'}}></div>}
            </div>
        </div>
    )


};

