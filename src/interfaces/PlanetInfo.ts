export interface IPlanetInfo {
	name: string;
	overview: IContent;
	structure: IContent;
	geology: IContent;
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: IImages;
}

export interface IContent {
	content: string;
	source: string;
}

export interface IImages {
	planet: string;
	internal: string;
	geology: string;
}
