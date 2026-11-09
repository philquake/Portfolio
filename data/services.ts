import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-websites",
    icon: "globe",
    title: "Business Website Development",
    summary: "A fast, clear website that tells customers who you are and how to reach you.",
    includes: ["Company websites", "Landing pages", "Portfolio websites", "Responsive website redesigns"],
    description:
      "I design and build websites for businesses that need a professional online presence. Every site is responsive, quick to load and built so that search engines can read it properly.",
    applications: [
      "Presenting your services and prices to new customers",
      "Collecting enquiries, bookings or quote requests",
      "Replacing an outdated site that doesn't work on phones",
    ],
    deliverables: [
      "A responsive website, tested on phone, tablet and desktop",
      "Contact or enquiry form",
      "Search-engine basics: page titles, descriptions and a sitemap",
      "Deployment to your hosting and domain",
    ],
  },
  {
    slug: "web-applications",
    icon: "layout",
    title: "Custom Web Application Development",
    summary: "Software shaped around how your business actually works.",
    includes: ["Business management systems", "Dashboard applications", "User authentication", "Custom functionality"],
    description:
      "When a spreadsheet or an off-the-shelf tool no longer fits, I build web applications around your process: user accounts, roles, data entry, reports and the specific rules your work depends on.",
    applications: [
      "Tracking customers, orders, stock or jobs in one place",
      "Giving staff or clients a secure login to their own information",
      "Turning a manual, paper-based process into an online one",
    ],
    deliverables: [
      "A working web application with user accounts",
      "A database designed for your data",
      "An admin area for managing content and users",
      "Source code and deployment notes",
    ],
  },
  {
    slug: "backend-apis",
    icon: "server",
    title: "Backend and API Development",
    summary: "The server, database and API behind a website or mobile app.",
    includes: ["REST API development", "Database architecture", "Backend integrations", "Application authentication"],
    description:
      "I build backends with Python, using Django or FastAPI on PostgreSQL. That covers data modelling, authentication, validation, automated tests and documented endpoints that a frontend or mobile team can build against.",
    applications: [
      "Powering a mobile app or single-page frontend",
      "Connecting your system to payment, email or other third-party services",
      "Restructuring a database that has outgrown its original design",
    ],
    deliverables: [
      "Documented REST API",
      "Database schema and migrations",
      "Authentication and access rules",
      "Automated tests for the core logic",
    ],
  },
  {
    slug: "mobile-apps",
    icon: "phone",
    title: "Mobile Application Development",
    summary: "One Flutter codebase for both iOS and Android.",
    includes: ["Flutter applications", "Cross-platform mobile experiences", "API integrations"],
    description:
      "I build mobile apps in Flutter, so a single codebase runs on both iOS and Android. Apps connect to an existing API or to a backend built alongside them.",
    applications: [
      "A customer-facing app for an existing service",
      "An internal tool for staff working away from a desk",
      "A first version of a product idea to put in front of users",
    ],
    deliverables: [
      "Flutter app for iOS and Android",
      "Connection to your backend or API",
      "Builds ready for store submission",
      "Source code and setup notes",
    ],
  },
  {
    slug: "automation-ai",
    icon: "bot",
    title: "Automation and AI Integration",
    summary: "Take repetitive work off your team's hands.",
    includes: ["Workflow automation", "AI-powered application features", "OCR and document processing", "Third-party API integrations"],
    description:
      "I automate repetitive tasks and add AI features where they do a useful job: reading documents, extracting data, drafting text or moving information between the systems you already use.",
    applications: [
      "Reading receipts, invoices or forms into structured data",
      "Moving data between tools without copy and paste",
      "Adding an AI-assisted feature to an existing application",
    ],
    deliverables: [
      "A working automation or integration",
      "Clear documentation of what runs, when, and how to change it",
      "Handling for errors and failed runs",
    ],
  },
];

export const process = [
  { title: "Initial consultation", text: "We talk through what you need, who it is for and what a good result looks like." },
  { title: "Requirements and planning", text: "I write down the scope, the features and a timeline, so we agree on what is being built." },
  { title: "Design and development", text: "I build in stages and share progress, so you can see it take shape and give feedback early." },
  { title: "Testing and revisions", text: "We test on real devices, fix what needs fixing and make the agreed revisions." },
  { title: "Deployment and handover", text: "I put the project live and hand over the code, the access and the notes you need to run it." },
  { title: "Ongoing maintenance, where agreed", text: "If you want continued support, we agree on what that covers before it starts." },
];

export const projectTypes = [...services.map((s) => s.title), "Something else"];

// Ranges only: fixed prices are not shown until pricing is configured.
export const budgetRanges = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];
