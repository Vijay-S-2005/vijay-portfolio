import { projects } from "./projects";
import { personal } from "./personal";

export function buildCommands({ router, scrollTo, openExternal }) {
  const projectCommands = projects.map((p) => ({
    id: `project-${p.id}`,
    label: `View ${p.title}`,
    description: p.category,
    group: "Projects",
    keywords: [p.title, p.category, ...p.tech].join(" ").toLowerCase(),
    run: () => router.push(`/projects/${p.id}`),
  }));

  return [
    {
      id: "go-about",
      label: "Go to About",
      description: "Background, story, stats",
      group: "Navigate",
      keywords: "about story bio",
      run: () => scrollTo("#about"),
    },
    {
      id: "go-skills",
      label: "Go to Skills",
      description: "Languages, frameworks, tools",
      group: "Navigate",
      keywords: "skills tech stack",
      run: () => scrollTo("#skills"),
    },
    {
      id: "go-projects",
      label: "Go to Projects",
      description: "Real-world systems",
      group: "Navigate",
      keywords: "projects work",
      run: () => scrollTo("#projects"),
    },
    {
      id: "go-experience",
      label: "Go to Experience",
      description: "Internship & education timeline",
      group: "Navigate",
      keywords: "experience work history education",
      run: () => scrollTo("#experience"),
    },
    {
      id: "go-contact",
      label: "Go to Contact",
      description: "Email, GitHub, LinkedIn",
      group: "Navigate",
      keywords: "contact email reach",
      run: () => scrollTo("#contact"),
    },
    ...projectCommands,
    {
      id: "view-resume",
      label: "View Resume",
      description: "Web-rendered resume page",
      group: "Resume",
      keywords: "resume cv",
      run: () => router.push("/resume"),
    },
    {
      id: "download-resume",
      label: "Download Resume PDF",
      description: "vijay-resume.pdf",
      group: "Resume",
      keywords: "download resume pdf cv",
      run: () => openExternal(personal.resumePdf),
    },
    {
      id: "open-github",
      label: "Open GitHub",
      description: `@${personal.githubHandle}`,
      group: "External",
      keywords: "github code repos",
      run: () => openExternal(personal.github),
    },
    {
      id: "open-linkedin",
      label: "Open LinkedIn",
      description: `in/${personal.linkedinHandle}`,
      group: "External",
      keywords: "linkedin profile",
      run: () => openExternal(personal.linkedin),
    },
    {
      id: "copy-email",
      label: "Copy Email Address",
      description: personal.email,
      group: "External",
      keywords: "email contact copy",
      run: async () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(personal.email);
        }
      },
    },
  ];
}
