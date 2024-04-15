import {Card} from "../card/Card.tsx";
import styles from './CardContainer.module.scss'
import {cardsType} from "./cardsProducts.data.ts";
import {StyleType} from "../../App.tsx";

interface CardContainerProps {
    cards: cardsType[]
    style: StyleType
}


const CardContainer = (props: CardContainerProps) => {

    const classCardContainer = props.style === 'products' ? styles.cardContainerProducts : styles.cardContainerDogs

    return <div className={classCardContainer}>{props.cards.map((card, index) => <Card key={index} data={card}/>)}
    </div>
};

export default CardContainer;