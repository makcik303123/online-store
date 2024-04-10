import {ourProduct} from "./cards.data.ts";
import {Card} from "../card/Card.tsx";

const CardContainer = () => {
    return <div>{ourProduct.map((card) => <Card image={card.image}
                                                title={card.title}
                                                productInfo={card.productInfo}
                                                price={card.price}
                                                promotion={card.promotion}/>)}
    </div>
};

export default CardContainer;