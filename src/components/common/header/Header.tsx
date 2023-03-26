import styles from './header.module.scss';
import {planets} from "../../../data/planets";

export function Header(): JSX.Element {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.title}>THE PLANETS</div>
                <div className={styles.planets}>{planets.map(elem => <div className={styles.elem}>{elem}</div>)}</div>
            </div>
            <div className={styles.divider}></div>
        </>
    );
}