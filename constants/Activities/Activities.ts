// Cover Image
import KDBICover from "@/public/image/About/Hero/no-photo.jpg";

// Judge
import Purwo from "@/public/image/Activities/Judges/KDBI/Purwo.jpg";
import Laila from "@/public/image/Activities/Judges/KDBI/Laila.jpg";
import Lasman from "@/public/image/Activities/Judges/KDBI/Lasman.jpg";

import Batara from "@/public/image/Activities/Judges/EDC/Batara.jpg";
import Joddy from "@/public/image/Activities/Judges/EDC/Joddy.jpg";
import Maria from "@/public/image/Activities/Judges/EDC/Maria.jpg";

import Donna from "@/public/image/Activities/Judges/SPC/Donna.jpg";
import Efriza from "@/public/image/Activities/Judges/SPC/Efriza.jpg";
import Gani from "@/public/image/Activities/Judges/SPC/Gani.jpg";

import Dhea from "@/public/image/Activities/Judges/Infographic/Dhea.jpg";
import Dhieka from "@/public/image/Activities/Judges/Infographic/Dhieka.jpg";
import Riski from "@/public/image/Activities/Judges/Infographic/Riski.jpg";

import Raden from "@/public/image/Activities/Judges/Short/Raden.jpg";
import Rizky from "@/public/image/Activities/Judges/Short/Rizky.jpg";

import { Activity } from "@/lib/types/Activities/Activities";

