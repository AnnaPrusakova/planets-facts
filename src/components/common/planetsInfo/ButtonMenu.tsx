import styles from './planetInfo.module.scss';
import { Button } from '../button/Button';
import { keys, menu } from '../../../data/planetMenu';

export function ButtonMenu({ onButtonClick, active }): JSX.Element {
	return (
		<div className={styles.btnWrapper}>
			<Button
				num={'01'}
				name={menu[0]}
				onClick={() => onButtonClick(keys[0])}
				isActive={active === keys[0]}
				activeColor={'#419EBB'}
				className={styles.activeBtn}
			/>
			<Button
				num={'02'}
				name={menu[1]}
				onClick={() => onButtonClick(keys[1])}
				isActive={active === keys[1]}
				activeColor={'#419EBB'}
				className={styles.activeBtn}
			/>
			<Button
				num={'03'}
				name={menu[2]}
				onClick={() => onButtonClick(keys[2])}
				isActive={active === keys[2]}
				activeColor={'#419EBB'}
				className={styles.activeBtn}
			/>
		</div>
	);
}
