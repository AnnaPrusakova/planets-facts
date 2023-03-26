import styles from './button.module.scss';
import {useState} from "react";
import cn from 'classnames';

export function Button({name, className}): JSX.Element {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <div className={cn(styles.wrapper, {[className]: isActive})} onClick={() => setIsActive(true)}>
            <div className={styles.name}>{name}</div>
        </div>
    );
}