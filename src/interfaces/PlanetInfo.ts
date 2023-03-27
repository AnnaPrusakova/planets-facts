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

interface IContent {
    content: string;
    source: string;
}

interface IImages {
    planet: string;
    internal: string;
    geology: string;
}