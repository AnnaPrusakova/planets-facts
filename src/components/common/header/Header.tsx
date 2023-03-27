import styles from './header.module.scss';
import { planets } from '../../../data/planets';
import { useWindowSize } from '../../../hooks/windowSize';
import { MobileHeader } from './MobileHeader';
import Link from 'next/link';
import { useState } from 'react';

export function Header(): JSX.Element {
	const [active, setActive] = useState<string>('');
	const size = useWindowSize();

	const menuElem = () =>
		planets.map((elem, i) => (
			<Link
				href={`/planets/${elem.toLocaleLowerCase()}`}
				className={styles.elem}
				key={i}
				onClick={() => setActive(elem.toLocaleLowerCase())}
			>
				{active === elem.toLocaleLowerCase() && (
					<div className={styles.elemActive}></div>
				)}
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
