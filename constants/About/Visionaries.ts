import { StaticImageData } from 'next/image';

// Web
import Dimas from "@/public/image/About/Committee/APM/dimas.jpg";
import Aura from "@/public/image/About/Visionaries/Web/aura.jpg";
import Galang from "@/public/image/About/Visionaries/Web/galang.jpg";
import Zidan from "@/public/image/About/Visionaries/Web/zidan.jpg";
import Whisnu from "@/public/image/About/Visionaries/Web/whisnu.jpg";
import Arohman from "@/public/image/About/Visionaries/Web/rohman.jpg";
import Akbar from "@/public/image/About/Visionaries/Web/tama.jpg";
import Ilham from "@/public/image/About/Visionaries/Web/ilham.jpg";

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
    name: "Dimas",
    role: "Caturnawa Web 2025",
    image: Dimas,
  },
    {
    id: 2,
    name: "Najwa Aura Hastin",
    role: "IT Support Web 2025",
    image: Aura,
  },
    {
    id: 3,
    name: "Galang Rispa'i",
    role: "Design Web 2025",
    image: Galang,
  },
    {
    id: 4,
    name: "Muhammad Zidan",
    role: "Design Web 2025",
    image: Zidan,
  },
    {
    id: 5,
    name: "Raden Whisnu A. N",
    role: "UNASFEST Web 2025",
    image: Whisnu,
  },
    {
    id: 6,
    name: "Nur Arohman",
    role: "UNASFEST Web 2025",
    image: Arohman,
  },
    {
    id: 7,
    name: "M. Akbar Hadi Pratama",
    role: "Caturnawa Web 2025",
    image: Akbar,
  },
    {
    id: 8,
    name: "Ilham Ramadhan",
    role: "Caturnawa Web 2025",
    image: Ilham,
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