export const Activities: Activity[] = [
  {
    path: "KDBI",
    alias: "KDBI",
    title: "Kompetisi Debat Bahasa Indonesia",
    coverImage: KDBICover,
    description:
      "Welcome to Kompetisi Debat Bahasa Indonesia! UNAS FEST 2025 is an event to celebrate the 76th anniversary of Nasional University. One of the competitions that will be held at UNAS FEST 2025 is the Kompetisi Debat Bahasa Indonesia (KDBI). Kompetisi Debat Bahasa Indonesia (KDBI) is an Indonesian language debate competition held as a platform for participants to express their arguments and thoughts on current, relevant and important issues in society. Through this competition, participants are expected to hone their public speaking, critical thinking, and logical and systematic argumentation skills, enabling them to better understand and address the issues around them in a more constructive manner. What are you waiting for? Let’s get prepared to achieve victory in UNAS FEST 2025.",
    guideBook: "/file/Guidebook KDBI UNAS FEST 2025.pdf",
    guideBookName: "Guidebook KDBI UNAS FEST 2025",
    requirements: [
      {
        index: 1,
        detail:
          "Participants register themselves at the registration link that has been listed on the UNAS FEST 2025 website.",
      },
      {
        index: 2,
        detail:
          "Participants are active undergraduate students registered in PDDikti (Pangkalan Data Pendidikan Tinggi) for state and private universities in Indonesia from various study programs.",
      },
      {
        index: 3,
        detail:
          "Participants are teams consisting of two individuals (team members can be male, female, or mixed). The speaker position that participants choose cannot be changed until the competition ends.",
      },
      {
        index: 4,
        detail:
          "Participants come from the same university and can be from different study programs. faculties, or semesters.",
      },
      {
        index: 5,
        detail:
          "Participants must follow the rules that have been determined and listed in the EDC UNAS FEST 2025 guidebook.",
      },
      {
        index: 6,
        detail:
          "Participants who have paid the registration fee and somehow cancelled their participation will not get a refund.",
      },
      {
        index: 7,
        detail:
          "All participants must create a group name that relates to the UNAS FEST 2025 theme, without offending any elements of Ethnicity, Religion, Race, and Intergroup (SARA).",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Purwo Besari",
        image: Purwo,
        school: "Jakarta State University",
        lastEducation:
          "Faculty of Social Sciences",
        role: "Expert",
        description:
          "Purwo Besari is a graduate of the Faculty of Social Sciences at the State University of Jakarta (UNJ). He has experience as a judge in various national debate competitions, such as UNAS FEST, COMMFIESTA, PISN BEM FIS UNJ, UNJ Student Debate Competition, EDUFAIR UNESA, and Hysteric National Debate. His dedication as an invited judge at these events demonstrates his commitment to supporting the development of critical thinking and rhetorical skills among Indonesian students.",
        achievements: [
          "Judges of the Indonesian Student Debate Competition (KDMI) - UPN “Veteran” East Java 2021-2023",
          "Judge for the National School Debate Competition (NSDC) - Tulungagung Regency Level. Tulungagung Regency Education Office - 2021",
          "Judges for the Indonesian Language Debate Competition for Vocational High Schools (SMK) - Tulungagung Regency. Indonesian Language Teachers' Working Group for Vocational High Schools in Tulungagung Regency - 2022",
          "Judges for the COMMFIESTA National Debate Competition organized by HMIK, Andalas University 2022",
          "Judges for the National Debate Competition at the Social Sciences Week (PISN) organized by BEM FIS UNJ 2022",
          "Judges for the 2022 Student Debate Competition at Jakarta State University (UNJ)",
          "Judges for the EDUFAIR National Debate Competition organized by BEM PLS UNESA 2022",
          "Judges of the National Hysterical Debate Competition organized by BEMP History UNJ 2022",
          "Judge for the UNAS FEST National Debate Competition - Jakarta, Indonesia. December 2023",
          "Judge for the UNAS FEST National Debate Competition - Jakarta, Indonesia. September 2024",
        ],
      },
      {
        index: 2,
        name: "Lasman",
        image: Lasman,
        school: "Padjajaran University",
        lastEducation: "-",
        role: "Expert",
        description:
          "Lasman is a graduate of Padjadjaran University from Samarinda who has been active in the world of debate since high school. He is active as a debate judge in various national competitions, including as a guest judge at UNAS FEST, as well as competitions such as Viva Legislativa STMKG, Binus International Festival, EDUFAIR UNESA, PISN BEM FIS UNJ, and various other student and high school debate competitions. Lasman has also been entrusted to serve as the chair and vice-chair of the judging panel for the KDMI and LDBI selection processes in various regions.",
        achievements: [
          "Chairperson of the Indonesian Language Debate Competition (LDBI) for the Greater Jakarta Area by SMAN 8 Kota Tangerang - 2024",
          "Head of the Indonesian Language Debate Competition (LDBI) Jury at the Tangerang Regency Level, Banten by MGMP Bahasa Indonesia Kabupaten Tangerang - 2024",
          "KDMI UNAS FEST Judge - 2024",
          "Invited Judges for the Indonesian Language Debate Competition for Students “Viva Legislativa” STMKG Nasional - 2024",
          "Chairperson of the Indonesian Language Debate Competition (LDBI) at the City Level in Tangerang, Banten, organized by the Indonesian Language Teachers' Association of Tangerang City - 2024",
          "Deputy Chair of the Judging Panel for the Indonesian Student Debate Competition (KDMI) at Padjadjaran University - 2024",
          "Invited Judges for the West Java High School Indonesian Language Debate Competition “Padjadjaran Governance Competition” by the Department of Government Science, Faculty of Social and Political Sciences, Padjadjaran University - 2023",
          "Deputy Chair of the Judging Panel for the Indonesian Student Debate Competition (KDMI) at Padjadjaran University - 2023",
          "Chair of the Internal Selection Committee for the Indonesian Student Debate Competition (KDMI) at the Faculty of Medicine, Mulawarman University - 2022",
          "Invited Judge for the National Student Scientific Debate on “Plant Protection” by the Plant Clinic of the Faculty of Agriculture, Padjadjaran University - 2022",
          "Invited Judge for the National Indonesian Language Debate Competition “Binus International Festival” by the Binus University International Relations Student Association - 2022",
          "Deputy Chair of the Judging Panel for the National Indonesian Language Debate Competition for Students, “Jambi Sumatera Accounting Competition,” organized by the Accounting Student Association of the Faculty of Economics and Business, University of Jambi - 2021",
          "Deputy Chair of the Judging Panel for the National Indonesian Language Debate Competition for Students, “Gebyar Stifarm,” organized by STIFARM Padang - 2021",
          "Invited Judges for the National Student Indonesian Language Debate Competition “Agrocomplex Competition 2021” by Agrokompleks Faperta Universitas Padjadjaran University Level - 2021",
          "Invited Judge for the National High School Indonesian Language Debate Competition “My Speaker Debate Competition” by My Speaker - 2021",
          "Invited Judge for the National High School Indonesian Language Debate Competition “Debate Competition Padjadjaran Education Festival” by Padjadjaran University National Level 2021 - 2021",
          "Judge for the UNAS FEST National Debate Competition - Jakarta, Indonesia. September 2024",
          "Judges for the Kompetisi Debat Bahasa Indonesia (KDBI) UNAS FEST - 2024",
        ],
      },
      {
        index: 3,
        name: "Laila Amalia Khaerani",
        image: Laila,
        school: "Jakarta State University",
        lastEducation: "History Education",
        role: "Expert",
        description:
          "Laila Amalia Khaerani is a graduate of the History Education program at UNJ who has achieved numerous national accolades in the field of debate. She is the Champion of the KDMI UNJ competition and has also won the Best Speaker award at FESTKA UNM and Fastweek. In addition, Laila is actively involved as a judge and chairperson in numerous competitions, including CNC UNSRI, FYG UIN Jakarta, and Leipzig Universitas Gunadarma. Her consistency in both debating and judging has established her as one of the most respected young adjudicators on the national stage.",
        achievements: [
          "Chair of the Judging Panel for the Hysteric National Debate Competition, Jakarta State University - 2023",
          "Chair of the Judging Panel for the Leipzig National Debate Competition, Gunadarma University - 2023",
          "Head Judge of the SMAN 58 Jakarta Tetralogy National Debate Competition - 2023",
          "Chair of the Judging Panel for the KIPK Debate Competition at Jakarta State University - 2023",
          "Invited Judges for the UNJ National Debate Competition - 2023",
          "Judges for the CNDC UNJ National Debate Competition - 2023",
          "Invited Judges for the HCG UNJ National Debate Competition - 2022",
          "Invited Judges for the UNJ Hysteric Debate Competition - 2022",
          "Judges for the UIN Jakarta Political Pillar National Debate Competition - 2022",
          "Invited Judges for the CNC UNSRI National Debate Competition - 2021",
          "Invited Judges for the FYG UIN Jakarta National Debate Competition - 2021",
          "Independent Judge for the GCE UNMUL - 2021",
          "Judges for the Kompetisi Debat Bahasa Indonesia (KDBI) UNAS FEST - 2024",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Regarding the administrative requirements in the Screenshot evidence column for following UNAS FEST social media (TikTok, Instagram, and YouTube), are participants who do not have one of those applications still required to follow?",
        answer:
          "UNAS FEST social media screenshot evidence is mandatory and participants must have proof that they have followed UNAS FEST account and are using their own active personal accounts.",
      },
      {
        question:
          "Regarding the administrative requirements in the UNAS FEST 2025 Twibbon evidence column, are participants required to upload all Twibbon?",
        answer:
          "Yes, because it is a mandatory requirement that must be filled in and uploaded in the UNAS FEST 2025 Twibbon Share Evidence column. All participants, both debater 1 and 2, are required to upload the Twibbon Share to their active personal accounts, and to collect the files in the form of screenshots posted on their respective active Instagram accounts.",
      },
      {
        question:
          "Regarding the screenshot evidence of following UNAS FEST social media, must participants send it separately or combine it into one file?",
        answer:
          "The screenshot evidence of following UNAS FEST social media must be combined into one PDF file.",
      },
      {
        question: "Regarding the administrative requirements in the Delegation Cover Letter column, does the letter have to be signed by the Deputy Rector, Dean, and Deputy Dean, or is it okay if only one of them signs it?",
        answer:
          "It is okay if only one of them signs it, whether it is the Deputy Rector, Dean, or Deputy Dean. The most important thing is that there is a signature and stamp from each campus.",
      },
      {
        question: "Who can participate in the KDBI and EDC UNAS FEST 2025 debate competitions?",
        answer:
          "All active undergraduate students registered in PDDikti (Higher Education Database) from various study programmes and universities, both state and private, who do not yet have a bachelor's degree (S1) are welcome to participate in the competition.",
      },
      {
        question: "If participants want to request a receipt as proof of reimbursement from the university, what are the terms and conditions?",
        answer:
          "Participants can request a receipt directly from the relevant committee. However, please note that such requests cannot be asked suddenly or on the day of the competition.",
      },
      {
        question: "What are the rules for participants in creating team name?",
        answer:
          "Each team must create a team name in accordance with the UNAS FEST 2025 theme without offending any elements of Ethnicity, Religion, Race, and Intergroup (SARA).",
      },
      {
        question: "Can the registration fee be refunded if participants cancel their participation?",
        answer:
          "We apologize, but the registration fee cannot be refunded if participants have already paid and then decide to cancel their participation.",
      },
      {
        question: "If our team is not able to attend the Technical Meeting and Webinar due to certain constraints, what should we do? Is it allowed?",
        answer:
          "Participants are required to attend the Technical Meeting (TM) and Webinar, or at least send one representative from the team.",
      },
      {
        question: "Is there an obligation to share the KDBI & EDC UNAS FEST 2025 flyer?",
        answer:
          "Regarding this, participants are required to share the KDBI & EDC flyer on their Instagram stories and upload the UNAS FEST 2025 Twibbon.",
      },
    ],
  },
  {
    path: "EDC",
    alias: "EDC",
    title: "English Debate Competition",
    coverImage: KDBICover,
    description:
      "Welcome to the English Debate Competition! UNAS FEST 2025 is an event to celebrate the 76th anniversary of Nasional University. One of the competitions that will be held at UNAS FEST 2025 is the English Debate Competition (EDC). English Debate Competition (EDC) is an English language debate competition held as a means where the participants deliver their argumentation and thoughts regarding current issues. What are you waiting for? Let’s get prepared to achieve victory in UNAS FEST 2025.",
    guideBook: "/file/Guidebook EDC UNAS FEST 2025.pdf",
    guideBookName: "Guidebook EDC UNAS FEST 2025",
    requirements: [
      {
        index: 1,
        detail:
          "Participants register themselves at the registration link that has been listed on the UNAS FEST 2025 website.",
      },
      {
        index: 2,
        detail:
          "Participants are active undergraduate students registered in PDDikti (Pangkalan Data Pendidikan Tinggi) for state and private universities in Indonesia from various study programs.",
      },
      {
        index: 3,
        detail:
          "Participants are teams consisting of two individuals (team members can be male, female, or mixed). The speaker position that participants choose cannot be changed until the competition ends.",
      },
      {
        index: 4,
        detail:
          "Participants come from the same university and can be from different study programs. faculties, or semesters.",
      },
      {
        index: 5,
        detail:
          "Participants must follow the rules that have been determined and listed in the EDC UNAS FEST 2025 guidebook.",
      },
      {
        index: 6,
        detail:
          "Participants who have paid the registration fee and somehow cancelled their participation will not get a refund.",
      },
      {
        index: 7,
        detail:
          "All participants must create a group name that relates to the UNAS FEST 2025 theme, without offending any elements of Ethnicity, Religion, Race, and Intergroup (SARA).",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "-",
        image: Batara,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
      {
        index: 2,
        name: "-",
        image: Joddy,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
      {
        index: 3,
        name: "-",
        image: Maria,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Regarding the administrative requirements in the Screenshot evidence column for following UNAS FEST social media (TikTok, Instagram, and YouTube), are participants who do not have one of those applications still required to follow?",
        answer:
          "UNAS FEST social media screenshot evidence is mandatory and participants must have proof that they have followed UNAS FEST account and are using their own active personal accounts.",
      },
      {
        question:
          "Regarding the administrative requirements in the UNAS FEST 2025 Twibbon evidence column, are participants required to upload all Twibbon?",
        answer:
          "Yes, because it is a mandatory requirement that must be filled in and uploaded in the UNAS FEST 2025 Twibbon Share Evidence column. All participants, both debater 1 and 2, are required to upload the Twibbon Share to their active personal accounts, and to collect the files in the form of screenshots posted on their respective active Instagram accounts.",
      },
      {
        question:
          "Regarding the screenshot evidence of following UNAS FEST social media, must participants send it separately or combine it into one file?",
        answer:
          "The screenshot evidence of following UNAS FEST social media must be combined into one PDF file.",
      },
      {
        question: "Regarding the administrative requirements in the Delegation Cover Letter column, does the letter have to be signed by the Deputy Rector, Dean, and Deputy Dean, or is it okay if only one of them signs it?",
        answer:
          "It is okay if only one of them signs it, whether it is the Deputy Rector, Dean, or Deputy Dean. The most important thing is that there is a signature and stamp from each campus.",
      },
      {
        question: "Who can participate in the KDBI and EDC UNAS FEST 2025 debate competitions?",
        answer:
          "All active undergraduate students registered in PDDikti (Higher Education Database) from various study programmes and universities, both state and private, who do not yet have a bachelor's degree (S1) are welcome to participate in the competition.",
      },
      {
        question: "If participants want to request a receipt as proof of reimbursement from the university, what are the terms and conditions?",
        answer:
          "Participants can request a receipt directly from the relevant committee. However, please note that such requests cannot be asked suddenly or on the day of the competition.",
      },
      {
        question: "What are the rules for participants in creating team name?",
        answer:
          "Each team must create a team name in accordance with the UNAS FEST 2025 theme without offending any elements of Ethnicity, Religion, Race, and Intergroup (SARA).",
      },
      {
        question: "Can the registration fee be refunded if participants cancel their participation?",
        answer:
          "We apologize, but the registration fee cannot be refunded if participants have already paid and then decide to cancel their participation.",
      },
      {
        question: "If our team is not able to attend the Technical Meeting and Webinar due to certain constraints, what should we do? Is it allowed?",
        answer:
          "Participants are required to attend the Technical Meeting (TM) and Webinar, or at least send one representative from the team.",
      },
      {
        question: "Is there an obligation to share the KDBI & EDC UNAS FEST 2025 flyer?",
        answer:
          "Regarding this, participants are required to share the KDBI & EDC flyer on their Instagram stories and upload the UNAS FEST 2025 Twibbon.",
      },
    ],
  },
  {
    path: "SPC",
    alias: "SPC",
    title: "Scientific Paper Competition",
    coverImage: KDBICover,
    description:
      "The Scientific Paper Competition at UNAS FEST 2025 is organized for participants to submit scientific papers based on research results using data collection methods such as observation, interviews, questionnaires, and focus group discussions (FGD). The papers must be systematically structured, written in proper Indonesian, and adhere to scientific principles that can be accounted for. This competition aims to cultivate students who are concerned about environmental and social issues, as well as those who possess sharp analytical skills and critical thinking. Through the process of writing and presenting their scientific papers to the panel of judges, participants are expected to enhance their scientific communication skills, public speaking, and the ability to defend their arguments comprehensively.",
    guideBook: "/file/Guidebook SPC UNAS FEST 2025.pdf",
    guideBookName: "Guidebook SPC UNAS FEST 2025",
    requirements: [
      {
        index: 1,
        detail:
          "Participants of the Scientific Paper Competition UNAS FEST 2025 must be active undergraduate (S1) students registered in PDDIKTI (Higher Education Database) from various study programs and both public and private universities in Indonesia.",
      },
      {
        index: 2,
        detail:
          "Participants of the Scientific Paper Competition UNAS FEST 2025 must not have previously obtained a bachelor's degree (S1).",
      },
      {
        index: 3,
        detail:
          "The Scientific Paper Competition UNAS FEST 2025 is an individual competition and does not allow group participation.",
      },
      {
        index: 4,
        detail:
          "Participants are required to download the Scientific Paper Competition UNAS FEST 2025 guideline book and understand all the rules stated in the guideline.",
      },
      {
        index: 5,
        detail:
          "Participants of the Scientific Paper Competition UNAS FEST 2025 are required to take part in all stages of the competition as determined by the organizing committee, starting from the initial phase to the final stage, including the Technical Meeting and the final presentation (if the participant qualifies).",
      },
      {
        index: 6,
        detail:
          "For participants of the Scientific Paper Competition UNAS FEST 2025 who have paid the registration fee and then withdrawn from the competition, the fee is non-refundable under any circumstances.",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Mouliza Kristhoper Donna Sweinstani",
        image: Donna,
        school: "University of Indonesia",
        lastEducation:
          "Political Science",
        role: "Expert",
        description:
          "Mouliza Kristhopher Donna Sweinstani is a young and accomplished academic and researcher in the field of political science. A graduate of Diponegoro University (summa cum laude) and the University of Indonesia (cum laude), she actively writes scholarly works on political education and women's representation. She also works as a researcher at the BRIN Political Research Center and as a lecturer at several universities. Mouliza's dedication to developing youth politics and strengthening academic and socio-political contributions in Indonesia is evident through her accomplishments. She was a speaker at the Tokyo Youth Democracy Forum 2024, a recipient of the Mata Garuda Prize LPDP 2021, and the founder of the Indonesia Youth Political Institute.",
        achievements: [
          "Winner of the MG Prize Award in the field of Politics, Law, and Peace – LPDP, Ministry of Finance (2021)",
          "National Best Literary Works in Electoral Literature – National Library of Indonesia (2019)",
          "Indonesian Spokesperson at the Japan Youth Democracy Forum – Government of Japan (2024)",
          "Copyright for the Political Party Institutionalization Index Instrument – No. 000471732 (2023)",
          "Recipient of an LPDP scholarship to study for a Master's degree in Political Science at the University of Indonesia (2015–2017)",
        ],
      },
      {
        index: 2,
        name: "Efriza, S.IP., M.Si.",
        image: Efriza,
        school: "National University",
        lastEducation: "Polithical Science",
        role: "Expert",
        description:
          "Efriza is a political science academic and researcher who actively teaches at UNPAM PSDKU Serang and STIP-AN. He is a prolific writer, having published 13 books, including Sosiologi Kekuasaan (Sociology of Power) in 2023 and Pengantar Politik (Introduction to Politics) in 2021. He is also a columnist for Telisik.id. Additionally, he is involved with AIPI, serves as a journal reviewer, and founded the Citra Institute and CV Kreasi Cendekia Pustaka. For all these reasons, he is known as an active and influential political observer in Indonesia.",
        achievements: [
          "Judge in the 73rd Anniversary Scientific Paper Competition of Universitas Nasional (2022). Theme: Millennial Innovation in Realizing Food Security in Indonesia in the Era of Digitalization 5.0",
          "Judge in the National University Festival (UNASFEST) Scientific Paper Competition (2024). Theme: Exploring the Potential of Renewable Energy Through Technology Innovation to Achieve Global Green Momentum",
          "Member of the Voting Organizing Group (KPPS) (2024) KPU-RI, contributing to the implementation of national elections",
          "External Judge for the National Scientific Writing Competition (2022) UNAS Faculty of Law, Theme: The Role of the Government in Anti-Corruption Enforcement",
          "Permanent Lecturer with the position of Assistant Expert (2021 – present) Pamulang University, field of Government Science",
        ],
      },
      {
        index: 3,
        name: "Gani Putri Aryanto",
        image: Gani,
        school: "National University",
        lastEducation: "Midwifery",
        role: "Expert",
        description:
          "Gani Putri Aryanto is a student in the Midwifery Undergraduate Program at Universitas Nasional (UNAS), known for her outstanding achievements and active self-development in both academic and non-academic fields. Since beginning her studies in 2022, she has shown a high dedication to the world of midwifery through her involvement in campus activities, soft skills training, and by winning 1st Place at the National Level in an essay competition organized by the HMP of Midwifery at Universitas Muhammadiyah Jakarta. Additionally, Gani also channels her interest in writing through her personal blog and actively builds a professional network, reflecting her strong commitment to developing her knowledge and skills in the healthcare field.",
        achievements: [
          "Recipient of the Ministry of Education, Culture, Research, and Technology's Unggulan Scholarship (2023)",
          "1st Place Winner of the National Midwifery Competition, Faculty of Health Sciences, Wiraraja University (2024)",
          "1st Place Winner of the National Scientific Essay Competition, Muhammadiyah University Jakarta (2023)",
          "Recipient of PKM Belmawa Ditjen Dikti Funding in the field of Exact Research (PKM-RE) (2024)",
          "Finalist in the National Literature Review Competition, Faculty of Medicine, University of North Sumatra (2025)",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Who is eligible to participate in the Scientific Paper Competition (SPC) at UNAS FEST 2025?",
        answer:
          "The competition is open to all active undergraduate (S1) students from public or private universities in Indonesia who are registered in the PDDIKTI database and have not yet earned a bachelor's degree.",
      },
      {
        question: "Is this competition individual or team-based?",
        answer:
          "SPC UNAS FEST 2025 is an individual competition and does not allow team participation.",
      },
      {
        question: "What is the registration fee and when is the payment period?",
        answer: [
          "Early Bird: Rp115.000 (25–31 August 2025)",
          "Phase 1: Rp135.000(1–13 September 2025)",
          "Phase 2: Rp150.000(14–26 September 2025)",
        ]
      },
      {
        question: "Is the registration fee refundable if a participant withdraws?",
        answer:
          "No. The registration fee is non-refundable under any circumstances.",
      },
      {
        question: "How is the competition assessed?",
        answer: [
          "The assessment is conducted in stages:",
          "Preliminary Round: based on the participant’s outstanding achievements.",
          "Semifinal Round: based on the submitted paper (presentation, substance, and quality).",
          "Final Round: based on the presentation of the paper (material delivery, ability to answer questions, and theme relevance).",
          "In the national-level Scientific Paper Competition of UNAS FEST 2025, scores from the preliminary round will not be carried over and will be reset at the semifinal round. The final score is determined by a weighted calculation: 60% from the semifinal round and 40% from the final round.",
        ]
      },
      {
        question: "Does the paper have to be written in English?",
        answer:
          "No. The scientific paper can be written in Indonesian; however, the abstract must be written in both English and Indonesian.",
      },
      {
        question: "Is there a page limit for the paper?",
        answer:
          "Yes. The scientific paper for SPC UNAS FEST 2025 must be a maximum of 10 pages, counted from the title to the references section, excluding appendices.",
      },
      {
        question: "What is the deadline for submitting the scientific paper?",
        answer:
          "The deadline for submission is October 17, 2025.",
      },
      {
        question: "Will participants receive a certificate?",
        answer:
          "All SPC participants will receive a certificate as a form of appreciation.",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "Winners will be announced on November 10, 2025.",
      },
    ],
  },
  {
    path: "Infographic",
    alias: "Infographic",
    title: "Infographic Competition",
    coverImage: KDBICover,
    description:
      "The Infographics competition aims to encourage participants to think critically and creatively, while being able to present information in a concise, accurate, and easily understandable manner. Besides honing design skills and visual message delivery, participants are also invited to increase their awareness of global issues relevant to daily life. The Infographics competition carries the theme “Conducting a Preventive Action for Deforestation Through AI-Assisted Technology Innovation in Acquiring a Resilience and Sustainable Ecosystem,” which discusses the importance of preventing deforestation by utilizing artificial intelligence (AI)-based technology to build ecosystems that are resilient to various threats and remain sustainable. The competition targets 15 teams consisting of active high school students from SMA, MAN, and SMK in the JABODETABEK area. Activities begin with a webinar to equip participants with the skills, knowledge, and understanding necessary to create their works.The Infographics competition consists of three stages: Administrative Selection, Semifinals, and Finals—all conducted online, followed by an onsite awarding ceremony.",
    guideBook: "/file/Guidebook Infographic UNAS FEST 2025.pdf",
    guideBookName: "Guidebook Infographic UNAS FEST 2025",
    requirements: [
      {
        index: 1,
        detail:
          "Participants must follow the competition theme as determined by the committee.",
      },
      {
        index: 2,
        detail:
          "Submitted works must be the original creation of the participants, not plagiarized, and must not have been submitted or published in other competitions.",
      },
      {
        index: 3,
        detail:
          "Works must not contain elements of SARA (ethnic, religious, racial, and inter-group issues), violence, pornography, hate speech, foul language, or other content that violates the norms, ethics, and laws applicable in Indonesia.",
      },
      {
        index: 4,
        detail:
          "The submission process consists of two stages. Participants are required to upload their work on their personal social media accounts and submit the infographic in PDF format through the official Unas Fest 2025 website.",
      },
      {
        index: 5,
        detail:
          "The social media account used for uploading must be public (not private) throughout the competition period.",
      },
      {
        index: 6,
        detail:
          "The organizing committee reserves the right to disqualify participants who do not comply with the requirements or are proven to commit any form of cheating.",
      },
      {
        index: 7,
        detail:
          "The judges’ decisions are final, binding, and cannot be contested.",
      },
      {
        index: 8,
        detail:
          "Participants are free to use any graphic design software such as Freehand, Corel Draw, Adobe Photoshop, Canva, or similar applications; however, the use of AI-based software is prohibited.",
      },
      {
        index: 9,
        detail:
          "The infographic design quality must be full HD resolution to ensure optimal image sharpness and compliance with platform specifications.",
      },
      {
        index: 10,
        detail:
          "Infographic works must combine text, graphics, illustrations, and icons that support each other to deliver information clearly, systematically, and effectively.",
      },
      {
        index: 11,
        detail:
          "Recommended infographic design size is in a 4:5 (portrait) ratio to optimize display on social media.",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Dhea Marela Salman, S.IP.",
        image: Dhea,
        school: "-",
        lastEducation:
          "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
      {
        index: 2,
        name: "Dhieka Avrilia Lantana, S.Kom., M.Kom.",
        image: Dhieka,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
      {
        index: 3,
        name: "Riski Ramadhan Budhianto, S.Sos.",
        image: Riski,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What are the allowed size and orientation for Infographics?",
        answer:
          "A3 size (297x420 mm) with portrait orientation.",
      },
      {
        question: "What file format should be submitted?",
        answer:
          "The required file format for participants is PDF.",
      },
      {
        question: "Can the work be created using free applications such as Canva?",
        answer:
          "Yes, it is allowed. Participants are permitted to use any software or application as long as the result does not deviate from the guidelines.",
      },
      {
        question: "Is the theme of the work predetermined?",
        answer:
          "Yes, participants are permitted to use one of the three sub-themes listed in the Guide Book.",
      },
      {
        question: "Is it permissible to use photos and illustrations?",
        answer:
          "Yes, it is allowed. However, the source of the photo must be credited if it is not the participant’s own work.",
      },
      {
        question: "Can the work be in English?",
        answer:
          "Yes, it is permitted. However, Indonesian must still dominate the work.",
      },
      {
        question: "Does the design have to be full color?",
        answer:
          "No, monochrome designs are still permitted as long as the message remains clear.",
      },
      {
        question: "Can the work be more than one page?",
        answer:
          "No, the work is only permitted to be one page.",
      },
    ],
  },
  {
    path: "Short-Video",
    alias: "Short Video",
    title: "Short Video Competition",
    coverImage: KDBICover,
    description:
      "The Short Video competition is a contest for brief videos typically lasting from 15 seconds up to 3 minutes, designed to convey messages in a concise, creative, and informative manner. The theme, “Conducting a Preventive Action for Deforestation Through AI-Assisted Technology Innovation in Acquiring a Resilience and Sustainable Ecosystem,” addresses the importance of preventing deforestation by utilizing artificial intelligence (AI)-based technology to build ecosystems that are resilient to various threats and sustainable over time. The Short Video competition targets 15 teams consisting of active high school students from SMA, MAN, and SMK in the JABODETABEK area. The activity begins with a webinar aimed at providing participants with the skills, knowledge, and understanding needed to create effective Short Video works. The competition consists of three stages: Administrative Selection, Semifinals, and Finals — all conducted online, followed by an onsite awarding ceremony.",
    guideBook: "/file/Guidebook Short Video UNAS FEST 2025.pdf",
    guideBookName: "Guidebook Short Video UNAS FEST 2025",
    requirements: [
      {
        index: 1,
        detail:
          "Video duration must be a maximum of 3 minutes and a minimum of 60 seconds.",
      },
      {
        index: 2,
        detail:
          "The video theme must correspond to the competition theme determined by the committee.",
      },
      {
        index: 3,
        detail:
          "Use of content containing elements of SARA (ethnic, religious, racial, and social issues), pornography, violence, or plagiarism is prohibited.",
      },
      {
        index: 4,
        detail:
          "Each participant may submit only one (1) video.",
      },
      {
        index: 5,
        detail:
          "Accepted video formats: MP4 or MOV, with a minimum resolution of 720p.",
      },
      {
        index: 6,
        detail:
          "Language is free; if using regional or foreign languages, Indonesian subtitles are required.",
      },
      {
        index: 7,
        detail:
          "Videos must not violate copyright laws (music, footage, etc. must be licensed or authorized).",
      },
      {
        index: 8,
        detail:
          "Uploaded works must be original creations of the participants, not plagiarized, and not previously submitted or published in other competitions.",
      },
      {
        index: 9,
        detail:
          "Participants must upload their works on specified social media platforms (YouTube, Instagram, or TikTok) including the official competition hashtag and tag the official UNAS FEST account.",
      },
      {
        index: 10,
        detail:
          "The submission process consists of two stages. Participants are required to upload their work on their personal social media accounts and submit the video file in MP4 format (Short Video) through the official Unas Fest 2025 website.",
      },
      {
        index: 11,
        detail:
          "The organizers reserve the right to disqualify any participant who violates these terms or is proven to commit fraud in any form.",
      },
      {
        index: 12,
        detail:
          "The judges' decisions are final, binding, and cannot be contested.",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Raden Daniel Wisnu Wardhana, S.IP., M.F.Tv.",
        image: Raden,
        school: "-",
        lastEducation:
          "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
      {
        index: 2,
        name: "Rizky Wahyu Sugandhi",
        image: Rizky,
        school: "-",
        lastEducation: "-",
        role: "Expert",
        description:
          "-",
        achievements: [
          "-",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What is the allowed video duration?",
        answer:
          "The minimum duration is 1 minute and the maximum is 3 minutes.",
      },
      {
        question:
          "What file format should be used?",
        answer:
          "MP4 with a minimum resolution of 1080p.",
      },
      {
        question:
          "Is it allowed to use music or video clips from other parties?",
        answer:
          "It is allowed if the video/music is copyright-free or has obtained official permission.",
      },
      {
        question: "Is the theme of the work predetermined?",
        answer:
          "Yes, participants are permitted to use one of the three sub-themes listed in the Guide Book.",
      },
      {
        question: "Is the use of animation permitted?",
        answer:
          "Yes, it is permitted as long as it aligns with the theme and competition rules.",
      },
      {
        question: "Is it permitted to include a personal watermark?",
        answer:
          "Yes, it is permitted. Participants are also required to include the UNAS FEST 2025 watermark.",
      },
      {
        question: "Can a team include members from different schools?",
        answer:
          "No, all team members must be from the same school and may have different majors.",
      },
      {
        question: "Is it permitted to use stock footage from the internet?",
        answer:
          "Yes, it is permitted if it is copyright-free and does not dominate the work.",
      },
    ],
  },
];