export interface FAQItem {
  id: string;
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
  category: string;
}

export const homepageFAQs: FAQItem[] = [
  {
    id: 'how-it-works',
    question: 'How does CA Legal Source work?',
    questionEs: '¿Cómo funciona CA Legal Source?',
    answer: 'CA Legal Source helps individuals in California understand their legal options and, where appropriate, connects them with an attorney who handles their specific type of case. You start by completing a confidential online intake with details about your situation, your California county, and your contact preferences.',
    answerEs: 'CA Legal Source ayuda a personas en California a comprender sus opciones legales y, cuando es apropiado, las conecta con un abogado calificado en su tipo de caso. Usted inicia completando un formulario confidencial con los detalles de su situación y condado.',
    category: 'General'
  },
  {
    id: 'provide-legal-advice',
    question: 'Does CA Legal Source provide legal advice?',
    questionEs: '¿CA Legal Source brinda asesoramiento legal?',
    answer: 'No. CA Legal Source is a legal assistance and attorney connection platform. We provide general legal information and facilitate connections with independent California-licensed attorneys. Information on this website is not legal advice, and submitting an inquiry does not create an attorney-client relationship.',
    answerEs: 'No. CA Legal Source es una plataforma de información y conexión con abogados independientes en California. La información del sitio no constituye asesoría legal ni crea una relación abogado-cliente.',
    category: 'Legal'
  },
  {
    id: 'guarantee-attorney',
    question: 'Will I definitely be connected with an attorney?',
    questionEs: '¿Tengo garantizada la conexión con un abogado?',
    answer: 'While we strive to assist every California resident who contacts us, connection depends on attorney availability, geographic jurisdiction, practice area suitability, and panel capacity. We do not guarantee representation or specific legal outcomes.',
    answerEs: 'Nos esforzamos por orientar a cada usuario, pero la conexión depende de la disponibilidad de abogados en su condado y la materia legal de su caso. No se garantiza representación ni resultados judiciales.',
    category: 'Matching'
  },
  {
    id: 'how-attorneys-selected',
    question: 'How are attorneys selected for referrals?',
    questionEs: '¿Cómo se seleccionan los abogados para las referencias?',
    answer: 'Attorneys are evaluated based on legitimate criteria including active California State Bar standing, verified practice area experience, geographic coverage within your county, language capabilities, and fair panel rotation principles rather than highest-bidder allocation.',
    answerEs: 'Los abogados son asignados según criterios legítimos: licencia activa en California, experiencia comprobada en la materia, cobertura en su condado, idioma y principios de rotación justa.',
    category: 'Matching'
  },
  {
    id: 'consultation-cost',
    question: 'How much does a case review or consultation cost?',
    questionEs: '¿Cuánto cuesta la revisión de caso o consulta?',
    answer: 'Initial case review through CA Legal Source is free of charge. Many participating attorneys offer free initial evaluations for matters such as personal injury, wage disputes, or tenant habitability claims. Any ongoing legal fees are discussed directly between you and the attorney before you agree to representation.',
    answerEs: 'La revisión inicial a través de CA Legal Source es gratuita. Muchos abogados de la red ofrecen evaluaciones iniciales sin costo en materias como lesiones personales o reclamos de salarios.',
    category: 'Fees'
  },
  {
    id: 'spanish-speaking-attorney',
    question: 'Can I request a Spanish-speaking attorney?',
    questionEs: '¿Puedo solicitar un abogado que hable español?',
    answer: 'Yes. Our platform fully supports bilingual English and Spanish intake. When submitting your inquiry, you can select Spanish as your preferred language for attorney communication, and we will prioritize matching you with an attorney or legal team capable of serving you in Spanish.',
    answerEs: 'Sí. Nuestra plataforma es 100% bilingüe. Puede indicar su preferencia por atención en español y priorizaremos conectarlo con un abogado o equipo legal que atienda en español.',
    category: 'Language'
  },
  {
    id: 'obligation-to-hire',
    question: 'Do I have to hire the attorney I am connected with?',
    questionEs: '¿Tengo la obligación de contratar al abogado con el que me conecten?',
    answer: 'No. You are under no obligation to hire or retain any attorney introduced through our service. You maintain complete freedom to decide whether an attorney is the right fit for your legal needs.',
    answerEs: 'No. Usted no tiene ninguna obligación de contratar al abogado recomendado. Mantiene total libertad para decidir si el profesional es el adecuado para su caso.',
    category: 'General'
  },
  {
    id: 'privacy-protection',
    question: 'Is my personal information secure and confidential?',
    questionEs: '¿Está protegida y confidencial mi información personal?',
    answer: 'Yes. We treat all legal inquiry data with strict privacy safeguards under California privacy standards (CCPA/CPRA). We use encryption in transit and at rest, and we never sell your personal information to third-party marketing companies.',
    answerEs: 'Sí. Protegemos rigurosamente su información conforme a las leyes de privacidad de California (CCPA/CPRA). No vendemos su información a terceros.',
    category: 'Privacy'
  }
];
