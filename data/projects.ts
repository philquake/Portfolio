import type { Project, ProjectCategory } from "@/types";

export const categories: ProjectCategory[] = [
  "Web Applications",
  "Mobile Applications",
  "Backend and APIs",
  "Database Projects",
  "Business Websites",
];

const img = (slug: string, file: string, alt: string) => ({ src: `/images/projects/${slug}/${file}`, alt });

/**
 * Add a project by adding an object here. Screenshots go in
 * public/images/projects/<slug>/. A project with no screenshots shows a
 * placeholder panel. Leave liveUrl / sourceUrl out when there is none.
 */
export const projects: Project[] = [
  {
    slug: "penny",
    name: "Penny",
    tagline: "Personal finance application",
    description:
      "An end-to-end encrypted personal finance app for iOS and Android. It tracks transactions, budgets, savings goals and debts, and the server only ever stores ciphertext.",
    categories: ["Mobile Applications", "Backend and APIs"],
    stack: ["Flutter", "Dart", "Riverpod", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
    status: "In development, preparing for store release",
    device: "phone",
    screenshots: [
      img("penny", "01_overview.png", "Penny overview screen with total balance, budgets and recent transactions"),
      img("penny", "02_budgets.png", "Penny budgets screen"),
      img("penny", "03_wallet.png", "Penny wallet screen with cash, savings and debt"),
      img("penny", "04_debts.png", "Penny debt tracking screen"),
      img("penny", "05_payoff_planner.png", "Penny debt payoff planner"),
      img("penny", "06_reports.png", "Penny monthly report screen"),
    ],
    featured: true,
    caseStudy: {
      overview:
        "Penny is a personal finance app that pairs a Flutter client for iOS and Android with a FastAPI backend on PostgreSQL. It started as a self-hosted app for a small trusted group and is being prepared for public release.",
      problem:
        "Budgeting apps hold some of the most sensitive data a person has, and most of them can read all of it on their servers. Penny set out to give people full financial tracking without asking them to trust the server with their numbers.",
      objectives: [
        "Track income, expenses, transfers, savings and debts in one mobile app",
        "Encrypt every record on the device, so the server stores only ciphertext",
        "Keep working offline and sync when the connection returns",
        "Support several devices per account without the server ever holding a readable key",
      ],
      solution:
        "Each account has one random data key. Every record is encrypted with AES-256-GCM on the phone before upload, and the server only holds that key sealed to a device's public key or to a recovery key. Because the server cannot read the data, all finance maths (balances, budget windows, daily interest, reports, payoff plans) runs on the device.",
      architecture: [
        "Flutter screens receive callbacks and never call the API directly",
        "Riverpod providers and controllers hold session, vault and data state",
        "Repositories sit on a vault layer that applies data rules and ledger maths over decrypted records held in memory, with an encrypted on-device cache and a sync queue",
        "FastAPI routers call a single CRUD layer, the only code that touches SQL, through SQLAlchemy to PostgreSQL",
        "Alembic migrations, with a migrate script that takes a verified backup before upgrading",
      ],
      features: [
        "Sign-up with email verification, password reset and Google sign-in",
        "New devices approved by scanning a QR code on a trusted device, plus a recovery key",
        "Transactions, accounts, transfers, recurring transactions and custom categories",
        "Budget plans with weekly, monthly or yearly periods and threshold notifications",
        "Savings goals and credit card and loan tracking with daily interest",
        "On-device receipt scanning that fills in a draft transaction",
        "Monthly reports, CSV import and export, light and dark themes",
        "Admin dashboard with health, database and integration status",
      ],
      challenges: [
        {
          challenge: "The server cannot compute anything, because it cannot read the data.",
          solution:
            "All finance maths moved to the client in a single ledger module. A test suite pins its results to figures computed by the original server code, so the move could not quietly change anyone's balances.",
        },
        {
          challenge: "Two devices can edit the same record while offline.",
          solution:
            "The server stores ciphertext records with version numbers and conflicts are settled on the phone: the later edit wins and a delete always wins.",
        },
        {
          challenge: "A password reset must not become a way into someone's data.",
          solution:
            "The data key is never derived from the password. It is sealed to device keys (X25519) and to a recovery key, so resetting a password gives access to the account but not to the records.",
        },
      ],
      lessons: [
        "Encryption is an architecture decision, not a feature: it decides where every calculation is allowed to run.",
        "Keeping one layer as the only code that touches SQL makes a backend much easier to test and reason about.",
        "Migrations on real data need a backup step and a rehearsal on a copy first.",
      ],
    },
  },
  {
    slug: "cxc-platform",
    name: "CXC Platform",
    tagline: "Educational learning platform",
    description:
      "A free exam-prep site for Caribbean students taking CSEC Information Technology and CAPE Computer Science, with lessons, quizzes, timed mock exams, flashcards and progress tracking.",
    categories: ["Web Applications", "Database Projects"],
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "CSS", "Cloudinary"],
    status: "In development",
    device: "desktop",
    screenshots: [
      img("cxc-platform", "01-home.png", "CXC Platform home page with a sample exam question"),
      img("cxc-platform", "02-course.png", "CXC Platform course page with units and lessons"),
      img("cxc-platform", "03-lesson.png", "CXC Platform lesson reader"),
      img("cxc-platform", "04-tools.png", "CXC Platform binary converter tool"),
    ],
    sourceUrl: "https://github.com/philquake/cxc_platform",
    featured: true,
    caseStudy: {
      overview:
        "CXC Platform (branded compile/) is a Django web application where students read lessons, take practice quizzes and timed mock exams, review flashcards, and track their progress with XP, streaks, leaderboards and study plans.",
      problem:
        "Students preparing for CSEC Information Technology and CAPE Computer Science often study on their own, with little practice material that explains why an answer is right or adapts to what they keep getting wrong.",
      objectives: [
        "Give self-studying students lessons and practice in one free site",
        "Turn mistakes into review material automatically",
        "Show each student where they stand and what to study next",
        "Let one person author and manage all of the content",
      ],
      solution:
        "The platform is organised as Django apps for accounts, subjects, lessons, questions, quizzes and progress. Missed questions become flashcards scheduled with SM-2 spaced repetition, and each student is moved between guided, personalised and exam-practice quiz pathways per topic, based on recent results.",
      architecture: [
        "Django project split into focused apps: accounts, core, lessons, progress, questions, quizzes and subjects",
        "PostgreSQL in production, with in-memory SQLite for the test suite",
        "Server-rendered templates with plain CSS and JavaScript, no build step",
        "Lesson authoring in the Django admin with a rich-text editor and Cloudinary image uploads",
        "Login throttling and HTML sanitising on user-supplied content",
      ],
      features: [
        "User accounts with email verification, profile, data download and account deletion",
        "Courses grouped into units, with a lesson reader and mastery meters",
        "Quizzes in five formats: multiple choice, true/false, short answer, matching and worded answers",
        "Timed mock exams weighted by topic, with a timer that survives a page reload",
        "Flashcards and a mistake bank built from missed questions",
        "XP, levels, daily streaks with a weekly streak freeze, badges and leaderboards",
        "Study plans built from an exam date, with a days-left countdown on the dashboard",
        "SQL and spreadsheet practice tools and a binary converter",
        "Students can report a mistake in a question, which goes to an admin review queue",
        "Question bank with CSV import and export, a quiz generator and a marking queue",
      ],
      challenges: [
        {
          challenge: "Worded exam answers cannot be marked automatically.",
          solution:
            "They go to a marking queue in the admin, and the student sees the mark and written feedback once it is reviewed.",
        },
        {
          challenge: "Students at different levels need different practice on the same topic.",
          solution:
            "Quiz pathways are assigned per topic from recent results, so the difficulty adjusts without the student having to choose a level.",
        },
      ],
      lessons: [
        "Splitting a Django project into small apps early keeps each part understandable as features pile up.",
        "Progress tracking touches almost every model, so it pays to design the data model before the screens.",
        "Admin tooling for content is as much a part of the product as the student-facing pages.",
      ],
    },
  },
  {
    slug: "pokedatabase",
    name: "Pokédatabase",
    tagline: "Database and information application",
    description:
      "A Django reference app that catalogues Pokémon data from PokéAPI in a local database, with a filterable Pokédex, detail pages for stats, moves, evolutions and encounters, and a team builder and comparison tool.",
    categories: ["Database Projects", "Web Applications"],
    stack: ["Python", "Django", "SQLite", "Bootstrap", "JavaScript", "PokéAPI"],
    status: "In active development",
    device: "desktop",
    screenshots: [
      img("pokedatabase", "01-home.png", "Pokédatabase home page with a featured Pokémon and search"),
      img("pokedatabase", "02-pokedex.png", "Pokédatabase Pokédex listing with type badges"),
      img("pokedatabase", "03-detail.png", "Pokédatabase detail page for Bulbasaur with base stats chart and evolution chain"),
    ],
    sourceUrl: "https://github.com/philquake/PokeDatabase",
    featured: true,
    caseStudy: {
      overview:
        "Pokédatabase is a Django application that stores Pokémon, moves and encounters in SQLite and presents them through a searchable Pokédex and detailed information pages.",
      problem:
        "PokéAPI is a rich public data source, but its data is spread across many endpoints. The opportunity was to pull it into a local relational database and present it as one fast, browsable reference.",
      objectives: [
        "Model Pokémon, moves and encounters as relational data",
        "Import and refresh data from an external API reliably",
        "Provide search, a full listing and a detail page per Pokémon",
        "Back the application with automated tests",
      ],
      solution:
        "Data is fetched from PokéAPI and stored in three models: one row per species, one per move, game version and learn method, and one per wild encounter. A management command syncs new entries and re-checks stored ones, and a staff-only page triggers smaller refreshes from the browser.",
      architecture: [
        "Django models for Pokémon, moves and encounters, registered in the Django admin",
        "A services layer that wraps the external API client and data handling",
        "Management commands for importing a seed file and syncing from the API",
        "Server-rendered templates with Bootstrap and custom template tags",
        "Unit tests for data, templates, URLs and views, plus Selenium functional tests",
      ],
      features: [
        "Pokédex listing with search by name and region and type filters",
        "Detail pages with types, base stats, type defenses, evolution chain, moves, encounters and alternate forms (regional variants, Megas, Gigantamax)",
        "Browse pages for types, regions, abilities, moves, items and competitive rankings with speed tiers",
        "Shareable comparison of two to four Pokémon: stats, weaknesses and shared moves",
        "Anonymous, shareable team builder with defensive weaknesses, move-type coverage and coverage suggestions",
        "Home page with featured Pokémon",
        "Staff sync page and a command-line sync for larger updates",
      ],
      challenges: [
        {
          challenge: "A full refresh from the API takes too long for a single web request.",
          solution:
            "Large syncs run as a management command, and each Pokémon is saved as soon as it is fetched, so an interrupted sync keeps its progress.",
        },
        {
          challenge: "Re-importing data must not create duplicates.",
          solution: "Imports update existing rows in place, so the seed command is safe to run again.",
        },
      ],
      lessons: [
        "Storing external API data locally makes pages fast and keeps the app working when the API is slow.",
        "Writing tests alongside features made it safe to restructure the data layer.",
        "Long-running work belongs in a command or background job, not in a request.",
      ],
    },
  },
  {
    slug: "saltmarsh-coffee",
    name: "Business Website Demonstration 1",
    tagline: "Café and coffee roaster website",
    description:
      "A demonstration website for a fictional café: menu, opening hours, location and a clear path to visit or get in touch.",
    categories: ["Business Websites"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Demonstration (fictional business)",
    device: "desktop",
    screenshots: [img("saltmarsh-coffee", "01-home.png", "Saltmarsh Coffee demonstration site: hero with the tagline Good coffee, made slowly")],
    liveUrl: "/demos/saltmarsh-coffee",
    featured: true,
    caseStudy: {
      overview:
        "A single-page website built to show what a small hospitality business site can look like. The business is fictional and the content is sample copy.",
      problem:
        "A café's customers usually want three things quickly: what is on the menu, when it is open and where it is. Many small business sites bury those answers.",
      objectives: [
        "Put menu, hours and location within one scroll on a phone",
        "Give the business a distinct look without stock photography",
        "Keep the page light enough to load quickly on mobile data",
      ],
      solution:
        "A type-led layout with a warm palette, a short menu grouped by category, an hours table and a visit section, built as a static page.",
      architecture: [
        "A static Next.js page rendered on the server",
        "Tailwind CSS for layout and responsive behaviour",
        "No client-side JavaScript beyond what the framework ships",
      ],
      features: ["Menu by category", "Opening hours", "Location and contact section", "Responsive from phone to desktop"],
      challenges: [
        {
          challenge: "Making the page feel like a real brand without photographs.",
          solution: "Colour, typography and layout carry the identity, which also keeps the page fast.",
        },
      ],
      lessons: ["For a local business, clarity of the basics matters more than the number of pages."],
    },
  },
  {
    slug: "marlow-home-repairs",
    name: "Business Website Demonstration 2",
    tagline: "Trades and home services website",
    description:
      "A demonstration website for a fictional home repair business: services, how a job works and a prominent request-a-quote path.",
    categories: ["Business Websites"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Demonstration (fictional business)",
    device: "desktop",
    screenshots: [img("marlow-home-repairs", "01-home.png", "Marlow Home Repairs demonstration site home page")],
    liveUrl: "/demos/marlow-home-repairs",
    featured: true,
    caseStudy: {
      overview:
        "A single-page website built to show how a service business can turn visitors into quote requests. The business is fictional and the content is sample copy.",
      problem:
        "People looking for a tradesperson are comparing a few options quickly. They need to see what you do, how it works and how to ask for a price.",
      objectives: [
        "State the services plainly",
        "Explain the process from first call to finished job",
        "Keep a quote request one tap away at every point on the page",
      ],
      solution:
        "A direct, high-contrast layout with a services grid, a numbered process and repeated calls to request a quote, built as a static page.",
      architecture: [
        "A static Next.js page rendered on the server",
        "Tailwind CSS for layout and responsive behaviour",
        "No client-side JavaScript beyond what the framework ships",
      ],
      features: ["Services grid", "Step-by-step process", "Service area and hours", "Quote request call to action"],
      challenges: [
        {
          challenge: "Building trust without inventing reviews or statistics.",
          solution: "The page relies on clear scope, a plain process and easy contact instead of made-up proof.",
        },
      ],
      lessons: ["A service site works when the next step is obvious from anywhere on the page."],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
