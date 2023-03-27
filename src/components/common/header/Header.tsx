import styles from './header.module.scss';
import { planets } from '../../../data/planets';
import { useWindowSize } from '../../../hooks/windowSize';
import { MobileHeader } from './MobileHeader';
import Link from 'next/link';

export function Header(): JSX.Element {
	const size = useWindowSize();

	const menuElem = () =>
		planets.map((elem, i) => (
			<Link
				href={`/${elem.toLocaleLowerCase()}`}
				className={styles.elem}
				key={i}
			>
				{elem}
			</Link>
		));
	return (
		<>
			{size.width <= 375 ? (
				<MobileHeader />
			) : (
				<div className={styles.headerWrapper}>
					<div className={styles.title}>THE PLANETS</div>
					<div className={styles.planets}>{menuElem()}</div>
				</div>
			)}
			<div className={styles.divider}></div>
		</>
	);
}
