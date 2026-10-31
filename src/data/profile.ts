// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Poonam M",
  role: "Product Manager · Technical Product Owner",
  location: "London, United Kingdom",
  clearance: "SC Eligible",
  email: "poonam.productmanager@gmail.com",
  linkedin: "https://www.linkedin.com/in/maurya-poonam",

  headline: "I turn complex, regulated problems into products people can rely on.",
  intro:
    "Product leader with 8+ years owning B2C, B2B and SaaS products across public-sector infrastructure, fintech and regulated gaming — built on 13 years of hands-on software development and quality assurance.",

  about: [
    "I own products end to end: setting the vision and strategy, aligning senior stakeholders, and translating complex needs into prioritised roadmaps that deliver measurable business value.",
    "My engineering and QA background means I work closely with technical teams — I understand architecture, APIs and release risk, and I use that to make sharper trade-offs and keep delivery predictable.",
    "I lead cross-functional agile teams and shape the ways of working around them, improving collaboration, delivery predictability and execution efficiency. I increasingly use AI tools to speed up discovery, analysis and documentation.",
  ],
};

export const stats = [
  { value: "8+", label: "years in product management" },
  { value: "13", label: "years in software development & QA" },
  { value: "3", label: "regulated sectors: public infrastructure, fintech, gaming" },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  description?: string;
};

export const productRoles: Role[] = [
  {
    company: "Pole Star Group",
    title: "Product Owner",
    period: "Jan 2026 — Present",
    location: "London",
    description:
      "Enterprise asset management solutions for infrastructure — structures, drainage, vegetation, buildings and ancillary assets.",
  },
  {
    company: "MyAssets",
    title: "Product Owner",
    period: "Mar 2024 — Oct 2025",
    location: "London",
    description:
      "Cloud-based SaaS platform providing centralised management of physical and digital assets for personal and business use.",
  },
  {
    company: "Bally's Interactive",
    title: "Product Owner — Core Gaming & Platform",
    period: "Oct 2021 — Dec 2023",
    location: "London",
    description: "Online poker and platform engineering in a regulated gaming environment.",
  },
  {
    company: "Gamesys",
    title: "Product Owner — Core Gaming & Platform",
    period: "Dec 2017 — Oct 2021",
    location: "London",
    description:
      "Online poker and platform engineering. Moved into product ownership after five years as a Software Developer in Test.",
  },
];

export const engineeringRoles: Role[] = [
  { company: "Gamesys", title: "Software Developer in Test", period: "2012 — 2017", location: "London" },
  { company: "NIIT Technologies", title: "Test Analyst (client: Jet2.com)", period: "2009 — 2012", location: "Leeds" },
  { company: "Headstrong", title: "Consultant", period: "2007 — 2008", location: "Noida, India" },
  { company: "iGATE (Patni Computer Systems)", title: "Software Engineer", period: "2004 — 2007", location: "Noida, India" },
  { company: "Suzlon Wind Energy", title: "Programmer", period: "2004", location: "Pune, India" },
];

export const approach = [
  {
    title: "Strategy & roadmaps",
    body: "Product vision, OKRs and KPIs, MVP scoping and roadmap planning, aligned with senior stakeholders and regulatory constraints.",
  },
  {
    title: "Discovery & analysis",
    body: "Requirements elicitation, BPMN process mapping, data-flow and impact analysis, customer journey mapping and root-cause analysis.",
  },
  {
    title: "Prioritisation",
    body: "MoSCoW, RICE, WSJF and value-vs-effort, so the backlog reflects evidence about value and risk rather than opinion.",
  },
  {
    title: "Delivery",
    body: "Scrum, Kanban, LeSS and Agile Release Trains, with backlog refinement, release and incident management, and value stream mapping.",
  },
];

export const skillGroups = [
  {
    title: "Product",
    items: ["Product vision & strategy", "Stakeholder management", "Roadmapping", "MVP scoping", "Backlog management", "User stories", "Product launch & adoption", "Regulatory compliance", "Risk management"],
  },
  {
    title: "Data & analytics",
    items: ["SQL", "Tableau", "Power BI", "Google Analytics", "PostHog", "Grafana", "Metabase", "New Relic"],
  },
  {
    title: "Design & research",
    items: ["User-centred design", "Wireframing", "Prototyping", "Figma", "Miro", "Lucidchart"],
  },
  {
    title: "Technical",
    items: ["APIs", "Microservices", "Kubernetes", "AWS", "GCP", "Postman", "GitHub"],
  },
  {
    title: "Tools",
    items: ["Jira", "Confluence", "Aha!", "Productboard", "Notion", "Monday.com", "Asana", "Slack", "HubSpot", "Stripe", "Plaid", "Appcues", "Claude"],
  },
];

export const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Foundation in Software Testing",
  "Introducing Tableau",
  "Microsoft Certified Professional (ASP.NET, VB.NET)",
];

export const education = [
  {
    qualification: "Master's, Computer / IT Administration & Management",
    school: "IMED, Bharati Vidyapeeth Deemed University, Pune",
    period: "2001 — 2003",
  },
  {
    qualification: "BSc, Computer Applications",
    school: "St Xavier's College, Ranchi",
    period: "1997 — 2001",
  },
];
