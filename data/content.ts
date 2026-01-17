export const siteConfig = {
  name: "Hubert Kuc",
  title: "AR/VR Software Engineer @ Apple",
  description: "Building the future of spatial computing. Passionate about AR/VR technologies and creating immersive experiences.",
  email: "hubertkuc13@gmail.com",
  location: "Munich, Bavaria, Germany",
  social: {
    linkedin: "https://linkedin.com/in/hubertkuc",
  },
};

export const aboutContent = {
  description: `Software engineer building real-time frameworks for Apple platforms.
Currently at Apple, focused on low-level systems programming, algorithm optimization, and spatial computing for Vision Pro.

Strong background in Objective-C/C++. Specialized in performance optimization,
real-time signal processing, and computer vision (face, hand, body tracking).

Previously at HARMAN International, developed the Mercedes MBUX Augmented Reality navigation system
and ADAS features including real-time navigation overlays.`,
  highlights: [
    "Real-time frameworks for iOS & visionOS",
    "Computer vision: face, hand, body tracking",
    "Performance optimization specialist",
    "Low-level systems programming",
    "Master's degree in Electronics and Telecommunications",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "AR/VR Software Engineer",
    company: "Apple",
    location: "Munich, Bavaria, Germany",
    period: "Jun 2022 - Present",
    description:
      "Building real-time frameworks for Vision Pro and spatial computing. Focused on low-level systems programming, real-time signal processing, and computer vision (face, hand, body tracking). Emphasis on performance optimization and system stability.",
    technologies: ["Objective-C/C++", "Swift", "visionOS", "Real-time Systems", "Computer Vision"],
    youtubeId: "6O82UM1V9Y4",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "HARMAN International",
    location: "Garching bei München",
    period: "Nov 2016 - Jun 2022",
    description:
      "Developed the Mercedes MBUX Augmented Reality navigation system. Built AR features for ADAS (Advanced Driver Assistance Systems) including real-time navigation overlays and traffic light assistance.",
    technologies: ["C++", "Computer Vision", "AR", "ADAS", "Embedded Systems"],
    youtubeId: "2bRZytJ5LL4",
  },
  {
    id: 3,
    role: "Summer Trainee",
    company: "Nokia",
    location: "Wrocław, Poland",
    period: "Jul 2016 - Oct 2016",
    description:
      "Internship focused on telecommunications and software development. Gained hands-on experience with enterprise-level systems and engineering practices.",
    technologies: ["Software Development", "Telecommunications"],
  },
];

export const skills = [
  // Languages
  { name: "Objective-C", level: 95, category: "Languages" },
  { name: "C++", level: 95, category: "Languages" },
  { name: "C", level: 90, category: "Languages" },
  { name: "Swift", level: 95, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "Shell Scripting", level: 75, category: "Languages" },
  // Platforms
  { name: "iOS", level: 95, category: "Platforms" },
  { name: "visionOS", level: 95, category: "Platforms" },
  { name: "macOS", level: 90, category: "Platforms" },
  { name: "Embedded Systems", level: 80, category: "Platforms" },
  { name: "Linux", level: 80, category: "Platforms" },
  // Technical Domains
  { name: "Real-time Signal Processing", level: 90, category: "Technical" },
  { name: "Computer Vision", level: 88, category: "Technical" },
  { name: "Display & Rendering", level: 88, category: "Technical" },
  { name: "Low-latency Systems", level: 85, category: "Technical" },
  // Graphics
  { name: "Custom Render Engine", level: 88, category: "Graphics" },
  { name: "Graphics Pipeline", level: 85, category: "Graphics" },
  { name: "Shaders", level: 85, category: "Graphics" },
  // Engineering
  { name: "Performance Optimization", level: 92, category: "Engineering" },
  { name: "System Stability", level: 88, category: "Engineering" },
  { name: "Test Automation", level: 85, category: "Engineering" },
  { name: "Framework Architecture", level: 85, category: "Engineering" },
];

export const education = [
  {
    id: 1,
    institution: "Poznan University of Technology",
    degree: "Master's degree, Electronics and Telecommunications",
    period: "2012 - 2017",
    location: "Poznan, Poland",
    logo: "/PP_znak_peˆny_RGB.png",
    highlights: [],
  },
  {
    id: 2,
    institution: "University of Stuttgart",
    degree: "Information Technology",
    period: "2016 - 2017",
    location: "Stuttgart, Germany",
    logo: "/Uni-stuttgart_logo.jpg",
    highlights: ["Erasmus student (1 year exchange)"],
  },
  {
    id: 3,
    institution: "RPTU Kaiserslautern-Landau",
    degree: "Electrical Engineering",
    period: "2014 - 2015",
    location: "Kaiserslautern, Germany",
    logo: "/Technical_University_of_Kaiserslautern_logo.original.jpg",
    highlights: ["Erasmus student (1 year exchange)", "Chancellor's award for best students"],
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
