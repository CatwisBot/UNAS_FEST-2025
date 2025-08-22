// Cover Image
import KDBICover from "@/public/image/Activities/Cover/coverKDBI.png";
import SPCCover from "@/public/image/Activities/Cover/Gemini_Generated_Image_vfn6iyvfn6iyvfn6.png"
// Juri KDBI
import kyla from "@/public/image/Activities/judges/Kylas.jpg";

//Juri EDC
import jerry from "@/public/image/Activities/judges/Jerry.jpg";

//Juri SPC
import hisyam from "@/public/image/Activities/judges/Hisyam.jpg";

// Juri DCC
import fuecoco from "@/public/image/Activities/judges/Fuecoco.jpg";

import { Activity } from "@/lib/types/Activities/Activities";

export const Activities: Activity[] = [
  {
    path: "IDC",
    title: "Indonesian Debate Competition",
    coverImage: KDBICover,
    description:
      "Welcome to the Indonesian Debate Competition! UNAS FEST 2025 is an event held to celebrate the 76th anniversary of Universitas Nasional. One of the competitions to be held at UNAS FEST 2025 is the Indonesian Debate Competition (IDC). The Indonesian Language Debate Competition (KDBI) is a debate competition conducted in the Indonesian language, serving as a platform for participants to present their arguments and ideas on current issues. What are you waiting for? Get ready to secure victory at UNAS FEST 2025!",
    guideBook: "/File/tes.pdf",
    guideBookName: "Guide_Book_IDC",
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
        image: kyla,
        lastEducation:
          "Faculty of Social Sciences, Jakarta State University",
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
        image: kyla,
        lastEducation: "Padjadjaran University",
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
          "Judges for the Indonesian Debate Competition (IDC) UNAS FEST - 2024",
        ],
      },
      {
        index: 3,
        name: "Laila Amalia Khaerani",
        image: kyla,
        lastEducation: "History Education at UNJ",
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
          "Judges for the Indonesian Debate Competition (IDC) UNAS FEST - 2024",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Regarding the administrative requirements in the Screenshot column for following Unas Fest social media (TikTok, Instagram, and YouTube), are participants who do not have one of these applications still required to follow them?",
        answer:
          "For UNAS FEST social media screenshots, participants must provide proof that they have followed the UNAS FEST account and are using their own active personal accounts.",
      },
      {
        question:
          "Regarding the administrative requirements in the UNAS FEST 2025 Twibbon proof column, are participants required to upload all Twibbons?",
        answer:
          "Mandatory, as this is a required field that must be filled out and uploaded in the “UNAS FEST 2025 Twibbon Share Proof” column. All participants, including Debaters 1 and 2, are required to upload the Twibbon Share to their active personal accounts. The files must be submitted in the form of screenshots posted on each participant's active Instagram account.",
      },
      {
        question:
          "Regarding the screenshot evidence of following UNAS FEST social media, should participants send it separately or combine it into one file?",
        answer:
          "For the screenshot proof of following UNAS FEST's social media, it should be combined into one file and saved as a PDF file.",
      },
      {
        question: "Regarding the administrative requirements in the Delegation Cover Letter column, does the letter have to be signed by the Vice Rector, Dean, and Vice Dean, or is it okay if it is signed by just one of them?",
        answer:
          "Yes, if it is only one of them, whether it is the Vice Rector, Dean, or Vice Dean. The most important thing is that there are signatures and stamps from their respective campuses.",
      },
      {
        question: "Who can participate in the IDC and EDC UNAS FEST 2025 debate competitions?",
        answer:
          "All active undergraduate students registered in PDDikti (Higher Education Database) from various study programs and universities, both public and private, who do not yet have a bachelor's degree (S1) are eligible to participate in the competition.",
      },
      {
        question: "If you wish to request a receipt as proof of reimbursement from the university, what are the terms and conditions?",
        answer:
          "Participants can request a receipt directly from the relevant committee. However, please note that such requests cannot be made suddenly or on the day of the competition.",
      },
      {
        question: "What are the rules for participants in creating team names?",
        answer:
          "Each team must create a team name in accordance with the theme of UNAS FEST 2025 without containing elements of ethnicity, religion, race, and intergroup relations (SARA).",
      },
      {
        question: "Are registration fees refundable if participants cancel their participation?",
        answer:
          "We apologize, but registration fees are non-refundable if participants have paid and then decide to cancel their participation.",
      },
      {
        question: "If our team is unable to attend the Technical Meeting and Webinar due to certain constraints, what should we do? Is it permissible?",
        answer:
          "Participants must attend the Technical Meeting (TM) and Webinar, or at least send one representative from the team.",
      },
      {
        question: "Is there an obligation to distribute IDC & EDC UNAS FEST 2025 flyers?",
        answer:
          "In relation to this, participants are required to share IDC & EDC flyers on their Instagram stories and upload the UNAS FEST 2025 Twibbon.",
      },
    ],
  },
  {
    path: "EDC",
    title: "English Debate Competition",
    coverImage: KDBICover,
    description:
      "Welcome to the English Debate Competition! UNAS FEST 2025 is an event to celebrate the 76th anniversary of Nasional University. One of the competitions that will be held at UNAS FEST 2025 is the English Debate Competition (EDC). English Debate Competition (EDC) is an English language debate competition held as a means where the participants deliver their argumentation and thoughts regarding current issues. What are you waiting for? Let’s get prepared to achieve victory in UNAS FEST 2025.",
    guideBook: "/File/tes.pdf",
    guideBookName: "Guide_Book_EDC",
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
        name: "Jerry a Mouse",
        image: jerry,
        linkedin: "",
        lastEducation:
          "Bachelor's Degree in History Education, State University of Jakarta ",
        description:
          "Is a graduate of History Education at the State University of Jakarta. Has an outstanding record in various national debate competitions, such as being the chief judge of the Jakarta State University Hysteric national debate competition 2023, the chief judge of the Gunadarma University Leipzig national debate competition 2023, the chief judge of the Tetralogy national debate competition SMAN 58 Jakarta 2023, the chief judge of the Jakarta State University KIPK debate competition 2023, the invitation judge of the UNJ National Debate Competition 2023, the judge of the UNJ CNDC national debate competition 2023, the invitation judge of the UNSRI CNC national debate competition 2021, invitation judge of FYG UIN Jakarta national debate competition 2021, Independent GCE UNMUL judge 2021, National KDMI UNJ Institution judge 2021, 1st place winner of FESTKA UNM debate competition 2023, 1st place winner of Esa Unggul national debate competition 2023, 1st place winner of UNTAN National Education Fair debate competition 2022, 1st place in the UNJ KDMI competition 2022, 1st place in the national debate competition at the State University of Malang Rhetoric Festival 2021, 1st place in the Sociology Fair debate competition at Andalas University 2021, 5 best speakers in the PIF debate competition at Andalas University 2021, and 3rd place in the UNJ KDMI selection 2021.",
        achievements: [
          "1st place in FESTKA UNM Debate Competition, 2023",
          "1st place in Esa Unggul National Debate Competition, 2023",
          "3rd place in Pertiwi IDN Debate Competition, 2023",
          "4th place in Fastweak X Debate Competition, 2023",
          "Top 10 Best Speaker in Fastweak X Debate Competition, 2023",
          "1st place in National Education Fair Debate Competition at UNTAN, 2022",
          "1st place in KDMI UNJ Debate Competition, 2022",
          "2nd Best Speaker in KDMI UNJ Debate Competition, 2022",
          "UNJ Delegate for KDMI, 2022",
          "3rd place in FEBI Debate Competition, 2022",
          "Best Speaker in Fastweek Debate Competition, 2022",
        ],
      },
      {
        index: 2,
        name: "Jerry a Mouse",
        image: jerry,
        linkedin: "https://www.linkedin.com/in/insanykhausari/",
        lastEducation: "Industrial Engineering at President University",
        description:
          "An Industrial Engineering student with over 1 year of experience in the business field, specifically in the home industry, by creating the company profile and arranging the production report, with strong critical analytical abilities. I have participated in 20+ debate competitions and served as a breaking adjudicator for judging the debate competitions with excellent scores. Additionally, I have experience in essay writing, as well as in academic and non-academic Olympiads and scientific paper competitions.",
        achievements: [
          "Juri Independen Terbaik NDCC Pra-LDBI 2024 by National Debate Community Center (September 2024)",
          "Juri Terakrediatasi NDCC Pra-LDBI 2024 Asian Parlementer by National Debate Community Center (September 2024)",
          "Best Independent Adjudicator 3 of TACTICS debate competition 2024 by Universitas Bunda Mulia (June 2024)",
          "Breaking Adjudicator dan Juri Terakreditas DSK Open 2024 British Parlementer by Debate Sinergi Kebhinekaan (August 2024)",
          "Core Adjudicators Panel (Ketua Juri) Teenaction Debate Competition 2024 by SMAN 5 Bekasi (August 2024)",
          "National Delegate of N1 independent adjudicator KDMI 2023 and KDMI 2024 by PUSPERNAS (September 2023 & July 2024)",
          "Judge for Management Introduction Debate Session by PUMA Management President Univ 2023",
          "Invited Adjudicator of HIPOTEX Debate Competition 2024 by IPB University",
          "Invited Adjudicator of VSCE Debate Competition 2024 by IPB University",
          "Invited Adjudicator of KOMBATNAS Debate Competition 2024 by Universitas Negeri Malang",
          "Invited Adjudicator of English Festival Debate Competition 2024 by Universitas Riau",
          "Invited Adjudicator of Baris Science Festival Debate Competition 2024 by Universitas Brawijaya",
          "3rd Winner of Debate NSEDC 2024 by Universitas Mataram (September 2024)",
          "4th Winner of Cogito National Debate Competition 5.0 by Universitas Sriwijaya (September 2024)",
          "10th Best Speaker of Economic Debate Competition by Universitas Andalas (October 2024)",
          "Best Speaker 5 Viva Legislativa Debate Competition - STMKG 2024 (June 2024)",
          "Octofinalist of Kompetisi Debat Nusantara by Debat Nusantara (May 2024)",
          "Best Speaker of Freshman Trophy Debate Competition by President University (October 2023)",
          "Grand finalist of PUDN Debate Competition by President University (June 2023)",
          "Grand finalist of VETION Day Debate Competition by Institut Pertanian Bogor (April 2023)",
          "Octofinalist of Newbies UI English Debate Competition by Universitas Indonesia (November 2022)",
          "10th Best Paper of Scientific Paper by Universitas Kristen Indonesia (August 2021)",
          "National Delegate MTQMN English Quran Debate Competition by PUSPERNAS (November 2023)",
          "Official Delegate of APBN Olympics by KEMENKEU INDONESIA in Region Area (July 2021)",
          "Official Delegate of English Debate Competition (ATMA OPEN 2023, ASIAN ENGLISH OLYMPICS 2023, and others)",
          "2nd Winner of Indonesia Debate FLS2N Competition 2018",
        ],
      },
      {
        index: 3,
        name: "Jerry A Mouse",
        image: jerry,
        linkedin: "https://www.linkedin.com/in/purwobesari/?jobid=1234",
        lastEducation: "Educational Management at State University of Jakarta",
        description:
          "Purwo is passionate about education, with a keen interest in human development and the dynamics of social media content. His expertise in the learning and development sector is evidenced by his roles as a public speaker and tutor. Purwo is deeply invested in the realm of human development and aspires to simultaneously excel as a specialist in learning, training, and content creation.",
        achievements: [
          "Awardee of Bakti Nusa 9",
          "Participant in Asia University Summer Program",
          "1st Winner of Most Outstanding Student Selection in Faculty of Educationn",
          "1st Winner of National Education Debate Competition",
          "Speaker of Talkshow Hari Guru ke-73",
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
        question: "if our team is not able to attend the Technical Meeting and Webinar due to certain constraints, what should we do? Is it allowed?",
        answer:
          "Participants are required to attend the Technical Meeting (TM) and Webinar, or at least send one representative from the team.",
      },
      {
        question: "Is there an obligation to share the KBDI & EDC UNAS FEST 2025 flyer?",
        answer:
          "Regarding this, participants are required to share the KDBI & EDC flyer on their Instagram stories and upload the UNAS FEST 2025 Twibbon.",
      },
    ],
  },
  {
    path: "SPC",
    title: "Scientific Paper Competition",
    coverImage: KDBICover,
    description:
      "The UNAS FEST 2025 Scientific Paper Competition is a department that organizes a scientific paper competition based on research results using data collection methods such as observation, interviews, questionnaires, and focus group discussions (FGD). The papers are systematically structured, written in proper and correct Indonesian, and follow scientific principles that are accountable. This competition aims to produce students who are concerned about environmental and social issues and possess sharp analytical skills and critical thinking abilities. Through the process of writing and presenting scientific papers to the judging panel, participants are expected to hone their scientific communication skills, public speaking abilities, and the capacity to defend their arguments coherently.",
    guideBook: "/File/tes.pdf",
    guideBookName: "Guide_Book_SPC",
    requirements: [
      {
        index: 1,
        detail:
          "Participants in the UNAS FEST 2025 Scientific Paper Competition are active undergraduate students enrolled in PDDIKTI (Higher Education Database) from various study programs and public and private universities in Indonesia.",
      },
      {
        index: 2,
        detail:
          "Participants in the UNAS FEST 2025 Scientific Paper Competition must be students who have not yet obtained a bachelor's degree (S1).",
      },
      {
        index: 3,
        detail:
          "Participants in the UNAS FEST 2025 Scientific Paper Competition are individuals, not groups.",
      },
      {
        index: 4,
        detail:
          "Participants are required to download the UNAS FEST 2025 Scientific Paper Competition activity manual and understand all the provisions contained in the manual. ",
      },
      {
        index: 5,
        detail:
          "Participants in the UNAS FEST 2025 Scientific Paper Competition are required to participate in all stages of the competition as determined by the organizing committee, from the initial stage to the final stage, including the Technical Meeting and final presentation (if the participant is declared eligible).",
      },
      {
        index: 6,
        detail:
          "Any form of cheating or other violations of the rules will be subject to strict sanctions from the committee, in the form of disqualification from the competition without exception.",
      },
    ],
    judgesData: [
      {
        index: 1,
        name: "Hisyam Farindra",
        image: hisyam,
        linkedin: "",
        lastEducation:
          "Bachelor's Degree in History Education, State University of Jakarta ",
        description:
          "Is a graduate of History Education at the State University of Jakarta. Has an outstanding record in various national debate competitions, such as being the chief judge of the Jakarta State University Hysteric national debate competition 2023, the chief judge of the Gunadarma University Leipzig national debate competition 2023, the chief judge of the Tetralogy national debate competition SMAN 58 Jakarta 2023, the chief judge of the Jakarta State University KIPK debate competition 2023, the invitation judge of the UNJ National Debate Competition 2023, the judge of the UNJ CNDC national debate competition 2023, the invitation judge of the UNSRI CNC national debate competition 2021, invitation judge of FYG UIN Jakarta national debate competition 2021, Independent GCE UNMUL judge 2021, National KDMI UNJ Institution judge 2021, 1st place winner of FESTKA UNM debate competition 2023, 1st place winner of Esa Unggul national debate competition 2023, 1st place winner of UNTAN National Education Fair debate competition 2022, 1st place in the UNJ KDMI competition 2022, 1st place in the national debate competition at the State University of Malang Rhetoric Festival 2021, 1st place in the Sociology Fair debate competition at Andalas University 2021, 5 best speakers in the PIF debate competition at Andalas University 2021, and 3rd place in the UNJ KDMI selection 2021.",
        achievements: [
          "1st place in FESTKA UNM Debate Competition, 2023",
          "1st place in Esa Unggul National Debate Competition, 2023",
          "3rd place in Pertiwi IDN Debate Competition, 2023",
          "4th place in Fastweak X Debate Competition, 2023",
          "Top 10 Best Speaker in Fastweak X Debate Competition, 2023",
          "1st place in National Education Fair Debate Competition at UNTAN, 2022",
          "1st place in KDMI UNJ Debate Competition, 2022",
          "2nd Best Speaker in KDMI UNJ Debate Competition, 2022",
          "UNJ Delegate for KDMI, 2022",
          "3rd place in FEBI Debate Competition, 2022",
          "Best Speaker in Fastweek Debate Competition, 2022",
        ],
      },
      {
        index: 2,
        name: "Hisyam Farindra",
        image: hisyam,
        linkedin: "https://www.linkedin.com/in/insanykhausari/",
        lastEducation: "Industrial Engineering at President University",
        description:
          "An Industrial Engineering student with over 1 year of experience in the business field, specifically in the home industry, by creating the company profile and arranging the production report, with strong critical analytical abilities. I have participated in 20+ debate competitions and served as a breaking adjudicator for judging the debate competitions with excellent scores. Additionally, I have experience in essay writing, as well as in academic and non-academic Olympiads and scientific paper competitions.",
        achievements: [
          "Juri Independen Terbaik NDCC Pra-LDBI 2024 by National Debate Community Center (September 2024)",
          "Juri Terakrediatasi NDCC Pra-LDBI 2024 Asian Parlementer by National Debate Community Center (September 2024)",
          "Best Independent Adjudicator 3 of TACTICS debate competition 2024 by Universitas Bunda Mulia (June 2024)",
          "Breaking Adjudicator dan Juri Terakreditas DSK Open 2024 British Parlementer by Debate Sinergi Kebhinekaan (August 2024)",
          "Core Adjudicators Panel (Ketua Juri) Teenaction Debate Competition 2024 by SMAN 5 Bekasi (August 2024)",
          "National Delegate of N1 independent adjudicator KDMI 2023 and KDMI 2024 by PUSPERNAS (September 2023 & July 2024)",
          "Judge for Management Introduction Debate Session by PUMA Management President Univ 2023",
          "Invited Adjudicator of HIPOTEX Debate Competition 2024 by IPB University",
          "Invited Adjudicator of VSCE Debate Competition 2024 by IPB University",
          "Invited Adjudicator of KOMBATNAS Debate Competition 2024 by Universitas Negeri Malang",
          "Invited Adjudicator of English Festival Debate Competition 2024 by Universitas Riau",
          "Invited Adjudicator of Baris Science Festival Debate Competition 2024 by Universitas Brawijaya",
          "3rd Winner of Debate NSEDC 2024 by Universitas Mataram (September 2024)",
          "4th Winner of Cogito National Debate Competition 5.0 by Universitas Sriwijaya (September 2024)",
          "10th Best Speaker of Economic Debate Competition by Universitas Andalas (October 2024)",
          "Best Speaker 5 Viva Legislativa Debate Competition - STMKG 2024 (June 2024)",
          "Octofinalist of Kompetisi Debat Nusantara by Debat Nusantara (May 2024)",
          "Best Speaker of Freshman Trophy Debate Competition by President University (October 2023)",
          "Grand finalist of PUDN Debate Competition by President University (June 2023)",
          "Grand finalist of VETION Day Debate Competition by Institut Pertanian Bogor (April 2023)",
          "Octofinalist of Newbies UI English Debate Competition by Universitas Indonesia (November 2022)",
          "10th Best Paper of Scientific Paper by Universitas Kristen Indonesia (August 2021)",
          "National Delegate MTQMN English Quran Debate Competition by PUSPERNAS (November 2023)",
          "Official Delegate of APBN Olympics by KEMENKEU INDONESIA in Region Area (July 2021)",
          "Official Delegate of English Debate Competition (ATMA OPEN 2023, ASIAN ENGLISH OLYMPICS 2023, and others)",
          "2nd Winner of Indonesia Debate FLS2N Competition 2018",
        ],
      },
      {
        index: 3,
        name: "Hisyam Farindra",
        image: hisyam,
        linkedin: "https://www.linkedin.com/in/purwobesari/?jobid=1234",
        lastEducation: "Educational Management at State University of Jakarta",
        description:
          "Purwo is passionate about education, with a keen interest in human development and the dynamics of social media content. His expertise in the learning and development sector is evidenced by his roles as a public speaker and tutor. Purwo is deeply invested in the realm of human development and aspires to simultaneously excel as a specialist in learning, training, and content creation.",
        achievements: [
          "Awardee of Bakti Nusa 9",
          "Participant in Asia University Summer Program",
          "1st Winner of Most Outstanding Student Selection in Faculty of Educationn",
          "1st Winner of National Education Debate Competition",
          "Speaker of Talkshow Hari Guru ke-73",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Who can participate in the UNAS FEST 2025 Scientific Paper Competition (SPC)?",
        answer:
          "This competition is open to all active undergraduate students from public and private universities in Indonesia who are registered with PDDIKTI and do not yet have a bachelor's degree.",
      },
      {
        question: "Is this competition individual or team-based?",
        answer:
          "SPC UNAS FEST 2025 can only be participated in individually, not as a group.",
      },
      {
        question: "How much is the registration fee and when is the payment period?",
        answer: [
          "Early Bird: Rp115.000 (25–31 August 2025)",
          "Phase 1: Rp135.000(1–13 September 2025)",
          "Phase 2: Rp150.000(14–26 September 2025)",
        ]
      },
      {
        question: "Are registration fees refundable if participants cancel?",
        answer:
        "No. Registration fees that have been paid are non-refundable under any circumstances.",
      },
      {
        question: "How does the scoring system work in this competition?",
        answer: [
          "Preliminary Round: judged based on the participants' outstanding achievements.",
          "Semifinals: judged based on participants' work (presentation, substance, and quality of work).",
          "Final Round: judged based on participants' presentations (presentation of material, ability to answer questions, and relevance to the theme).",
          "In the UNAS FEST 2025 National Scientific Paper Competition, scores from the preliminary round are not accumulated and will be reset when entering the semifinal round. The final score is determined based on a 60% weighting for the semifinal round and a 40% weighting for the final round.",
        ]
      },
      {
        question: "Does the paper have to be in English?",
        answer:
        "No. The paper can be written in Indonesian, but the abstract must be written in two languages, namely English and Indonesian.",
      },
      {
        question: "Is there a page limit for manuscripts?",
        answer:
        "Yes. Scientific papers for SPC UNAS FEST 2025 are limited to a maximum of 10 pages, calculated from the title to the bibliography, excluding attachments.",
      },
      {
        question: "When is the deadline for submitting scientific papers?",
        answer:
        "The deadline for submitting scientific papers is October 17, 2025.",
      },
      {
        question: "Will there be certificates for contest participants?",
        answer:
        "All SPC contest participants will receive a certificate as a token of appreciation.",
      },
      {
        question: "When will the winner be announced?",
        answer:
        "The winner will be announced on November 10, 2025.",
      },
    ],
  },
  {
    path: "Infographic",
    title: "Infographic Competition",
    coverImage: KDBICover,
    description:
      "The Infographics competition aims to encourage participants to think critically andcreatively, while being able to present information in a concise, accurate, and easily understandable manner. Besides honing design skills and visual message delivery, participants are also invited to increase their awareness of global issues relevant to daily life. The Infographics competition carries the theme “Conducting a Preventive Action for Deforestation Through AI-Assisted Technology Innovation in Acquiring a Resilience and Sustainable Ecosystem,” which discusses the importance of preventing deforestation by utilizing artificial intelligence (AI)-based technology to build ecosystems that are resilient to various threats and remain sustainable. The competition targets 15 teams consisting of active high school students from SMA, MAN, and SMK in the JABODETABEK area. Activities begin with a webinar to equip participants with the skills, knowledge, and understanding necessary to create their works.The Infographics competition consists of three stages: Administrative Selection, Semifinals, and Finals—all conducted online, followed by an onsite awarding ceremony.",
    guideBook: "/File/tes.pdf",
    guideBookName: "Guide_Book_DCC",
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
          "Participants are required to upload their works via specified social media platforms (YouTube, Instagram, or TikTok) including the official competition hashtag and tagging the official UNAS FEST account.",
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
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "",
        lastEducation:
          "Bachelor's Degree in History Education, State University of Jakarta ",
        description:
          "Is a graduate of History Education at the State University of Jakarta. Has an outstanding record in various national debate competitions, such as being the chief judge of the Jakarta State University Hysteric national debate competition 2023, the chief judge of the Gunadarma University Leipzig national debate competition 2023, the chief judge of the Tetralogy national debate competition SMAN 58 Jakarta 2023, the chief judge of the Jakarta State University KIPK debate competition 2023, the invitation judge of the UNJ National Debate Competition 2023, the judge of the UNJ CNDC national debate competition 2023, the invitation judge of the UNSRI CNC national debate competition 2021, invitation judge of FYG UIN Jakarta national debate competition 2021, Independent GCE UNMUL judge 2021, National KDMI UNJ Institution judge 2021, 1st place winner of FESTKA UNM debate competition 2023, 1st place winner of Esa Unggul national debate competition 2023, 1st place winner of UNTAN National Education Fair debate competition 2022, 1st place in the UNJ KDMI competition 2022, 1st place in the national debate competition at the State University of Malang Rhetoric Festival 2021, 1st place in the Sociology Fair debate competition at Andalas University 2021, 5 best speakers in the PIF debate competition at Andalas University 2021, and 3rd place in the UNJ KDMI selection 2021.",
        achievements: [
          "1st place in FESTKA UNM Debate Competition, 2023",
          "1st place in Esa Unggul National Debate Competition, 2023",
          "3rd place in Pertiwi IDN Debate Competition, 2023",
          "4th place in Fastweak X Debate Competition, 2023",
          "Top 10 Best Speaker in Fastweak X Debate Competition, 2023",
          "1st place in National Education Fair Debate Competition at UNTAN, 2022",
          "1st place in KDMI UNJ Debate Competition, 2022",
          "2nd Best Speaker in KDMI UNJ Debate Competition, 2022",
          "UNJ Delegate for KDMI, 2022",
          "3rd place in FEBI Debate Competition, 2022",
          "Best Speaker in Fastweek Debate Competition, 2022",
        ],
      },
      {
        index: 2,
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "https://www.linkedin.com/in/insanykhausari/",
        lastEducation: "Industrial Engineering at President University",
        description:
          "An Industrial Engineering student with over 1 year of experience in the business field, specifically in the home industry, by creating the company profile and arranging the production report, with strong critical analytical abilities. I have participated in 20+ debate competitions and served as a breaking adjudicator for judging the debate competitions with excellent scores. Additionally, I have experience in essay writing, as well as in academic and non-academic Olympiads and scientific paper competitions.",
        achievements: [
          "Juri Independen Terbaik NDCC Pra-LDBI 2024 by National Debate Community Center (September 2024)",
          "Juri Terakrediatasi NDCC Pra-LDBI 2024 Asian Parlementer by National Debate Community Center (September 2024)",
          "Best Independent Adjudicator 3 of TACTICS debate competition 2024 by Universitas Bunda Mulia (June 2024)",
          "Breaking Adjudicator dan Juri Terakreditas DSK Open 2024 British Parlementer by Debate Sinergi Kebhinekaan (August 2024)",
          "Core Adjudicators Panel (Ketua Juri) Teenaction Debate Competition 2024 by SMAN 5 Bekasi (August 2024)",
          "National Delegate of N1 independent adjudicator KDMI 2023 and KDMI 2024 by PUSPERNAS (September 2023 & July 2024)",
          "Judge for Management Introduction Debate Session by PUMA Management President Univ 2023",
          "Invited Adjudicator of HIPOTEX Debate Competition 2024 by IPB University",
          "Invited Adjudicator of VSCE Debate Competition 2024 by IPB University",
          "Invited Adjudicator of KOMBATNAS Debate Competition 2024 by Universitas Negeri Malang",
          "Invited Adjudicator of English Festival Debate Competition 2024 by Universitas Riau",
          "Invited Adjudicator of Baris Science Festival Debate Competition 2024 by Universitas Brawijaya",
          "3rd Winner of Debate NSEDC 2024 by Universitas Mataram (September 2024)",
          "4th Winner of Cogito National Debate Competition 5.0 by Universitas Sriwijaya (September 2024)",
          "10th Best Speaker of Economic Debate Competition by Universitas Andalas (October 2024)",
          "Best Speaker 5 Viva Legislativa Debate Competition - STMKG 2024 (June 2024)",
          "Octofinalist of Kompetisi Debat Nusantara by Debat Nusantara (May 2024)",
          "Best Speaker of Freshman Trophy Debate Competition by President University (October 2023)",
          "Grand finalist of PUDN Debate Competition by President University (June 2023)",
          "Grand finalist of VETION Day Debate Competition by Institut Pertanian Bogor (April 2023)",
          "Octofinalist of Newbies UI English Debate Competition by Universitas Indonesia (November 2022)",
          "10th Best Paper of Scientific Paper by Universitas Kristen Indonesia (August 2021)",
          "National Delegate MTQMN English Quran Debate Competition by PUSPERNAS (November 2023)",
          "Official Delegate of APBN Olympics by KEMENKEU INDONESIA in Region Area (July 2021)",
          "Official Delegate of English Debate Competition (ATMA OPEN 2023, ASIAN ENGLISH OLYMPICS 2023, and others)",
          "2nd Winner of Indonesia Debate FLS2N Competition 2018",
        ],
      },
      {
        index: 3,
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "https://www.linkedin.com/in/purwobesari/?jobid=1234",
        lastEducation: "Educational Management at State University of Jakarta",
        description:
          "Purwo is passionate about education, with a keen interest in human development and the dynamics of social media content. His expertise in the learning and development sector is evidenced by his roles as a public speaker and tutor. Purwo is deeply invested in the realm of human development and aspires to simultaneously excel as a specialist in learning, training, and content creation.",
        achievements: [
          "Awardee of Bakti Nusa 9",
          "Participant in Asia University Summer Program",
          "1st Winner of Most Outstanding Student Selection in Faculty of Educationn",
          "1st Winner of National Education Debate Competition",
          "Speaker of Talkshow Hari Guru ke-73",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How do I register for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Open your web browser and visit caturnawa.unasfest.com",
          'Scroll down the page until you find the "Kompetisi Debat Bahasa Indonesia" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Early Bird (July 23 - July 28 , 2024)",
          "General: Rp300.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 1 (July 29 - August 11, 2024)",
          "General: Rp400.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 2 (August 12 - August 23, 2024)",
          "General: Rp450.000,-/team",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer:
          "The registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI) is September 7, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round day 2 sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on caturnawa.unasfest.com.",
      },
    ],
  },
  {
    path: "Short-Video",
    title: "Short Video Competition",
    coverImage: SPCCover,
    description:
      "The Short Video competition is a contest for brief videos typically lasting from 15 seconds up to 3 minutes, designed to convey messages in a concise, creative, and informative manner. The theme, “Conducting a Preventive Action for Deforestation Through AI-Assisted Technology Innovation in Acquiring a Resilience and Sustainable Ecosystem,” addresses the importance of preventing deforestation by utilizing artificial intelligence (AI)-based technology to build ecosystems that are resilient to various threats and sustainable over time. The Short Video competition targets 15 teams consisting of active high school students from SMA, MAN, and SMK in the JABODETABEK area. The activity begins with a webinar aimed at providing participants with the skills, knowledge, and understanding needed to create effective Short Video works. The competition consists of three stages: Administrative Selection, Semifinals, and Finals — all conducted online, followed by an onsite awarding ceremony.",
    guideBook: "/File/tes.pdf",
    guideBookName: "Guide_Book_DCC",
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
          "Submitted videos must be original and not previously published or entered into any other competition.",
      },
      {
        index: 4,
        detail:
          "Use of content containing elements of SARA (ethnic, religious, racial, and social issues), pornography, violence, or plagiarism is prohibited.",
      },
      {
        index: 5,
        detail:
          "Each participant may submit only one (1) video.",
      },
      {
        index: 6,
        detail:
          "Accepted video formats: MP4 or MOV, with a minimum resolution of 720p.",
      },
      {
        index: 7,
        detail:
          "Language is free; if using regional or foreign languages, Indonesian subtitles are required.",
      },
      {
        index: 8,
        detail:
          "Videos must not violate copyright laws (music, footage, etc. must be licensed or authorized).",
      },
      {
        index: 9,
        detail:
          "Uploaded works must be original creations of the participants, not plagiarized, and not previously submitted or published in other competitions.",
      },
      {
        index: 10,
        detail:
          "Participants must upload their works on specified social media platforms (YouTube, Instagram, or TikTok) including the official competition hashtag and tag the official UNAS FEST account.",
      },
      {
        index: 11,
        detail:
          "The social media account used to upload the work must be public (not private) throughout the competition period.",
      },
      {
        index: 12,
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
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "",
        lastEducation:
          "Bachelor's Degree in History Education, State University of Jakarta ",
        description:
          "Is a graduate of History Education at the State University of Jakarta. Has an outstanding record in various national debate competitions, such as being the chief judge of the Jakarta State University Hysteric national debate competition 2023, the chief judge of the Gunadarma University Leipzig national debate competition 2023, the chief judge of the Tetralogy national debate competition SMAN 58 Jakarta 2023, the chief judge of the Jakarta State University KIPK debate competition 2023, the invitation judge of the UNJ National Debate Competition 2023, the judge of the UNJ CNDC national debate competition 2023, the invitation judge of the UNSRI CNC national debate competition 2021, invitation judge of FYG UIN Jakarta national debate competition 2021, Independent GCE UNMUL judge 2021, National KDMI UNJ Institution judge 2021, 1st place winner of FESTKA UNM debate competition 2023, 1st place winner of Esa Unggul national debate competition 2023, 1st place winner of UNTAN National Education Fair debate competition 2022, 1st place in the UNJ KDMI competition 2022, 1st place in the national debate competition at the State University of Malang Rhetoric Festival 2021, 1st place in the Sociology Fair debate competition at Andalas University 2021, 5 best speakers in the PIF debate competition at Andalas University 2021, and 3rd place in the UNJ KDMI selection 2021.",
        achievements: [
          "1st place in FESTKA UNM Debate Competition, 2023",
          "1st place in Esa Unggul National Debate Competition, 2023",
          "3rd place in Pertiwi IDN Debate Competition, 2023",
          "4th place in Fastweak X Debate Competition, 2023",
          "Top 10 Best Speaker in Fastweak X Debate Competition, 2023",
          "1st place in National Education Fair Debate Competition at UNTAN, 2022",
          "1st place in KDMI UNJ Debate Competition, 2022",
          "2nd Best Speaker in KDMI UNJ Debate Competition, 2022",
          "UNJ Delegate for KDMI, 2022",
          "3rd place in FEBI Debate Competition, 2022",
          "Best Speaker in Fastweek Debate Competition, 2022",
        ],
      },
      {
        index: 2,
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "https://www.linkedin.com/in/insanykhausari/",
        lastEducation: "Industrial Engineering at President University",
        description:
          "An Industrial Engineering student with over 1 year of experience in the business field, specifically in the home industry, by creating the company profile and arranging the production report, with strong critical analytical abilities. I have participated in 20+ debate competitions and served as a breaking adjudicator for judging the debate competitions with excellent scores. Additionally, I have experience in essay writing, as well as in academic and non-academic Olympiads and scientific paper competitions.",
        achievements: [
          "Juri Independen Terbaik NDCC Pra-LDBI 2024 by National Debate Community Center (September 2024)",
          "Juri Terakrediatasi NDCC Pra-LDBI 2024 Asian Parlementer by National Debate Community Center (September 2024)",
          "Best Independent Adjudicator 3 of TACTICS debate competition 2024 by Universitas Bunda Mulia (June 2024)",
          "Breaking Adjudicator dan Juri Terakreditas DSK Open 2024 British Parlementer by Debate Sinergi Kebhinekaan (August 2024)",
          "Core Adjudicators Panel (Ketua Juri) Teenaction Debate Competition 2024 by SMAN 5 Bekasi (August 2024)",
          "National Delegate of N1 independent adjudicator KDMI 2023 and KDMI 2024 by PUSPERNAS (September 2023 & July 2024)",
          "Judge for Management Introduction Debate Session by PUMA Management President Univ 2023",
          "Invited Adjudicator of HIPOTEX Debate Competition 2024 by IPB University",
          "Invited Adjudicator of VSCE Debate Competition 2024 by IPB University",
          "Invited Adjudicator of KOMBATNAS Debate Competition 2024 by Universitas Negeri Malang",
          "Invited Adjudicator of English Festival Debate Competition 2024 by Universitas Riau",
          "Invited Adjudicator of Baris Science Festival Debate Competition 2024 by Universitas Brawijaya",
          "3rd Winner of Debate NSEDC 2024 by Universitas Mataram (September 2024)",
          "4th Winner of Cogito National Debate Competition 5.0 by Universitas Sriwijaya (September 2024)",
          "10th Best Speaker of Economic Debate Competition by Universitas Andalas (October 2024)",
          "Best Speaker 5 Viva Legislativa Debate Competition - STMKG 2024 (June 2024)",
          "Octofinalist of Kompetisi Debat Nusantara by Debat Nusantara (May 2024)",
          "Best Speaker of Freshman Trophy Debate Competition by President University (October 2023)",
          "Grand finalist of PUDN Debate Competition by President University (June 2023)",
          "Grand finalist of VETION Day Debate Competition by Institut Pertanian Bogor (April 2023)",
          "Octofinalist of Newbies UI English Debate Competition by Universitas Indonesia (November 2022)",
          "10th Best Paper of Scientific Paper by Universitas Kristen Indonesia (August 2021)",
          "National Delegate MTQMN English Quran Debate Competition by PUSPERNAS (November 2023)",
          "Official Delegate of APBN Olympics by KEMENKEU INDONESIA in Region Area (July 2021)",
          "Official Delegate of English Debate Competition (ATMA OPEN 2023, ASIAN ENGLISH OLYMPICS 2023, and others)",
          "2nd Winner of Indonesia Debate FLS2N Competition 2018",
        ],
      },
      {
        index: 3,
        name: "Fuecoco a Pokemon",
        image: fuecoco,
        linkedin: "https://www.linkedin.com/in/purwobesari/?jobid=1234",
        lastEducation: "Educational Management at State University of Jakarta",
        description:
          "Purwo is passionate about education, with a keen interest in human development and the dynamics of social media content. His expertise in the learning and development sector is evidenced by his roles as a public speaker and tutor. Purwo is deeply invested in the realm of human development and aspires to simultaneously excel as a specialist in learning, training, and content creation.",
        achievements: [
          "Awardee of Bakti Nusa 9",
          "Participant in Asia University Summer Program",
          "1st Winner of Most Outstanding Student Selection in Faculty of Educationn",
          "1st Winner of National Education Debate Competition",
          "Speaker of Talkshow Hari Guru ke-73",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How do I register for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Open your web browser and visit caturnawa.unasfest.com",
          'Scroll down the page until you find the "Kompetisi Debat Bahasa Indonesia" section',
          'Click the "Register Now" button',
          "Fill out the registration form and complete all the required information",
          "Review the entered data",
          "Then you can make the payment by clicking the payment button",
        ],
      },
      {
        question:
          "What is the registration fee for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer: [
          "Early Bird (July 23 - July 28 , 2024)",
          "General: Rp300.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 1 (July 29 - August 11, 2024)",
          "General: Rp400.000,-/team",
          "Universitas Nasional Students: Free",
          "Phase 2 (August 12 - August 23, 2024)",
          "General: Rp450.000,-/team",
          "Universitas Nasional Students: Free",
        ],
      },
      {
        question:
          "When is the registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI)?",
        answer:
          "The registration deadline for the Kompetisi Debat Bahasa Indonesia (KDBI) is September 7, 2024",
      },
      {
        question: "When will the winners be announced?",
        answer:
          "The winners will be announced on October 17, 2024, after the final round day 2 sessions.",
      },
      {
        question: "Where can I see the winner announcement?",
        answer:
          "The winner announcement will be available on caturnawa.unasfest.com.",
      },
    ],
  },
];