import styles from './factblock.module.scss';

export function FactBlock({title, facts}): JSX.Element {
    return (
        <div className={styles.factBlock}>
            <div className={styles.infoBlock}>
                <div className={styles.title}>{title}</div>
                <div className={styles.info}>{facts}</div>
            </div>
        </div>
    );
}