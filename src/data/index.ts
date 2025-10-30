export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I'm a frontend engineer who enjoys building fast, reliable, and easy-to-use web applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone and working hours",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I continously improve my skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Open to new opportunities",
    description: "I'm currently",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Asosiasi Profesi Satpam Indonesia",
    des: "Welcome to the new Asosiasi Profesi Satpam Indonesia Web App, designed to streamline association management and now featuring an integrated payment gateway for registration purposes Our updated platform offers a comprehensive suite of tools to simplify administrative tasks and enhance member convenience.",
    img: "/apsi.svg",
    iconLists: ["/next.svg", "/bootstrap.svg", "/antd.svg"],
    link: "https://apsiindonesia.or.id/",
  },
  {
    id: 2,
    title: "Aether Innovation Enterprise",
    des: "Established recently in 2024, AI Enterprise entrusted me to translate their vision into a dynamic and user-friendly website. Through collaboration and attention to detail, I designed and developed a website that reflects AI Enterprise's commitment to innovation and excellence. From intuitive navigation to engaging content, every aspect of the website was crafted with the goal of enhancing AI Enterprise's online presence and effectively communicating their brand message.",
    img: "/aether.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "https://aether-innovation.com/",
  },
  {
    id: 3,
    title: "Indonesian Ministry of Home Affairs Executive Information System",
    des: "An Executive Information System (EIS) is a specialized form of management information system (MIS) designed to provide top-level executives and decision-makers within an organization with timely and relevant information. EIS is a powerful tool that facilitates the strategic decision-making process by offering a consolidated view of an organization's critical data in the form of easily digestible visual representations. It empowers executives to make informed, data-driven choices that align with the organization's objectives and goals.",
    img: "/eis.svg",
    iconLists: ["/next.svg", "/bootstrap.svg", "/antd.svg"],
    link: "https://informasieksekutif.kemendagri.go.id/",
  },
  {
    id: 4,
    title: "PT Hazza Solusi Pratama",
    des: "A leading company specializing in manpower solutions, event management, and project execution. With a dedicated team of professionals in each business unit, PT Hazza Pratama is committed to delivering high-quality and innovative services to its clients.",
    img: "/hazza.svg",
    iconLists: ["/laravel.svg", "/bootstrap.svg"],
    link: "https://hazza.co.id/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer / Frontend Developer",
    desc: "I focus on developing and maintaining user-facing features for Maleo AI's SaaS products, internal tools, and websites using React and Next.js. I work closely with designers and backend engineers to ensure responsive, reliable, and well-structured front-end implementations. My role involves improving performance, maintaining code quality, and refining front-end architecture to make ongoing development smoother and more scalable. Previously as Frontend Developer, I supported web application development by turning design concepts into functional interfaces, created wireframes, prototypes, and mockups, and helped build and maintain the company's design system. Using AI-assisted tools, I streamlined design slicing and API integration processes, cutting development time by nearly 50 percent.",
    className: "md:col-span-2",
    company: "Maleo AI",
    yearstart: "March 2025",
    yearend: "Present",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "I design and build custom websites and web applications for clients across various industries. My work emphasizes responsive design, optimized performance, and scalable front-end architecture. I manage each project from planning and design to development and deployment, ensuring that every product aligns with both technical and business goals.",
    className: "md:col-span-2",
    company: "Freelance",
    yearstart: "December 2022",
    yearend: "Present",
  },
  {
    id: 3,
    title: "Programming Instructor",
    desc: "Teach programming and problem-solving to students and community members through hands-on projects. Build trust and engagement using a Give First, Take Later approach. Invited repeatedly for workshops thanks to proven impact and mentorship skills.",
    className: "md:col-span-2",
    company: "Self-employed",
    yearstart: "September 2022",
    yearend: "Present",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "I helped improve user interfaces, enhance design consistency, and fix key bugs within the Smarteschool application. I also implemented new features based on user needs and collaborated closely with the development team to deliver a better product.",
    className: "md:col-span-2",
    company: "PT ITHO INDOSTOCK",
    yearstart: "June 2023",
    yearend: "April 2024",
  },
  {
    id: 5,
    title: "Frontend Developer",
    desc: "I developed a responsive website for an event called Puro Sabor, celebrating Latin American culture. The project included integrating multimedia content, vendor listings, and optimizing for search visibility and performance.",
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
