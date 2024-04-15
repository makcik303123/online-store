import styles from "./Home.module.scss";
import img from "../../assets/home/Frame 146.png";
import { Button } from "../../ui/button";
import { SectionHeading } from "../../ui/sectionHeading/SectionHeading";

export const Home = () => {
	return (
		<>
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
							</div>
						</div>
						<div className={styles.preview__right}>
							<img src={img} alt="img" />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<SectionHeading
						title={"Take A look At Some Of Our Pets"}
						note={"What new?"}
					/>
				</div>
			</section>
		</>
	);
};
