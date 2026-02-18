import {
  Globe,
  Code,
  Palette,
  Brain,
  GitBranch,
  Layout,
  ShieldCheck,
  Headphones,
  FolderKanban,
  LineChart,
} from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  icon: typeof Globe
  color: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build high-performance, responsive websites and web applications using modern frameworks and best practices.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: ["React & Next.js", "Full-Stack Development", "Progressive Web Apps", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from enterprise applications to SaaS platforms.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    features: ["Custom Applications", "SaaS Platforms", "API Development", "Microservices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Create intuitive, beautiful interfaces that delight users and drive engagement across all devices.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Leverage AI and machine learning to automate processes, gain insights, and create intelligent solutions.",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "devops",
    title: "DevOps Services",
    description:
      "Streamline your development pipeline with CI/CD, cloud infrastructure, and automated deployments.",
    icon: GitBranch,
    color: "from-orange-500 to-amber-500",
    features: ["CI/CD Pipelines", "Cloud Migration", "Docker & Kubernetes", "Monitoring"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
  },
  {
    id: "cms",
    title: "CMS Development",
    description:
      "Build powerful content management systems that make it easy to manage and publish digital content.",
    icon: Layout,
    color: "from-indigo-500 to-blue-500",
    features: ["WordPress", "Headless CMS", "Custom CMS", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description:
      "Comprehensive testing services to ensure your software is reliable, performant, and bug-free.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
    features: ["Automated Testing", "Performance Testing", "Security Testing", "Manual QA"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    id: "it-support",
    title: "IT Support Services",
    description:
      "24/7 technical support and managed IT services to keep your business running smoothly.",
    icon: Headphones,
    color: "from-sky-500 to-blue-500",
    features: ["24/7 Support", "System Admin", "Network Management", "Help Desk"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Expert project management to deliver your projects on time, within budget, and to specification.",
    icon: FolderKanban,
    color: "from-violet-500 to-purple-500",
    features: ["Agile & Scrum", "Risk Management", "Resource Planning", "Delivery Tracking"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    description:
      "Strategic analysis and consulting to align technology investments with your business objectives.",
    icon: LineChart,
    color: "from-amber-500 to-yellow-500",
    features: ["Requirements Analysis", "Process Optimization", "Market Research", "ROI Assessment"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
]
