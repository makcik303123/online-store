import styles from "./MultiFilter.module.scss";
import { CheckBox, Heading } from "../../ui";
import { filters } from "./MultiFilter.data";
import { useMultiFilterState } from "./useMultiFilterState";

export const MultiFilter = () => {
	const { params, handlerCheckBox } = useMultiFilterState();

	console.log(params);

	return (
		<div className={styles.multifilter}>
			<div className={styles.heading__wrapper}>
				<Heading>Filter</Heading>
			</div>
			{filters.map((filter) => (
				<div className={styles.filter}>
					<div className={styles.filter__header}>{filter.header}</div>
					{filter.fields.map((field) => (
						<CheckBox
							label={field.name}
							color={field.color}
							handler={handlerCheckBox}
						/>
					))}
				</div>
			))}
		</div>
	);
};
