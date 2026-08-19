export type Locale = 'en' | 'es';

export interface PracticeAreaDetail {
  id: string;
  name: string;
  nameEs: string;
  slug: string;
  shortDesc: string;
  shortDescEs: string;
  iconName: string;
  seoTitle: string;
  seoTitleEs: string;
  metaDesc: string;
  metaDescEs: string;
  overview: string;
  overviewEs: string;
  commonIssues: string[];
  commonIssuesEs: string[];
  californiaLaws: string[];
  californiaLawsEs: string[];
  whenToConsult: string[];
  whenToConsultEs: string[];
  faqs: { question: string; questionEs: string; answer: string; answerEs: string }[];
}

export interface CountyDetail {
  name: string;
  slug: string;
  region: 'Southern California' | 'Northern California' | 'Central Valley' | 'Bay Area' | 'Central Coast' | 'Sierra / Northern Mountains';
  population: string;
  seat: string;
  majorCities: string[];
}

export interface LegalGuide {
  id: string;
  slug: string;
  title: string;
  titleEs: string;
  summary: string;
  summaryEs: string;
  practiceArea: string;
  author: string;
  reviewer: string;
  lastReviewed: string;
  readTime: string;
  citations: { name: string; url: string; codeRef: string }[];
  content: string;
  contentEs: string;
}
