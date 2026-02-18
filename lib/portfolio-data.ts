import { Palette, Brain, Code, Monitor, Box } from "lucide-react"

export interface Project {
  id: string
  title: string
  category: string
  description: string
  icon: typeof Palette
  color: string
  image: string
}

export const projects: Project[] = [
  {
    id: "interior-designs",
    title: "Professional Interior Designs",
    category: "Narrow AI",
    description: "AI-powered interior design visualization platform for architects and designers.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
  },
  {
    id: "brainstorming-ai",
    title: "Brainstorming Success AI App",
    category: "Machine Learning",
    description: "ML-driven brainstorming tool that generates creative solutions and strategies.",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "bill-application",
    title: "Bill Application WordPress Plugins",
    category: "Reactive Machines",
    description: "Intelligent billing automation plugin for WordPress-based business platforms.",
    icon: Code,
    color: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "pose-software",
    title: "Pose Software Development",
    category: "Narrow AI",
    description: "Computer vision software for human pose estimation and motion tracking.",
    icon: Monitor,
    color: "from-purple-500 to-violet-500",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
  },
  {
    id: "3d-icons",
    title: "3D Icons Illustration Designs",
    category: "Machine Learning",
    description: "ML-assisted 3D icon generation system for modern UI/UX design workflows.",
    icon: Box,
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
  },
]

export const categories = ["All", "Narrow AI", "Machine Learning", "Reactive Machines"]
