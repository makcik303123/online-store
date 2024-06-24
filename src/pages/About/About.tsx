import { Header } from "../../components";
import { PromInfo } from "../../ui/promInfo/PromInfo";
import styles from "./About.module.scss";
// @ts-ignore
import { MapChart } from "./MapChart.jsx";

export const About = () => {
	return (
		<>
			<Header />
			<div className="container">
				<PromInfo />
				<MapChart />
			</div>
		</>
	);
};
