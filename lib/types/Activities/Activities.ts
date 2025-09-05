import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface Stat {
  icon: ReactElement;
  value: string;
  label: string;
  gradient: string;
}

export interface Judge {
  index: number;
  name: string;
  linkedin?: string;
  image: StaticImageData;
  school: string;
  lastEducation: string;
  role: string;
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
  stats?: Stat[];
}

// Legacy types for backward compatibility
export interface activitiesData {
  judgesData: Judge[];
  judgesData2: Judge[];
}