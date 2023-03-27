import {FactBlock} from "./FactBlock";
import {IPlanetInfoComponent} from "./planetInfo.interfaces";
import styles from './planetInfo.module.scss';
import {useState} from "react";
import {Button} from "../button/Button";
import Link from "next/link";
import Image from "next/image";
import sourceIcon from '../../../../public/icon-source.svg';

export function PlanetsInfo({data}: IPlanetInfoComponent): JSX.Element {
    const [block, setBlock] = useState<string>('overview');
    const [isActive, setIsActive] = useState<string>('overview');
    const {name, overview, structure, geology, rotation, radius, revolution, temperature, images} = data;
    const factsBlockTitles = ['ROTATION TIME', 'REVOLUTION TIME', 'RADIUS', 'AVERAGE TEMP.'];

    const infoBlock = () => {
        switch (block) {
            case 'overview':
                return overview;
            case 'structure':
                return structure;
            case 'geology':
                return geology;
        }
    }

    const image = () => {
        switch (block) {
            case 'overview':
                return images.planet;
            case 'structure':
                return images.internal;
        }
    }

    const handleButtonClick = (name: string) => {
        setBlock(name);
        setIsActive(name);
    }

    return (
        <div>
            <div className={styles.mainBlock}>
                <div>
                    {block === 'geology' ?
                        (<div className={styles.geologyWrapper}>
                            <Image src={images.planet} alt={'planet'} width={290} height={290}/>
                            <Image src={images.geology} alt={'geology'} width={163} height={199} className={styles.geologyImg}/>
                        </div>) :
                        (<Image src={image()} alt={'planet'} width={290} height={290}/>)
                    }
                </div>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.info}>{infoBlock().content}</div>
                    <div className={styles.source}>
                        Source: {' '}
                        <Link href={infoBlock().source} className={styles.sourceLink}>Wikipedia</Link>
                        <Image src={sourceIcon} alt={'source'} className={styles.sourceIcon}/>
                    </div>
                    <div className={styles.btnWrapper}>
                        <Button num={'01'} name={'OVERVIEW'} onClick={() => handleButtonClick('overview')}
                                isActive={isActive === 'overview'} activeColor={'#419EBB'} className={styles.activeBtn} />
                        <Button num={'02'} name={'INTERNAL STRUCTURE'} onClick={() => handleButtonClick('structure')}
                                isActive={isActive === 'structure'} activeColor={'#419EBB'} className={styles.activeBtn}/>
                        <Button num={'03'} name={'SURFACE GEOLOGY'} onClick={() => handleButtonClick('geology')}
                                isActive={isActive === 'geology'} activeColor={'#419EBB'} className={styles.activeBtn}/>
                    </div>
                </div>
            </div>
            <div className={styles.factsBlocks}>
                <FactBlock title={factsBlockTitles[0]} facts={rotation}/>
                <FactBlock title={factsBlockTitles[1]} facts={revolution}/>
                <FactBlock title={factsBlockTitles[2]} facts={radius}/>
                <FactBlock title={factsBlockTitles[3]} facts={temperature}/>
            </div>
        </div>
    );
}