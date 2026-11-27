// SEO enhancements layered on top of practiceAreas.ts.
//
// - Shorter titles (<= 60 characters) and descriptions (<= 155 characters)
//   so Google does not cut them off.
// - Extra FAQs and common issues for the pages Search Console shows ranking
//   close to page one (landlord-tenant, ADA/disability, employment, bed bugs,
//   family law).
// - Fixes for related-practice links that pointed to a page that does not exist.
//
// General California legal information only. Have a licensed attorney review
// any change to this file before publishing.

type Faq = { question: string; questionEs: string; answer: string; answerEs: string };

export interface PracticeAreaEnhancement {
  seoTitle?: string;
  seoTitleEs?: string;
  metaDesc?: string;
  metaDescEs?: string;
  extraCommonIssues?: string[];
  extraCommonIssuesEs?: string[];
  extraFaqs?: Faq[];
  relatedPracticeAreas?: { name: string; slug: string }[];
}

export const practiceAreaEnhancements: Record<string, PracticeAreaEnhancement> = {
  'ada-disability': {
    seoTitle: 'California ADA & Disability Rights Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de ADA y Discapacidad en California | CA Legal Source',
    metaDesc: 'Reasonable accommodation denied, inaccessible business, or facing an ADA claim? Connect with a California disability rights attorney. Free case review.',
    metaDescEs: '¿Le negaron un ajuste razonable o encontró barreras de acceso? Conéctese con un abogado de derechos de discapacidad en California. Evaluación gratuita.',
    extraCommonIssues: [
      'Employer refusing to engage in the interactive process for a reasonable accommodation',
      'Businesses served with an ADA or Unruh Act accessibility lawsuit or demand letter'
    ],
    extraCommonIssuesEs: [
      'Empleador que se niega a participar en el proceso interactivo para un ajuste razonable',
      'Negocios que reciben una demanda o carta de reclamo por accesibilidad bajo la ADA o la Ley Unruh'
    ],
    extraFaqs: [
      {
        question: 'What is a reasonable accommodation under California law?',
        questionEs: '¿Qué es un ajuste razonable según la ley de California?',
        answer: 'Under the Fair Employment and Housing Act, employers with five or more employees must reasonably accommodate a known physical or mental disability unless it causes undue hardship. Examples include modified schedules, equipment, remote work, job restructuring, or a leave of absence.',
        answerEs: 'Según la Ley de Empleo y Vivienda Justos (FEHA), los empleadores con cinco o más empleados deben ofrecer ajustes razonables por una discapacidad física o mental conocida, salvo que causen una dificultad excesiva. Algunos ejemplos son horarios modificados, equipo especial, trabajo remoto, cambios de funciones o una licencia.'
      },
      {
        question: 'What if my employer ignores my accommodation request?',
        questionEs: '¿Qué pasa si mi empleador ignora mi solicitud de ajuste razonable?',
        answer: 'California employers must engage in a timely, good-faith interactive process with an employee who requests an accommodation (Gov. Code § 12940(n)). Failing to do so is a separate violation, even apart from whether an accommodation was ultimately possible. Keep copies of your requests and responses.',
        answerEs: 'Los empleadores en California deben participar de buena fe y a tiempo en un proceso interactivo con el empleado que solicita un ajuste (Código de Gobierno § 12940(n)). No hacerlo es una violación por sí misma. Guarde copias de sus solicitudes y de las respuestas.'
      },
      {
        question: 'My business received an ADA accessibility lawsuit. What should I do?',
        questionEs: 'Mi negocio recibió una demanda por accesibilidad ADA. ¿Qué debo hacer?',
        answer: 'Do not ignore it, because response deadlines are short. California law offers some protections for businesses, such as reduced minimum damages for certain small businesses that correct violations quickly, and a possible stay and early evaluation conference for businesses inspected by a Certified Access Specialist (CASp). An attorney can review which options apply.',
        answerEs: 'No la ignore, porque los plazos para responder son cortos. La ley de California ofrece ciertas protecciones a los negocios, como daños mínimos reducidos para algunos pequeños negocios que corrigen las violaciones rápidamente, y una posible suspensión y conferencia de evaluación temprana para negocios inspeccionados por un Especialista Certificado en Accesibilidad (CASp). Un abogado puede revisar qué opciones aplican.'
      }
    ],
    relatedPracticeAreas: [
      { name: 'Employment Law', slug: 'employment' },
      { name: 'Landlord-Tenant', slug: 'landlord-tenant' }
    ]
  },

  'landlord-tenant': {
    seoTitle: 'California Tenant Rights Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Inquilinos en California | CA Legal Source',
    metaDesc: 'Security deposit kept, unsafe living conditions, or facing eviction in California? Connect with a tenant rights attorney for a free case review.',
    metaDescEs: '¿No le devolvieron el depósito, vive en condiciones inseguras o enfrenta un desalojo? Conéctese con un abogado de inquilinos en California.',
    extraCommonIssues: [
      'Security deposit not returned within 21 days or withheld without an itemized statement',
      'Mold, leaks, no heat or hot water, and other habitability violations left unrepaired',
      'Eviction notices without just cause under the Tenant Protection Act',
      'Retaliation after a tenant complains or contacts code enforcement'
    ],
    extraCommonIssuesEs: [
      'Depósito de garantía no devuelto en 21 días o retenido sin un estado de cuenta detallado',
      'Moho, filtraciones, falta de calefacción o agua caliente y otras condiciones inhabitables sin reparar',
      'Avisos de desalojo sin causa justificada según la Ley de Protección al Inquilino',
      'Represalias después de que el inquilino se queja o llama a inspectores de vivienda'
    ],
    extraFaqs: [
      {
        question: 'How long does a California landlord have to return my security deposit?',
        questionEs: '¿Cuánto tiempo tiene el propietario en California para devolver mi depósito?',
        answer: 'Under Civil Code § 1950.5, the landlord must return the deposit, or send an itemized statement of deductions with receipts where required, within 21 days after you move out. If a landlord keeps a deposit in bad faith, a court may award up to twice the deposit amount as a penalty, in addition to actual damages.',
        answerEs: 'Según el Código Civil § 1950.5, el propietario debe devolver el depósito, o enviar un estado detallado de deducciones con recibos cuando se requieran, dentro de los 21 días después de que usted se mude. Si el propietario retiene el depósito de mala fe, el tribunal puede otorgar hasta el doble del depósito como penalidad, además de los daños reales.'
      },
      {
        question: 'How much can a landlord charge for a security deposit in California?',
        questionEs: '¿Cuánto puede cobrar un propietario como depósito de garantía en California?',
        answer: 'For leases starting on or after July 1, 2024, most California landlords may charge no more than one month’s rent as a security deposit (AB 12). Certain small landlords who own no more than two residential properties with four or fewer units total may charge up to two months’ rent.',
        answerEs: 'Para contratos que comienzan el 1 de julio de 2024 o después, la mayoría de los propietarios en California pueden cobrar como máximo un mes de renta de depósito (AB 12). Ciertos pequeños propietarios con no más de dos propiedades residenciales y cuatro unidades o menos en total pueden cobrar hasta dos meses.'
      },
      {
        question: 'What can I do if my landlord will not make repairs?',
        questionEs: '¿Qué puedo hacer si el propietario no hace las reparaciones?',
        answer: 'California landlords must keep rentals habitable (Civil Code § 1941.1). Tenants should give written notice of the problem and keep copies and photos. Depending on the situation, options may include contacting local code enforcement, the repair-and-deduct remedy in Civil Code § 1942, or a claim for damages. Withholding rent carries risk, so get legal advice first.',
        answerEs: 'Los propietarios en California deben mantener la vivienda habitable (Código Civil § 1941.1). El inquilino debe notificar el problema por escrito y guardar copias y fotos. Según el caso, se puede llamar a inspectores de vivienda, usar el remedio de reparar y descontar del Código Civil § 1942 o reclamar daños. Retener la renta tiene riesgos, así que busque asesoría legal primero.'
      },
      {
        question: 'Can my landlord evict me without a reason?',
        questionEs: '¿Me puede desalojar el propietario sin una razón?',
        answer: 'For many California rentals, once a tenant has lived there 12 months, the Tenant Protection Act (Civil Code § 1946.2) requires the landlord to have a just cause to terminate the tenancy. Some properties are exempt, and many cities have stronger local rent and eviction rules. If you are served with eviction court papers, the deadline to respond is short, so act immediately.',
        answerEs: 'En muchas viviendas de California, después de 12 meses de ocupación, la Ley de Protección al Inquilino (Código Civil § 1946.2) exige que el propietario tenga una causa justificada para terminar el contrato. Algunas propiedades están exentas y muchas ciudades tienen reglas locales más estrictas. Si recibe documentos judiciales de desalojo, el plazo para responder es corto, así que actúe de inmediato.'
      }
    ]
  },

  employment: {
    seoTitle: 'California Employment Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados Laborales en California | CA Legal Source',
    metaDesc: 'Unpaid wages, misclassification, discrimination, or wrongful termination in California? Connect with an employment attorney for a free case review.',
    metaDescEs: '¿Salarios no pagados, clasificación errónea, discriminación o despido injustificado? Conéctese con un abogado laboral en California. Evaluación gratuita.',
    extraCommonIssues: [
      'Workers misclassified as independent contractors and denied overtime, breaks, or expense reimbursement'
    ],
    extraCommonIssuesEs: [
      'Trabajadores clasificados erróneamente como contratistas independientes sin horas extra, descansos ni reembolso de gastos'
    ],
    extraFaqs: [
      {
        question: 'Am I an employee or an independent contractor in California?',
        questionEs: '¿Soy empleado o contratista independiente en California?',
        answer: 'For most wage and hour purposes, California uses the ABC test (Labor Code § 2775). You are presumed to be an employee unless the hiring business proves that you are free from its control, that your work is outside the usual course of its business, and that you are customarily engaged in an independently established trade or business.',
        answerEs: 'Para la mayoría de los asuntos de salarios y horas, California usa la prueba ABC (Código Laboral § 2775). Se presume que usted es empleado, salvo que la empresa demuestre que usted está libre de su control, que su trabajo está fuera del curso habitual de su negocio y que usted se dedica habitualmente a un negocio independiente establecido.'
      },
      {
        question: 'What can I recover if I was misclassified as a contractor?',
        questionEs: '¿Qué puedo recuperar si me clasificaron erróneamente como contratista?',
        answer: 'Misclassified workers may be able to recover unpaid overtime and minimum wages, missed meal and rest break premiums, unreimbursed business expenses, and related penalties. Employers that willfully misclassify workers can also face civil penalties of $5,000 to $25,000 per violation under Labor Code § 226.8.',
        answerEs: 'Los trabajadores mal clasificados pueden recuperar horas extra y salario mínimo no pagados, primas por comidas y descansos no otorgados, gastos de trabajo no reembolsados y penalidades relacionadas. Los empleadores que clasifican mal a sabiendas pueden enfrentar multas civiles de $5,000 a $25,000 por violación según el Código Laboral § 226.8.'
      }
    ]
  },

  'bed-bug-claims': {
    seoTitle: 'California Bed Bug Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Chinches de Cama en California | CA Legal Source',
    metaDesc: 'Bitten by bed bugs at a hotel or rental in California? Connect with a bed bug attorney about medical costs, damaged belongings, and relocation.',
    metaDescEs: '¿Le picaron chinches en un hotel o vivienda en California? Conéctese con un abogado sobre gastos médicos, pertenencias dañadas y reubicación.',
    extraFaqs: [
      {
        question: 'Can I sue a hotel for bed bug bites in California?',
        questionEs: '¿Puedo demandar a un hotel por picaduras de chinches en California?',
        answer: 'Hotels and other lodging businesses must use reasonable care to keep rooms safe for guests. If a hotel knew or should have known about an infestation and failed to act, injured guests may be able to recover medical costs, the cost of treating or replacing belongings, and other damages. Report the problem to management in writing and keep photos and receipts.',
        answerEs: 'Los hoteles deben actuar con cuidado razonable para mantener las habitaciones seguras. Si el hotel sabía o debía saber de una infestación y no actuó, los huéspedes afectados pueden recuperar gastos médicos, el costo de tratar o reemplazar pertenencias y otros daños. Informe el problema por escrito a la administración y guarde fotos y recibos.'
      },
      {
        question: 'Is my landlord responsible for bed bugs in my apartment?',
        questionEs: '¿Es responsable mi propietario por las chinches en mi apartamento?',
        answer: 'California landlords must provide habitable housing, and a vermin infestation can make a unit substandard under Health & Safety Code § 17920.3. Landlords must also give tenants written bed bug information and follow notice rules when entering for inspection or treatment (Civil Code §§ 1954.603 and 1954.604). Retaliating against a tenant who reports an infestation is prohibited.',
        answerEs: 'Los propietarios en California deben ofrecer vivienda habitable, y una infestación de plagas puede hacer que la unidad sea inhabitable según el Código de Salud y Seguridad § 17920.3. También deben entregar información escrita sobre chinches y respetar las reglas de aviso para entrar a inspeccionar o fumigar (Código Civil §§ 1954.603 y 1954.604). Está prohibido tomar represalias contra un inquilino que reporta una infestación.'
      }
    ]
  },

  'family-law': {
    seoTitle: 'California Family Law Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Derecho Familiar en California | CA Legal Source',
    extraFaqs: [
      {
        question: 'How is child custody decided in California?',
        questionEs: '¿Cómo se decide la custodia de los hijos en California?',
        answer: 'California courts decide custody based on the best interest of the child, considering health, safety, and welfare, any history of abuse, and the nature of the child’s contact with each parent (Family Code § 3011). Parents can agree to a plan, including 50/50 custody, and most counties require mediation before a contested custody hearing.',
        answerEs: 'Los tribunales de California deciden la custodia según el interés superior del menor, considerando su salud, seguridad y bienestar, cualquier historial de abuso y el contacto del menor con cada padre (Código de Familia § 3011). Los padres pueden acordar un plan, incluida la custodia 50/50, y la mayoría de los condados exige mediación antes de una audiencia de custodia disputada.'
      },
      {
        question: 'How long does a divorce take in California?',
        questionEs: '¿Cuánto tarda un divorcio en California?',
        answer: 'California has a mandatory waiting period: a divorce cannot become final until at least six months after the respondent is served or appears in the case. Many divorces take longer, depending on whether property, support, and custody issues are agreed or contested.',
        answerEs: 'California tiene un periodo de espera obligatorio: el divorcio no puede ser definitivo hasta al menos seis meses después de que se notifica al demandado o este comparece. Muchos divorcios tardan más, según si los temas de bienes, manutención y custodia se acuerdan o se disputan.'
      }
    ]
  },

  bankruptcy: {
    seoTitleEs: 'Abogados de Bancarrota en California | CA Legal Source',
    seoTitle: 'California Bankruptcy Lawyers | CA Legal Source',
    metaDesc: 'Struggling with debt in California? Connect with a bankruptcy attorney to compare Chapter 7, Chapter 13, and other debt relief options. Free case review.'
  },
  'consumer-protection': {
    seoTitle: 'California Consumer Protection Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Protección al Consumidor en California'
  },
  'contract-disputes': {
    seoTitle: 'California Contract Dispute Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Incumplimiento de Contrato en California'
  },
  'criminal-defense': {
    seoTitle: 'California Criminal Defense Lawyers | CA Legal Source',
    relatedPracticeAreas: [{ name: 'Immigration', slug: 'immigration' }]
  },
  immigration: {
    seoTitle: 'California Immigration Lawyers | CA Legal Source',
    metaDesc: 'Need help with a visa, green card, citizenship, or deportation matter in California? Connect with a qualified immigration attorney for a free review.'
  },
  'medical-malpractice': { seoTitle: 'California Medical Malpractice Lawyers | CA Legal Source' },
  'personal-injury': {
    seoTitle: 'California Personal Injury Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Lesiones Personales en California'
  },
  'real-estate': { seoTitle: 'California Real Estate Lawyers | CA Legal Source' },
  'social-security': {
    seoTitle: 'California Social Security Disability Lawyers | SSDI & SSI',
    seoTitleEs: 'Abogados de Incapacidad del Seguro Social en California'
  },
  'wills-trusts': {
    seoTitle: 'California Wills & Trusts Lawyers | CA Legal Source',
    seoTitleEs: 'Abogados de Testamentos y Fideicomisos en California'
  },
  'workers-comp': {
    seoTitle: "California Workers' Comp Lawyers | CA Legal Source",
    seoTitleEs: 'Abogados de Compensación Laboral en California'
  },
  other: {
    seoTitle: 'Find a California Lawyer for Other Legal Issues',
    seoTitleEs: 'Abogados para Otros Asuntos Legales en California'
  }
};
