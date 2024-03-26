import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import Healthcare from "./images/Healthcare.png";
import personarise from "./images/personarise.png";
import elearn from "./images/elearn.png";
import animefinance from "./images/animefinance.png";
import cardify from "./images/cardify.png";
import bloom from "./images/bloom.png";
import img7 from "./images/html.png";
import img8 from "./images/css.png";
import img9 from "./images/js.png";
import img10 from "./images/tailwind.png";
import img11 from "./images/react.png";
import img12 from "./images/framer.png";
import img13 from "./images/ts.png";
import img14 from "./images/next.png";
import img15 from "./images/redux.png";
import img16 from "./images/node-js.png";

export const Experience = [
  {
    id: 1,
    date: "2021 - present",
    iconsSrc: <IoCodeWorking />,
    job: "Freelance",
    title: "UPWORK",
    location: "Akwa Ibom, Nigeria",
    description:
      "A freelancer at upwork, an american freelancing platform and the largest network of independent professionals to get things done from quick turnarounds to big transfromation",
  },
  {
    id: 2,
    date: "January-2023 - August-2023",
    iconsSrc: <IoCodeWorking />,
    job: "Internship",
    title: "PERSONARISE",
    location: "Miami, FL",
    description:
      "Developed the landing page and worked on the web application of the Personarise platform, a platform hoping to revolutionize the interconnctions between Interns and Founders who are looking for real-world experience and career growth.",
  },
  {
    id: 3,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    job: "Freelance",
    title: "Creative Director",
    lcation: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 4,
    date: "2011 - 2012",
    iconsSrc: <IoCodeWorking />,
    job: "Freelance",
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 5,
    date: "2010 - 2011",
    iconsSrc: <IoCodeWorking />,
    job: "Freelance",
    title: "Creative Director",
    //cation: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 6,
    date: "2009 - 2010",
    iconsSrc: <IoCodeWorking />,
    job: "Freelance",
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

export const Projects = [
  {
    id: 1,
    name: "HealthCare Management System",
    imageSrc: Healthcare,
    techs: "React Js, TailwindCSS, Material UI, MySQL",
    github: "https://github.com/Femi-Benjamin/HealthCare_App",
    livelink: "https://healthcare-app.vercel.app/",
  },
  {
    id: 2,
    name: "personarise Web App ",
    imageSrc: personarise,
    techs: "React Js, Tailwind CSS, Material UI",
    github: "https://github.com/Femi-Benjamin/Personarise-Project",
    // livelink:"",
  },
  {
    id: 3,
    name: "E-Learning Platform",
    imageSrc: elearn,
    techs: "React Js, Chakra UI, TailwindCSS",
    github: "https://github.com/Femi-Benjamin/e-learn_project1",
    livelink: "https://e-learn-project1.vercel.app/",
  },
  {
    id: 4,
    name: "Anime Finance 1.0",
    imageSrc: animefinance,
    techs: "React Js,  Material UI",
    github: "https://github.com/Femi-Benjamin/anime-finance",
    livelink: "https://anime-finance-five.vercel.app/",
  },
  {
    id: 5,
    name: "Cardify",
    imageSrc: cardify,
    techs: "React Js, TailwindCSS, Chara UI, Firebase",
    github: "https://github.com/Femi-Benjamin/Cardify",
    livelink: "https://cardify-bice.vercel.app/",
  },
  {
    id: 6,
    name: "Bloom Pet Clinic",
    imageSrc: bloom,
    techs: "React.Js, Styled component, Material UI, FakerApi",
    github: "https://github.com/Femi-Benjamin/bloom-pet-clinic",
    // livelink:"",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Femi-Benjamin",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/benjamin-olufemi-7524ab226/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/FemiBenjamin7",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://web.whatsapp.com/",
  },
];

export const SkillData = [
  {
    name: "Html 5",
    imgSrc: img7,
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    imgSrc: img8,
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    imgSrc: img9,
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    imgSrc: img10,
    width: 80,
    height: 80,
  },
  {
    name: "React",
    imgSrc: img11,
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    imgSrc: img12,
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    imgSrc: img13,
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    imgSrc: img14,
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    imgSrc: img15,
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    imgSrc: img16,
    width: 80,
    height: 80,
  },
];
