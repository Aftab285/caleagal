import { LegalGuide } from '@/lib/types';

export const legalGuidesData: LegalGuide[] = [
  {
    id: 'california-overtime-laws',
    slug: 'california-overtime-laws-guide',
    title: 'California Overtime & Wage Laws: Employee Rights & Calculations',
    titleEs: 'Leyes de Horas Extras y Salarios en California: Derechos del Trabajador',
    summary: 'A detailed breakdown of California daily overtime (8+ hours), weekly overtime (40+ hours), double time, and exempt vs non-exempt employee rules.',
    summaryEs: 'Guía detallada sobre el cálculo de horas extras diarias (más de 8 horas), semanales y descansos obligatorios en California.',
    practiceArea: 'Employment Law',
    author: 'CA Legal Source Research Team',
    reviewer: 'California Legal Compliance Panel',
    lastReviewed: 'January 15, 2025',
    readTime: '6 min read',
    citations: [
      { name: 'California Labor Code § 510', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. Lab. Code § 510' },
      { name: 'California Industrial Welfare Commission (IWC) Wage Orders', url: 'https://www.dir.ca.gov/iwc/', codeRef: 'IWC Wage Orders 1-17' },
      { name: 'California Department of Industrial Relations', url: 'https://www.dir.ca.gov', codeRef: 'DIR Overtime Guidelines' }
    ],
    content: `
# California Overtime & Wage Laws: Employee Rights & Calculations

Unlike federal law which only mandates overtime after 40 hours in a workweek, **California Labor Code § 510** requires daily overtime pay for non-exempt workers.

## Key California Overtime Rules:
1. **1.5x Regular Rate of Pay**:
   - Any work beyond 8 hours up to 12 hours in a single workday.
   - Any work beyond 40 non-overtime hours in a single workweek.
   - For the first 8 hours worked on the 7th consecutive day of work in a workweek.
2. **2.0x Double Time Rate of Pay**:
   - Any work beyond 12 hours in a single workday.
   - Any work beyond 8 hours on the 7th consecutive day of work in a workweek.

## Meal & Rest Break Protections (Labor Code § 226.7 & § 512):
- Non-exempt employees working more than 5 hours are entitled to a mandatory 30-minute uninterrupted meal period.
- If an employer fails to provide a compliant meal or rest break, they owe the employee one additional hour of pay at their regular rate for each workday a violation occurred (known as break premium pay).

## What Documents to Preserve:
- Itemized wage stubs (Labor Code § 226).
- Personal time tracking records, emails, or text messages demonstrating work performed off-the-clock.
    `,
    contentEs: `
# Leyes de Horas Extras y Salarios en California

A diferencia de la ley federal, el **Código Laboral de California § 510** exige el pago de horas extras diarias para trabajadores no exentos.

## Reglas Principales de Horas Extras:
1. **Pago a 1.5x**: Más de 8 horas en un día laboral o más de 40 horas en una semana.
2. **Pago Doble (2.0x)**: Más de 12 horas en un solo día laboral o más de 8 horas en el séptimo día consecutivo de trabajo.

## Descansos para Comer y Reposar:
- Una pausa obligatoria e ininterrumpida de 30 minutos para comer si trabaja más de 5 horas.
- Descansos pagados de 10 minutos por cada 4 horas de trabajo.
    `
  },
  {
    id: 'california-tenant-rights-mold-repairs',
    slug: 'california-tenant-rights-mold-repairs-guide',
    title: 'California Tenant Rights for Unsafe Housing, Toxic Mold & Landlord Repairs',
    titleEs: 'Derechos del Inquilino en California: Moho Tóxico, Reparaciones y Vivienda Segura',
    summary: 'How the California Warranty of Habitability (Civil Code § 1941.1) protects tenants when landlords refuse to repair plumbing, heating, or mold hazards.',
    summaryEs: 'Conozca cómo la garantía de habitabilidad de California protege a los inquilinos cuando el dueño se niega a hacer reparaciones.',
    practiceArea: 'Landlord-Tenant',
    author: 'CA Legal Source Housing Analysis Group',
    reviewer: 'California Legal Compliance Panel',
    lastReviewed: 'February 2, 2025',
    readTime: '7 min read',
    citations: [
      { name: 'California Civil Code § 1941.1 (Habitability)', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. Civ. Code § 1941.1' },
      { name: 'California Civil Code § 1942 (Repair and Deduct)', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. Civ. Code § 1942' },
      { name: 'California Health & Safety Code § 17920.3', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. Health & Safety Code § 17920.3' }
    ],
    content: `
# California Tenant Rights for Unsafe Housing & Landlord Repairs

Under **California Civil Code § 1941.1**, every residential landlord is legally bound by an implied warranty of habitability, requiring rental dwellings to be safe, waterproofed, and sanitary.

## Mandatory Habitability Standards:
- Effective weather protection and waterproofing of roof and exterior walls.
- Functioning plumbing and gas facilities conforming to applicable code.
- Heating facilities maintained in good working order.
- Clean building and grounds free from accumulation of debris, filth, pests, or vermin.
- Electrical lighting and wiring maintained in safe condition.

## Tenant Legal Remedies under California Law:
1. **Written Notice**: Tenants must give written notice of defective conditions.
2. **Repair and Deduct (Civil Code § 1942)**: If after a reasonable time (typically 30 days, or sooner in emergencies) the landlord fails to repair, the tenant may repair the condition and deduct up to one month rent (usable up to 2 times in a 12-month period).
3. **Rent Withholding / Lawsuits**: In severe cases of persistent habitability breaches, tenants may withhold rent or file civil claims for rent abatement and emotional distress.

## Retaliation Protections (Civil Code § 1942.5):
It is illegal for a landlord to retaliate against a tenant (by issuing an eviction notice or raising rent) for exercising lawful tenant rights or filing complaints with code enforcement agencies within 180 days.
    `,
    contentEs: `
# Derechos del Inquilino en California ante Reparaciones y Moho

Bajo el **Código Civil de California § 1941.1**, todo arrendador tiene la obligación legal de ofrecer una vivienda habitable, limpia y segura.

## Requisitos Obligatorios de Habitabilidad:
- Techos, ventanas y paredes impermeabilizados contra agua y viento.
- Plomería, agua caliente y calefacción en correcto funcionamiento.
- Espacios libres de plagas, roedores y moho tóxico.
- Instalaciones eléctricas seguras y en buen estado.

## Protección contra Represalias:
El propietario no puede aumentar la renta ni amenazar con desalojo porque usted exigió reparaciones por escrito.
    `
  },
  {
    id: 'california-car-accident-step-by-step',
    slug: 'california-car-accident-step-by-step-guide',
    title: 'What to Do After a California Car Accident: Legal & Insurance Checklist',
    titleEs: 'Qué Hacer Después de un Accidente de Auto en California: Guía Legal',
    summary: 'A practical step-by-step guide on evidence gathering, DMV SR-1 reporting requirements, medical care, and pure comparative negligence rules.',
    summaryEs: 'Guía práctica sobre recopilación de pruebas, reporte obligatorio SR-1 del DMV y reclamos a aseguradoras en California.',
    practiceArea: 'Personal Injury',
    author: 'CA Legal Source Injury Research Unit',
    reviewer: 'California Legal Compliance Panel',
    lastReviewed: 'January 28, 2025',
    readTime: '5 min read',
    citations: [
      { name: 'California Vehicle Code § 20002 & § 20008 (Accident Reporting)', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. Veh. Code § 20008' },
      { name: 'California Code of Civil Procedure § 335.1', url: 'https://leginfo.legislature.ca.gov', codeRef: 'Cal. CCP § 335.1' },
      { name: 'Li v. Yellow Cab Co. (Pure Comparative Fault)', url: 'https://law.justia.com', codeRef: '13 Cal. 3d 804 (1975)' }
    ],
    content: `
# What to Do After a California Car Accident: Legal Checklist

Taking the correct steps immediately following a motor vehicle collision in California protects your health and your legal rights to fair compensation.

## Immediate Action Steps at the Scene:
1. **Ensure Safety & Call Emergency Services**: Contact California Highway Patrol (CHP) or local police.
2. **Exchange Driver & Insurance Info**: Collect name, phone, driver license number, license plate, insurer name, and policy number.
3. **Photograph the Scene**: Capture vehicle damage, street signs, weather, skid marks, and visible injuries.
4. **Obtain Witness Statements**: Get names and contact info for any eyewitnesses.
5. **Seek Immediate Medical Attention**: Many internal and soft-tissue injuries manifest hours or days later.

## Mandatory California DMV SR-1 Form:
Under California Vehicle Code § 16000, you **must file an SR-1 form with the DMV within 10 days** if the accident caused injury, death, or property damage exceeding $1,000, regardless of who was at fault.

## Understanding California Comparative Fault:
California applies pure comparative fault: even if you are deemed 20% responsible for an accident, you can still recover 80% of your total allowable damages from the other party.
    `,
    contentEs: `
# Qué Hacer Después de un Accidente de Auto en California

## Pasos Inmediatos:
1. **Llamar al 911 / Policía** y verificar la seguridad de todos los involucrados.
2. **Intercambiar Información**: Nombre, licencia, placa, compañía de seguro y número de póliza.
3. **Tomar Fotos y Videos**: Daños de los vehículos, señales viales y marcas de frenado.
4. **Reporte SR-1 del DMV**: Obligatorio dentro de los primeros 10 días si hubo heridos o daños superiores a $1,000.
5. **Buscar Atención Médica Inmediata**: Fundamental para su salud y para respaldar su reclamo.
    `
  }
];
