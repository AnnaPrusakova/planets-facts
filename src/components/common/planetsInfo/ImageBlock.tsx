import { keys } from '../../../data/planetMenu';
import styles from './planetInfo.module.scss';
import Image from 'next/image';

export function ImageBlock({ block, images, isMobile }): JSX.Element {
	const image = () => {
		switch (block) {
			case keys[0]:
				return images.planet;
			case keys[1]:
				return images.internal;
		}
	};

	return (
		<div>
			{block === keys[2] ? (
				<div className={styles.geologyWrapper}>
					<Image
						src={images.planet}
						alt={'planet'}
						width={isMobile ? 111 : 290}
						height={isMobile ? 111 : 290}
					/>
					<Image
						src={images.geology}
						alt={'geology'}
						width={isMobile ? 50 : 163}
						height={isMobile ? 50 : 199}
						className={styles.geologyImg}
					/>
				</div>
			) : (
				<Image
					src={image()}
					alt={'planet'}
					width={isMobile ? 111 : 290}
					height={isMobile ? 111 : 290}
				/>
			)}
		</div>
	);
}
