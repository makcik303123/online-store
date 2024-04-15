import styles from "../card/card.module.scss";
import present from '../../assets/card/present.svg'

interface PromotionProps {
    promotion: string
}

export const Promotion = (props: PromotionProps) => {
    return (
        <div className={styles.promotion}>
            <img src={present} alt=""/>
            <span className={styles.dot}></span>
            <p>{props.promotion}</p>
        </div>
    );
};

