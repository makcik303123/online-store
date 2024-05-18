import styles from "./Footer.module.scss";
import { navLinks } from "../Navigation/";
import { externalLinks } from "./externalLinks.ts";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.svg";

export const Footer = () => {
	return (
		<div className={styles.footer__wrapper}>
			<footer className={styles.footer + " container"}>
				<div className={styles.footer__links}>
					<ul className={styles.nav__links}>
						{navLinks.map((navLink) => (
							<Link key={navLink} to={navLink.toLowerCase()}>
								<li>{navLink}</li>
							</Link>
						))}
					</ul>
					<ul className={styles.external__links}>
						{externalLinks.map((ext) => (
							<Link key={ext.image} to={ext.link} target="_blank">
								<img src={ext.image} alt="image-link" />
							</Link>
						))}
					</ul>
				</div>
				<div className={styles.footer__info}>
					<p className={styles.footer__rights}>
						© 2022 Monito. All rights reserved.
					</p>
					<div className={styles.footer__image}>
						<img src={logo} alt="" />
					</div>
					<p className={styles.footer__policy}>
						Terms of Service Privacy Policy
					</p>
				</div>
			</footer>
		</div>
	);
};
