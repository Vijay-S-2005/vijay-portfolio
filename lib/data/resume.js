import { personal } from "./personal";
import { experience } from "./experience";
import { education } from "./education";
import { projects } from "./projects";
import { skills } from "./skills";

export const resume = {
  header: {
    name: personal.name,
    role: personal.role,
    contact: [
      { label: personal.email, href: `mailto:${personal.email}` },
      { label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
      {
        label: `linkedin.com/in/${personal.linkedinHandle}`,
        href: personal.linkedin,
      },
      {
        label: `github.com/${personal.githubHandle}`,
        href: personal.github,
      },
    ],
  },
  summary:
    "Final-year B.Tech Information Technology student with hands-on experience in backend and full-stack development. Skilled in designing secure RESTful APIs, building scalable web applications, and developing real-time data dashboards. Strong foundation in data structures, database design, and system architecture. Seeking an entry-level Software Engineer role to build efficient, production-ready systems.",
  experience,
  projects: projects.map((p) => ({
    id: p.id,
    title: p.title,
    tech: p.tech,
    summary: p.summary,
    bullets: p.features.slice(0, 4),
    period: p.year,
  })),
  education,
  skills,
};
