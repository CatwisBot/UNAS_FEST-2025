import { StaticImageData } from 'next/image';

import Charizard from "@/public/image/About/Visionaries/Charizard.png";
import Pikachu from "@/public/image/About/Visionaries/Pikachu.png";
import Dialga from "@/public/image/About/Visionaries/Dialga.png";
import Eternatus from "@/public/image/About/Visionaries/Eternatus.png";
import Gengar from "@/public/image/About/Visionaries/Gengar.png";
import Lapras from "@/public/image/About/Visionaries/Lapras.png";

export interface Visionary {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
}

export const Mascot: Visionary[] = [
    {
    id: 1,
    name: "Charizard Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Charizard,
  },
    {
    id: 2,
    name: "Dialga Original Form",
    role: "UNAS FEST 2025 Website",
    image: Dialga,
  },
    {
    id: 3,
    name: "Eternatus",
    role: "UNAS FEST 2025 Website",
    image: Eternatus,
  },
    {
    id: 4,
    name: "Gengar Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Gengar,
  },
    {
    id: 5,
    name: "Lapras Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Lapras,
  },
    {
    id: 6,
    name: "Pikachu Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Pikachu,
  },
];

export const Web: Visionary[] = [
    {
    id: 1,
    name: "Charizard Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Charizard,
  },
    {
    id: 2,
    name: "Dialga Original Form",
    role: "UNAS FEST 2025 Website",
    image: Gengar,
  },
    {
    id: 3,
    name: "Eternatus",
    role: "UNAS FEST 2025 Website",
    image: Pikachu,
  },
    {
    id: 4,
    name: "Gengar Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Dialga,
  },
    {
    id: 5,
    name: "Lapras Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Lapras,
  },
    {
    id: 6,
    name: "Pikachu Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Eternatus,
  },
];

export const Music: Visionary[] = [
    {
    id: 1,
    name: "Charizard Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Lapras,
  },
    {
    id: 2,
    name: "Dialga Original Form",
    role: "UNAS FEST 2025 Website",
    image: Dialga,
  },
    {
    id: 3,
    name: "Eternatus",
    role: "UNAS FEST 2025 Website",
    image: Eternatus,
  },
    {
    id: 4,
    name: "Gengar Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Pikachu,
  },
    {
    id: 5,
    name: "Lapras Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Charizard,
  },
    {
    id: 6,
    name: "Pikachu Gigantamax",
    role: "UNAS FEST 2025 Website",
    image: Pikachu,
  },
];