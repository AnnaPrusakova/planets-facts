import styles from './header.module.scss';
import {planets} from "../../../data/planets";
import {useWindowSize} from "../../../hooks/windowSize";
import {MobileHeader} from "./MobileHeader";

export function Header(): JSX.Element {
    const size = useWindowSize();

    return (
        <>
            {size.width <= 375 ?
                (<MobileHeader/>)
                 :
                (<div className={styles.headerWrapper}>
                        <div className={styles.title}>THE PLANETS</div>
                        <div className={styles.planets}>{planets.map(elem => <div
                            className={styles.elem}>{elem}</div>)}</div>
                    </div>
                )}
            <div className={styles.divider}></div>
        </>
    );
}