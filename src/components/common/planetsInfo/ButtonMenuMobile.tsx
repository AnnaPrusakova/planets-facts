import styles from "./buttonMenu.module.scss";
import cn from "classnames";

export function ButtonMenuMobile({onClick, active}): JSX.Element {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.elem} onClick={() => onClick('overview')}>OVERVIEW</div>
                <div className={styles.elem} onClick={() => onClick('structure')}>STRUCTURE</div>
                <div className={styles.elem} onClick={() => onClick('geology')}>SURFACE</div>
            </div>
            <div className={styles.dividerWrapper}>
            <div className={styles.divider}></div>
            <div className={cn(styles.active, { [styles.overview]: active === 'overview',
                [styles.structure]: active === 'structure', [styles.geology]: active === 'geology'})}></div>
            </div>
        </>
    )
}