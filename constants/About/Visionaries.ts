import { StaticImageData } from "next/image";

//Mascot
import Bisyr from "@/public/image/About/Visionaries/Mascot/bisyr.jpg";
import Dara from "@/public/image/About/Visionaries/Mascot/dara.jpg";
import Rama from "@/public/image/About/Visionaries/Mascot/rama.jpg";
import Bisyr24 from "@/public/image/About/Visionaries/Mascot/MUHAMMAD BISYR.jpg";
import Nirvana from "@/public/image/About/Visionaries/Mascot/NIRVANA PUTRI RIZAL.jpg";
import Adelin from "@/public/image/About/Visionaries/Mascot/ADELIN VINICO YUANITA.png";

// Web
import Dimas from "@/public/image/About/Committee/APM/dimas.jpeg";
import Galang from "@/public/image/About/Visionaries/Web/galang.jpg";
import Zidan from "@/public/image/About/Visionaries/Web/zidan.jpg";
import Whisnu from "@/public/image/About/Visionaries/Web/whisnu.jpg";
import Arohman from "@/public/image/About/Visionaries/Web/rohman.jpg";
import Akbar from "@/public/image/About/Visionaries/Web/tama.jpg";
import Ilham from "@/public/image/About/Visionaries/Web/ilham.jpg";
import alawi from "@/public/image/About/Visionaries/Web/IT/alawi.jpg";
import rangga from "@/public/image/About/Visionaries/Web/IT/rangga.jpg";
import heni from "@/public/image/About/Visionaries/Web/IT/heni.jpg";
import hawra from "@/public/image/About/Visionaries/Web/IT/aura.jpg";
import rehan from "@/public/image/About/Visionaries/Web/IT/rehan.jpg";
import rafi from "@/public/image/About/Visionaries/Web/IT/rafi.jpg";
import iyan from "@/public/image/About/Visionaries/Web/IT/iyan.jpg";
import afzal from "@/public/image/About/Visionaries/Web/IT/afzal.jpg";
import pancar from "@/public/image/About/Visionaries/Web/IT/pancar.jpg";
import hansen from "@/public/image/About/Visionaries/Mix/hansen.jpg";
import user from "@/public/image/About/Hero/no-photo.jpg";
import ronald from "@/public/image/About/Visionaries/Web/IT/ronald.webp";
import ghandi from "@/public/image/About/Visionaries/Web/IT/gandi.jpg";
import abija from "@/public/image/About/Visionaries/Mix/abija.jpg";
import govin from "@/public/image/About/Visionaries/Mix/govin.jpg";
import duhan from "@/public/image/About/Visionaries/Mix/duhan.jpg";
import jeplin from "@/public/image/About/Visionaries/Mix/jeplin.jpg";

// Music
import Albert from "@/public/image/About/Visionaries/Music/albert.jpg";
import Beby from "@/public/image/About/Visionaries/Music/beby.jpg";
import Dian from "@/public/image/About/Visionaries/Music/dian.jpg";
import Farhani from "@/public/image/About/Visionaries/Music/farhani.jpg";
import Fira from "@/public/image/About/Visionaries/Music/fira.jpg";
import Jihan from "@/public/image/About/Visionaries/Music/jihan.jpg";
import Johannes from "@/public/image/About/Visionaries/Music/johannes.jpg";
import Joshua from "@/public/image/About/Visionaries/Music/joshua.jpg";
import Mamay from "@/public/image/About/Visionaries/Music/mamay.jpg";
import Ronald from "@/public/image/About/Visionaries/Music/ronald.webp";
import Tegar from "@/public/image/About/Visionaries/Music/tegar.jpg";
import Shafa from "@/public/image/About/Visionaries/Music/shafa.webp";
import Rafli from "@/public/image/About/Visionaries/Music/rafli.webp";

export interface Visionary {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
}

