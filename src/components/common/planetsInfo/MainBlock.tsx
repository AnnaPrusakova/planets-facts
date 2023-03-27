import styles from './planetInfo.module.scss';
import { ImageBlock } from './ImageBlock';
import Link from 'next/link';
import Image from 'next/image';
import sourceIcon from '../../../../public/icon-source.svg';
import { ButtonMenu } from './ButtonMenu';
import { keys } from '../../../data/planetMenu';

export function MainBlock({
	block,
	images,
	isMobile,
	name,
	overview,
	structure,
	geology,
	active,
	handleButtonClick
}): JSX.Element {
	const infoBlock = () => {
		switch (block) {
			case keys[0]:
				return overview;
			case keys[1]:
				return structure;
			case keys[2]:
				return geology;
		}
	};

	return (
		<div className={styles.mainBlock}>
			<ImageBlock block={block} images={images} isMobile={isMobile} />
			<div className={styles.infoBlock}>
				<div className={styles.name}>{name}</div>
				<div className={styles.info}>{infoBlock().content}</div>
				<div className={styles.source}>
					Source:{' '}
					<Link
						href={infoBlock().source}
						className={styles.sourceLink}
						target="_blank"
					>
						Wikipedia
					</Link>
					<Image
						src={sourceIcon}
						alt={'source'}
						className={styles.sourceIcon}
					/>
				</div>
				{!isMobile && (
					<ButtonMenu onButtonClick={handleButtonClick} active={active} />
				)}
			</div>
		</div>
	);
}
