import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Latex Forge",
    category: "SaaS Platform",
    description: "Online LaTeX editor with AI assistance and secure, sandboxed Docker compilation. Real-time preview with collaborative editing capabilities.",
    tech: ["TypeScript", "React", "Next.js", "Docker", "AI/ML"],
    year: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Chatly",
    category: "Messaging Platform",
    description: "Scalable real-time messaging application with direct messaging, group chats, and live presence indicators. Built with WebSocket infrastructure and OAuth 2.0 authentication.",
    tech: ["TypeScript", "Next.js", "WebSockets", "Prisma", "PostgreSQL"],
    year: "2024",
    link: "#"
  },
  {
    id: 3,  
    title: "Distributed E-Commerce",
    category: "E-commerce Platform",
    description: "E-Commerce backend with high-performance microservices architecture. Implemented real-time order processing, inventory management, and payment gateway integration across multiple services.",
    tech: ["Go", "gRPC", "GraphQL", "Protocol Buffers", "PostgreSQL"],
    year: "2024",
    link: "#"
  },
  {
    id: 4,
    title: "Video to ASCII Converter",
    category: "CLI Tool",
    description: "A command-line application written in Rust to convert video frames into ASCII art. Utilizes 'clap' for robust argument parsing and the 'image' crate for image manipulation. Integrates with FFmpeg for video frame extraction.",
    tech: ["Rust", "FFmpeg", "Image Processing", "CLI"],
    year: "2024",
    link: "#"
  }
];


export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "DAIRA EdTech",
    period: "Mar 2025 - Present",
    description: "Built gamified assessments for early detection of Specific Learning Disabilities (SLDs), impacting 3,500+ children. Migrated backend to Next.js/Prisma and managed Azure/Docker infrastructure for scalable deployment."
  }
];


export const SKILLS = [
  { category: "Languages", items: ["Golang", "TypeScript", "Python", "C++", "Java", "SQL"] },
  { category: "Web Technologies", items: ["Next.js", "React.js", "Node.js", "Express", "Tailwind CSS"] },
  { category: "Backend & Data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "GraphQL", "gRPC"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Azure", "GitHub Actions", "CI/CD"] }
];