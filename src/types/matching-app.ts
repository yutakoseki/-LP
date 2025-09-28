export type TargetAudience = 'demand' | 'supply';

export interface MatchingAppContent {
  targetAudience: TargetAudience;
  hero: HeroContent;
  problem: ProblemContent;
  feature: FeatureContent;
  cases: CaseContent;
  flow: FlowContent;
  faq: FAQContent;
  footer: FooterContent;
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  heroImage: string;
  heroImageAlt: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface ProblemItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ProblemContent {
  title: string;
  subtitle?: string;
  description: string;
  problems: ProblemItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  benefits?: string[];
}

export interface FeatureContent {
  title: string;
  subtitle?: string;
  description: string;
  features: FeatureItem[];
}

export interface CaseStudy {
  company: string;
  title: string;
  description: string;
  image?: string;
  result?: string;
  category?: string;
}

export interface CaseContent {
  title: string;
  subtitle?: string;
  description: string;
  cases: CaseStudy[];
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FlowContent {
  title: string;
  subtitle?: string;
  description: string;
  steps: FlowStep[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  subtitle?: string;
  description: string;
  faqs: FAQItem[];
}

export interface FooterContent {
  companyName: string;
  address: string;
  phone?: string;
  email?: string;
  copyright: string;
}
