import {PlanetsInfo} from "../../common/planetsInfo/PlanetsInfo";
import data from '../../../data/data.json';

export function Venus(): JSX.Element {
    return (<PlanetsInfo data={data[1]}/>)
}