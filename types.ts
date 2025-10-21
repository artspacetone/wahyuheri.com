export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  profilePictureUrl: string;
  professionalSummary: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skill {
  name:string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  gpa?: string;
}

export interface FlowchartStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  detailedDescription?: string;
  flowchartSteps: FlowchartStep[];
}
