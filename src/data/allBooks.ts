import { academyModules } from './academyData'
import { cehrsModules } from './cehrsData'
import { agenticHealthcareModules } from './agenticHealthcareData'
import type { AcademyModule } from './academyData'

export interface Book {
  id: string
  slug: string
  badge: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  hook: string
  totalHours: string
  audience: string[]
  modules: AcademyModule[]
  quickStart: { label: string; slug: string }
  author: string
}

export const ACADEMY_AUTHOR = 'Dilawar Gopang'

export const allBooks: Book[] = [
  {
    id: 'physical-ai',
    slug: 'physical-ai',
    badge: 'ROBOTICS',
    eyebrow: 'Book 1',
    title: 'Physical AI & Humanoid Robotics',
    subtitle: 'The Technology Behind Autosapien G1',
    description: 'Research-grade curriculum covering the 2024–2026 frontier. From QDD actuators to π0 VLA foundation models — every module informs a design decision in G1.',
    hook: 'No humanoid has yet demonstrated 8-hour unsupervised household operation. G1 will. This is the curriculum that gets us there.',
    totalHours: '68+',
    audience: ['Robotics Engineers', 'ML Researchers', 'G1 Development Team', 'Physical AI Students'],
    quickStart: { label: 'Start with the Humanoid Landscape', slug: 'humanoid-landscape' },
    author: ACADEMY_AUTHOR,
    modules: academyModules,
  },
  {
    id: 'cehrs',
    slug: 'cehrs',
    badge: 'CERTIFICATION PREP',
    eyebrow: 'Book 2',
    title: 'CEHRS Certification Prep',
    subtitle: 'NHA Certified Electronic Health Records Specialist',
    description: 'Complete preparation for the 130-question NHA CEHRS exam. All 6 domains, real exam content, and a 10-day countdown study plan.',
    hook: '22% of the exam is documentation. 21% is medical terminology. 17% is HIPAA. You need to know exactly which 130 facts appear — this book tells you.',
    totalHours: '44+',
    audience: ['Healthcare IT Students', 'EHR Specialists', 'Medical Records Staff', 'HIM Professionals'],
    quickStart: { label: 'Start with the Exam Blueprint', slug: 'ehr-ecosystem' },
    author: ACADEMY_AUTHOR,
    modules: cehrsModules,
  },
  {
    id: 'agentic-healthcare',
    slug: 'agentic-healthcare',
    badge: 'AGENTIC AI',
    eyebrow: 'Book 3',
    title: 'AI Healthcare Employees',
    subtitle: 'Building Personal Medical Billers at Scale',
    description: 'Build, deploy, and scale AI agents that automate US healthcare administration. RCM, prior auth, medical coding, denial management, and the complete Personal Medical Biller — on the Autosapien stack.',
    hook: 'US healthcare spends $500B/year on admin paperwork. One engineer with the right agent framework can automate what a team of 20 used to do manually.',
    totalHours: '52+',
    audience: ['AI Developers', 'Healthcare Startups', 'RCM Professionals', 'Practice Managers', 'Health IT Engineers'],
    quickStart: { label: 'Start with the $500B Problem', slug: 'us-healthcare-admin-crisis' },
    author: ACADEMY_AUTHOR,
    modules: agenticHealthcareModules,
  },
]

export const allModules: AcademyModule[] = [
  ...academyModules,
  ...cehrsModules,
  ...agenticHealthcareModules,
]

export function findModule(slug: string): { module: AcademyModule; book: Book } | null {
  for (const book of allBooks) {
    const module = book.modules.find((m) => m.slug === slug)
    if (module) return { module, book }
  }
  return null
}
