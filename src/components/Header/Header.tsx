import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { Button } from "../../ui/button";
import { Search } from "../Search";

const navLinks = ["Home", "Category", "About", "Contact"];

export const Header = () => {
	return (
		<div className="container">
			<div className={styles.header}>
				<div className={styles.nav}>
					<img
						className={styles.logo}
						width={115}
						height={40}
						src={logo}
						alt="logo"
					/>

					<ul className={styles.list}>
						{navLinks.map((link) => (
							<li className={styles.item}>{link}</li>
						))}
					</ul>
				</div>

				<div className={styles.aside}>
					<Search placeHolder={"Search"} />
					<Button type={"default"}>
						<span>Join the community</span>
					</Button>
					<div
						style={{
							color: "rgb(53 33 85)",
							fontSize: "20px",
							fontWeight: "bold",
						}}
					>
						VND ^
					</div>
				</div>
			</div>
		</div>
	);
};
