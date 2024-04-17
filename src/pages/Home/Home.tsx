import styles from "./Home.module.scss";
import img from "../../assets/home/Frame 146.png";
import { Footer, CardsField, Header } from "../../components";
import { Button, SectionHeading } from "../../ui";
import { ourProduct, ourDogs } from "../../db";
import Play from "../../assets/button/icon_play.svg";

const sections = [
	{
		title: "Take A look At Some Of Our Pets",
		note: "What new?",
		content: <CardsField cards={ourDogs} />,
	},
	{
		title: "Our Products",
		note: "Hard to choose right products for your pets?",
		content: <CardsField cards={ourProduct} />,
	},
];

export const Home = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<Header />

				<section className={styles.preview}>
					<div className="container">
						<div className={styles.preview__body}>
							<div className={styles.preview__left}>
								<div className={styles.left__title}>One more friend</div>
								<div className={styles.left__subtitle}>Thousands more fun!</div>
								<p className={styles.left__text}>
									Having a pet means you have more joy, a new friend, a happy
									person who will always be with you to have fun. We have 200+
									different pets that can meet your needs!
								</p>
								<div>
									<Button type={"default"}> Hello</Button>
									<Button type={"empty"}>
										<span>Hello</span>
										<img src={Play} alt="play" />
									</Button>
								</div>
							</div>
							<div className={styles.preview__right}>
								<img src={img} alt="img" />
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container">
				{sections.map((section) => (
					<section>
						<SectionHeading title={section.title} note={section.note} />
						{section.content}
					</section>
				))}
			</div>
		</>
	);
};
