import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { Search } from "../Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const navLinks = ["Home", "Category", "About", "Contact", "Culculator"];

export const Header = () => {
	const [isActive, setisActive] = useState(false);

	useEffect(() => {
		if (isActive) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
		}

		return () => {
			document.body.classList.remove("lock");
		};
	}, [isActive]);

	return (
		<div className="container">
			<div className={styles.header}>
				<Link to={"/home"}>
					<img
						className={styles.logo}
						width={115}
						height={40}
						src={logo}
						alt="logo"
					/>
				</Link>

				<div className={styles.aside}>
					<nav className={styles.menu__body} data-active={isActive}>
						<ul className={styles.list}>
							{navLinks.map((link) => (
								<Link
									key={link}
									to={"/" + link.toLowerCase()}
									onClick={() => setisActive(false)}
								>
									<li className={styles.item}>{link}</li>
								</Link>
							))}
						</ul>
					</nav>
					<div
						onClick={() => setisActive(!isActive)}
						className={styles.wrapper__burger}
						data-active={isActive}
					>
						<div className={styles.menu__burger}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<Search placeHolder={"Search"} />
					{/* <Button type={"default"}>
						<span>Join the community</span>
					</Button> */}
					{/* <div
					>
						VND ^
					</div> */}
				</div>
			</div>
		</div>
	);
};
