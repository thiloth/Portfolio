export const profile = {
  name: 'THILOTH B SHETTY',
  shortName: 'Thiloth',
  role: 'SAP ABAP Developer',
  company: 'IBM India Pvt. Ltd.',
  title: 'SAP ABAP Developer | ABAP Cloud Certified | SAP Backend Developer',
  tagline: 'Designing Enterprise SAP Solutions with Clean Backend Engineering',
  intro:
    'SAP ABAP Developer at IBM with hands-on experience in enterprise SAP backend development including OData services, ALV reports, Module Pool programming, IDoc integrations, CDS Views, AMDP, performance optimization, Smart Forms, and custom SAP enhancements. Passionate about scalable backend architecture, SAP integrations, debugging complex business scenarios, and exploring modern web technologies.',
  startDate: 'February 12, 2024',
  email: 'thilothb@gmail.com',
  phone: '+91 94460 15365',
  phoneRaw: '+919446015365',
  github: 'https://github.com/thiloth',
  linkedin: 'https://www.linkedin.com/in/thiloth-b-shetty',
  location: 'India',
  resume: './resume.pdf',
  typingRoles: [
    'SAP ABAP Developer',
    'SAP Backend Developer',
    'OData & CDS Developer',
    'Enterprise Solution Builder',
    'Exploring Full Stack Development',
  ],
};

export const stats = [
  { label: 'IBM SAP Developer', value: 'IBM' },
  { label: 'SAP Global Certifications', value: '2' },
  { label: 'Enterprise Solutions', value: '20+' },
  { label: 'Backend Specialist', value: 'ABAP Cloud' },
];

// Animated counters for the dedicated Metrics section
export const metrics = [
  {
    label: 'Enterprise SAP Solutions Delivered',
    value: 20,
    suffix: '+',
    accent: 'from-cyan-400 to-indigo-500',
  },
  {
    label: 'SAP Global Certifications',
    value: 2,
    suffix: '',
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    label: 'Months at IBM',
    // Auto-updates from start date so the number is always current.
    dynamic: 'monthsAtIBM',
    suffix: '+',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    label: 'Backend Domains',
    value: 8,
    suffix: '',
    suffixLabel: 'ABAP · CDS · OData · RFC',
    accent: 'from-emerald-400 to-teal-500',
  },
];

export const skillGroups = [
  {
    title: 'SAP ABAP Expertise',
    icon: 'code',
    accent: 'from-indigo-500 to-violet-500',
    items: [
      'Classical Reports',
      'Interactive Reports',
      'ALV Reports',
      'Module Pool Programming',
      'Smart Forms',
      'Adobe Forms',
      'User Exits',
      'Customer Exits',
      'Enhancements',
      'Data Dictionary',
      'Debugging',
      'Performance Optimization',
    ],
  },
  {
    title: 'Advanced SAP Technologies',
    icon: 'layers',
    accent: 'from-violet-500 to-fuchsia-500',
    items: [
      'OData Services',
      'CDS Views',
      'AMDP',
      'IDoc',
      'RFC Integrations',
      'Open SQL',
    ],
  },
  {
    title: 'Development & Tools',
    icon: 'cpu',
    accent: 'from-cyan-500 to-blue-500',
    items: ['Core Java', 'SQL', 'GitHub', 'APIs', 'SAP GUI', 'SE38', 'SE80', 'SE11', 'SE37'],
  },
  {
    title: 'Modern Tech Interests',
    icon: 'sparkles',
    accent: 'from-emerald-400 to-teal-500',
    items: [
      'React',
      'Tailwind CSS',
      'Responsive UI Design',
      'Vercel Deployment',
      'Full Stack Learning',
    ],
  },
];

export const strengths = [
  'Strong debugging skills',
  'Quick learner',
  'Problem-solving mindset',
  'Team collaboration',
  'Enterprise solution development',
];

export const experience = [
  {
    company: 'IBM India Pvt. Ltd.',
    role: 'SAP ABAP Developer',
    period: 'February 12, 2024 — Present',
    location: 'India',
    bullets: [
      'Developed enterprise ALV and Classical Reports across SAP modules.',
      'Worked on OData services and SAP integrations for cross-system data flow.',
      'Developed Module Pool applications for custom transactional screens.',
      'Created and enhanced Smart Forms and Adobe Forms for business documents.',
      'Worked on IDoc integrations for inbound / outbound enterprise messaging.',
      'Built CDS Views and AMDP implementations for performant data modeling.',
      'Performed SAP performance optimization and complex debugging.',
      'Implemented custom enhancements (User Exits, Customer Exits) and backend logic.',
      'Collaborated with functional teams to deliver enterprise SAP solutions.',
    ],
  },
];

