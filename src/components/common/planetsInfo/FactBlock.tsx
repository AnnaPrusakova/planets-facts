import styles from './factBlock.module.scss';
import { IFactBlock } from './planetInfo.interfaces';

export function FactBlock({ title, facts }: IFactBlock): JSX.Element {
	return (
		<div className={styles.factBlock}>
			<div className={styles.infoBlock}>
				<div className={styles.title}>{title}</div>
				<div className={styles.info}>{facts}</div>
			</div>
		</div>
	);
}
