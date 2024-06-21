import { Header } from "../../components";
import { PromInfo } from "../../ui/promInfo/PromInfo";
import styles from "./About.module.scss";

export const About = () => {
	return (
		<>
			<Header />
			<div className="container">
				<PromInfo />
				<PromInfo />
				<PromInfo />
				<PromInfo />
				<PromInfo />
				<PromInfo />
			</div>
		</>
	);
};
