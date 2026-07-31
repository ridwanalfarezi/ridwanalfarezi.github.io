export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
];

export const featuredStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Bun",
  "Express.js",
  "Prisma",
  "Supabase",
  "Redis",
  "PostgreSQL",
];

export const gridItems = [
  {
    id: 1,
    title:
      "Frontend engineer building production web applications with React and Next.js.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Indonesia and available to collaborate across time zones.",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[20rem]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Frontend-focused, with hands-on experience across APIs, databases, testing, and deployment.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Frontend roles and selected freelance projects.",
    description: "Currently available for",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to build your web product?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "items-center justify-center max-w-full text-center",
    img: "",
    spareImg: "",
  },
];

type ProjectCard = {
  id: number;
  slug?: string;
  title: string;
  des: string;
  role?: string;
  proof?: string;
  img: string;
  link: string;
};

export const projects: ProjectCard[] = [
  {
    id: 1,
    slug: "galacash",
    title: "GalaCash",
    des: "A full-stack class-finance platform for students and treasurers, covering cash bills, fund applications, transactions, dashboards, recaps, exports, and secure role-based access.",
    role: "Solo Full-stack Developer",
    proof: "Solo-built production app with separate frontend and API deployments",
    img: "/galacash-logo.png",
    link: "https://galacash.vercel.app/",
  },
  {
    id: 2,
    slug: "eventku",
    title: "EventKu",
    des: "An all-in-one event management platform with public registration, QR check-in, live doorprize draws, audit trails, provable winner ordering, and real-time Q&A.",
    role: "Full-stack Developer",
    proof: "Live production app with public registration and event operations flows",
    img: "/eventku-logo.png",
    link: "https://www.eventku.my.id/",
  },
  {
    id: 3,
    slug: "apsi-indonesia",
    title: "Asosiasi Profesi Satpam Indonesia",
    des: "An association-management web app with member registration, administrative workflows, and integrated registration payments.",
    role: "Frontend Developer",
    img: "/apsi.svg",
    link: "https://apsiindonesia.or.id/",
  },
  {
    id: 4,
    slug: "aether-innovation",
    title: "Aether Innovation Enterprise",
    des: "A responsive company website presenting Aether Innovation's services, brand, and work through clear navigation and polished interactions.",
    role: "Frontend Developer",
    img: "/aether.svg",
    link: "https://aether-innovation.com/",
  },
  {
    id: 5,
    slug: "kemendagri-eis",
    title: "Indonesian Ministry of Home Affairs Executive Information System",
    des: "An executive dashboard that turns critical organizational data into concise visual summaries for strategic decision-making.",
    role: "Frontend Developer",
    img: "/eis.svg",
    link: "https://informasieksekutif.kemendagri.go.id/",
  },
  {
    id: 6,
    slug: "hazza-solusi-pratama",
    title: "PT Hazza Solusi Pratama",
    des: "A corporate website presenting the company's manpower, event-management, and project-execution services.",
    role: "Frontend Developer",
    img: "/hazza.svg",
    link: "https://hazza.co.id/",
  },
];

