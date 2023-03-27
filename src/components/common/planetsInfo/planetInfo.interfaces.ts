import { IContent, IImages, IPlanetInfo } from '../../../interfaces/PlanetInfo';

export interface IPlanetInfoComponent {
	data: IPlanetInfo;
}

export interface IButtonMenu {
	onButtonClick: (name: string) => void;
	active: string;
}

export interface IButtonMenuMobile {
	onClick: (name: string) => void;
	active: string;
}

export interface IFactBlock {
	title: string;
	facts: string;
}

export interface IImageBlock {
	block: string;
	images: IImages;
	isMobile: boolean;
}

export interface IMainBlock {
	block: string;
	images: IImages;
	isMobile: boolean;
	name: string;
	overview: IContent;
	structure: IContent;
	geology: IContent;
	active: string;
	handleButtonClick: (name: string) => void;
}
