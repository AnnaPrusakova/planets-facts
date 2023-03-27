import { FactBlock } from './FactBlock';
import { IPlanetInfoComponent } from './planetInfo.interfaces';
import styles from './planetInfo.module.scss';
import { useState } from 'react';
import { useWindowSize } from '../../../hooks/windowSize';
import { ButtonMenuMobile } from './ButtonMenuMobile';
import { MainBlock } from './MainBlock';

export function PlanetsInfo({ data }: IPlanetInfoComponent): JSX.Element {
	const [block, setBlock] = useState<string>('overview');
	const [active, setActive] = useState<string>('overview');
	const {
		name,
		overview,
		structure,
		geology,
		rotation,
		radius,
		revolution,
		temperature,
		images
	} = data;
	const factsBlockTitles = [
		'ROTATION TIME',
		'REVOLUTION TIME',
		'RADIUS',
		'AVERAGE TEMP.'
	];
	const size = useWindowSize();
	const isMobile = size.width <= 375;

	const handleButtonClick = (name: string) => {
		setBlock(name);
		setActive(name);
	};

	return (
		<div>
			{isMobile && (
				<ButtonMenuMobile onClick={handleButtonClick} active={active} />
			)}
			<MainBlock
				block={block}
				images={images}
				active={active}
				name={name}
				overview={overview}
				isMobile={isMobile}
				geology={geology}
				structure={structure}
				handleButtonClick={handleButtonClick}
			/>
			<div className={styles.factsBlocks}>
				<FactBlock title={factsBlockTitles[0]} facts={rotation} />
				<FactBlock title={factsBlockTitles[1]} facts={revolution} />
				<FactBlock title={factsBlockTitles[2]} facts={radius} />
				<FactBlock title={factsBlockTitles[3]} facts={temperature} />
			</div>
		</div>
	);
}
