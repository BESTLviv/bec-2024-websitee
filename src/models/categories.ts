import { StaticImageData } from "next/image";

export interface CategoriesItemProps{
    title: string;
    text: string;
    subText: string;
    example: string;
    left: boolean
    img: StaticImageData
  }