import { StaticImageData } from "next/image";

export interface Judge {
  index: number;
  name: string;
  linkedin?: string;
  image: StaticImageData;
  school: string;
  lastEducation: string;
  description: string;
  achievements?: string[];
}

export interface Requirement {
  index: number;
  detail: string;
}

export interface FAQ {
  question: string;
  answer: string | string[];
}

export interface Activity {
  path: string;
  alias: string;
  title: string;
  coverImage: StaticImageData;
  description: string;
  guideBook: string;
  guideBookName: string;
  requirements: Requirement[];
  judgesData: Judge[];
  faqs?: FAQ[];
}

// Legacy types for backward compatibility
export interface activitiesData {
  judgesData: Judge[];
  judgesData2: Judge[];
}