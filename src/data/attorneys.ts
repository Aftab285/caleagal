export interface AttorneyProfile {
  id: string;
  slug: string;
  name: string;
  firm: string;
  title: string;
  practiceAreas: string[];
  countiesServed: string[];
  languages: string[];
  barNumber: string;
  admittedYear: number;
  education: string;
  experienceYears: number;
  bio: string;
  verificationStatus: 'Verified California State Bar Member' | 'Active Panel Member';
}

export const sampleAttorneysData: AttorneyProfile[] = [
  {
    id: 'attorney-1',
    slug: 'sarah-jenkins-employment',
    name: 'Sarah M. Jenkins',
    firm: 'Pacific Coast Employment Law Group',
    title: 'Senior Employment Counsel',
    practiceAreas: ['Employment Law', 'ADA / Disability', 'Contract Disputes'],
    countiesServed: ['Los Angeles County', 'Orange County', 'Ventura County'],
    languages: ['English', 'Spanish'],
    barNumber: 'CA Bar #284910',
    admittedYear: 2012,
    education: 'UCLA School of Law (J.D.)',
    experienceYears: 13,
    bio: 'Dedicated California employment advocate representing workers in wage theft, unpaid overtime, wrongful termination, and workplace discrimination under the California Labor Code and FEHA.',
    verificationStatus: 'Verified California State Bar Member'
  },
  {
    id: 'attorney-2',
    slug: 'carlos-rodriguez-injury',
    name: 'Carlos E. Rodriguez',
    firm: 'Golden State Personal Injury Advocates',
    title: 'Managing Partner',
    practiceAreas: ['Personal Injury', 'Car Accidents', 'Workers\' Comp'],
    countiesServed: ['San Diego County', 'Riverside County', 'Imperial County'],
    languages: ['English', 'Spanish'],
    barNumber: 'CA Bar #261845',
    admittedYear: 2008,
    education: 'UC Berkeley School of Law (J.D.)',
    experienceYears: 17,
    bio: 'Experienced trial attorney focusing on catastrophic injury, motor vehicle collisions, and premises liability claims across Southern California.',
    verificationStatus: 'Verified California State Bar Member'
  },
  {
    id: 'attorney-3',
    slug: 'elena-vance-tenant-housing',
    name: 'Elena Vance',
    firm: 'Bay Area Housing Justice Counsel',
    title: 'Tenant Rights Specialist',
    practiceAreas: ['Landlord-Tenant', 'Bed Bug Claims', 'Consumer Protection'],
    countiesServed: ['San Francisco County', 'Alameda County', 'Santa Clara County', 'Contra Costa County'],
    languages: ['English', 'Spanish'],
    barNumber: 'CA Bar #302194',
    admittedYear: 2015,
    education: 'UC Davis School of Law (J.D.)',
    experienceYears: 10,
    bio: 'Protecting California tenants in habitability violations, illegal rent increases, wrongful evictions, and toxic mold remediation disputes under the Tenant Protection Act.',
    verificationStatus: 'Verified California State Bar Member'
  },
  {
    id: 'attorney-4',
    slug: 'marcus-chen-family-estate',
    name: 'Marcus K. Chen',
    firm: 'California Family & Estate Law Associates',
    title: 'Partner',
    practiceAreas: ['Family Law', 'Wills & Trusts', 'Real Estate'],
    countiesServed: ['Santa Clara County', 'San Mateo County', 'San Francisco County'],
    languages: ['English', 'Mandarin'],
    barNumber: 'CA Bar #275412',
    admittedYear: 2010,
    education: 'Stanford Law School (J.D.)',
    experienceYears: 15,
    bio: 'Guiding California families through community property division, child custody determinations, probate avoidance, and revocable living trust administration.',
    verificationStatus: 'Verified California State Bar Member'
  },
  {
    id: 'attorney-5',
    slug: 'amira-patel-immigration',
    name: 'Amira N. Patel',
    firm: 'California Immigrant Rights Practice',
    title: 'Immigration Counsel',
    practiceAreas: ['Immigration', 'Criminal Defense'],
    countiesServed: ['Sacramento County', 'Fresno County', 'San Joaquin County', 'Yolo County'],
    languages: ['English', 'Spanish', 'Hindi'],
    barNumber: 'CA Bar #319804',
    admittedYear: 2017,
    education: 'UC San Francisco Law (Hastings, J.D.)',
    experienceYears: 8,
    bio: 'Representing individuals and families in citizenship naturalization, employment visas, provisional waivers, and deportation defense in California immigration courts.',
    verificationStatus: 'Verified California State Bar Member'
  }
];
