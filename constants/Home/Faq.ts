export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const FaqData: FaqItem[] = [
  {
    question: "What is UNAS FEST?",
    answer:
      "UNAS FEST 2025 is a national academic and creative festival organized by Universitas Nasional. This festival accommodates competitions for high school/vocational high school students to enhance their critical thinking, scientific writing, and digital creativity skills",
  },
  {
    question: "What is the theme of this year’s UNAS FEST?",
    answer:
      "This year, UNAS FEST carries the theme “Conducting a Preventive Action for Deforestation Through AI-Assisted Technology Innovation in Acquiring a Resilience and Sustainable Ecosystem”.",
  },
  {
    question: "What competitions are there in UNAS FEST 2025?",
    answer: [
      "English Debate Competition",
      "Kompetisi Debat Bahasa Indonesia",
      "Scientific Paper Competition",
      "Short Video Competition",
      "Infographics Competition",
    ],
  },
  {
    question:
      "Who can participate in UNAS FEST 2025?",
    answer:
      "Debate competition and Scientific Competition is for for universities students in Indonesia, and Digital Content Competition is open for high school students in Jabodetabek",
  },
  {
    question: "When does registration for UNAS FEST 2025 open?",
    answer: [
      "Early Bird: September 1–7, 2025",
      "Phase 1: September 8–19, 2025",
      "Phase 2: September 20–28, 2025",
    ],
  },
  {
    question: "How to register for UNAS FEST?",
    answer:
      "Registration for the competition can be done through UNAS FEST 2025 Caturnawa website.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, each competition has different registration fees. Details of the fees are listed on UNAS FEST official website.",
  },
  {
    question: "Will the competitions be held online or onsite?",
    answer:
      "The entire UNAS FEST 2025 series will be held online through the official platform determined by the committee and UNAS FEST awarding ceremony will be held onsite in Universitas Nasional.",
  },
  {
    question: "Who are the adjudicators for the competition at UNAS FEST?",
    answer:
      "The adjudicators consist of academics, practitioners, influencers, and professionals in their respective fields of competition.",
  },
  {
    question: "Will there be certificates for participants and winners of the competition?",
    answer:
      "All participants from all competition categories will receive an e-certificate as a token of appreciation.",
  },
];
