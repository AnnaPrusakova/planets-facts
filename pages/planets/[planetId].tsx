import styles from '../../styles/Home.module.scss';
import Head from 'next/head';
import { PlanetsInfo } from '../../src/components/common/planetsInfo/PlanetsInfo';
import { Header } from '../../src/components/common/header/Header';
import { useRouter } from 'next/router';
import data from '../../src/data/data.json';

export default function PlanetId() {
	const router = useRouter();
	const planet = router.query.planetId;
	const getPlanetId = () => {
		switch (planet) {
			case 'mercury':
				return 0;
			case 'venus':
				return 1;
			case 'earth':
				return 2;
			case 'mars':
				return 3;
			case 'jupiter':
				return 4;
			case 'saturn':
				return 5;
			case 'uranus':
				return 6;
			case 'neptune':
				return 7;
			default:
				return 0;
		}
	};
	return (
		<>
			<Head>
				<title>Jupiter</title>
				<meta name="description" content="Jupiter" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.main}>
				<Header />
				<PlanetsInfo data={data[getPlanetId()]} />
			</main>
		</>
	);
}
