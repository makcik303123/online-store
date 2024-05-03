import {useParams} from "react-router-dom";
import {ourDogs} from "../../db";
import styles from './DogInfo.module.scss'
import {Button} from "../../ui";
import chat from '../../assets/Dog/chat.png'
import {DogSwiper} from "../Swiper/Swiper.tsx";

export const DogInfo = () => {
    const {dogId} = useParams<{ dogId: string }>()
    const currentDog = ourDogs[+dogId! - 1]
    const dogName = currentDog.title.split(' ').slice(2).join(' ')


    return (
        <div className='container'>

            <section className={styles.dog__wrapper}>
                <div className={styles.slider}>
                    <DogSwiper/>
                </div>

                <div className={styles.dog__info}>
                    <p className={styles.dog__path__link}>path link</p>
                    <p className={styles.dog__sku}>{currentDog.dogInfo?.[0].value}</p>
                    <p className={styles.dog__name}>{dogName}</p>
                    <p className={styles.dog__price}>{currentDog.price}</p>

                    <div className={styles.button__wrapper}>
                        <Button type={"default"}>Contact us</Button>
                        <Button type={'empty'}><img src={chat} alt="button image"/> Chat with Monito</Button>
                    </div>


                    <div className={styles.dog__table}>
                        {currentDog.dogInfo?.map((i, index) => <div key={index} className={styles.dog__table_row}>
                                <p className={styles.dog__table_field}>{i.field}</p>
                                <p className={styles.dog__table_value}>: {i.value}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