export const certifications = [
  {
    title: 'SAP Certified — Back-End Developer (ABAP Cloud)',
    issuer: 'SAP — Global Certification',
    color: 'from-indigo-500 to-violet-500',
    icon: 'badge',
    badge: 'Global',
  },
  {
    title: 'SAP Certified — Positioning SAP Business AI Solutions as Part of SAP Business Suite',
    issuer: 'SAP — Global Certification',
    color: 'from-fuchsia-500 to-pink-500',
    icon: 'sparkles',
    badge: 'Global',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    color: 'from-sky-500 to-cyan-500',
    icon: 'cloud',
  },
  {
    title: 'SQL Concepts & Queries Certification',
    issuer: 'Verified Course',
    color: 'from-emerald-500 to-teal-500',
    icon: 'database',
  },
];

export const achievements = [
  {
    title: 'IBM Appreciation for Excellence',
    description:
      'Officially recognized by IBM with an Appreciation Certification for consistently delivering high-quality SAP solutions and going beyond expectations.',
    metric: 'IBM Recognized',
  },
  {
    title: 'Multiple Star Performer Awards',
    description:
      'Awarded multiple times as a Star Performer for outstanding contributions and impactful project deliveries.',
    metric: 'Star Performer',
  },
];

// SAP-focused enterprise projects + selected personal work
export const projects = [
  {
    name: 'SAP Integration Solutions',
    description:
      'Enterprise integrations using IDoc, RFC, and OData services — reliable, monitored, cross-system data flow for mission-critical processes.',
    tech: ['IDoc', 'RFC', 'OData', 'ABAP'],
    type: 'Enterprise',
    highlight: 'Featured',
  },
  {
    name: 'Performance Optimization Solutions',
    description:
      'Optimized SAP programs and database performance for enterprise applications — code, Open SQL, and runtime tuning for measurable speed gains.',
    tech: ['Performance Tuning', 'Open SQL', 'Debugging', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'CDS & AMDP Development',
    description:
      'Backend data modeling and optimized database procedures using CDS Views and AMDP — pushing logic down for scale and performance.',
    tech: ['CDS Views', 'AMDP', 'HANA', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'Module Pool Applications',
    description:
      'Custom SAP transactional screens and enterprise workflows built with Module Pool programming — clean UX over robust backend logic.',
    tech: ['Module Pool', 'Dynpro', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'SAP Reporting Solutions',
    description:
      'Interactive ALV and enterprise reporting systems — drilldowns, exports, and performance-tuned Open SQL across multiple SAP modules.',
    tech: ['ALV', 'Classical Reports', 'Interactive Reports', 'Open SQL'],
    type: 'Enterprise',
  },
  {
    name: 'Smart Forms & Adobe Forms Solutions',
    description:
      'Automated enterprise document generation — invoices, purchase orders, and reports with reusable layouts and dynamic data binding.',
    tech: ['Smart Forms', 'Adobe Forms', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'SAP Enhancement Framework Solutions',
    description:
      'Custom business-logic implementations using User Exits, Customer Exits, and BAdIs — extending standard SAP behavior without disturbing the core.',
    tech: ['User Exits', 'Customer Exits', 'Enhancements', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'Money Tracker',
    description:
      'A clean personal-finance tracker for logging income, expenses, and budgets — built and deployed on Vercel.',
    tech: ['React', 'JavaScript', 'Vercel'],
    type: 'Personal',
    live: 'https://money-tracker-three-iota.vercel.app',
    repo: 'https://github.com/thiloth',
  },
  {
    name: 'Between Us',
    description:
      'A personal interactive web experience with smooth animations and a tailor-made narrative UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    type: 'Personal',
    live: 'https://between-us-website.vercel.app',
    repo: 'https://github.com/thiloth',
  },
  {
    name: 'Wood Storys',
    description:
      'A storytelling site showcasing handcrafted wood projects — clean layout, custom UI, deployed on GitHub Pages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    type: 'Personal',
    live: 'https://thiloth.github.io/Wood_storys/',
    repo: 'https://github.com/thiloth/Wood_storys',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'This site — a modern, futuristic enterprise developer portfolio engineered with React, Tailwind, and Framer Motion.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    type: 'Personal',
    repo: 'https://github.com/thiloth/Portfolio',
  },
];

export const education = [
  {
    school: 'Mangalore Institute of Technology & Engineering',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    score: 'CGPA: 8.19',
    period: 'B.E. CSE',
  },
  {
    school: "Swamiji's Higher Secondary School",
    location: 'Kasaragod, Kerala',
    degree: 'Pre-University (11th & 12th) — Science',
    score: 'Percentage: 92.4%',
    period: '11th & 12th',
  },
  {
    school: 'BEMHSS Kasaragod',
    location: 'Kasaragod, Kerala',
    degree: 'Secondary Education (SSLC)',
    score: 'Percentage: 95%',
    period: '10th',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// Helper used by Metrics — months since startDate (Feb 12, 2024)
export function monthsAtIBM() {
  const start = new Date('2024-02-12T00:00:00Z');
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return Math.max(1, months);
}
