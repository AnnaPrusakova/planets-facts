import { useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import hamburgerMenu from '../../../../public/icon-hamburger.svg';
import cn from 'classnames';
import { planets } from '../../../data/planets';
import arrowIcon from '../../../../public/icon-chevron.svg';
import Link from 'next/link';

export function MobileHeader(): JSX.Element {
	const [isMenuOpen, setMenuOpen] = useState<boolean>();

	const checkColor = (planet: string) => {
		switch (planet) {
			case 'MERCURY':
				return '#DEF4FC';
			case 'VENUS':
				return '#F7CC7F';
			case 'EARTH':
				return '#545BFE';
			case 'MARS':
				return '#FF6A45';
			case 'JUPITER':
				return '#ECAD7A';
			case 'SATURN':
				return '#FCCB6B';
			case 'URANUS':
				return '#65F0D5';
			case 'NEPTUNE':
				return '#497EFA';
		}
	};
	return (
		<div
			className={styles.headerWrapperMobile}
			style={{ position: isMenuOpen ? 'fixed' : 'sticky' }}
		>
			<div className={styles.menuTitleMobile}>
				<div className={styles.title}>THE PLANETS</div>
				<Image
					src={hamburgerMenu}
					className={cn({ [styles.hamburgerIcon]: isMenuOpen })}
					onClick={() => setMenuOpen(!isMenuOpen)}
					alt={'hamburger icon'}
				/>
			</div>
			<div className={styles.divider}></div>
			{isMenuOpen && (
				<div className={styles.mobileMenu}>
					{planets.map((elem, i) => (
						<Link href={`/${elem.toLocaleLowerCase()}`} key={i}>
							<div className={styles.mobileElem}>
								<div className={styles.planetName}>
									<div
										className={styles.circle}
										style={{ backgroundColor: `${checkColor(elem)}` }}
									></div>
									<span className={styles.name}>{elem}</span>
								</div>
								<Image src={arrowIcon} alt={'arrow'} />
							</div>
							{elem !== 'NEPTUNE' && <div className={styles.dividerMenu}></div>}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
