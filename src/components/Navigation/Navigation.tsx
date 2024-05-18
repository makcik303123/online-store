import { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

export const navLinks = ["Home", "Category", "About", "Contact", "Culculator"];

export const Navigation = () => {
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
		<>
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
		</>
	);
};
