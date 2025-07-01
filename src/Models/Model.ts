export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface CarouselItem {
    id: number;
    image: string;
    name: string;
}

export interface logo {
    bullLogo: string;
    CustomerLogo: string;
}

export interface banner {
    id: number; 
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    altText: string;
    isActive: boolean;
}
export interface img {
    contact: string;  
}

export interface source{
    logo: logo;
    banner: banner[];
    img: img;
}

