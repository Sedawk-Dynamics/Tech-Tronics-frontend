export interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
  image: string
}

export const team: TeamMember[] = [
  {
    name: "Oliver Jutul",
    role: "CEO & Founder",
    initials: "OJ",
    color: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Nick Powel",
    role: "Business Consultant",
    initials: "NP",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Steven Hammer",
    role: "Sr. Specialist",
    initials: "SH",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Laura Osteen",
    role: "Sr. Manager",
    initials: "LO",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Paul Roberts",
    role: "Marketing Manager",
    initials: "PR",
    color: "from-cyan-500 to-sky-500",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Alexandra Stan",
    role: "Sr. Consultant",
    initials: "AS",
    color: "from-rose-500 to-red-500",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
]
