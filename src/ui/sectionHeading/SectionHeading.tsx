import styles from "./SectionHeading.module.scss";
import arrow from "../../assets/home/arrow.svg";
import {Heading} from "../typography";
import type {sectionHeadingProps} from "./types";

export const SectionHeading = ({
                                   title,
                                   note,
                                   button,
                               }: sectionHeadingProps) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.note}>{note}</p>
                <Heading>{title}</Heading>
            </div>
            <button className={styles.button}>
                <span>{button.text}</span>
                <img src={arrow} alt={"arrow"}/>
            </button>
        </div>
    );
}