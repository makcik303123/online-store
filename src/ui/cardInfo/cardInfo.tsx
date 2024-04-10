import {productInfoType} from "../cardContainer/cards.data.ts";

interface CardInfoProps {
    info: productInfoType
}

export const CardInfo = (props: CardInfoProps) => {

    const cardInfo = Object.entries(props.info)

    return (
        <p>
            {cardInfo.map((p) => {
                const [name, value] = p
                return (<>
                    <span>{name}: </span>
                    <span>{value}</span>
                </>)
            })}
        </p>
    );
};

