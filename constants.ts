import type { PersonalInfo, Experience, SkillCategory, Education, Project } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Moch. Wahyu Heriyanto',
  title: 'Internal Audit & Digital Process Transformation Specialist',
  email: 'pandanca7@gmail.com',
  phone: '+62 896 7200 3771',
  // --- FOTO PROFIL DIGANTI DI SINI ---
  profilePictureUrl: '/images/profile-photo.jpg', 
  professionalSummary:
    'A finance and audit professional with over 9 years of proven experience, transitioning from financial management to a senior internal auditor role. Expert in executing risk-based audits, optimizing business processes through Python automation, and providing strategic recommendations to senior management. Adept at merging a deep understanding of the revenue cycle (from a Finance AR role) with an internal control perspective to drive efficiency and compliance.',
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Senior Internal Auditor',
    company: 'Trans TV',
    location: 'Jakarta',
    period: '2020 - Present',
    description: [
      'Independently executed risk-based internal audits on vital divisions (revenue, production, digital), successfully reducing operational risk by 30% through key finding identification and mitigation.',
      'Pioneered and led a data reconciliation automation project using Python, saving over 120 man-hours per month and cutting process time from 10 days to 3 days.',
      'Developed concise, data-driven audit reports and presented them to senior management to support swift and accurate decision-making.',
      'Supervised and monitored the implementation of cross-departmental audit recommendations, ensuring all corrective actions were completed timely and in alignment with the COSO framework.',
    ],
  },
  {
    role: 'Section Head Finance AR',
    company: 'Trans TV',
    location: 'Jakarta',
    period: '2017 - 2020',
    description: [
      'Led the Account Receivable (AR) team, managed billing cycles, and ensured the accuracy of company revenue records.',
      'Developed and implemented a "paperless" project for the financial information system, significantly improving process efficiency and reducing paper usage.',
      'Coordinated with accounting and tax teams to ensure data integrity and the completeness of accurate and timely financial reports.',
    ],
  },
  {
    role: 'Store Supervisor',
    company: 'JCO Donuts & Coffee, Grage Mall Cirebon',
    location: 'Cirebon',
    period: '2014 - 2016',
    description: [
      'Supervised daily operations for a team of 15+ crew members, ensuring compliance with service SOPs and consistent product quality.',
      'Managed inventory and reduced potential waste by up to 15% through the implementation of strict daily stock controls.',
    ],
  },
  {
    role: 'Area Supervisor',
    company: 'Matahari Dept. Store, Cirebon Super Block Mall',
    location: 'Cirebon',
    period: '2012 - 2014',
    description: [
        'Managed a sales team of 20+ SPG/SPB and was responsible for achieving sales targets and visual merchandising standards.',
        'Initiated an internal stock audit program that successfully reduced inventory shrinkage by 40% in the managed area.'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Audit & Risk Governance',
    items: [
      { name: 'Risk-Based Auditing', proficiency: 95 },
      { name: 'Control Frameworks (COSO, ISO)', proficiency: 90 },
      { name: 'Fraud Detection & Prevention', proficiency: 85 },
      { name: 'Compliance & Regulatory Audit', proficiency: 88 },
      { name: 'SOP Development & Optimization', proficiency: 92 },
    ],
  },
  {
    category: 'Data Analysis & Automation',
    items: [
      { name: 'Data-Driven Analysis', proficiency: 90 },
      { name: 'Process Automation (Python)', proficiency: 95 },
      { name: 'Data Visualization (Power BI)', proficiency: 80 },
      { name: 'Advanced Excel (Pivot, Query)', proficiency: 98 },
      { name: 'Financial Reporting & AR Management', proficiency: 93 },
    ],
  },
  {
    category: 'Management & Technical',
    items: [
      { name: 'Audit Reporting & Presentation', proficiency: 95 },
      { name: 'Stakeholder Engagement', proficiency: 90 },
      { name: 'Complex Problem-Solving', proficiency: 88 },
      { name: 'Python (Pandas, Numpy)', proficiency: 85 },
      { name: 'Web Dev (Next.js, Node.js)', proficiency: 70 },
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Bachelor of Economics (Accounting) (S.E.)',
    institution: 'Universitas Muhammadiyah Prof. DR. HAMKA (Uhamka), Jakarta',
    gpa: '3.28 / 4.00',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Data Reconciliation Automation',
    imageUrl: '/images/projects/data-automation.jpg',
    description: 'An automation project to streamline the data reconciliation process, drastically reducing manual effort and processing time.',
    technologies: ['Python', 'Pandas', 'Excel Automation'],
    detailedDescription: 'Imagine a librarian who has to manually check every single book against a master list every day. It takes forever. This project built a smart robot (using Python) that does this check in minutes. It automatically compares large datasets, flags discrepancies, and generates a clean report, transforming a 10-day manual task into a 3-day automated process.',
    flowchartSteps: [
      { step: 1, title: 'Identify Manual Process', description: 'Analyzed the existing 10-day manual data reconciliation workflow to pinpoint bottlenecks.' },
      { step: 2, title: 'Develop Python Script', description: 'Wrote a script using Pandas to ingest, clean, and compare large Excel datasets automatically.' },
      { step: 3, title: 'Implement & Test', description: 'Deployed the script into the daily workflow and conducted parallel runs to ensure accuracy.' },
      { step: 4, title: 'Measure & Optimize', description: 'Validated results, confirming a reduction from 10 days to 3 days and saving over 120 man-hours monthly.' },
    ]
  },
  {
    title: 'Paperless System Implementation',
    imageUrl: '/images/projects/paperless-system.jpg',
    description: 'A successful initiative to digitize financial information systems, improving efficiency and significantly reducing paper consumption.',
    technologies: ['Financial Systems', 'Process Re-engineering', 'Change Management'],
    detailedDescription: 'Think of this project as converting a massive, dusty archive of paper files into a searchable digital library. By implementing a new workflow within the financial information system, we eliminated the need for most physical documents. This not only saved trees but also made finding information instant, speeding up approvals and reporting cycles.',
    flowchartSteps: [
      { step: 1, title: 'Map Paper-Based Workflows', description: 'Documented all processes relying on physical paper for approvals and record-keeping.' },
      { step: 2, title: 'Select & Configure Digital Tools', description: 'Identified and configured features within the existing financial system to handle digital documentation.' },
      { step: 3, title: 'Train Teams', description: 'Conducted training sessions to ensure smooth adoption of the new, paperless process by all stakeholders.' },
      { step: 4, title: 'Go-Live & Monitor', description: 'Launched the new system and monitored for efficiency gains and user feedback, ensuring a successful transition.' },
    ]
  },
  {
    title: 'Internal Stock Audit Program',
    imageUrl: '/images/projects/stock-audit.jpg',
    description: 'A proactive internal audit program designed to identify and reduce inventory discrepancies (shrinkage) at a retail level.',
    technologies: ['Inventory Management', 'Audit Programs', 'Retail Operations'],
    detailedDescription: 'This project was like being a detective in a large warehouse. Instead of waiting for the end of the year to find out things were missing, we created a system of regular, surprise check-ups (internal audits). This proactive approach helped us find the root causes of inventory loss and fix them, leading to a massive 40% reduction in shrinkage.',
    flowchartSteps: [
      { step: 1, title: 'Analyze Shrinkage Data', description: 'Reviewed historical inventory data to identify high-risk areas and products.' },
      { step: 2, title: 'Design Audit Procedures', description: 'Developed a standardized checklist and surprise audit schedule for the sales floor and stockroom.' },
      { step: 3, title: 'Execute Audits & Report', description: 'Led the sales team in conducting regular audits and reported findings to management.' },
      { step: 4, title: 'Implement Controls', description: 'Introduced new inventory control measures based on audit findings, resulting in a 40% shrinkage reduction.' },
    ]
  },
];