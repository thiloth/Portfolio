export const profile = {
  name: 'THILOTH B SHETTY',
  shortName: 'Thiloth',
  role: 'SAP ABAP Developer',
  company: 'IBM India Pvt. Ltd.',
  title: 'SAP ABAP Developer | ABAP Cloud Certified | SAP Backend Developer',
  tagline: 'Engineering Scalable SAP Backend Solutions',
  intro:
    'Passionate SAP ABAP Developer specializing in enterprise SAP backend development, ABAP Cloud, custom SAP solutions, debugging, integrations, and scalable backend architectures. Currently working at IBM India Pvt. Ltd. delivering enterprise-grade SAP solutions.',
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
    'ABAP Cloud Certified',
    'SAP Backend Developer',
    'Enterprise SAP Engineer',
  ],
};

export const stats = [
  { label: 'IBM SAP Developer', value: 'IBM' },
  { label: 'SAP Global Certifications', value: '2' },
  { label: 'Enterprise Solutions', value: '20+' },
  { label: 'Backend Specialist', value: 'ABAP Cloud' },
];

export const skillGroups = [
  {
    title: 'SAP Skills',
    accent: 'from-indigo-500 to-fuchsia-500',
    items: [
      'SAP ABAP',
      'ABAP Cloud',
      'CDS Views',
      'OData Services',
      'ALV Reports',
      'Smart Forms',
      'Adobe Forms',
      'User Exits',
      'Customer Exits',
      'RFC Integrations',
      'Debugging',
      'Open SQL',
    ],
  },
  {
    title: 'Development Skills',
    accent: 'from-cyan-500 to-blue-500',
    items: ['Backend Development', 'APIs', 'Core Java', 'SQL', 'React', 'JavaScript'],
  },
  {
    title: 'SAP Tools',
    accent: 'from-fuchsia-500 to-pink-500',
    items: ['SE38', 'SE80', 'SE37', 'SE11', 'SAP GUI', 'ADT (Eclipse)'],
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
      'Developed custom ALV and Classical reports for enterprise SAP modules.',
      'Created Smart Forms and Adobe Forms for business document automation.',
      'Worked on User Exits, Customer Exits, and standard SAP enhancements.',
      'Debugged complex standard and custom SAP objects across modules.',
      'Improved SAP performance through code and Open SQL optimization.',
      'Collaborated with functional consultants to deliver scalable solutions.',
      'Built an SAP automation tool to validate cross-system object consistency via RFC.',
      'Delivered scalable SAP backend solutions aligned with ABAP Cloud guidelines.',
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

// Featured = work projects + standout personal projects
export const projects = [
  {
    name: 'SAP ABAP Automation Tool',
    description:
      'Internal tool that validates cross-system SAP object consistency using RFC integrations — accelerating audits and reducing transport errors.',
    tech: ['SAP ABAP', 'RFC', 'Open SQL', 'ALV'],
    type: 'Enterprise',
    highlight: 'Featured',
  },
  {
    name: 'CDS & OData Backend Services',
    description:
      'Enterprise SAP backend services built on a clean CDS / OData backbone — scalable, modular, and aligned with ABAP Cloud principles.',
    tech: ['CDS Views', 'OData', 'ABAP Cloud'],
    type: 'Enterprise',
  },
  {
    name: 'Smart Forms & Adobe Forms',
    description:
      'Business document automation suite — invoices, purchase orders, and reports — with reusable layouts and dynamic data binding.',
    tech: ['Smart Forms', 'Adobe Forms', 'ABAP'],
    type: 'Enterprise',
  },
  {
    name: 'SAP Integration Solutions',
    description:
      'Cross-system SAP integrations and backend workflows leveraging RFC, BAPIs, and OData for reliable enterprise data exchange.',
    tech: ['RFC', 'BAPI', 'OData', 'ABAP'],
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
      'This site — a modern, futuristic developer portfolio engineered with React, Tailwind, and Framer Motion.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    type: 'Personal',
    repo: 'https://github.com/thiloth',
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
    school: 'Pre-University (12th)',
    degree: 'PUC — Science',
    score: 'Percentage: 92.4%',
    period: '12th',
  },
  {
    school: 'SSLC (10th)',
    degree: 'Secondary Education',
    score: 'Percentage: 95%',
    period: '10th',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
