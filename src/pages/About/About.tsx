import { Header } from "../../components";
import { PromInfo } from "../../ui/promInfo/PromInfo";
import styles from "./About.module.scss";
import imgCattery from "../../assets/About/about-cattery.webp";
// @ts-ignore
import { MapChart } from "./MapChart.jsx";
import { Button } from "../../ui/index.js";

export const About = () => {
	return (
		<>
			<section className={styles.cattery}>
				<Header />
				<div className="container">
					<div className={styles.cattery__content}>
						<div className={styles.content__info}>
							<div className={styles.info__title}>About Our British</div>
							<div className={styles.info__subtitle}>Shorthair Cattery</div>
							<p className={styles.info__text}>
								Our cattery specializes in breeding and selling British
								Shorthair Chinchillas. We proudly offer high-quality kittens
								that are not only beautiful but also exceptionally healthy and
								friendly. Our dedicated team ensures that each kitten is raised
								in the best possible environment, fostering their growth and
								development. We strive to match each kitten with the perfect
								family, where they will be surrounded by love and care. Join our
								satisfied clients and find your fluffy friend at our cattery!
							</p>
							<div className={styles.wrapper__button}>
								<Button type={"default"}> Hello</Button>
								<Button type={"empty"}>
									<span>learn More</span>
								</Button>
							</div>
						</div>
						<div className={styles.content__img}>
							<div>
								<img src={imgCattery} alt={"imgCattery"} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
				<PromInfo />
			</div>
			<MapChart />
		</>
	);
};
