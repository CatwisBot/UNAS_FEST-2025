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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam etrhoncus leo. Nunc in orci eu ante posuere tincidunt ut at felis.Donec vitae imperdiet justo. Aenean id mi sollicitudin, bibendumnunc sed.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam etrhoncus leo. Nunc in orci eu ante posuere tincidunt ut at felis.Donec vitae imperdiet justo. Aenean id mi sollicitudin, bibendumnunc sed.",
    },
};