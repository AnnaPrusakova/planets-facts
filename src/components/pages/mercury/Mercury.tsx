import { PlanetsInfo } from '../../common/planetsInfo/PlanetsInfo';
import data from '../../../data/data.json';

export function Mercury(): JSX.Element {
	return <PlanetsInfo data={data[0]} />;
}
