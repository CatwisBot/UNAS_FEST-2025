import { StaticImageData } from "next/image";

export interface activitiesData {
    judgesData: {
    index: number;
    name: string;
    linkedin?: string
    image: StaticImageData;
    lastEducation: string;
    description: string;
    achievements?: string[];
  }[];
  judgesData2: {
    index: number;
    name: string;
    linkedin: string;
    image: StaticImageData;
    lastEducation: string;
    description: string;
    achievements: string[];
  }[];
}