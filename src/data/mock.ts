export const personalInfo = {
  name: "Kartik Lutimath",
  role: "Associate Software Engineer",
  company: "FNFI",
  tagline: "A passionate AI Full Stack Web Developer from Bangalore, Karnataka, India. I focus on creating clean, efficient, and user-friendly applications.",
  email: "kartiklutimath@gmail.com",
  phone: "+91-6360340931",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/KartikLutimath",
  linkedin: "https://linkedin.com/in/kartiklutimath/",
  leetcode: "https://leetcode.com/u/Kartik_sl20/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Software Engineer",
  "Problem Solver",
];

export const aboutBio = [
  "I'm a Full Stack Web Developer based in Bangalore, Karnataka, with experience in building efficient, scalable, and maintainable applications. Recently completed an internship at Varcons Technologies where I developed a Biometric Authentication Landing Page.",
  "I enjoy tackling complex problems and turning them into simple, elegant solutions. My approach focuses on creating responsive and user-friendly interfaces while ensuring optimal performance through efficient state management and resource optimization.",
];

export const traits = [
  "Problem Solving",
  "Clean Code",
  "Team Collaboration",
  "Fast Learner",
];

export const education = {
  degree: "B.E. in Computer Science and Design",
  institution: "Dayananda Sagar Academy of Technology and Management",
  period: "Dec 2021 - Jun 2025",
  cgpa: "8.55",
  semester: "Graduated",
};

export const experience = [
  {
  role: "Associate Software Engineer",
  company: "Fidelity National Financials India",
  period: "Jul 2025 - Current",
  location: "Bangalore, Karnataka",
  description: "Working as AI full-stack engineer building modern applications with AI integrations.",
},
{
  role: "Full Stack Web Developer Intern",
  company: "Varcons Technologies",
  period: "Oct 2023 - Dec 2023",
  location: "Bangalore, Karnataka",
  description: "Developed a Biometric Authentication Landing Page using Figma, HTML, CSS, JavaScript, and React.js",
}
];

export const achievements = [
  "Solved 600+ coding problems across multiple platforms",
  "Ranked in the Top 20 in institution on the GeeksforGeeks coding platform",
  "Top 10 rank in Technospark Hackathon",
];

export const technicalSkills = [
  { name: "C++", level: 90 },
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 70 },
  { name: "Java", level: 70 },
];

export const categorizedSkills: Record<string, string[]> = {
  Languages: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  Frontend: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express.js", "RESTful APIs"],
  Database: ["MongoDB", "PostgreSQL"],
  DevTools: ["VS Code", "Git", "Docker", "Postman", "GitHub", "Chrome DevTools", "Tableau Public"],
  "Core CS": ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
};

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  type: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MockXpert - AI Interview Mocker",
    description: "Built an AI-driven mock interview platform to help learners improve their interview skills through hands-on practice with dynamically generated questions and AI feedback.",
    technologies: ["Next.js", "RESTful API", "PostgreSQL", "Gemini AI", "Clerk"],
    githubUrl: "https://github.com/KartikLutimath/MockXpert-Gen-AI-Interview-Mocker",
    liveUrl: "https://mock-xpert-ai-interview.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
    type: "web",
    date: "July 2024",
  },
  {
    id: 2,
    title: "AI-Powered Intrusion Detection System",
    description: "Developed an ML-based Intrusion Detection System achieving 90% accuracy using a supervised learning model to detect cybersecurity threats.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "NumPy", "Pandas"],
    githubUrl: "https://github.com/KartikLutimath/Intrusion_detection_using_random_forest",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    type: "ai",
    date: "March 2025",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Developed an e-commerce website allowing users to browse products, filter by categories, and add items to cart with a seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/KartikLutimath/E-commerce",
    liveUrl: "https://e-commerce-rho-umber.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    type: "web",
    date: "Dec 2023",
  },
  {
    id: 4,
    title: "Biometric Authentication Landing Page",
    description: "Developed a responsive and user-friendly landing page for a biometric authentication service, ensuring cross-browser compatibility and optimal performance.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Figma"],
    githubUrl: "https://github.com/KartikLutimath",
    imageUrl: "https://images.unsplash.com/photo-1566897819059-db42e135fa69?auto=format&fit=crop&w=800&q=80",
    type: "web",
    date: "Oct-Dec 2023",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI/Security", value: "ai" },
];
