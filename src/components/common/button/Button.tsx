import styles from './button.module.scss';
import cn from 'classnames';
import { IButton } from './button.interfaces';

export function Button({
	num,
	name,
	isActive,
	activeColor,
	onClick,
	className
}: IButton): JSX.Element {
	const handleOnClick = () => {
		onClick();
	};
	return (
		<div
			className={cn(styles.wrapper, className)}
			style={{ backgroundColor: isActive ? activeColor : undefined }}
			onClick={handleOnClick}
		>
			<div className={styles.text}>
				<div className={styles.num}>{num}</div>
				<div className={styles.name}>{name}</div>
			</div>
		</div>
	);
}