export const Mascot: Visionary[] = [
  {
    id: 1,
    name: "Muhammad Bisyr",
    role: "Mascot UNAS FEST 2025",
    image: Bisyr,
  },
  {
    id: 2,
    name: "Azzahra Dara",
    role: "Mascot UNAS FEST 2025",
    image: Dara,
  },
  {
    id: 3,
    name: "Nadia Ramadhani",
    role: "Mascot UNAS FEST 2025",
    image: Rama,
  },
  {
    id: 4,
    name: "Muhammad Bisyr",
    role: "Mascot UNAS FEST 2024",
    image: Bisyr24,
  },
  {
    id: 5,
    name: "Nirvana Putri Rizal",
    role: "Dubbing Voice Over Lumina Verde",
    image: Nirvana,
  },
  {
    id: 6,
    name: "Adelin Vinico Yuanita",
    role: "Mascot UNAS FEST 2023",
    image: Adelin,
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
    name: "Galang Rispa'i",
    role: "Design Web 2025",
    image: Galang,
  },
  {
    id: 3,
    name: "Muhammad Zidan",
    role: "Design Web 2025",
    image: Zidan,
  },
  {
    id: 4,
    name: "Raden Whisnu A. N",
    role: "UNAS FEST Web 2025",
    image: Whisnu,
  },
  {
    id: 5,
    name: "Nur Arohman",
    role: "UNAS FEST Web 2025",
    image: Arohman,
  },
  {
    id: 6,
    name: "M. Akbar Hadi Pratama",
    role: "Caturnawa Web 2025",
    image: Akbar,
  },
  {
    id: 7,
    name: "Ilham Ramadhan",
    role: "Caturnawa Web 2025",
    image: Ilham,
  },
  {
    id: 8,
    name: "Achmad Maulana Alawi",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: alawi,
  },
  {
    id: 9,
    name: "Muhammad Rangga Miftahul Falah",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: rangga,
  },
  {
    id: 10,
    name: "Heni Fitriany",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: heni,
  },
  {
    id: 11,
    name: "Hawra Fathiya Zahra",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: hawra,
  },
  {
    id: 12,
    name: "Muhammad Raihan Putra Febrianto",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: rehan,
  },
  {
    id: 13,
    name: "Moch Rafindra Aditias",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: rafi,
  },
  {
    id: 14,
    name: "Ferdiansyach",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: iyan,
  },
  {
    id: 15,
    name: "Afzal Khairahmansyach",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: afzal,
  },
  {
    id: 16,
    name: "Pancar Hizkia",
    role: "UNAS FEST 2024 Website and Caturnawa 2024",
    image: pancar,
  },
  {
    id: 17,
    name: "Hansen Chandra",
    role: "UNAS FEST Website 2023",
    image: hansen,
  },
  {
    id: 18,
    name: "Ciptoningaji Guridno",
    role: "UNAS FEST Website 2023",
    image: user,
  },
  {
    id: 19,
    name: "Ronald Lakhomizaro Gulo",
    role: "UNAS FEST Website 2023",
    image: ronald,
  },
  {
    id: 20,
    name: "Rizky Wahyu Sugandhi",
    role: "UNAS FEST Website 2023",
    image: ghandi,
  },
  {
    id: 21,
    name: "Rian Hidayat",
    role: "UNAS FEST Website 2023",
    image: user,
  },
  {
    id: 22,
    name: "Abija Bohdan P.",
    role: "UNAS FEST Website 2023",
    image: abija,
  },
  {
    id: 23,
    name: "Arga Mahesa Putra",
    role: "UNAS FEST Website 2023",
    image: user,
  },
  {
    id: 24,
    name: "Govinda Marcelino",
    role: "UNAS FEST Website 2023",
    image: govin,
  },
  {
    id: 25,
    name: "Duhan Maulana Artline",
    role: "Caturnawa 2023",
    image: duhan,
  },
  {
    id: 26,
    name: "Jepplin Sinaga",
    role: "Caturnawa 2023",
    image: jeplin,
  },
];

export const Music: Visionary[] = [
  {
    id: 1,
    name: "Ronald Lakhomizaro Gulo",
    role: "Producer & Arranger Music",
    image: Ronald,
  },
  {
    id: 2,
    name: "Beby Alya Rahman Nasution",
    role: "BFX",
    image: Beby,
  },
  {
    id: 3,
    name: "Dian Sarah Purba",
    role: "Anthem UNAS FEST Singer",
    image: Dian,
  },
  {
    id: 4,
    name: "Farhani Kurniayu",
    role: "Anthem UNAS FEST Singer",
    image: Farhani,
  },
  {
    id: 5,
    name: "Nabila Shafa Sabrina",
    role: "Anthem UNAS FEST Singer",
    image: Shafa,
  },
  {
    id: 6,
    name: "Syafira Fairuz",
    role: "Anthem UNAS FEST Song Writer",
    image: Fira,
  },
  {
    id: 7,
    name: "Jihan Fauziah",
    role: "Koreografer",
    image: Jihan,
  },
  {
    id: 8,
    name: "Johanes Nathanael Bimambang",
    role: "Producer & Arranger Music",
    image: Albert,
  },
  {
    id: 9,
    name: "Joshua Pratama Martinus",
    role: "Producer & Arranger Music",
    image: Joshua,
  },
  {
    id: 10,
    name: "Maimunahwaroh Heta Warman",
    role: "Anthem UNAS FEST Singer",
    image: Mamay,
  },
  {
    id: 11,
    name: "Albert Deniel Sitorus",
    role: "BFX",
    image: Johannes,
  },
  {
    id: 12,
    name: "Tegar Budiman",
    role: "UANS FEST Song Writer",
    image: Tegar,
  },
  {
    id: 13,
    name: "Alfarizky Esah Raffliansyah",
    role: "Anthem UNAS FEST Singer",
    image: Rafli,
  },
];
