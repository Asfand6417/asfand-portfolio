import { TeamMember } from "types";

const team: TeamMember[] = [
  {
    id: 1,
    name: "Asfandyar Khan",
    position: "Full Stack Developer",
    image: "/static/team/asfand.jpg",
    bio: "Passionate full-stack developer with expertise in React, Next.js, and modern web technologies. Loves creating elegant solutions to complex problems.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/asfandyar",
      github: "https://github.com/Asfand6417",
      twitter: "https://twitter.com/asfandyar",
      email: "mailto:asfand@example.com",
      website: "https://asfand-portfolio.vercel.app"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "UI/UX Designer",
    image: "/static/team/sarah.jpg",
    bio: "Creative designer focused on user-centered design principles. Specializes in creating intuitive and beautiful user experiences.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahdesigns",
      website: "https://sarahdesigns.com"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Backend Engineer",
    image: "/static/team/michael.jpg",
    bio: "Experienced backend engineer with a passion for scalable architecture and clean code. Expert in Node.js, Python, and cloud technologies.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/mchen",
      email: "mailto:michael@example.com"
    }
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Project Manager",
    image: "/static/team/emily.jpg",
    bio: "Results-driven project manager with a track record of delivering complex projects on time and within budget. Certified Scrum Master.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "mailto:emily@example.com"
    }
  }
];

export default team;