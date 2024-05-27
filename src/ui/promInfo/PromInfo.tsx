import rectangle from './../../assets/promInfo/rectangle.svg';
//@ts-ignore
import {Number} from './../../pages/Category/Lib.jsx'
import styles from './PromInfo.module.scss'

const data = [
    {
        text: 'точек продаж',
        to: 700
    },
    {
        text: 'клиентов в месяц',
        to: 100000
    },
    {
        text: 'опыт работы на рынке',
        to: 7
    },
    {
        text: 'городов',
        to: 70
    },
    {
        text: 'точек продаж',
        to: 700
    },
]

export const PromInfo = () => {
    const duration = 3000

    return (
        <div className={styles.main__content}>
            {data.map((item, i) => <div className={styles.main__block} key={i}>
                <div className={styles.block__content}>
                    <div className={styles.content__number}>
                        <Number n={item.to} duration={duration}/>
                        +
                    </div>
                    <span className={styles.content__description}>точек продаж</span>
                    <img className={styles.content__rectangle} src={rectangle} alt="rectangle"/>
                </div>
            </div>)}
        </div>
    )
}