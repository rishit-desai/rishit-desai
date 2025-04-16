import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rishit",
  lastName: "Desai",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer | AI/ML Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata-Mumbai/India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rishit-desai",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rishit-desai",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rishit321@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Developer<br />AI/ML Engineer</>,
  subline: (
    <>
      Hey, I'm Rishit! I'm studying Computer Engineering and really into building things
      <br />especially with full-stack web dev and AI/ML.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Mumbai`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Rishit, a Computer Engineering student passionate about transforming complex technical challenges into efficient and scalable software solutions. My work encompasses full-stack development, where I build robust web applications using modern front-end frameworks, server-side technologies, and database systems, and extends into the dynamic field of AI/ML, where I explore applications of deep learning and machine learning techniques. I'm driven to create impactful technology that bridges the gap between innovative concepts and practical engineering.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mondelēz International",
        timeframe: "May 2024 - Nov 2024",
        role: "MDS DevOps Engineering Intern",
        achievements: [
          <>
            Developed strong interpersonal and communication skills by collaborating effectively with diverse teams. Cultivated a collaborative work environment and fostered strong teamwork. Enhanced mentoring and teaching abilities, enabling me to share knowledge and empower others. Improved my ability to convey complex information clearly and concisely, making it easier for others to understand and learn.
          </>,
          <>
            Achievements: <br />
            - Developed and implemented automated solutions that significantly reduced manual tasks, resulting in a 12-hour weekly time saving. <br />
            - Engineered a robust application that integrated Jira and qTest to automate report generation, reduce manual effort by 70% and improved data consistency.
          </>,
        ],
        images: [],
      },
      {
        company: "Kenmark ITan Solutions",
        timeframe: "Dec 2022 - Apr 2023",
        role: "Full Stack Web Development Intern",
        achievements: [
          <>
            As a Full Stack Developer Intern at Kenmark ITan, I collaborated with cross-functional teams to design, develop, and deploy innovative web applications. I leveraged Angular for robust front-end development, Node.js for efficient back-end services, Sequelize.js as an Object-Relational Mapper to interact with a MySQL database and implemented responsive web design principles for seamless user experiences across various devices. I actively participated in code reviews, testing, and debugging to maintain high-quality standards. Additionally, I gained hands-on experience in Agile methodologies and contributed to the development of Melo (Music Distribution) and MSC Cruises Job Portal.
          </>,
        ],
        images: [],
      },
      {
        company: "WhatCode.in",
        timeframe: "Dec 2021 - May 2022",
        role: "Technical Executive",
        achievements: [

          <>Spearheaded talent acquisition efforts and streamlined onboarding processes for new technical hires.</>,
          <>Directed and mentored cross- functional teams(development, QA, design), ensuring seamless collaboration and on - time project delivery.</>,
          <>Managed the end - to - end product development lifecycle, consistently meeting or exceeding project expectations and client requirements.</>,
          <>Implemented and maintained robust infrastructure for web application and database hosting, minimizing downtime and optimizing performance.</>,
          <>Proactively identified and resolved technical challenges, ensuring uninterrupted product development and deployment.</>,
          <>Coordinated interdepartmental communication, fostering alignment and efficient project execution.</>
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "NMIMS University",
        description: <>Bachelor's in Technology (Integrated) (Computer Engineering) - (2019-2025)</>,
      },
      {
        name: "NMIMS University",
        description: <>Diploma in Computer Engineering (2019 - 2022)</>,
      },
      {
        name: "Children's Academy",
        description: <>Indian Certificate of Secondary Education (ICSE) - Science</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        "title": "React.js",
        "description": "Skilled in developing user interfaces using React.js.",
        "images": []
      },
      {
        "title": "Node.js",
        "description": "Proficient in server-side JavaScript development with Node.js.",
        "images": []
      },
      {
        "title": "Python",
        "description": "Proficient in Python programming.",
        "images": []
      },
      {
        "title": "TensorFlow",
        "description": "Experienced in developing machine learning models with TensorFlow.",
        "images": []
      },
      {
        "title": "MySQL",
        "description": "Skilled in database management with MySQL.",
        "images": []
      },
      {
        "title": "Git/GitHub",
        "description": "Proficient in version control and collaboration using Git/GitHub.",
        "images": []
      },
      {
        "title": "DevOps",
        "description": "Experienced in DevOps practices and tools (Docker, AWS, GCP).",
        "images": []
      },
      {
        "title": "Project Management",
        "description": "Experienced in Agile and other project management methodologies.",
        "images": []
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
