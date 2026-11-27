import { PracticeAreaDetail } from '@/lib/types';
import { practiceAreaEnhancements } from '@/data/practiceAreaEnhancements';

export const all17PracticeAreasData: PracticeAreaDetail[] = [
  // 1. ADA / Disability
  {
    id: 'ada-disability',
    name: 'ADA / Disability',
    nameEs: 'Discapacidad y Ley ADA',
    slug: 'ada-disability',
    eyebrow: 'CALIFORNIA ADA & DISABILITY LAW',
    eyebrowEs: 'LEY DE DISCAPACIDAD Y ADA EN CALIFORNIA',
    h1: 'California ADA Lawyers | Free Case Review',
    h1Es: 'Abogados de Ley ADA en California | Evaluación Gratuita',
    subhead: 'Facing disability discrimination, accessibility barriers, or an accommodation issue? Tell us what happened and we’ll help connect you with a qualified California attorney who handles ADA and disability matters.',
    subheadEs: '¿Enfrenta discriminación por discapacidad, barreras de acceso o problemas de adaptación? Cuéntenos lo sucedido y le ayudaremos a conectarse con un abogado calificado en California.',
    primaryCta: 'Get a Free ADA Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de ADA',
    secondaryCta: 'Find an ADA Attorney',
    secondaryCtaEs: 'Buscar Abogado de ADA',
    supportingText: 'Get help understanding your options for disability discrimination, reasonable accommodations, accessibility barriers, and other California ADA-related matters.',
    supportingTextEs: 'Obtenga orientación sobre discriminación por discapacidad, adaptaciones razonables, barreras de accesibilidad y derechos bajo la ley de California.',
    shortDesc: 'Protection for disability discrimination, accessibility barriers, and accommodation violations.',
    shortDescEs: 'Protección contra la discriminación por discapacidad, barreras de accesibilidad y falta de ajustes razonables.',
    iconName: 'Accessibility',
    seoTitle: 'California ADA Lawyers | Disability Rights & Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados de Ley ADA en California | Derechos de Discapacidad | CA Legal Source',
    metaDesc: 'Need help with an ADA or disability matter in California? Connect with a qualified California attorney for a confidential free case review for qualifying matters.',
    metaDescEs: '¿Necesita ayuda con un caso de ADA o discapacidad en California? Conéctese con un abogado calificado para una evaluación gratuita y confidencial.',
    overview: 'California maintains some of the strongest disability protection statutes in the nation, notably under the Unruh Civil Rights Act (Civil Code § 51) and the California Fair Employment and Housing Act (FEHA). Individuals facing physical barrier exclusions, digital accessibility failures, or employer refusal to provide reasonable accommodations have concrete statutory rights.',
    overviewEs: 'California cuenta con algunas de las leyes de protección por discapacidad más rigurosas de los Estados Unidos, incluyendo la Ley Unruh de Derechos Civiles y FEHA.',
    commonIssues: [
      'Physical architectural barriers in public businesses (ramps, restrooms, parking)',
      'Employer denial of reasonable workplace accommodations',
      'Website and digital kiosk accessibility barriers under ADA Title III',
      'Disability harassment and retaliation in employment',
      'Service animal access denials in housing and public accommodations'
    ],
    commonIssuesEs: [
      'Barreras arquitectónicas en comercios públicos (rampas, baños, estacionamientos)',
      'Negación patronal de ajustes razonables en el empleo',
      'Inaccesibilidad en sitios web y quioscos digitales',
      'Acoso o represalias laborales por discapacidad',
      'Negación de acceso con animales de servicio'
    ],
    californiaLaws: [
      'California Unruh Civil Rights Act (Cal. Civ. Code § 51)',
      'California Fair Employment and Housing Act (Gov. Code § 12940)',
      'Disabled Persons Act (Cal. Civ. Code § 54 et seq.)'
    ],
    californiaLawsEs: [
      'Ley de Derechos Civiles Unruh (Cal. Civ. Code § 51)',
      'Ley de Empleo y Vivienda Justa de California (FEHA)',
      'Ley de Personas con Discapacidad de California'
    ],
    whenToConsult: [
      'When your employer refuses to engage in the interactive accommodation process',
      'When you have experienced repeated physical access barriers at a public business',
      'If you have been terminated following a medical leave or disability request'
    ],
    whenToConsultEs: [
      'Cuando su empleador se niega al proceso interactivo de ajuste razonable',
      'Si enfrenta barreras físicas continuas de acceso en establecimientos públicos',
      'Si fue despedido tras solicitar una incapacidad o ajuste médico'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' }
    ],
    relatedGuides: [
      { title: 'California Tenant Rights & Habitability Guide', slug: 'california-tenant-rights-mold-repairs-guide' }
    ],
    relatedPracticeAreas: [
      { name: 'Employment Law', slug: 'employment' },
      { name: 'Civil Rights', slug: 'civil-rights' }
    ],
    faqs: [
      {
        question: 'Does California law provide damages for ADA barrier violations?',
        questionEs: '¿La ley de California otorga indemnizaciones por violaciones a la ley ADA?',
        answer: 'Yes. Under the California Unruh Civil Rights Act, violations of the federal ADA also constitute state civil rights violations with statutory minimum damages of $4,000 per violation occasion, plus attorney fees.',
        answerEs: 'Sí. Bajo la Ley Unruh de California, las violaciones a la ley ADA federal también constituyen violaciones estatales con daños mínimos estatutarios de $4,000 por incidente más honorarios.'
      },
      {
        question: 'What is the employer interactive process requirement in California?',
        questionEs: '¿Qué es el proceso interactivo que debe realizar el empleador?',
        answer: 'Under FEHA (Gov. Code § 12940(n)), California employers must engage in a timely, good-faith interactive process with employees to identify reasonable accommodations for known disabilities.',
        answerEs: 'Bajo FEHA, los empleadores de California deben participar oportunamente y de buena fe en un proceso interactivo para determinar adaptaciones razonables.'
      }
    ]
  },

  // 2. Bankruptcy
  {
    id: 'bankruptcy',
    name: 'Bankruptcy',
    nameEs: 'Bancarrota y Alivio de Deudas',
    slug: 'bankruptcy',
    eyebrow: 'CALIFORNIA BANKRUPTCY LAW',
    eyebrowEs: 'LEY DE BANCARROTA EN CALIFORNIA',
    h1: 'California Bankruptcy Lawyers | Free Case Review',
    h1Es: 'Abogados de Bancarrota en California | Evaluación Gratuita',
    subhead: 'Overwhelmed by debt, collections, foreclosure, repossession, or wage garnishment? Tell us about your situation and we’ll help connect you with a qualified California bankruptcy attorney.',
    subheadEs: '¿Abrumado por deudas, cobranzas, ejecución hipotecaria o embargo de sueldo? Cuéntenos su caso y le conectaremos con un abogado calificado de bancarrota en California.',
    primaryCta: 'Get a Free Bankruptcy Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Bancarrota',
    secondaryCta: 'Find a Bankruptcy Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Bancarrota',
    supportingText: 'Explore potential legal options involving Chapter 7, Chapter 13, debt relief, creditor actions, and other bankruptcy-related matters.',
    supportingTextEs: 'Conozca opciones de Capítulo 7, Capítulo 13, alivio de deudas, freno a cobranzas y protección patrimonial.',
    shortDesc: 'Debt relief solutions, Chapter 7 liquidation, and Chapter 13 repayment plans.',
    shortDescEs: 'Soluciones de alivio de deudas, liquidación Capítulo 7 y reestructuración Capítulo 13.',
    iconName: 'DollarSign',
    seoTitle: 'California Bankruptcy Lawyers | Debt Relief & Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados de Bancarrota en California | Alivio de Deudas | CA Legal Source',
    metaDesc: 'Struggling with debt, foreclosure, repossession, or wage garnishment in California? Connect with a qualified bankruptcy attorney for a confidential case review.',
    metaDescEs: '¿Lucha contra deudas, ejecuciones hipotecarias o embargos de sueldo en California? Conéctese con un abogado para una evaluación confidencial.',
    overview: 'Under federal bankruptcy law and California Civil Code § 703/704 exemption systems, individuals and businesses can obtain an automatic stay against collections, stop wage garnishments, halt foreclosure, and discharge qualifying unsecured debts.',
    overviewEs: 'Bajo la ley federal de bancarrota y los sistemas de exención de California, usted puede detener embargos salariales, ejecuciones hipotecarias y eliminar deudas no garantizadas.',
    commonIssues: [
      'Overwhelming credit card and medical debt',
      'Pending foreclosure or vehicle repossession',
      'Active wage garnishments and bank levies',
      'Small business restructuring or liquidation',
      'Tax debt discharge evaluation'
    ],
    commonIssuesEs: [
      'Deudas excesivas de tarjetas de crédito y gastos médicos',
      'Riesgo inminente de ejecución hipotecaria o embargo de vehículo',
      'Embargos de sueldo y cuentas bancarias activos',
      'Reestructuración o liquidación de pequeños negocios',
      'Evaluación para condonación de deudas tributarias'
    ],
    californiaLaws: [
      '11 U.S. Code (Federal Bankruptcy Code)',
      'California Code of Civil Procedure § 703.140 (Exemption System 2 / Wildcard)',
      'California Code of Civil Procedure § 704.010 (Exemption System 1 / Homestead)'
    ],
    californiaLawsEs: [
      'Código Federal de Bancarrota (Título 11)',
      'Código de Procedimiento Civil de California § 703 y § 704'
    ],
    whenToConsult: [
      'If creditors are threatening legal action or wage garnishment',
      'If you cannot afford minimum monthly debt payments',
      'Before transferring assets or liquidating retirement accounts to pay debt'
    ],
    whenToConsultEs: [
      'Si los acreedores amenazan con demandas o embargos salariales',
      'Si sus ingresos no alcanzan para cubrir los pagos mínimos de deuda',
      'Antes de transferir propiedades o liquidar fondos de retiro'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Riverside County', slug: 'riverside-county' },
      { name: 'San Bernardino County', slug: 'san-bernardino-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Consumer Protection', slug: 'consumer-protection' },
      { name: 'Real Estate', slug: 'real-estate' }
    ],
    faqs: [
      {
        question: 'What is the difference between California System 1 and System 2 exemptions?',
        questionEs: '¿Cuál es la diferencia entre el Sistema 1 y 2 de exenciones en California?',
        answer: 'California is an opt-out state that offers two debtor exemption schemes: CCP § 704 (System 1, favoring large home equity) and CCP § 703 (System 2, offering a substantial "wildcard" exemption for personal property and cash).',
        answerEs: 'California ofrece dos esquemas: el Sistema 1 (§ 704) orientado a proteger el valor de la vivienda principal, y el Sistema 2 (§ 703) con un comodín amplio para bienes personales y dinero.'
      }
    ]
  },

  // 3. Bed Bug Claims
  {
    id: 'bed-bug-claims',
    name: 'Bed Bug Claims',
    nameEs: 'Reclamos por Chinches de Cama',
    slug: 'bed-bug-claims',
    eyebrow: 'CALIFORNIA BED BUG CLAIMS',
    eyebrowEs: 'RECLAMOS POR CHINCHES DE CAMA EN CALIFORNIA',
    h1: 'California Bed Bug Lawyers | Free Case Review',
    h1Es: 'Abogados de Reclamos por Chinches en California | Evaluación Gratuita',
    subhead: 'Suffered injuries, medical expenses, or property loss because of a bed bug infestation? Tell us what happened and we’ll help connect you with a California attorney who handles these claims.',
    subheadEs: '¿Sufrió picaduras, gastos médicos o pérdida de pertenencias por una infestación de chinches? Cuéntenos su situación y le ayudaremos a contactar a un abogado calificado.',
    primaryCta: 'Get a Free Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita',
    secondaryCta: 'Find a Bed Bug Claims Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Reclamos por Chinches',
    supportingText: 'Legal issues may involve hotel infestations, apartment conditions, failure to inspect or warn, personal injuries, and damaged or discarded belongings.',
    supportingTextEs: 'Los casos pueden involucrar hoteles, edificios de apartamentos, falta de inspección o advertencia, lesiones físicas y pérdidas materiales.',
    shortDesc: 'Compensation claims for severe bed bug bites, apartment infestations, and hotel negligence.',
    shortDescEs: 'Reclamos de compensación por picaduras graves, infestaciones en viviendas y negligencia hotelera.',
    iconName: 'Bug',
    seoTitle: 'California Bed Bug Lawyers | Injury & Property Claims | Free Case Review',
    seoTitleEs: 'Abogados de Chinches de Cama en California | CA Legal Source',
    metaDesc: 'Were you injured or suffered property loss because of a bed bug infestation in California? Connect with a qualified attorney for a confidential case review.',
    metaDescEs: '¿Sufrió picaduras o pérdidas de propiedad por chinches en California? Conéctese con un abogado calificado para una evaluación gratuita.',
    overview: 'Under California Civil Code § 1942.5 and Health & Safety Code § 17920.3, landlords and hospitality operators must provide habitable, pest-free premises. Failure to eradicate known infestations or renting infested rooms creates liability for bodily injury, medical bills, property destruction, and emotional distress.',
    overviewEs: 'En California, los propietarios y hoteles tienen la obligación legal de proporcionar inmuebles habitables y libres de plagas. El incumplimiento genera responsabilidad civil.',
    commonIssues: [
      'Severe allergic bite reactions requiring emergency medical treatment',
      'Hotel stays resulting in luggage contamination and home spread',
      'Landlord refusal or delayed response to reported apartment infestations',
      'Discarded furniture, mattresses, and ruined personal property',
      'Retaliatory eviction threats after reporting pests to code enforcement'
    ],
    commonIssuesEs: [
      'Reacciones alérgicas severas con atención médica de emergencia',
      'Contaminación de equipaje y propagación en el hogar tras estadía en hotel',
      'Negligencia o demora del propietario para fumigar',
      'Muebles, colchones y ropa destruida',
      'Amenazas de desalojo por denunciar plagas a inspectores de salubridad'
    ],
    californiaLaws: [
      'Cal. Civ. Code § 1954.600 et seq. (Bed Bug Information & Landlord Notice Duties)',
      'Cal. Civ. Code § 1941.1 (Standard Implied Warranty of Habitability)',
      'Cal. Health & Safety Code § 17920.3 (Substandard Housing / Plagas)'
    ],
    californiaLawsEs: [
      'Código Civil de California § 1954.600 (Deberes de Información sobre Chinches)',
      'Código Civil de California § 1941.1 (Garantía Implícita de Habitabilidad)',
      'Código de Salud y Seguridad de California § 17920.3'
    ],
    whenToConsult: [
      'If you suffered extensive bites requiring prescription medical treatment',
      'If a hotel manager dismisses your written incident report',
      'If your landlord refuses to bring in licensed pest control professionals'
    ],
    whenToConsultEs: [
      'Si sufrió picaduras extensas que requirieron tratamiento médico',
      'Si la administración del hotel ignora o rechaza su reporte',
      'Si su arrendador se niega a contratar fumigadores certificados'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Personal Injury', slug: 'personal-injury' },
      { name: 'Landlord-Tenant', slug: 'landlord-tenant' }
    ],
    faqs: [
      {
        question: 'What documentation is critical for a California bed bug claim?',
        questionEs: '¿Qué documentación se necesita para un reclamo por chinches?',
        answer: 'Take clear photos and video of live bugs, bites, hotel room numbers, medical records/prescriptions, and keep all receipts for ruined luggage and belongings.',
        answerEs: 'Fotografías y videos de los insectos y picaduras, recibo o confirmación de hotel/contrato de renta, registros médicos y comprobantes de compras.'
      }
    ]
  },

  // 4. Consumer Protection
  {
    id: 'consumer-protection',
    name: 'Consumer Protection',
    nameEs: 'Protección al Consumidor',
    slug: 'consumer-protection',
    eyebrow: 'CALIFORNIA CONSUMER PROTECTION LAW',
    eyebrowEs: 'LEY DE PROTECCIÓN AL CONSUMIDOR EN CALIFORNIA',
    h1: 'California Consumer Protection Lawyers | Free Case Review',
    h1Es: 'Abogados de Protección al Consumidor en California | Evaluación Gratuita',
    subhead: 'Were you harmed by deceptive business practices, unfair billing, fraud, or another consumer issue? Tell us what happened and we’ll help connect you with a qualified California attorney.',
    subheadEs: '¿Fue víctima de prácticas comerciales engañosas, cobros indebidos o fraude? Cuéntenos lo ocurrido y le conectaremos con un abogado calificado en California.',
    primaryCta: 'Get a Free Consumer Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita al Consumidor',
    secondaryCta: 'Find a Consumer Protection Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Protección al Consumidor',
    supportingText: 'Get help exploring potential legal options involving unfair business practices, deceptive advertising, unauthorized charges, consumer fraud, and related California protections.',
    supportingTextEs: 'Conozca sus derechos frente a fraude al consumidor, publicidad falsa, cobros no autorizados y cláusulas abusivas.',
    shortDesc: 'Legal recourse for deceptive business practices, unfair billing, false advertising, and fraud.',
    shortDescEs: 'Recursos legales frente a publicidad engañosa, cobros indebidos y fraude comercial.',
    iconName: 'ShieldAlert',
    seoTitle: 'California Consumer Protection Lawyers | Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados de Protección al Consumidor en California | CA Legal Source',
    metaDesc: 'Dealing with consumer fraud, deceptive business practices, billing disputes, or privacy-related issues in California? Connect with a qualified attorney.',
    metaDescEs: '¿Enfrenta fraude comercial, cobros indebidos o publicidad engañosa en California? Conéctese con un abogado calificado.',
    overview: 'California leads the country in consumer rights under the Consumer Legal Remedies Act (CLRA), the Unfair Competition Law (Bus. & Prof. Code § 17200), and the Rosenthal Fair Debt Collection Practices Act. Consumers harmed by false advertising or fraudulent business practices can seek statutory damages and injunctive relief.',
    overviewEs: 'California cuenta con estatutos de vanguardia como la Ley CLRA y la Sección 17200 para proteger a los consumidores frente a fraudes y abusos corporativos.',
    commonIssues: [
      'Deceptive auto sales practices, odometer fraud, and undisclosed salvage titles',
      'Hidden fees, recurring unauthorized credit card subscription billings',
      'False advertising, misleading environmental or health claims',
      'Predatory lending and unlawful debt collection harassment',
      'Solar panel installation misrepresentations and deceptive home energy contracts'
    ],
    commonIssuesEs: [
      'Fraude en concesionarios de autos y títulos salvamento no divulgados',
      'Cargos ocultos y suscripciones recurrentes no autorizadas',
      'Publicidad falsa o engañosa',
      'Acoso ilegal de agencias de cobranza de deudas',
      'Fraudes en contratos de paneles solares y mejoras para el hogar'
    ],
    californiaLaws: [
      'California Consumer Legal Remedies Act (Cal. Civ. Code § 1750 et seq.)',
      'California Unfair Competition Law (Cal. Bus. & Prof. Code § 17200 / UCL)',
      'Rosenthal Fair Debt Collection Practices Act (Cal. Civ. Code § 1788 et seq.)'
    ],
    californiaLawsEs: [
      'Ley de Recursos Legales del Consumidor (CLRA - Código Civil § 1750)',
      'Ley de Competencia Desleal (Código de Negocios y Profesiones § 17200)',
      'Ley Rosenthal de Prácticas Justas de Cobranza'
    ],
    whenToConsult: [
      'If a business charged you substantial sums based on false representations',
      'If a debt collector threatens arrest, wage seizure without court order, or harasses family',
      'Before signing binding arbitration releases in major purchase disputes'
    ],
    whenToConsultEs: [
      'Si un negocio le cobró montos indebidos basados en información falsa',
      'Si una agencia de cobranza comete acoso o amenazas fuera de la ley',
      'Antes de firmar renuncias o acuerdos desfavorables'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Contract Disputes', slug: 'contract-disputes' },
      { name: 'Bankruptcy', slug: 'bankruptcy' }
    ],
    faqs: [
      {
        question: 'What is a 30-day CLRA demand notice in California?',
        questionEs: '¿Qué es una notificación de demanda de 30 días bajo la ley CLRA?',
        answer: 'Under Civil Code § 1782, prior to filing a lawsuit for damages under CLRA, a formal 30-day written notice must be sent giving the business an opportunity to cure the violation.',
        answerEs: 'Es un aviso formal por escrito requerido antes de entablar una demanda por daños económicos bajo CLRA, dando al negocio 30 días para corregir la falta.'
      }
    ]
  },

  // 5. Contract Disputes
  {
    id: 'contract-disputes',
    name: 'Contract Disputes',
    nameEs: 'Disputas de Contratos',
    slug: 'contract-disputes',
    eyebrow: 'CALIFORNIA CONTRACT LAW',
    eyebrowEs: 'LEY DE CONTRATOS EN CALIFORNIA',
    h1: 'California Contract Dispute Lawyers | Free Case Review',
    h1Es: 'Abogados de Disputas Contractuales en California | Evaluación Gratuita',
    subhead: 'A broken agreement can create serious financial and business consequences. Tell us about your contract dispute and we’ll help connect you with a qualified California attorney.',
    subheadEs: 'El incumplimiento de un acuerdo genera graves pérdidas. Cuéntenos sobre su disputa de contrato y le ayudaremos a conectarse con un abogado calificado en California.',
    primaryCta: 'Get a Free Contract Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Contrato',
    secondaryCta: 'Find a Contract Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Contratos',
    supportingText: 'Potential matters include breach of contract, unpaid invoices, service agreements, vendor disputes, partnership conflicts, and other contractual disagreements.',
    supportingTextEs: 'Casos de incumplimiento de contrato, facturas impagas, acuerdos de servicios, disputas entre socios y proveedores.',
    shortDesc: 'Breach of contract litigation, business agreement enforcement, and commercial disputes.',
    shortDescEs: 'Litigios por incumplimiento de contrato, ejecución de acuerdos y disputas comerciales.',
    iconName: 'FileCheck2',
    seoTitle: 'California Contract Dispute Lawyers | Breach of Contract | Free Case Review',
    seoTitleEs: 'Abogados de Incumplimiento de Contrato en California | CA Legal Source',
    metaDesc: 'Dealing with a breach of contract or business agreement dispute in California? Connect with a qualified attorney for a confidential case review.',
    metaDescEs: '¿Enfrenta una disputa por incumplimiento de contrato en California? Conéctese con un abogado calificado para una revisión confidencial.',
    overview: 'Under California Civil Code § 1549 et seq., enforceable contracts require mutual consent, lawful consideration, and capable parties. When a party commits a material breach, the non-breaching party may seek compensatory damages, restitution, or specific performance.',
    overviewEs: 'En California, cuando una de las partes incumple un contrato válidamente constituido, la parte afectada puede exigir indemnización por daños, restitución o cumplimiento forzoso.',
    commonIssues: [
      'Material breach of written commercial or service contracts',
      'Unpaid independent contractor or vendor invoices',
      'Partnership, operating agreement, and shareholder disputes',
      'Non-compete clause enforceability disputes under Cal. Bus. & Prof. Code § 16600',
      'Construction and home remodeling contractor defaults'
    ],
    commonIssuesEs: [
      'Incumplimiento grave de acuerdos comerciales o de servicios',
      'Facturas impagas a proveedores o contratistas independientes',
      'Conflictos societarios entre socios y accionistas',
      'Disputas sobre cláusulas de no competencia no válidas en California',
      'Incumplimientos en contratos de construcción y remodelación'
    ],
    californiaLaws: [
      'California Civil Code § 1549 - 1701 (Contract Formation & Remedies)',
      'California Code of Civil Procedure § 337 (4-Year Statute on Written Contracts)',
      'California Commercial Code (UCC Article 2 - Sale of Goods)'
    ],
    californiaLawsEs: [
      'Código Civil de California § 1549 a 1701 (Formación y Recursos Contractuales)',
      'Código de Procedimiento Civil § 337 (Estatuto de 4 años para contratos escritos)',
      'Código Comercial de California (Venta de Bienes)'
    ],
    whenToConsult: [
      'Before the applicable statute of limitations expires (4 years for written, 2 for oral)',
      'When formal demand letters fail to resolve substantial unpaid balances',
      'When contract ambiguity threatens core business operations'
    ],
    whenToConsultEs: [
      'Antes de que venza el plazo de prescripción legal',
      'Cuando las cartas de requerimiento de pago no surten efecto',
      'Si un conflicto contractual pone en riesgo la continuidad de su negocio'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Consumer Protection', slug: 'consumer-protection' },
      { name: 'Real Estate', slug: 'real-estate' }
    ],
    faqs: [
      {
        question: 'Are non-compete agreements enforceable in California contracts?',
        questionEs: '¿Son válidos los acuerdos de no competencia en contratos de California?',
        answer: 'Generally no. Under California Business & Professions Code § 16600, non-compete agreements in employment contracts are strictly void as against public policy, with limited exceptions in the sale of a business.',
        answerEs: 'Por regla general no. La Sección 16600 del Código de California declara nulas las cláusulas de no competencia laboral por ser contrarias al orden público.'
      }
    ]
  },

  // 6. Criminal Defense
  {
    id: 'criminal-defense',
    name: 'Criminal Defense',
    nameEs: 'Defensa Penal',
    slug: 'criminal-defense',
    eyebrow: 'CALIFORNIA CRIMINAL DEFENSE',
    eyebrowEs: 'DEFENSA PENAL EN CALIFORNIA',
    h1: 'California Criminal Defense Lawyers | Free Case Review',
    h1Es: 'Abogados de Defensa Penal en California | Evaluación Gratuita',
    subhead: 'Facing a criminal charge, DUI, or another serious allegation? Tell us about your situation and we’ll help connect you with a qualified California criminal defense attorney.',
    subheadEs: '¿Enfrenta cargos penales, DUI u otra acusación grave? Cuéntenos lo sucedido y le ayudaremos a conectarse con un abogado defensor calificado en California.',
    primaryCta: 'Request a Confidential Case Review',
    primaryCtaEs: 'Solicitar Evaluación Confidencial',
    secondaryCta: 'Find a Criminal Defense Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Defensa Penal',
    supportingText: 'Potential matters include DUI, misdemeanor and felony charges, domestic violence allegations, theft, burglary, and other criminal defense issues.',
    supportingTextEs: 'Casos de DUI, delitos menores y mayores, acusaciones de violencia doméstica, robo, fraude y defensa procesal.',
    shortDesc: 'Representation for California misdemeanor, felony, DUI, and white collar criminal allegations.',
    shortDescEs: 'Representación en cargos por delitos menores, delitos graves, DUI y acusaciones penales.',
    iconName: 'Shield',
    seoTitle: 'California Criminal Defense Lawyers | Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados de Defensa Penal en California | CA Legal Source',
    metaDesc: 'Facing criminal charges in California? Connect with a qualified criminal defense attorney who handles misdemeanor, felony, DUI, and related matters.',
    metaDescEs: '¿Enfrenta cargos criminales o DUI en California? Conéctese con un abogado defensor calificado para una revisión confidencial.',
    overview: 'Under the California Penal Code and the United States Constitution, every individual accused of a crime is entitled to zealous legal representation, protection against unlawful searches, and fair trial procedures. Early attorney intervention can protect your rights during arraignment and bail proceedings.',
    overviewEs: 'En California, toda persona acusada de un delito tiene derecho constitucional a una defensa rigurosa y a la protección contra registros arbitrarios.',
    commonIssues: [
      'DUI and driving under the influence charges (VC § 23152)',
      'Misdemeanor and felony theft, grand theft, and robbery charges',
      'Domestic violence allegations (PC § 273.5 and PC § 243(e)(1))',
      'Drug possession, distribution, and manufacturing offenses',
      'Warrant recall, probation violation hearings, and record expungements (PC § 1203.4)'
    ],
    commonIssuesEs: [
      'Cargos por conducir bajo la influencia (DUI - Código de Vehículos § 23152)',
      'Delitos menores y graves de robo o hurto',
      'Acusaciones de violencia doméstica (Código Penal § 273.5)',
      'Delitos relacionados con posesión o distribución de sustancias',
      'Audiencias de fianza, revocación de libertad condicional y eliminación de antecedentes'
    ],
    californiaLaws: [
      'California Penal Code (PC § 1 et seq.)',
      'California Vehicle Code § 23152 (California DUI Laws)',
      'California Penal Code § 1203.4 (Record Clearance / Expungement)'
    ],
    californiaLawsEs: [
      'Código Penal de California (PC)',
      'Código de Vehículos de California § 23152 (Leyes de DUI)',
      'Código Penal de California § 1203.4 (Limpieza de Antecedentes)'
    ],
    whenToConsult: [
      'Immediately following an arrest or contact by law enforcement investigators',
      'Prior to answering questions or participating in police interrogations',
      'Before your scheduled arraignment or preliminary hearing in California Superior Court'
    ],
    whenToConsultEs: [
      'Inmediatamente después de un arresto o contacto con agentes policiales',
      'Antes de responder interrogatorios policiales sin asesoría legal',
      'Antes de su primera comparecencia (arraignment) ante el juez'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'Riverside County', slug: 'riverside-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Civil Rights', slug: 'civil-rights' }
    ],
    faqs: [
      {
        question: 'What happens at a California criminal arraignment hearing?',
        questionEs: '¿Qué sucede en una audiencia de lectura de cargos (arraignment)?',
        answer: 'The arraignment is the formal court hearing where the judge reads the charges against you, informs you of your constitutional rights, addresses bail or release on own recognizance, and accepts your initial plea.',
        answerEs: 'Es la audiencia judicial inicial donde se notifican los cargos formales, se determinan las condiciones de fianza y se ingresa la declaración inicial.'
      }
    ]
  },

  // 7. Employment Law
  {
    id: 'employment',
    name: 'Employment Law',
    nameEs: 'Derecho Laboral',
    slug: 'employment',
    eyebrow: 'CALIFORNIA EMPLOYMENT LAW',
    eyebrowEs: 'DERECHO LABORAL EN CALIFORNIA',
    h1: 'California Employment Lawyers | Free Case Review',
    h1Es: 'Abogados Laborales en California | Evaluación Gratuita',
    subhead: 'Were you wrongfully terminated, denied wages, harassed, discriminated against, or treated unfairly at work? Tell us what happened and we’ll help connect you with a qualified California employment attorney.',
    subheadEs: '¿Sufrió despido injustificado, robo de sueldo, discriminación o acoso laboral? Cuéntenos lo sucedido y le ayudaremos a contactar a un abogado laboral calificado en California.',
    primaryCta: 'Get a Free Employment Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Caso Laboral',
    secondaryCta: 'Find an Employment Lawyer',
    secondaryCtaEs: 'Buscar Abogado Laboral',
    supportingText: 'Potential matters include wrongful termination, unpaid overtime, wage theft, meal and rest break violations, workplace harassment, discrimination, and retaliation.',
    supportingTextEs: 'Casos de despido injustificado, horas extras impagas, pausas de comida no otorgadas, acoso, discriminación y represalias laborales.',
    shortDesc: 'Workplace rights advocacy for wrongful termination, wage theft, harassment, and discrimination.',
    shortDescEs: 'Defensa laboral por despido injustificado, discriminación, acoso y salarios no pagados.',
    iconName: 'Briefcase',
    seoTitle: 'California Employment Lawyers | Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados Laborales en California | Evaluación Gratuita | CA Legal Source',
    metaDesc: 'Facing wrongful termination, wage theft, workplace discrimination, harassment, or another employment issue in California? Connect with a qualified attorney.',
    metaDescEs: '¿Enfrenta despido injustificado, salarios impagos o acoso laboral en California? Conéctese con un abogado calificado.',
    overview: 'California employment law provides robust statutory protections under the Fair Employment and Housing Act (FEHA) and the California Labor Code. Workers are protected against unlawful discrimination based on protected classes, protected medical leave retaliation, misclassification as independent contractors (AB 5 / Labor Code § 2775), and wage and hour violations.',
    overviewEs: 'Las leyes laborales de California (FEHA y el Código Laboral) ofrecen algunas de las mayores protecciones contra despidos injustificados, discriminación y robo de sueldos.',
    commonIssues: [
      'Wrongful termination in violation of public policy or following protected whistleblowing',
      'Unpaid overtime, minimum wage violations, and off-the-clock work demands',
      'Meal and rest break denial (1-hour premium pay per missed break under Lab. Code § 226.7)',
      'Sexual harassment, race, age, gender, pregnancy, or disability discrimination',
      'Independent contractor misclassification under the California ABC Test'
    ],
    commonIssuesEs: [
      'Despido injustificado tras denunciar irregularidades o pedir licencias médicas',
      'Horas extras no pagadas y trabajo fuera de horario sin remuneración',
      'Pausas de comida o descanso no concedidas (pago de prima de 1 hora adicional)',
      'Acoso sexual, discriminación por raza, edad, género o embarazo',
      'Clasificación errónea como contratista independiente bajo la prueba ABC'
    ],
    californiaLaws: [
      'California Fair Employment and Housing Act (FEHA - Gov. Code § 12940)',
      'California Labor Code § 226.7 & § 510 (Overtime, Meal & Rest Break Mandates)',
      'California Labor Code § 1102.5 (Whistleblower Protection Statute)'
    ],
    californiaLawsEs: [
      'Ley de Empleo y Vivienda Justa de California (FEHA)',
      'Código Laboral de California § 226.7 y § 510 (Horas Extras y Pausas)',
      'Código Laboral de California § 1102.5 (Protección a Denunciantes)'
    ],
    whenToConsult: [
      'If you were fired shortly after requesting medical leave, accommodation, or reporting wage issues',
      'If your employer systematically fails to pay accurate overtime or provide itemized wage stubs',
      'Before signing severance agreements containing broad liability release waivers'
    ],
    whenToConsultEs: [
      'Si fue despedido tras solicitar permisos médicos o denunciar irregularidades',
      'Si su empleador no le paga horas extras o no entrega talones de pago detallados',
      'Antes de firmar acuerdos de liquidación o renuncia de derechos'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedGuides: [
      { title: 'California Overtime & Meal Break Laws Guide', slug: 'california-overtime-laws-guide' }
    ],
    relatedPracticeAreas: [
      { name: 'ADA / Disability', slug: 'ada-disability' },
      { name: 'Workers’ Compensation', slug: 'workers-comp' }
    ],
    faqs: [
      {
        question: 'What is the California statute of limitations for filing a FEHA discrimination claim?',
        questionEs: '¿Cuál es el plazo legal para presentar un reclamo de discriminación bajo FEHA?',
        answer: 'Employees have up to three (3) years from the date of the unlawful employment action to file an administrative complaint with the California Civil Rights Department (CRD) and obtain a Right-to-Sue notice.',
        answerEs: 'Los trabajadores tienen hasta 3 años a partir de la acción ilegal para presentar su queja ante el Departamento de Derechos Civiles de California (CRD).'
      }
    ]
  },

  // 8. Family Law
  {
    id: 'family-law',
    name: 'Family Law',
    nameEs: 'Derecho Familiar',
    slug: 'family-law',
    eyebrow: 'CALIFORNIA FAMILY LAW',
    eyebrowEs: 'DERECHO FAMILIAR EN CALIFORNIA',
    h1: 'California Family Lawyers | Free Case Review',
    h1Es: 'Abogados de Familia en California | Evaluación Gratuita',
    subhead: 'Dealing with divorce, child custody, support, or another family law issue? Tell us about your situation and we’ll help connect you with a qualified California family law attorney.',
    subheadEs: '¿Enfrenta divorcio, custodia de menores, manutención o repartición conyugal? Cuéntenos su situación y le ayudaremos a contactar a un abogado de familia en California.',
    primaryCta: 'Get a Free Family Law Case Review',
    primaryCtaEs: 'Solicitar Evaluación de Derecho Familiar',
    secondaryCta: 'Find a Family Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Familia',
    supportingText: 'Potential matters include divorce, child custody, visitation, child support, spousal support, and other domestic relations issues.',
    supportingTextEs: 'Casos de divorcio, custodia y visitas de hijos, manutención de menores, pensión conyugal y división de bienes.',
    shortDesc: 'Divorce dissolution, child custody orders, spousal support, and domestic relations counsel.',
    shortDescEs: 'Disolución matrimonial, órdenes de custodia, manutención conyugal y acuerdos familiares.',
    iconName: 'Users',
    seoTitle: 'California Family Lawyers | Divorce, Custody & Free Case Review',
    seoTitleEs: 'Abogados de Familia en California | Divorcio y Custodia | CA Legal Source',
    metaDesc: 'Need help with divorce, child custody, support, or another California family law matter? Connect with a qualified family law attorney.',
    metaDescEs: '¿Necesita ayuda con divorcio, custodia o manutención en California? Conéctese con un abogado de familia calificado.',
    overview: 'Under the California Family Code, California is a pure no-fault divorce and community property state. Marital assets and debts acquired during marriage are generally divided equally (Fam. Code § 2550), while child custody and visitation orders are established strictly based on the best interest of the child (Fam. Code § 3011).',
    overviewEs: 'En California, el divorcio es sin culpa y rige el principio de bienes gananciales (división 50/50), priorizando el bienestar superior de los hijos en temas de custodia.',
    commonIssues: [
      'Contested and uncontested divorce dissolution proceedings',
      'Legal and physical child custody and visitation schedule disputes',
      'Child support calculations under the California Statewide Uniform Guideline',
      'Spousal support (alimony) determinations and post-judgment modifications',
      'Complex community property valuation and separate property tracing'
    ],
    commonIssuesEs: [
      'Procesos de divorcio de mutuo acuerdo y contenciosos',
      'Disputas sobre custodia legal, física y régimen de visitas',
      'Cálculo de manutención infantil según la directriz uniforme estatal',
      'Pensión conyugal y modificaciones de acuerdos por cambio de ingresos',
      'División de propiedades, negocios y cuentas de retiro'
    ],
    californiaLaws: [
      'California Family Code § 2300 et seq. (Dissolution of Marriage)',
      'California Family Code § 2550 (Equal Community Property Division)',
      'California Family Code § 3011 (Best Interest of the Child Custody Standard)'
    ],
    californiaLawsEs: [
      'Código Familiar de California § 2300 (Disolución Matrimonial)',
      'Código Familiar de California § 2550 (División Equitativa de Bienes)',
      'Código Familiar de California § 3011 (Interés Superior del Menor)'
    ],
    whenToConsult: [
      'Before filing divorce petitions or responding to served summons',
      'When high-value real estate, pension plans, or businesses must be divided',
      'When child safety or relocation disputes arise between parents'
    ],
    whenToConsultEs: [
      'Antes de presentar peticiones judiciales de divorcio o responder citaciones',
      'Si existen bienes de alto valor, negocios o fondos de retiro en disputa',
      'Si surgen desacuerdos graves sobre la custodia o mudanza de los hijos'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'Riverside County', slug: 'riverside-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Wills & Trusts', slug: 'wills-trusts' },
      { name: 'Real Estate', slug: 'real-estate' }
    ],
    faqs: [
      {
        question: 'What is the mandatory residency and waiting period for divorce in California?',
        questionEs: '¿Cuáles son los requisitos de residencia y espera para divorciarse en California?',
        answer: 'To file in California, at least one spouse must have lived in California for 6 months and in the filing county for 3 months. There is a mandatory minimum 6-month statutory waiting period before marital status is dissolved.',
        answerEs: 'Se requiere haber residido al menos 6 meses en California y 3 meses en el condado. Existe un periodo de espera mínimo de 6 meses para la disolución definitiva.'
      }
    ]
  },

  // 9. Immigration
  {
    id: 'immigration',
    name: 'Immigration',
    nameEs: 'Inmigración',
    slug: 'immigration',
    eyebrow: 'CALIFORNIA IMMIGRATION LAW',
    eyebrowEs: 'LEY DE INMIGRACIÓN EN CALIFORNIA',
    h1: 'California Immigration Lawyers | Free Case Review',
    h1Es: 'Abogados de Inmigración en California | Evaluación Gratuita',
    subhead: 'Facing an immigration issue involving a visa, green card, citizenship, work permit, or removal proceeding? Tell us about your situation and we’ll help connect you with a qualified immigration attorney.',
    subheadEs: '¿Enfrenta trámites de visa, residencia permanente, ciudadanía, permisos o procesos de deportación? Cuéntenos su caso y le conectaremos con un abogado calificado.',
    primaryCta: 'Get a Free Immigration Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Inmigración',
    secondaryCta: 'Find an Immigration Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Inmigración',
    supportingText: 'Potential matters include family-based immigration, adjustment of status, naturalization, work authorization, waivers, and deportation defense.',
    supportingTextEs: 'Casos de peticiones familiares, ajuste de estatus, perdón legal (waivers), ciudadanía y defensa ante la corte de inmigración (EOIR).',
    shortDesc: 'Visas, family petitions, permanent residency (Green Cards), citizenship, and deportation defense.',
    shortDescEs: 'Peticiones familiares, residencia permanente (Green Card), naturalización y defensa en deportación.',
    iconName: 'Globe2',
    seoTitle: 'California Immigration Lawyers | Visa, Green Card & Free Case Review',
    seoTitleEs: 'Abogados de Inmigración en California | CA Legal Source',
    metaDesc: 'Need help with a California immigration matter? Connect with a qualified immigration attorney for help with visas, green cards, citizenship, or deportation defense.',
    metaDescEs: '¿Necesita asesoría en visas, residencia o defensa de deportación en California? Conéctese con un abogado de inmigración calificado.',
    overview: 'Immigration law is governed primarily by federal law (Immigration and Nationality Act) alongside California state sanctuary and civil protection laws (SB 54 / California Values Act). Navigating USCIS applications, consular processing, or Executive Office for Immigration Review (EOIR) hearings requires precise legal preparation.',
    overviewEs: 'Los trámites migratorios requieren asesoría técnica rigurosa ante USCIS o la corte de inmigración (EOIR) junto con las garantías del California Values Act (SB 54).',
    commonIssues: [
      'Family-based green card petitions (Form I-130 and Form I-485 adjustment)',
      'Consular processing and unlawful presence waivers (Form I-601A)',
      'Naturalization and U.S. citizenship applications (Form N-400)',
      'Employment-based non-immigrant visas and PERM labor certifications',
      'Removal and deportation defense before California Immigration Courts'
    ],
    commonIssuesEs: [
      'Peticiones familiares para residencia permanente (Formularios I-130 e I-485)',
      'Procesamiento consular y solicitudes de perdón provisional I-601A',
      'Solicitudes de ciudadanía y naturalización estadounidense (Formulario N-400)',
      'Visas de empleo y certificaciones laborales PERM',
      'Defensa contra órdenes de deportación en cortes de inmigración'
    ],
    californiaLaws: [
      'Immigration and Nationality Act (INA - 8 U.S. Code)',
      'California Values Act (Senate Bill 54 / Gov. Code § 7284 et seq.)',
      'California AB 60 (Driver Licenses for Undocumented Residents)'
    ],
    californiaLawsEs: [
      'Ley de Inmigración y Nacionalidad de los EE. UU. (INA)',
      'Ley de Valores de California (SB 54 - Ley Santuario)',
      'Ley AB 60 de California (Licencias de Conducir)'
    ],
    whenToConsult: [
      'Before filing applications that could trigger deportation or admissibility bars',
      'If you have received a Notice to Appear (NTA) from the Department of Homeland Security',
      'Before traveling abroad on advance parole or pending immigration petitions'
    ],
    whenToConsultEs: [
      'Antes de presentar solicitudes si tiene historial migratorio complejo o penal',
      'Si recibió una Notificación de Comparecencia (NTA) ante el juez',
      'Antes de viajar fuera de EE. UU. con trámites en proceso'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'Fresno County', slug: 'fresno-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Criminal Defense', slug: 'criminal-defense' },
      { name: 'Employment Law', slug: 'employment' }
    ],
    faqs: [
      {
        question: 'Does California law restrict state agencies from collaborating with federal ICE agents?',
        questionEs: '¿Prohíbe la ley de California la colaboración policial con agentes de ICE?',
        answer: 'Yes. Under the California Values Act (SB 54), state and local law enforcement agencies are prohibited from using public resources to assist federal immigration enforcement in most non-violent circumstances.',
        answerEs: 'Sí. Bajo la ley SB 54, las autoridades policiales locales tienen prohibido usar recursos públicos para cooperar con agencias migratorias federales en la mayoría de los casos.'
      }
    ]
  },

  // 10. Landlord-Tenant
  {
    id: 'landlord-tenant',
    name: 'Landlord-Tenant',
    nameEs: 'Inquilinos y Propietarios',
    slug: 'landlord-tenant',
    eyebrow: 'CALIFORNIA LANDLORD-TENANT LAW',
    eyebrowEs: 'LEY DE INQUILINOS Y PROPIETARIOS EN CALIFORNIA',
    h1: 'California Landlord-Tenant Lawyers | Free Case Review',
    h1Es: 'Abogados de Inquilinos en California | Evaluación Gratuita',
    subhead: 'Dealing with eviction, unsafe housing, a security deposit dispute, or another landlord-tenant problem? Tell us what happened and we’ll help connect you with a qualified California attorney.',
    subheadEs: '¿Enfrenta desalojo, vivienda inhabitable o retención injusta de depósito? Cuéntenos lo sucedido y le ayudaremos a contactar a un abogado calificado en California.',
    primaryCta: 'Get a Free Tenant Law Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Arrendamiento',
    secondaryCta: 'Find a Landlord-Tenant Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Inquilinos',
    supportingText: 'Potential matters include unlawful eviction, unsafe housing, mold, pest problems, security deposits, lease disputes, and tenant rights.',
    supportingTextEs: 'Casos de desalojo injustificado (Unlawful Detainer), moho tóxico, reparaciones no realizadas y control de renta bajo la ley AB 1482.',
    shortDesc: 'Tenant rights defense, habitability violations, rent control protections, and eviction disputes.',
    shortDescEs: 'Defensa de derechos de inquilinos, habitabilidad, control de rentas y desalojos.',
    iconName: 'Home',
    seoTitle: 'California Landlord-Tenant Lawyers | Tenant Rights | Free Case Review',
    seoTitleEs: 'Abogados de Inquilinos en California | Derechos de Arrendatarios | CA Legal Source',
    metaDesc: 'Facing eviction, unsafe housing, a security deposit dispute, or another California landlord-tenant issue? Connect with a qualified attorney.',
    metaDescEs: '¿Enfrenta desalojo o condiciones inhabitables en California? Conéctese con un abogado calificado para una revisión gratuita.',
    overview: 'Under California Civil Code § 1941.1 and the California Tenant Protection Act of 2019 (AB 1482 / Civ. Code § 1946.2), tenants are protected by mandatory just-cause eviction standards, annual rent increase caps, and the implied warranty of habitability. Landlords cannot engage in constructive evictions or retaliate against tenants reporting code violations.',
    overviewEs: 'En California, la Ley de Protección al Inquilino (AB 1482) y el Código Civil garantizan condiciones dignas, límites al aumento de renta y protección contra desalojos arbitrarios.',
    commonIssues: [
      'Unlawful detainer (eviction) notices and expedited court defense',
      'Severe habitability failures: black mold, roof leaks, plumbing breakdowns, sewage backups',
      'Landlord self-help evictions: lockouts, utility shutoffs, and property removal',
      'Retaliatory rent hikes or termination notices following tenant repair requests',
      'Wrongfully withheld security deposits under Cal. Civ. Code § 1950.5'
    ],
    commonIssuesEs: [
      'Notificaciones de desalojo (Unlawful Detainer) y respuesta ante la corte',
      'Viviendas inhabitables por moho, goteras, plagas o falta de agua caliente',
      'Desalojos ilegales por cuenta propia (cambio de cerraduras o corte de servicios)',
      'Represalias del arrendador tras quejas o reportes de salubridad',
      'Retención abusiva del depósito de seguridad tras desocupar el inmueble'
    ],
    californiaLaws: [
      'California Tenant Protection Act of 2019 (AB 1482 / Cal. Civ. Code § 1946.2 & § 1947.12)',
      'California Civil Code § 1941.1 (Implied Warranty of Habitability)',
      'California Civil Code § 1950.5 (Residential Security Deposit Protections)'
    ],
    californiaLawsEs: [
      'Ley de Protección al Inquilino de California (AB 1482)',
      'Código Civil de California § 1941.1 (Garantía de Habitabilidad)',
      'Código Civil de California § 1950.5 (Depósitos de Seguridad)'
    ],
    whenToConsult: [
      'Within 5 court days of receiving an Unlawful Detainer court summons and complaint',
      'When landlords ignore dangerous health code violations or toxic mold infestations',
      'If your security deposit is not returned with itemized deductions within 21 days'
    ],
    whenToConsultEs: [
      'Dentro del plazo de 5 días hábiles tras recibir una demanda judicial de desalojo',
      'Cuando el propietario se niega a reparar condiciones peligrosas para la salud',
      'Si pasaron 21 días y no le devolvieron su depósito ni enviaron cuentas detalladas'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' },
      { name: 'Alameda County', slug: 'alameda-county' },
      { name: 'San Diego County', slug: 'san-diego-county' }
    ],
    relatedGuides: [
      { title: 'California Tenant Rights & Habitability Guide', slug: 'california-tenant-rights-mold-repairs-guide' }
    ],
    relatedPracticeAreas: [
      { name: 'Bed Bug Claims', slug: 'bed-bug-claims' },
      { name: 'Real Estate', slug: 'real-estate' }
    ],
    faqs: [
      {
        question: 'How much can a California landlord raise rent under AB 1482?',
        questionEs: '¿Cuánto puede aumentar la renta un propietario bajo la ley AB 1482?',
        answer: 'For qualifying residential properties subject to the California Tenant Protection Act of 2019, annual rent increases are capped at 5% plus local CPI (Consumer Price Index), with an absolute maximum ceiling of 10%.',
        answerEs: 'Para propiedades cubiertas, el aumento anual está limitado al 5% más la inflación regional (CPI), sin superar el 10% total en un periodo de 12 meses.'
      }
    ]
  },

  // 11. Medical Malpractice
  {
    id: 'medical-malpractice',
    name: 'Medical Malpractice',
    nameEs: 'Negligencia Médica',
    slug: 'medical-malpractice',
    eyebrow: 'CALIFORNIA MEDICAL MALPRACTICE',
    eyebrowEs: 'NEGLIGENCIA MÉDICA EN CALIFORNIA',
    h1: 'California Medical Malpractice Lawyers | Free Case Review',
    h1Es: 'Abogados de Negligencia Médica en California | Evaluación Gratuita',
    subhead: 'Believe a medical error or negligent care caused you harm? Tell us what happened and we’ll help connect you with a qualified California medical malpractice attorney.',
    subheadEs: '¿Sufrió daños por un error médico o negligencia hospitalaria? Cuéntenos lo sucedido y le ayudaremos a contactar a un abogado calificado en California.',
    primaryCta: 'Get a Confidential Case Review',
    primaryCtaEs: 'Solicitar Evaluación Confidencial',
    secondaryCta: 'Find a Medical Malpractice Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Negligencia Médica',
    supportingText: 'Potential matters include misdiagnosis, delayed diagnosis, surgical errors, medication mistakes, hospital negligence, and birth injury claims.',
    supportingTextEs: 'Casos de errores quirúrgicos, diagnóstico tardío o equivocado, negligencia en partos y fallas de medicación bajo los estatutos de MICRA.',
    shortDesc: 'Complex litigation for hospital errors, surgical negligence, misdiagnosis, and birth injuries.',
    shortDescEs: 'Litigios por errores quirúrgicos, diagnósticos erróneos y negligencia hospitalaria.',
    iconName: 'HeartPulse',
    seoTitle: 'California Medical Malpractice Lawyers | Free Case Review',
    seoTitleEs: 'Abogados de Negligencia Médica en California | CA Legal Source',
    metaDesc: 'Were you harmed by possible medical negligence in California? Connect with a qualified medical malpractice attorney for a confidential case review.',
    metaDescEs: '¿Sufrió lesiones por negligencia médica en California? Conéctese con un abogado calificado para una revisión confidencial.',
    overview: 'Medical malpractice actions in California are governed by the Medical Injury Compensation Reform Act (MICRA / Civ. Code § 3333.2), recently modernized under AB 35. Patients harmed by a healthcare provider’s failure to adhere to the applicable medical standard of care can seek economic damages and indexed non-economic compensation.',
    overviewEs: 'En California, las demandas por negligencia médica están reguladas por MICRA y la ley AB 35, que permite reclamar daños económicos y compensaciones no económicas actualizadas.',
    commonIssues: [
      'Surgical errors, foreign objects left in patients, and wrong-site procedures',
      'Diagnostic failures: missed or delayed cancer, stroke, and cardiac diagnoses',
      'Obstetric and birth injuries causing cerebral palsy or brachial plexus damage',
      'Medication errors, fatal dosage mistakes, and contraindicated drug administration',
      'Emergency room patient discharge failures resulting in preventable mortality'
    ],
    commonIssuesEs: [
      'Errores en cirugías e intervenciones en zonas equivocadas',
      'Fallas de diagnóstico en cáncer, infartos o accidentes cerebrovasculares',
      'Lesiones de nacimiento y complicaciones obstétricas evitables',
      'Errores de dosificación y administración de medicamentos contraindicados',
      'Altas prematuras en salas de emergencias con consecuencias graves'
    ],
    californiaLaws: [
      'Medical Injury Compensation Reform Act (MICRA - Cal. Civ. Code § 3333.2 as amended by AB 35)',
      'California Code of Civil Procedure § 340.5 (1-Year/3-Year Malpractice Statute of Limitations)',
      'California Code of Civil Procedure § 364 (Mandatory 90-Day Pre-Lawsuit Notice of Intent)'
    ],
    californiaLawsEs: [
      'Ley de Reforma de Compensación por Lesiones Médicas (MICRA - Ley AB 35)',
      'Código de Procedimiento Civil § 340.5 (Plazos de Prescripción Médica)',
      'Código de Procedimiento Civil § 364 (Notificación Previa de 90 Días)'
    ],
    whenToConsult: [
      'Immediately when you suspect a provider’s treatment departed from accepted standards',
      'Before the strict 1-year discovery statute of limitations expires',
      'When medical expenses and revision surgeries create severe financial hardship'
    ],
    whenToConsultEs: [
      'Inmediatamente al sospechar una negligencia en la atención médica recibida',
      'Antes de que venza el plazo estricto de 1 año tras descubrir la lesión',
      'Cuando los gastos médicos correctivos generen una crisis económica'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Personal Injury', slug: 'personal-injury' },
      { name: 'Workers’ Compensation', slug: 'workers-comp' }
    ],
    faqs: [
      {
        question: 'What are the updated California MICRA non-economic damage limits under AB 35?',
        questionEs: '¿Cuáles son los nuevos límites de compensación bajo la ley AB 35 en California?',
        answer: 'Effective January 2023, AB 35 increased California’s cap on non-economic damages to $350,000 for injury cases (increasing incrementally to $750,000 over 10 years) and $500,000 for wrongful death (increasing to $1,000,000), with inflation indexing thereafter.',
        answerEs: 'A partir de 2023, los límites para daños no económicos aumentaron a $350,000 en lesiones (con incrementos anuales hasta $750,000) y a $500,000 en casos de fallecimiento (hasta $1,000,000).'
      }
    ]
  },

  // 12. Personal Injury
  {
    id: 'personal-injury',
    name: 'Personal Injury',
    nameEs: 'Lesiones Personales',
    slug: 'personal-injury',
    eyebrow: 'CALIFORNIA PERSONAL INJURY LAW',
    eyebrowEs: 'LEY DE LESIONES PERSONALES EN CALIFORNIA',
    h1: 'California Personal Injury Lawyers | Free Case Review',
    h1Es: 'Abogados de Lesiones Personales en California | Evaluación Gratuita',
    subhead: 'Injured in a car accident, slip and fall, workplace-related incident, or another accident? Tell us what happened and we’ll help connect you with a qualified California personal injury attorney.',
    subheadEs: '¿Sufrió un accidente de auto, caída o lesión por negligencia de terceros? Cuéntenos lo sucedido y le ayudaremos a contactar a un abogado calificado en California.',
    primaryCta: 'Get a Free Personal Injury Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita por Lesiones',
    secondaryCta: 'Find a Personal Injury Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Lesiones Personales',
    supportingText: 'Potential matters include car accidents, truck and motorcycle collisions, rideshare accidents, pedestrian injuries, premises liability, dog bites, and wrongful death claims.',
    supportingTextEs: 'Casos de accidentes automovilísticos, camiones, Uber/Lyft, atropellos, caídas, mordeduras de perro y reclamos por muerte injusta.',
    shortDesc: 'Representation for auto collisions, truck accidents, slip-and-falls, dog bites, and wrongful death.',
    shortDescEs: 'Representación en accidentes de auto, caídas, lesiones graves y muerte por negligencia.',
    iconName: 'Car',
    seoTitle: 'California Personal Injury Lawyers | Free Case Review | CALegalSource',
    seoTitleEs: 'Abogados de Lesiones Personales en California | CA Legal Source',
    metaDesc: 'Injured because of an accident or someone else\'s negligence in California? Connect with a qualified personal injury attorney for a free case review.',
    metaDescEs: '¿Sufrió lesiones por un accidente en California? Conéctese con un abogado de lesiones personales para una evaluación gratuita.',
    overview: 'Under California Civil Code § 1714, everyone is responsible for injuries caused by their want of ordinary care or skill. California operates under a pure comparative negligence doctrine, meaning injured victims can recover damages proportional to the defendant’s fault even if partially responsible.',
    overviewEs: 'En California rige el principio de culpa comparativa pura: usted puede reclamar compensación por sus daños médicos y pérdidas salariales aun si tuvo parte de culpa en el accidente.',
    commonIssues: [
      'Motor vehicle, commercial trucking, and rideshare (Uber/Lyft) accidents',
      'Premises liability: slip and fall hazards in retail stores, apartment buildings, and public walkways',
      'Catastrophic injury claims: traumatic brain injuries (TBI), spinal cord damage, and amputations',
      'Bicycle, electric scooter, and pedestrian crosswalk impact collisions',
      'Wrongful death lawsuits under California Code of Civil Procedure § 377.60'
    ],
    commonIssuesEs: [
      'Accidentes de tránsito de autos, motocicletas, camiones y Uber/Lyft',
      'Caídas y resbalones en comercios o propiedades mal mantenidas',
      'Lesiones cerebrales traumáticas y daños severos en la columna vertebral',
      'Atropellos a peatones y ciclistas',
      'Demandas por muerte por negligencia para familiares sobrevivientes'
    ],
    californiaLaws: [
      'California Civil Code § 1714 (General Negligence Standard of Care)',
      'California Code of Civil Procedure § 335.1 (2-Year Statute of Limitations for Injury Actions)',
      'California Code of Civil Procedure § 377.60 (California Wrongful Death Statute)'
    ],
    californiaLawsEs: [
      'Código Civil de California § 1714 (Responsabilidad por Negligencia)',
      'Código de Procedimiento Civil § 335.1 (Plazo de 2 Años para Reclamar Lesiones)',
      'Código de Procedimiento Civil § 377.60 (Estatuto de Muerte por Negligencia)'
    ],
    whenToConsult: [
      'Immediately following an accident before speaking with insurance adjusters or providing recorded statements',
      'When injuries require hospital emergency care, physical therapy, or surgery',
      'Before accepting quick, low settlement offers from third-party insurance carriers'
    ],
    whenToConsultEs: [
      'Inmediatamente después del accidente y antes de dar declaraciones a aseguradoras',
      'Si requiere tratamiento hospitalario, cirugías o terapia física',
      'Antes de aceptar ofertas de indemnización rápida y baja'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Bernardino County', slug: 'san-bernardino-county' },
      { name: 'Riverside County', slug: 'riverside-county' }
    ],
    relatedGuides: [
      { title: 'California Car Accident Claims Step-by-Step Guide', slug: 'california-car-accident-step-by-step-guide' }
    ],
    relatedPracticeAreas: [
      { name: 'Workers’ Compensation', slug: 'workers-comp' },
      { name: 'Medical Malpractice', slug: 'medical-malpractice' }
    ],
    faqs: [
      {
        question: 'How does California pure comparative negligence work in accident claims?',
        questionEs: '¿Cómo funciona la culpa comparativa pura en California?',
        answer: 'If you were 20% at fault for an automobile collision and suffered $100,000 in total verified damages, you are legally entitled to recover the remaining 80% ($80,000) from the at-fault party.',
        answerEs: 'Si usted tuvo un 20% de responsabilidad en un choque con daños de $100,000, la ley le permite recuperar el 80% restante ($80,000) de la parte demandada.'
      }
    ]
  },

  // 13. Real Estate
  {
    id: 'real-estate',
    name: 'Real Estate',
    nameEs: 'Bienes Raíces',
    slug: 'real-estate',
    eyebrow: 'CALIFORNIA REAL ESTATE LAW',
    eyebrowEs: 'LEY DE BIENES RAÍCES EN CALIFORNIA',
    h1: 'California Real Estate Lawyers | Free Case Review',
    h1Es: 'Abogados de Bienes Raíces en California | Evaluación Gratuita',
    subhead: 'Facing a property dispute, title issue, boundary conflict, escrow problem, or real estate contract matter? Tell us what happened and we’ll help connect you with a qualified California attorney.',
    subheadEs: '¿Enfrenta disputas de propiedad, límites de linderos, problemas de título o contratos inmobiliarios? Cuéntenos su situación y le ayudaremos a contactar a un abogado calificado.',
    primaryCta: 'Get a Free Real Estate Case Review',
    primaryCtaEs: 'Solicitar Evaluación de Bienes Raíces',
    secondaryCta: 'Find a Real Estate Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Bienes Raíces',
    supportingText: 'Potential matters include property disputes, title defects, escrow conflicts, disclosure issues, boundary disputes, partition actions, and real estate transactions.',
    supportingTextEs: 'Asesoría en compraventas, defectos de título, servidumbres, litigios de linderos, juicios de partición y vicios ocultos no declarados.',
    shortDesc: 'Property transactions, boundary disputes, partition actions, title defects, and escrow conflicts.',
    shortDescEs: 'Transacciones de propiedades, disputas de linderos, títulos de dominio y litigios inmobiliarios.',
    iconName: 'Building',
    seoTitle: 'California Real Estate Lawyers | Property Disputes | Free Case Review',
    seoTitleEs: 'Abogados de Bienes Raíces en California | CA Legal Source',
    metaDesc: 'Facing a California real estate dispute, title issue, boundary conflict, escrow problem, or property contract dispute? Connect with a qualified attorney.',
    metaDescEs: '¿Enfrenta disputas de propiedad, problemas de título o contratos inmobiliarios en California? Conéctese con un abogado calificado.',
    overview: 'California real estate law involves intricate statutory and case law standards governing purchase agreements, seller disclosures (Civ. Code § 1102), easements, partition actions (CCP § 872.010), and title disputes. Protecting valuable California residential and commercial real property requires experienced legal counsel.',
    overviewEs: 'En California, las leyes de bienes raíces regulan contratos de compraventa, revelaciones obligatorias del vendedor (Civ. Code § 1102), servidumbres y juicios de partición.',
    commonIssues: [
      'Seller failure to disclose material defects under California Civil Code § 1102',
      'Boundary disputes, encroaching structures, and prescriptive easement claims',
      'Partition actions between co-owners or heirs seeking court-ordered property sale',
      'Escrow deposit disputes and commercial lease agreement conflicts',
      'HOA disputes, CC&R enforcement challenges, and title defect resolution'
    ],
    commonIssuesEs: [
      'Omisión del vendedor en declarar fallas estructurales o vicios ocultos',
      'Disputas de linderos y derechos de servidumbre',
      'Juicios de partición entre copropietarios o herederos para venta forzosa',
      'Retención indebida de depósitos en plica (escrow)',
      'Conflictos con asociaciones de propietarios (HOA) y gravámenes de título'
    ],
    californiaLaws: [
      'California Civil Code § 1102 et seq. (Mandatory Real Estate Transfer Disclosures)',
      'California Code of Civil Procedure § 872.010 (California Partition Law)',
      'California Civil Code § 880.020 et seq. (Marketable Record Title Act)'
    ],
    californiaLawsEs: [
      'Código Civil de California § 1102 (Declaraciones Obligatorias de Transferencia)',
      'Código de Procedimiento Civil § 872.010 (Ley de Partición de Bienes)',
      'Ley de Títulos Registrales Negociables de California'
    ],
    whenToConsult: [
      'Upon discovering unpermitted construction or concealed defects following a purchase',
      'When co-owners cannot agree on selling or managing a jointly held parcel',
      'Before signing complex commercial real estate leases or development agreements'
    ],
    whenToConsultEs: [
      'Al descubrir vicios ocultos o construcciones sin permisos tras la compra',
      'Cuando los copropietarios no se ponen de acuerdo en vender o administrar un inmueble',
      'Antes de firmar contratos comerciales o acuerdos de servidumbre'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Contract Disputes', slug: 'contract-disputes' },
      { name: 'Landlord-Tenant', slug: 'landlord-tenant' },
      { name: 'Wills & Trusts', slug: 'wills-trusts' }
    ],
    faqs: [
      {
        question: 'What is a California partition action in real estate?',
        questionEs: '¿Qué es una acción de partición de bienes raíces en California?',
        answer: 'Under CCP § 872.210, a partition action is a court lawsuit filed by a co-owner to compel the division or court-supervised sale of a property and fair distribution of the proceeds when co-owners disagree.',
        answerEs: 'Es una demanda que permite a un copropietario solicitar judicialmente la división física o la venta forzosa de la propiedad para repartir el dinero equitativamente.'
      }
    ]
  },

  // 14. Social Security
  {
    id: 'social-security',
    name: 'Social Security',
    nameEs: 'Seguro Social por Incapacidad',
    slug: 'social-security',
    eyebrow: 'CALIFORNIA SOCIAL SECURITY DISABILITY',
    eyebrowEs: 'SEGURO SOCIAL POR INCAPACIDAD EN CALIFORNIA',
    h1: 'California Social Security Disability Lawyers | Free Case Review',
    h1Es: 'Abogados de Seguro Social en California | Evaluación Gratuita',
    subhead: 'Struggling with an SSDI or SSI claim, denial, appeal, or hearing? Tell us about your situation and we’ll help connect you with a qualified California attorney.',
    subheadEs: '¿Enfrenta la denegación de beneficios SSDI o SSI, apelaciones o audiencias? Cuéntenos su caso y le ayudaremos a contactar a un abogado calificado en California.',
    primaryCta: 'Get a Free Disability Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Discapacidad',
    secondaryCta: 'Find a Social Security Disability Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Seguro Social',
    supportingText: 'Potential matters include SSDI and SSI applications, denied claims, reconsideration requests, administrative hearings, and disability benefit disputes.',
    supportingTextEs: 'Orientación para solicitudes de SSDI y SSI, recursos de reconsideración, audiencias ante jueces administrativos (ALJ) y apelaciones.',
    shortDesc: 'Assistance for Social Security Disability Insurance (SSDI) & Supplemental Security Income (SSI) claims.',
    shortDescEs: 'Asistencia en solicitudes y apelaciones para beneficios de incapacidad SSDI y SSI.',
    iconName: 'Award',
    seoTitle: 'California Social Security Disability Lawyers | SSDI & SSI | Free Case Review',
    seoTitleEs: 'Abogados de Seguro Social por Incapacidad en California | CA Legal Source',
    metaDesc: 'Need help with an SSDI or SSI claim, denial, appeal, or hearing in California? Connect with a qualified Social Security disability attorney.',
    metaDescEs: '¿Necesita ayuda con reclamos de SSDI o SSI en California? Conéctese con un abogado calificado para una evaluación gratuita.',
    overview: 'The Social Security Administration (SSA) administers SSDI and SSI disability programs based on strict medical criteria. Because the majority of initial disability applications are denied, representation by an attorney during reconsideration and Administrative Law Judge (ALJ) hearings significantly enhances favorable award rates.',
    overviewEs: 'La mayoría de solicitudes iniciales ante el Seguro Social son denegadas. Contar con un abogado para la apelación y la audiencia ante el juez (ALJ) incrementa notablemente las posibilidades de aprobación.',
    commonIssues: [
      'Initial application denials for SSDI (insured workers) and SSI (needs-based)',
      'Submitting Request for Reconsideration within strict 60-day deadlines',
      'Preparation for Administrative Law Judge (ALJ) evidentiary hearings',
      'Appeals Council reviews and Federal District Court disability appeals',
      'Overpayment dispute notices and continuing disability review (CDR) defense'
    ],
    commonIssuesEs: [
      'Denegación inicial de beneficios por incapacidad SSDI o SSI',
      'Presentación de apelaciones de reconsideración en el plazo de 60 días',
      'Preparación de pruebas y testimonios médicos para la audiencia judicial (ALJ)',
      'Apelaciones ante el Consejo de Apelaciones y Cortes Federales',
      'Defensa ante cobros de sobrepago indebidos del Seguro Social'
    ],
    californiaLaws: [
      'Social Security Act (42 U.S. Code § 401 et seq.)',
      '20 Code of Federal Regulations (CFR Part 404 - SSDI & Part 416 - SSI)',
      'California State Disability Insurance (SDI / EDD Coordination Rules)'
    ],
    californiaLawsEs: [
      'Ley del Seguro Social Federal (Título 42)',
      'Código de Regulaciones Federales (CFR Parte 404 y 416)',
      'Coordinación con el Seguro Estatal de Incapacidad de California (EDD / SDI)'
    ],
    whenToConsult: [
      'Immediately upon receiving an SSA Notice of Denial (strict 60-day appeal clock)',
      'When physical or psychological impairments prevent gainful employment for 12+ months',
      'Before attending a scheduled hearing before an Administrative Law Judge'
    ],
    whenToConsultEs: [
      'Inmediatamente al recibir la carta de rechazo (hay 60 días para apelar)',
      'Si padece una condición médica que le impide trabajar por más de 12 meses',
      'Antes de presentarse a la audiencia formal ante el juez administrativo'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Fresno County', slug: 'fresno-county' },
      { name: 'San Bernardino County', slug: 'san-bernardino-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Workers’ Compensation', slug: 'workers-comp' },
      { name: 'ADA / Disability', slug: 'ada-disability' }
    ],
    faqs: [
      {
        question: 'How are attorney fees paid in California Social Security disability cases?',
        questionEs: '¿Cómo se pagan los honorarios de abogados en casos de Seguro Social?',
        answer: 'Disability attorneys operate on contingency approved by federal law. Fees are capped by SSA (typically 25% of past-due back pay up to the federal maximum ceiling) and only paid if you win benefits.',
        answerEs: 'Los abogados cobran solo si ganan su caso, mediante un porcentaje fijado por ley federal (generalmente el 25% de los pagos retroactivos acumulados).'
      }
    ]
  },

  // 15. Wills & Trusts
  {
    id: 'wills-trusts',
    name: 'Wills & Trusts',
    nameEs: 'Testamentos y Fideicomisos',
    slug: 'wills-trusts',
    eyebrow: 'CALIFORNIA WILLS, TRUSTS & ESTATE LAW',
    eyebrowEs: 'TESTAMENTOS Y FIDEICOMISOS EN CALIFORNIA',
    h1: 'California Wills & Trusts Lawyers | Free Case Review',
    h1Es: 'Abogados de Testamentos y Fideicomisos en California | Evaluación Gratuita',
    subhead: 'Planning your estate or dealing with a trust, probate, or estate administration issue? Tell us about your situation and we’ll help connect you with a qualified California attorney.',
    subheadEs: '¿Desea planificar su patrimonio o enfrenta un proceso de sucesión (probate) o fideicomiso? Cuéntenos su caso y le ayudaremos a contactar a un abogado calificado.',
    primaryCta: 'Get a Free Estate Law Case Review',
    primaryCtaEs: 'Solicitar Evaluación de Planificación Patrimonial',
    secondaryCta: 'Find an Estate Planning Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Fideicomisos',
    supportingText: 'Potential matters include wills, revocable living trusts, powers of attorney, advance healthcare directives, probate avoidance, trust administration, and estate disputes.',
    supportingTextEs: 'Servicios de fideicomisos en vida, testamentos, poderes notariales, directivas médicas, administración de fideicomisos y litigios sucesorios.',
    shortDesc: 'Comprehensive estate planning, revocable living trusts, powers of attorney, and probate avoidance.',
    shortDescEs: 'Planificación patrimonial, fideicomisos en vida, testamentos y protección de herencias.',
    iconName: 'FileText',
    seoTitle: 'California Estate Planning Lawyers | Wills & Trusts | Free Case Review',
    seoTitleEs: 'Abogados de Testamentos y Fideicomisos en California | CA Legal Source',
    metaDesc: 'Need help with a will, trust, probate, or estate administration matter in California? Connect with a qualified estate planning attorney.',
    metaDescEs: '¿Necesita ayuda con un testamento, fideicomiso o juicio sucesorio en California? Conéctese con un abogado calificado para una revisión.',
    overview: 'Under the California Probate Code, creating a comprehensive Revocable Living Trust allows families to distribute assets privately, avoid costly and prolonged California probate court proceedings, and protect children and beneficiaries according to explicit instructions.',
    overviewEs: 'En California, un fideicomiso en vida revocable (Revocable Living Trust) permite transferir bienes a los herederos sin pasar por el largo y costoso juicio de probate.',
    commonIssues: [
      'Drafting comprehensive Revocable Living Trusts, pour-over wills, and asset deed transfers',
      'Avoiding statutory California probate court fees under Probate Code § 10810',
      'Durable Powers of Attorney for financial management and Advance Healthcare Directives',
      'Trust administration, trustee accounting duties, and fiduciary compliance',
      'Will and trust contest litigation involving undue influence or lack of capacity'
    ],
    commonIssuesEs: [
      'Creación de fideicomisos en vida revocables y traspaso de escrituras inmobiliarias',
      'Cómo evitar los altos costos del juicio sucesorio (probate) de California',
      'Poderes notariales duraderos y directivas de atención médica anticipada',
      'Administración de fideicomisos y rendición de cuentas a beneficiarios',
      'Disputas de herencia, impugnación de testamentos e influencia indebida'
    ],
    californiaLaws: [
      'California Probate Code § 15000 et seq. (California Trust Law)',
      'California Probate Code § 6100 et seq. (Wills Execution & Formalities)',
      'California Probate Code § 10810 (Statutory Attorney & Executor Probate Fees)'
    ],
    californiaLawsEs: [
      'Código de Sucesiones de California § 15000 (Ley de Fideicomisos)',
      'Código de Sucesiones de California § 6100 (Requisitos de Testamentos)',
      'Código de Sucesiones de California § 10810 (Tarifas Legales de Probate)'
    ],
    whenToConsult: [
      'When purchasing real property in California to ensure immediate trust vesting',
      'When planning guardianship protections for minor children',
      'Upon the death of a family member to manage trust administration or probate filing'
    ],
    whenToConsultEs: [
      'Al adquirir bienes raíces en California para colocarlos a nombre del fideicomiso',
      'Para designar formalmente tutores legales para hijos menores de edad',
      'Tras el fallecimiento de un familiar para iniciar la administración de la herencia'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Santa Clara County', slug: 'santa-clara-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Real Estate', slug: 'real-estate' },
      { name: 'Family Law', slug: 'family-law' }
    ],
    faqs: [
      {
        question: 'Why is a living trust superior to a simple will in California?',
        questionEs: '¿Por qué un fideicomiso en vida es mejor que un simple testamento en California?',
        answer: 'In California, estates with real property or gross assets exceeding small-estate thresholds ($184,500+) must undergo statutory probate court proceedings if only controlled by a will, resulting in public records, months of delay, and mandated statutory fees.',
        answerEs: 'En California, las propiedades transmitidas por testamento deben pasar por el proceso judicial de probate si superan el límite de $184,500, generando demoras de hasta un año y costos elevados.'
      }
    ]
  },

  // 16. Workers' Comp
  {
    id: 'workers-comp',
    name: 'Workers’ Compensation',
    nameEs: 'Compensación de Trabajadores',
    slug: 'workers-comp',
    eyebrow: 'CALIFORNIA WORKERS\' COMPENSATION',
    eyebrowEs: 'COMPENSACIÓN DE TRABAJADORES EN CALIFORNIA',
    h1: 'California Workers\' Compensation Lawyers | Free Case Review',
    h1Es: 'Abogados de Compensación Laboral en California | Evaluación Gratuita',
    subhead: 'Were you injured or became ill because of your work? Tell us what happened and we’ll help connect you with a qualified California workers\' compensation attorney.',
    subheadEs: '¿Sufrió un accidente laboral o enfermedad por su trabajo? Cuéntenos lo sucedido y le ayudaremos a contactar a un abogado calificado en compensación de trabajadores en California.',
    primaryCta: 'Get a Free Workers\' Comp Case Review',
    primaryCtaEs: 'Solicitar Evaluación Gratuita de Compensación Laboral',
    secondaryCta: 'Find a Workers\' Compensation Lawyer',
    secondaryCtaEs: 'Buscar Abogado de Compensación Laboral',
    supportingText: 'Potential matters include denied claims, delayed medical treatment, disability benefits, workplace injuries, medical evaluations, and benefit disputes.',
    supportingTextEs: 'Asistencia con reclamos denegados ante el DWC, tratamiento médico demorado, incapacidad temporal o permanente y acuerdos de liquidación (C&R).',
    shortDesc: 'Benefits for on-the-job injuries, construction accidents, repetitive strain, and occupational illnesses.',
    shortDescEs: 'Beneficios por accidentes en el trabajo, lesiones por esfuerzo y enfermedades ocupacionales.',
    iconName: 'HardHat',
    seoTitle: 'California Workers\' Compensation Lawyers | Free Case Review',
    seoTitleEs: 'Abogados de Compensación Laboral en California | CA Legal Source',
    metaDesc: 'Injured or became ill because of your job in California? Connect with a qualified workers\' compensation attorney for a confidential case review.',
    metaDescEs: '¿Sufrió una lesión de trabajo en California? Conéctese con un abogado de compensación de trabajadores para una revisión gratuita.',
    overview: 'Under the California Labor Code (§ 3200 et seq.), the Division of Workers\' Compensation (DWC) provides no-fault benefits including medical care, temporary disability (TD), permanent disability (PD), and supplemental job displacement vouchers. Injured workers have the right to challenge claim denials before the Workers\' Compensation Appeals Board (WCAB).',
    overviewEs: 'El sistema de compensación laboral de California (DWC) es un esquema sin culpa que cubre atención médica completa, pagos por incapacidad temporal y permanente.',
    commonIssues: [
      'Denial of injury claims by employer insurance administrators (e.g. State Fund, Sedgwick)',
      'Delayed or denied medical treatment authorizations under Utilization Review (UR)',
      'Disputes over Qualified Medical Evaluator (QME) disability rating percentages',
      'Repetitive stress injuries, cumulative trauma, and toxic chemical exposure',
      'Lump-sum Compromise and Release (C&R) settlement negotiations'
    ],
    commonIssuesEs: [
      'Denegación indebida de reclamos por aseguradoras de compensación laboral',
      'Tratamientos médicos autorizados con retraso o negados por revisión médica (UR)',
      'Discrepancias en el porcentaje de incapacidad permanente emitido por el evaluador QME',
      'Lesiones por esfuerzo repetitivo o trauma acumulativo',
      'Negociación de acuerdos de indemnización en un solo pago (Compromise and Release)'
    ],
    californiaLaws: [
      'California Labor Code § 3200 et seq. (California Workers\' Compensation System)',
      'California Labor Code § 4600 (Employer Mandate to Provide Medical Treatment)',
      'California Labor Code § 5405 (1-Year Statute of Limitations for DWC Claim Filing)'
    ],
    californiaLawsEs: [
      'Código Laboral de California § 3200 (Sistema de Compensación de Trabajadores)',
      'Código Laboral de California § 4600 (Obligación de Tratamiento Médico)',
      'Código Laboral de California § 5405 (Plazos de Reclamo)'
    ],
    whenToConsult: [
      'Immediately if the insurance company delays or denies your DWC-1 claim form',
      'If your treating doctor orders surgery or physical therapy that is blocked by Utilization Review',
      'Before selecting a QME physician or accepting permanent disability percentage ratings'
    ],
    whenToConsultEs: [
      'Si la aseguradora demora o rechaza su formulario de reclamo DWC-1',
      'Si le niegan cirugías, medicamentos o terapias recetadas por su médico tratante',
      'Antes de elegir a un médico evaluador (QME) o aceptar porcentajes de incapacidad bajos'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'San Bernardino County', slug: 'san-bernardino-county' },
      { name: 'Fresno County', slug: 'fresno-county' },
      { name: 'Kern County', slug: 'kern-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Employment Law', slug: 'employment' },
      { name: 'Personal Injury', slug: 'personal-injury' },
      { name: 'Social Security', slug: 'social-security' }
    ],
    faqs: [
      {
        question: 'Can undocumented California workers receive workers\' compensation benefits?',
        questionEs: '¿Tienen derecho los trabajadores indocumentados a compensación laboral en California?',
        answer: 'Yes. Under California Labor Code § 3351, all workers regardless of immigration status are entitled to workers\' compensation medical treatment and disability benefits for on-the-job injuries.',
        answerEs: 'Sí. En California, el Código Laboral garantiza atención médica y pagos de incapacidad a todos los trabajadores lesionados, sin importar su estatus migratorio.'
      }
    ]
  },

  // 17. Other Legal Matter
  {
    id: 'other',
    name: 'Other Legal Matters',
    nameEs: 'Otros Asuntos Legales',
    slug: 'other',
    eyebrow: 'OTHER CALIFORNIA LEGAL MATTERS',
    eyebrowEs: 'OTROS ASUNTOS LEGALES EN CALIFORNIA',
    h1: 'Need a California Lawyer for Another Legal Matter?',
    h1Es: '¿Necesita un Abogado en California para Otro Asunto Legal?',
    subhead: 'Don\'t see your legal issue listed? Tell us what is happening and we’ll help determine the appropriate legal category and, where appropriate, connect you with a qualified California attorney.',
    subheadEs: '¿No encuentra su caso en las categorías principales? Cuéntenos lo que está sucediendo y le ayudaremos a identificar el área legal y contactar al abogado indicado.',
    primaryCta: 'Tell Us About Your Legal Matter',
    primaryCtaEs: 'Cuéntenos Sobre su Caso Legal',
    secondaryCta: 'Start Your Case Review',
    secondaryCtaEs: 'Comenzar Evaluación de Caso',
    supportingText: 'Potential matters may include civil disputes, administrative matters, municipal or zoning issues, licensing matters, and other specialized legal concerns.',
    supportingTextEs: 'Casos civiles diversos, trámites administrativos, licencias profesionales, asuntos municipales y consultas legales especializadas.',
    shortDesc: 'Intake and routing assistance for civil litigation, administrative hearings, and specialized law.',
    shortDescEs: 'Orientación para litigios civiles, audiencias administrativas y ramas especializadas.',
    iconName: 'HelpCircle',
    seoTitle: 'California Lawyers for Other Legal Matters | Free Case Review',
    seoTitleEs: 'Abogados para Otros Asuntos Legales en California | CA Legal Source',
    metaDesc: 'Have a California legal issue that does not fit another category? Tell us about your situation and we’ll help direct you to an appropriate legal resource.',
    metaDescEs: '¿Tiene un asunto legal en California y necesita orientación? Conéctese con un abogado para una evaluación confidencial.',
    overview: 'California’s legal framework encompasses hundreds of specialized codes and administrative regulations. If your legal issue spans multiple categories or involves specialized administrative boards, our intake evaluation routes your matter to appropriate legal counsel across California’s 58 counties.',
    overviewEs: 'Nuestro sistema de evaluación y referencia legal categoriza su caso y facilita la conexión con abogados calificados en las distintas ramas del derecho en California.',
    commonIssues: [
      'Professional licensing defense before California state licensing boards',
      'Administrative law hearings and municipal code compliance disputes',
      'Defamation, slander, and libel litigation',
      'Elder financial abuse and civil rights violations',
      'Insurance claim disputes, bad faith denials, and property damage appeals'
    ],
    commonIssuesEs: [
      'Defensa de licencias profesionales ante juntas estatales de California',
      'Audiencias ante tribunales administrativos y ordenanzas municipales',
      'Litigios por difamación, calumnia e injuria',
      'Abuso financiero de personas mayores y violaciones a derechos civiles',
      'Reclamos de seguros denegados de mala fe (Bad Faith)'
    ],
    californiaLaws: [
      'California Government Code § 11500 et seq. (Administrative Procedure Act)',
      'California Civil Code § 3281 et seq. (General Civil Remedies & Damages)',
      'California Business & Professions Code'
    ],
    californiaLawsEs: [
      'Código de Gobierno de California (Ley de Procedimiento Administrativo)',
      'Código Civil de California (Recursos y Daños Civiles)',
      'Código de Negocios y Profesiones de California'
    ],
    whenToConsult: [
      'When receiving formal government notices with impending statutory response deadlines',
      'When an insurer or contracting entity denies valid financial claims without justification',
      'When you need legal clarity before taking irreversible procedural steps'
    ],
    whenToConsultEs: [
      'Al recibir notificaciones oficiales con plazos estrictos de respuesta',
      'Si una aseguradora o entidad niega injustificadamente un reclamo válido',
      'Antes de tomar decisiones legales o procesales de carácter definitivo'
    ],
    relatedCounties: [
      { name: 'Los Angeles County', slug: 'los-angeles-county' },
      { name: 'San Diego County', slug: 'san-diego-county' },
      { name: 'Orange County', slug: 'orange-county' },
      { name: 'San Francisco County', slug: 'san-francisco-county' }
    ],
    relatedPracticeAreas: [
      { name: 'Contract Disputes', slug: 'contract-disputes' },
      { name: 'Consumer Protection', slug: 'consumer-protection' }
    ],
    faqs: [
      {
        question: 'How does CA Legal Source evaluate and route custom legal inquiries?',
        questionEs: '¿Cómo evalúa y asigna CA Legal Source las consultas legales especiales?',
        answer: 'Our intake team reviews the factual summary, identifies the primary California legal jurisdiction and practice specialty, and matches qualifying inquiries with participating attorneys holding relevant panel qualifications.',
        answerEs: 'Nuestro equipo analiza los hechos de su consulta, identifica la jurisdicción del condado y el área legal aplicable, conectándolo con un abogado calificado.'
      }
    ]
  }
];

// Apply SEO enhancements (titles, descriptions, extra FAQs, link fixes).
for (const area of all17PracticeAreasData) {
  const enh = practiceAreaEnhancements[area.slug];
  if (!enh) continue;
  if (enh.seoTitle) area.seoTitle = enh.seoTitle;
  if (enh.seoTitleEs) area.seoTitleEs = enh.seoTitleEs;
  if (enh.metaDesc) area.metaDesc = enh.metaDesc;
  if (enh.metaDescEs) area.metaDescEs = enh.metaDescEs;
  if (enh.extraCommonIssues) area.commonIssues = [...area.commonIssues, ...enh.extraCommonIssues];
  if (enh.extraCommonIssuesEs) area.commonIssuesEs = [...area.commonIssuesEs, ...enh.extraCommonIssuesEs];
  if (enh.extraFaqs) area.faqs = [...area.faqs, ...enh.extraFaqs];
  if (enh.relatedPracticeAreas) area.relatedPracticeAreas = enh.relatedPracticeAreas;
}

export const all17PracticeAreas = all17PracticeAreasData.map(a => a.name);
