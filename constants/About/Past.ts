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
    description: "Lumina Verde is a small, smart symbol of renewable energy technology. Its crystal tubes reflect sunlight, reducing heat from the sun. The dandelion-shaped wings symbolize regeneration and energy potential, while the energizing crystals indicate low energy output. This symbol inspires us to harness the potential of renewable energy and global energy momentum. The name comes from the Latin Lumina, meaning home, and Verde, meaning water, highlighting the innovative use of anemo and hydro energy to protect the environment.",
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