export const projectDetails = {
  galacash: {
    eyebrow: "Production finance platform",
    title: "GalaCash",
    summary:
      "A class-finance platform that gives students and treasurers one place to manage bills, fund applications, transactions, dashboards, recaps, and exports.",
    live: "https://galacash.vercel.app/",
    repositories: [
      { label: "Frontend repo", url: "https://github.com/ridwanalfarezi/galacash-frontend" },
      { label: "Server repo", url: "https://github.com/ridwanalfarezi/galacash-server" },
    ],
    role: "Solo Full-stack Developer",
    problem:
      "Class finances become difficult to trust when bills, payments, applications, and recaps are scattered across chats and spreadsheets. GalaCash turns those recurring workflows into a role-aware product with a clear audit trail.",
    contribution:
      "Built GalaCash solo across two repositories: the React Router SPA and the Bun/Express API. I owned the frontend workflows, authentication, financial business rules, Prisma data access, PostgreSQL integration, Redis coordination, testing, and Vercel deployment setup.",
    decisions: [
      "React Router 7 in SPA mode keeps the product focused on authenticated application flows.",
      "TanStack Query owns remote data while Zustand only keeps the current authenticated user in memory.",
      "Same-origin API rewrites keep browser requests and JWT cookies aligned across Vercel environments.",
    ],
    highlights: [
      "Student and treasurer dashboards",
      "Monthly cash bills and fund applications",
      "Transactions, recaps, exports, and payment accounts",
      "Role-aware routes with refreshable httpOnly-cookie sessions",
    ],
    verification: [
      "Production frontend: galacash.vercel.app",
      "Frontend repository and API contract are publicly inspectable on GitHub",
      "Repository includes unit, integration, contract, and browser-test commands",
    ],
    stack: [
      "React",
      "React Router",
      "TypeScript",
      "TanStack Query",
      "Bun",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Vite",
      "Tailwind CSS",
    ],
  },
  eventku: {
    eyebrow: "Live event operations platform",
    title: "EventKu",
    summary:
      "An all-in-one event platform for registration, ticketing, check-in, live doorprize draws, audit reports, and audience Q&A.",
    live: "https://www.eventku.my.id/",
    role: "Full-stack Developer",
    problem:
      "Event teams need more than a registration form: they need reliable door operations, fast participant lookup, fair winner selection, and a way to keep the audience engaged during the event.",
    contribution:
      "Built the full-stack event workflow around Next.js, Prisma, and PostgreSQL, including participant management, QR check-in, draw modes, audit trails, Q&A moderation, and secure role-based sessions.",
    decisions: [
      "QR scanning is paired with manual ID/name lookup so check-in can continue when a camera or ticket scan fails.",
      "Provable draw mode commits a SHA-256 seed before the event and records reproducible winner ordering.",
      "Server-side session revocation and PII redaction protect admin workflows and participant data.",
    ],
    highlights: [
      "Public registration and ticket delivery",
      "Live QR check-in with bulk status management",
      "Random, custom, and deterministic provable draws",
      "Live Q&A with moderation and projector display",
    ],
    verification: [
      "Production app: www.eventku.my.id",
      "Public README documents the feature set and stack",
      "Repository includes build, lint, database, and deployment scripts",
    ],
    stack: ["Next.js", "React", "TypeScript", "Bun", "Prisma", "PostgreSQL", "Tailwind CSS", "Zod"],
  },
  "apsi-indonesia": {
    eyebrow: "Association management platform",
    title: "Asosiasi Profesi Satpam Indonesia",
    summary:
      "A member-facing web application that brings association information, registration, administrative workflows, and registration payments into one accessible experience.",
    live: "https://apsiindonesia.or.id/",
    role: "Frontend Developer",
    problem:
      "Prospective and existing members need a clear way to understand the association, submit their information, and complete registration without relying on disconnected offline steps.",
    contribution:
      "Implemented responsive frontend experiences for the association platform, translating registration and administrative requirements into clear screens and reusable interface patterns.",
    decisions: [
      "Structured the registration experience into understandable steps so members can complete required information with less friction.",
      "Used reusable interface patterns to keep forms, content, and administrative workflows visually consistent.",
      "Adapted layouts and controls for mobile access, where many members are likely to begin the registration process.",
    ],
    highlights: [
      "Member-facing registration flow",
      "Association information and service discovery",
      "Integrated registration payment experience",
      "Responsive public-facing interface",
    ],
    verification: [
      "Production website: apsiindonesia.or.id",
      "The public information and registration experience can be inspected on the live website",
      "My contribution is presented specifically as frontend development",
    ],
    stack: ["Next.js", "React", "Bootstrap", "Ant Design"],
  },
  "aether-innovation": {
    eyebrow: "Corporate brand website",
    title: "Aether Innovation Enterprise",
    summary:
      "A responsive company website that presents Aether Innovation's brand, services, and work through focused content, polished motion, and straightforward navigation.",
    live: "https://aether-innovation.com/",
    role: "Frontend Developer",
    problem:
      "The company needed a credible digital presence that could explain its capabilities quickly while still giving the brand a distinctive, polished presentation.",
    contribution:
      "Built responsive frontend sections and interactions from the approved designs, turning company content into a cohesive website across desktop and mobile viewports.",
    decisions: [
      "Kept the information hierarchy focused on the company, its services, and its work so visitors can orient themselves quickly.",
      "Used motion to reinforce transitions and visual hierarchy without interrupting access to the content.",
      "Composed the pages from reusable responsive sections to keep the experience consistent as content changes.",
    ],
    highlights: [
      "Responsive company and service pages",
      "Brand and portfolio presentation",
      "Purposeful motion and interactive details",
      "Clear navigation across key company content",
    ],
    verification: [
      "Production website: aether-innovation.com",
      "Responsive layouts and interactions can be reviewed directly on the live website",
      "My contribution is presented specifically as frontend development",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  "kemendagri-eis": {
    eyebrow: "Executive information system",
    title: "Indonesian Ministry of Home Affairs Executive Information System",
    summary:
      "An executive dashboard that organizes critical institutional data into concise visual summaries designed to support faster strategic review.",
    live: "https://informasieksekutif.kemendagri.go.id/",
    role: "Frontend Developer",
    problem:
      "Decision-makers need to review complex organizational information without working through dense, disconnected reports or interfaces that obscure the most important signals.",
    contribution:
      "Implemented responsive dashboard interfaces and reusable data-presentation components, with careful attention to information hierarchy, readability, and consistent interaction patterns.",
    decisions: [
      "Prioritized hierarchy and scanability so high-level information remains clear even when the dashboard contains dense data.",
      "Standardized recurring dashboard patterns to make visual summaries and controls easier to understand across sections.",
      "Designed responsive behavior around preserving meaning and legibility instead of simply shrinking desktop layouts.",
    ],
    highlights: [
      "Executive-level information summaries",
      "Structured visual data presentation",
      "Reusable dashboard interface patterns",
      "Responsive layouts for different screen sizes",
    ],
    verification: [
      "Production website: informasieksekutif.kemendagri.go.id",
      "The public-facing dashboard experience can be inspected on the live website",
      "My contribution is presented specifically as frontend development",
    ],
    stack: ["Next.js", "React", "Bootstrap", "Ant Design"],
  },
  "hazza-solusi-pratama": {
    eyebrow: "Corporate services website",
    title: "PT Hazza Solusi Pratama",
    summary:
      "A corporate website that introduces the company and makes its manpower, event-management, and project-execution services easier to discover.",
    live: "https://hazza.co.id/",
    role: "Frontend Developer",
    problem:
      "The company needed a clear web presence that could organize several service lines, communicate credibility, and give prospective clients a direct path to learn more.",
    contribution:
      "Implemented the responsive frontend and translated the company's service structure into clear, maintainable pages for visitors across desktop and mobile devices.",
    decisions: [
      "Grouped services around visitor intent so the company's different capabilities remain easy to distinguish.",
      "Used consistent page and content patterns to support clarity across the company profile and service areas.",
      "Focused responsive behavior on keeping service information and contact paths easy to reach on smaller screens.",
    ],
    highlights: [
      "Company profile and credibility content",
      "Manpower and event-management service pages",
      "Project-execution capability presentation",
      "Responsive discovery and contact paths",
    ],
    verification: [
      "Production website: hazza.co.id",
      "The company profile and service experience can be reviewed on the live website",
      "My contribution is presented specifically as frontend development",
    ],
    stack: ["Laravel", "Bootstrap"],
  },
};

export const stackGroups = [
  {
    label: "Interface",
    tools: [
      "React",
      "Next.js",
      "React Router",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Bootstrap",
      "Ant Design",
      "GSAP",
    ],
    proof: "Used across GalaCash, EventKu, and client-facing applications.",
  },
  {
    label: "Product systems",
    tools: [
      "Bun",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Zod",
      "Laravel",
    ],
    proof: "Used for authentication, financial workflows, event operations, and persistence.",
  },
  {
    label: "Quality & delivery",
    tools: ["Bun test", "Playwright", "Vite", "Vercel", "GitHub"],
    proof: "Used to test critical flows, build production bundles, and verify deployed environments.",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Web Developer",
    desc: "Take client projects from planning through deployment, turning business goals into responsive websites and web applications. Focus on clear interfaces, reliable integrations, performance, and maintainable frontend architecture.",
    className: "md:col-span-2",
    company: "Freelance",
    yearstart: "December 2022",
    yearend: "Present",
  },
  {
    id: 2,
    title: "Programming Instructor",
    desc: "Teach programming and problem-solving through hands-on projects, helping students and community members build confidence by shipping small, understandable solutions. Repeated workshop invitations reflect the impact of this mentoring approach.",
    className: "md:col-span-2",
    company: "Self-employed",
    yearstart: "September 2022",
    yearend: "Present",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    desc: "Built and maintained production features for Maleo AI's SaaS products, internal tools, and websites with React and Next.js. Improved reusable frontend patterns, performance, code quality, and collaboration between design and backend teams.",
    className: "md:col-span-2",
    company: "Maleo AI",
    yearstart: "September 2025",
    yearend: "December 2025",
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    desc: "Translated product designs into responsive interfaces, created wireframes and prototypes, and helped maintain Maleo AI's design system. Streamlined design slicing and API integration with AI-assisted tools, cutting repetitive implementation time by nearly 50 percent.",
    className: "md:col-span-2",
    company: "Maleo AI",
    yearstart: "March 2025",
    yearend: "September 2025",
  },
  {
    id: 5,
    title: "Frontend Developer",
    desc: "Improved Smarteschool interfaces, strengthened design consistency, fixed key bugs, and delivered features based on user needs in close collaboration with the development team.",
    className: "md:col-span-2",
    company: "PT ITHO INDOSTOCK",
    yearstart: "June 2023",
    yearend: "April 2024",
  },
  {
    id: 6,
    title: "Frontend Developer",
    desc: "Built a responsive Puro Sabor event website with multimedia content, vendor listings, and search-focused performance improvements for a Latin American culture celebration.",
    className: "md:col-span-2",
    company: "Rally the Locals",
    yearstart: "October 2023",
    yearend: "November 2023",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ridwanalfarezi",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ridwanalfarezii/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ridwanalfarezi/",
  },
];
