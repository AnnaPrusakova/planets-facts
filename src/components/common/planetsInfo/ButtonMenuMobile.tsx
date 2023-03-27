import styles from './buttonMenuMobile.module.scss';
import cn from 'classnames';
import { keys, menuMobile } from '../../../data/planetMenu';

export function ButtonMenuMobile({ onClick, active }): JSX.Element {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.elem} onClick={() => onClick(keys[0])}>
					{menuMobile[0]}
				</div>
				<div className={styles.elem} onClick={() => onClick(keys[1])}>
					{menuMobile[1]}
				</div>
				<div className={styles.elem} onClick={() => onClick(keys[2])}>
					{menuMobile[2]}
				</div>
			</div>
			<div className={styles.dividerWrapper}>
				<div className={styles.divider}></div>
				<div
					className={cn(styles.active, {
						[styles.overview]: active === keys[0],
						[styles.structure]: active === keys[1],
						[styles.geology]: active === keys[2]
					})}
				></div>
			</div>
		</>
	);
}
