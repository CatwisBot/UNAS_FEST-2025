import { StaticImageData } from 'next/image';

import Photo from "@/public/image/About/Hero/no-photo.jpg"

export interface Visionary {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
}

export const Mascot: Visionary[] = [
    {
    id: 1,
    name: "-",
    role: "-",
    image: Photo,
  },
];

export const Web: Visionary[] = [
    {
    id: 1,
    name: "-",
    role: "-",
    image: Photo,
  },
];

export const Music: Visionary[] = [
    {
    id: 1,
    name: "-",
    role: "-",
    image: Photo,
  },
];