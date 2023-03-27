import { keys } from '../../../data/planetMenu';
import styles from './planetInfo.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IImageBlock } from './planetInfo.interfaces';

export function ImageBlock({
	block,
	images,
	isMobile
}: IImageBlock): JSX.Element {
	const image = () => {
		switch (block) {
			case keys[0]:
				return images.planet;
			case keys[1]:
				return images.internal;
			default:
				return images.planet;
		}
	};

	return (
		<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
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
		</motion.div>
	);
}
