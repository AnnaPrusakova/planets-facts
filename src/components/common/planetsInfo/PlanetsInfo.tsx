import {FactBlock} from "./FactBlock";
import {IPlanetInfoComponent} from "./planetInfo.interfaces";
import styles from './planetInfo.module.scss';

export function PlanetsInfo({data}: IPlanetInfoComponent): JSX.Element {
    const {name, overview, structure, geology, rotation, radius, revolution, temperature, images} = data;
    const infoBlockTitles = ['ROTATION TIME', 'REVOLUTION TIME', 'RADIUS', 'AVERAGE TEMP.'];

    return (
        <div>
            <div></div>
            <div className={styles.infoBlocks}>
                <FactBlock title={infoBlockTitles[0]} info={rotation}/>
                <FactBlock title={infoBlockTitles[1]} info={revolution}/>
                <FactBlock title={infoBlockTitles[2]} info={radius}/>
                <FactBlock title={infoBlockTitles[3]} info={temperature}/>
            </div>
        </div>
    );
}