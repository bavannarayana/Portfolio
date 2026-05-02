import omnifood from "../assets/omni-food.png";
import habitTracker from "../assets/habit-tracker.png";
import travelList from "../assets/travel-list.png";

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "React.js",
    "Redux",
    "React Query",
    "Tailwind CSS",
    "Material UI",
  ],
  "Tools & Practices": [
    "Git",
    "Github",
    "Postman",
    "Vite",
    "Chrome DevTools",
    "Responsive Design",
    "Performance Optimization",
  ],
  // Practices: [
  //   "Responsive Design",
  //   "API Integration",
  //   "Performance Optimization",
  //   "Reusable Components",
  //   "State Management",
  // ],
};

export const projects = [
  {
    title: "Omnifood",
    desc: "Responsive food delivery landing page focused on modern UI, smooth user experience, and conversion-driven design. Built reusable React components with clean layouts and mobile-first responsiveness.",
    image: omnifood,
    tech: ["Html", "Css", "javascript"],
    live: "https://omnifood-bhavannarayana.netlify.app/",
    github: "https://github.com/bavannarayana/omni-food",
  },
  {
    title: "Travel List",
    desc: "Interactive travel planning app to manage packing items, track progress, and organize trips efficiently. Built with dynamic state management and responsive component-based architecture.",
    image: habitTracker,
    tech: ["React", "Javascript"],
    live: "https://travelistt.netlify.app/",
    github: "https://github.com/bavannarayana/travel-list",
  },
  {
    title: "Habit Tracker",
    desc: "Productivity app for tracking daily habits, monitoring consistency, and building routines over time. Designed clean dashboards and intuitive UI using React, TypeScript, and Material UI.",
    image: travelList,
    tech: ["React", "RTK", "Material UI"],
    live: "https://track-daily-habits.netlify.app/",
    github: "https://github.com/bavannarayana/habit-tracker",
  },
];
