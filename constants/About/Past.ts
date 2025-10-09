interface Mascot {
  id: number;
  name: string;
  image: string;
  bg: string;
}

interface PastMascotsByYear {
  [year: string]: {
    mascots: Mascot[];
    description: string;
  };
}

export const pastMascotsData: PastMascotsByYear = {
    "2024": {
    mascots: [
    {
        id: 1,
        name: 'Mascot 2024',
        image: '/icons/Mascot/mascot2024.png',
        bg: '/icons/Mascot/bg-card.png',
    },
    ],
    description: "The four symbols—Sun (Youna), Water (Nassa), Fire (Alfest), and Lumina Verde—capture the spirit of UNAS FEST. The Sun represents consistency and energy, Water reflects flexibility and clarity, Fire embodies creativity and passion, and Lumina Verde symbolizes innovation and sustainability. Together, they illustrate UNAS FEST as a vibrant, adaptable, and forward-looking event driven by dedication, creativity, and environmental awareness.",
    },
    "2023": {
    mascots: [
    {
        id: 2,
        name: 'Mascot 2023',
        image: '/icons/Mascot/mascot2023.png',
        bg: '/icons/Mascot/Background_23.png',
    },
    ],
    description: "The orca whale, a top marine predator with a unique black and white body, reflects the spirit of Universitas Nasional students at UNAS FEST 2023, the biggest event on campus. Like orca whales that live in complex social groups and communicate through various sounds, the organizers of UNAS FEST 2023 showcase the diversity of their mindsets and perspectives. The intelligence and strategy of orca whales inspired the structured, integrated, creative, and innovative design of UNAS FEST 2023.",
    },
};