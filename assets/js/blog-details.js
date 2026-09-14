/**
 * VETCARE PRO — Dynamic Blog Article Loader
 * Loads and renders specific article data based on URL parameter ?id=<articleId>
 */

const BLOG_ARTICLES_DATA = {
  'feline-pain': {
    id: 'feline-pain',
    title: 'Recognizing Subtle Signs of Pain & Discomfort in Felines',
    category: 'feline',
    badge: 'Feline Medicine & Geriatrics',
    readTime: '6 Min Read',
    date: 'September 12, 2026',
    author: {
      name: 'Dr. Marcus Vance, DACVIM',
      title: 'Head of Feline Internal Medicine',
      image: 'assets/images/vets/vet-marcus.jpg',
      bio: 'Dr. Vance is a board-certified small animal internist with over a decade of clinical experience treating feline endocrinopathies, chronic renal failure, and geriatric multimodal pain therapy.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-1.jpg',
    lead: 'Unlike dogs, who often whine, limp noticeably, or vocalize when in physical distress, domestic felines possess an evolutionary preservation mechanism: in the wild, an animal that displays vulnerability becomes easy prey. Consequently, companion cats mask pain with remarkable resilience.',
    contentHtml: `
      <h3 class="mb-3">1. The Feline Grimace Scale (FGS)</h3>
      <p>Veterinary researchers recently validated the <strong>Feline Grimace Scale</strong>, a scientific scoring system using facial action units to evaluate pain levels in cats. Key facial cues include:</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-dot text-accent fs-3 align-middle"></i> <strong>Ear Position:</strong> Flattened, rotated backward, or pulled laterally outward.</li>
        <li><i class="bi bi-dot text-accent fs-3 align-middle"></i> <strong>Orbital Tightening:</strong> Eyelids held partially closed or squinting in bright ambient light.</li>
        <li><i class="bi bi-dot text-accent fs-3 align-middle"></i> <strong>Muzzle Tension:</strong> Tightened whisker pads giving an elliptical shape.</li>
        <li><i class="bi bi-dot text-accent fs-3 align-middle"></i> <strong>Head Position:</strong> Held lowered below the shoulder line rather than upright.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-exclamation-circle-fill text-warning me-2"></i> Clinical Insight:</h5>
        <p class="small text-muted mb-0">"Pet parents often assume a cat with osteoarthritis will cry out or limp. In reality, over 90% of senior cats with severe joint degeneration simply stop jumping onto their favorite sofa or hesitate before climbing stairs." — Dr. Marcus Vance</p>
      </div>

      <h3 class="mb-3">2. Behavioral Shifts Often Mistaken for "Old Age"</h3>
      <p>Many pet owners mistakenly dismiss chronic arthritis pain as normal aging. If you observe any of the following behavior shifts, your cat likely requires clinical evaluation:</p>
      <ul>
        <li class="mb-2"><strong>Changes in Grooming Habits:</strong> An unkempt, matted coat along the lower spine or over-grooming a specific painful joint to baldness.</li>
        <li class="mb-2"><strong>Litter Box Avoidance:</strong> Urinating right beside the box because stepping over high plastic borders exacerbates hip or pelvic pain.</li>
        <li class="mb-2"><strong>Social Withdrawal:</strong> Hiding in closets or beneath beds rather than greeting family members at the door.</li>
      </ul>
    `,
    checklist: {
      title: '5-Point At-Home Feline Pain Assessment',
      subtitle: 'Conduct this evaluation monthly for any cat aged seven years or older:',
      items: [
        'Does your cat jump fluidly onto the counter or bed without hesitating or pacing beforehand?',
        'Is the hair coat smooth and free of mats across the lower back and tail base?',
        'Does your cat tolerate gentle stroking along the lower spine without flinching or swishing their tail?',
        'Are claw tips naturally retracting rather than clicking loudly across wooden flooring?',
        'Is your cat using the litter box consistently without missing or straining?'
      ]
    },
    relatedIds: ['renal-nutrition', 'senior-dental'],
    cta: {
      title: 'Suspect Your Cat Is in Pain?',
      text: 'Never administer human pain medications (like Tylenol or Advil), which are lethal to cats. Schedule a gentle, fear-free mobility consultation with our feline medicine team.',
      btnText: 'Book Feline Examination',
      btnLink: 'appointments.html'
    }
  },

  'puppy-vaccines': {
    id: 'puppy-vaccines',
    title: 'The Complete Puppy Vaccination Roadmap & Immunity Timeline',
    category: 'canine',
    badge: 'Canine Wellness & Pediatrics',
    readTime: '5 Min Read',
    date: 'September 10, 2026',
    author: {
      name: 'Dr. Emily Carter, DACVS',
      title: 'Medical Director & Chief of Surgery',
      image: 'assets/images/vets/vet-emily.jpg',
      bio: 'Dr. Carter has 14 years of veterinary experience guiding families through pediatric care, core preventative wellness, and sterile surgical intervention.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-2.jpg',
    lead: 'Bringing home a new puppy brings immense joy, but their nascent immune systems face critical vulnerabilities. Maternal antibodies passed through early colostrum decline gradually between 6 and 16 weeks, creating an immunity window where timely vaccination is life-saving.',
    contentHtml: `
      <h3 class="mb-3">1. Core vs. Lifestyle Vaccines: Understanding the Spectrum</h3>
      <p>Not every dog requires every vaccine on the market. Veterinary immunology categorizes immunizations into two crucial categories:</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-shield-check text-accent fs-5 align-middle me-2"></i><strong>Core Vaccines (Essential for All Canines):</strong> DHPP (Distemper, Canine Hepatitis/Adenovirus, Parvovirus, and Parainfluenza) and Rabies.</li>
        <li><i class="bi bi-shield-plus text-primary fs-5 align-middle me-2"></i><strong>Lifestyle Vaccines (Risk-Based):</strong> Bordetella (Kennel Cough), Leptospirosis, Lyme Disease, and Canine Influenza based on geographic travel and socialization habits.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-info-circle-fill text-accent me-2"></i> Why Boosters Every 3–4 Weeks?</h5>
        <p class="small text-muted mb-0">"Puppy vaccine boosters aren't administered because one dose is 'weak'. They are timed because maternal antibodies neutralize earlier doses at unpredictable intervals between 8 and 16 weeks of age." — Dr. Emily Carter</p>
      </div>

      <h3 class="mb-3">2. Parvovirus Protection & Safe Socialization</h3>
      <p>Canine parvovirus is an exceptionally hardy, shed virus capable of surviving months on public soil, dog parks, and sidewalk surfaces. Prior to completing the final 16-week booster series:</p>
      <ul>
        <li class="mb-2"><strong>Avoid Public Dog Parks:</strong> Keep paw pads off ground where unvaccinated dogs congregate.</li>
        <li class="mb-2"><strong>Controlled Socialization:</strong> Allow playtime only with fully vaccinated adult dogs in private, sanitized yards.</li>
        <li class="mb-2"><strong>Carry in Public Spaces:</strong> Hold your puppy during visits to pet stores or clinic waiting rooms.</li>
      </ul>
    `,
    checklist: {
      title: '5-Point Puppy Wellness & Immunization Checklist',
      subtitle: 'Ensure your puppy stays on track throughout their first 16 weeks:',
      items: [
        'Has your puppy received their initial 6–8 week DHPP core booster and fecal parasite check?',
        'Is your puppy current on monthly veterinary-prescribed heartworm and flea/tick preventatives?',
        'Have you verified that socialization partners are verified fully up-to-date on all core vaccines?',
        'Has your veterinarian discussed microchip implantation during the 12 or 16-week clinical checkup?',
        'Is the mandatory Rabies vaccine scheduled between 12 and 16 weeks as required by veterinary statutes?'
      ]
    },
    relatedIds: ['feline-pain', 'senior-dental'],
    cta: {
      title: 'Welcoming a New Puppy Home?',
      text: 'Schedule your comprehensive new puppy examination, personalized immunization roadmap, and complimentary Pet Health Passport today.',
      btnText: 'Book Puppy Checkup',
      btnLink: 'appointments.html'
    }
  },

  'senior-dental': {
    id: 'senior-dental',
    title: 'Preventing Periodontal Disease in Senior Canines',
    category: 'dental',
    badge: 'Dentistry & Oral Health',
    readTime: '4 Min Read',
    date: 'September 08, 2026',
    author: {
      name: 'Dr. Sarah Jenkins, DVM',
      title: 'Pet Dental Specialist & Oral Surgeon',
      image: 'assets/images/vets/vet-sophia.jpg',
      bio: 'Dr. Jenkins has dedicated 8 years to canine and feline periodontics, digital dental radiography, subgingival ultrasonic therapy, and oral surgical reconstructions.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-3.jpg',
    lead: 'Over 80% of dogs over three years of age show active signs of periodontal pathology. Left untreated, chronic bacterial colonization under the gumline enters the bloodstream, directly accelerating chronic kidney disease, hepatic inflammation, and cardiac endocarditis.',
    contentHtml: `
      <h3 class="mb-3">1. The Invisible Danger: Subgingival Pathology</h3>
      <p>Clean white crown surfaces can be dangerously deceptive. Over 60% of a dog's tooth structure lies hidden below the gingival margin. Without <strong>full-mouth digital dental radiographs</strong>, hidden bone loss and painful tooth root abscesses remain completely undetected.</p>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-heart-pulse-fill text-danger me-2"></i> Systemic Impact:</h5>
        <p class="small text-muted mb-0">"Severe dental disease isn't just bad breath. Chronic bacteremia showers the cardiac valves and kidneys every single time your pet chews food." — Dr. Sarah Jenkins</p>
      </div>

      <h3 class="mb-3">2. Stages of Periodontal Disease</h3>
      <ul>
        <li class="mb-2"><strong>Stage 1 (Gingivitis):</strong> Red, swollen gum margins without bone loss. Reversible with professional ultrasonic scaling.</li>
        <li class="mb-2"><strong>Stage 2 (Early Periodontitis):</strong> Less than 25% periodontal ligament attachment loss and early pocket formation.</li>
        <li class="mb-2"><strong>Stage 3 & 4 (Advanced):</strong> Significant bone loss, mobile teeth, severe pain, and risk of pathologic jaw fracture requiring surgical extraction.</li>
      </ul>
    `,
    checklist: {
      title: '5-Point Canine Oral Health Assessment',
      subtitle: 'Perform this quick weekly at-home inspection with gentle lip lifting:',
      items: [
        'Are your dog’s breath odors mild, without foul or decaying smells?',
        'Are gumlines healthy coral pink rather than dark red, inflamed, or bleeding?',
        'Is your dog chewing dry kibble or chew toys with equal ease on both sides of their mouth?',
        'Are the large upper premolars and molars free from thick yellow or brown calculus encrustation?',
        'Has your senior canine had an intraoral digital dental radiograph screening within the past 12 months?'
      ]
    },
    relatedIds: ['feline-pain', 'puppy-vaccines'],
    cta: {
      title: 'Time for a Professional Dental Exam?',
      text: 'Schedule a Complete Oral Health Assessment & Treatment (COHAT) equipped with continuous vital telemetry and digital dental X-rays.',
      btnText: 'Book Dental Consultation',
      btnLink: 'appointments.html'
    }
  },

  'canine-heatstroke': {
    id: 'canine-heatstroke',
    title: 'Summer Canine Heatstroke: First-Aid Triage & Prevention',
    category: 'emergency',
    badge: 'Emergency & Critical Care',
    readTime: '7 Min Read',
    date: 'September 05, 2026',
    author: {
      name: 'Dr. David Kim, VECCS',
      title: 'Emergency Medical Director',
      image: 'assets/images/vets/vet-david.jpg',
      bio: 'Dr. Kim has 9 years of veterinary critical care experience specializing in trauma resuscitation, systemic inflammatory response syndrome, and acute hyperthermia stabilization.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-4.jpg',
    lead: 'Dogs regulate body temperature primarily through panting and limited sweat glands located solely on paw pads. On hot or humid days, ambient heat can overwhelm their compensatory mechanics in minutes, turning a routine park stroll into a life-threatening medical crisis.',
    contentHtml: `
      <h3 class="mb-3">1. Critical Warning Signs of Hyperthermia</h3>
      <p>A dog's normal body temperature ranges between <strong>100.5°F and 102.5°F</strong>. If temperature climbs above 104°F, immediate emergency intervention is required:</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i> Exaggerated, loud, or frantic panting with thick sticky saliva.</li>
        <li><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i> Dark brick-red or muddy purple mucous membranes and gums.</li>
        <li><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i> Glazed eyes, unsteadiness on paws, or sudden collapse and tremors.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-danger mb-2"><i class="bi bi-shield-x me-2"></i> Critical Warning: Never Use Ice Water</h5>
        <p class="small text-muted mb-0">"Submerging a heatstroke patient in ice water induces severe peripheral vasoconstriction, trapping lethal heat inside the core organs and triggering dangerous hypovolemic shock." — Dr. David Kim</p>
      </div>

      <h3 class="mb-3">2. Immediate 10-Minute Home First-Aid</h3>
      <ul>
        <li class="mb-2"><strong>Move Out of Sun:</strong> Immediately transfer pet to an air-conditioned room or car.</li>
        <li class="mb-2"><strong>Tepid Water Application:</strong> Wet neck, groin, and paw pads using cool or lukewarm tap water with a gentle fan blowing over them.</li>
        <li class="mb-2"><strong>Cease Cooling at 103°F:</strong> Prevent hypothermic rebound shock by halting active cooling once body temperature reaches 103°F.</li>
        <li class="mb-2"><strong>Proceed Immediately to Trauma ICU:</strong> Internal organ damage requires continuous IV fluids and plasma monitoring even if the dog appears alert.</li>
      </ul>
    `,
    checklist: {
      title: '5-Point Heatstroke Prevention Protocol',
      subtitle: 'Keep these critical safety rules in mind whenever temperatures exceed 75°F:',
      items: [
        'Do you avoid asphalt and pavement during peak afternoon hours (test with 7-second hand test)?',
        'Do you always carry fresh water and a collapsible bowl during outdoor walks?',
        'Do you strictly avoid leaving pets in parked vehicles even for 60 seconds with windows cracked?',
        'Are brachycephalic (flat-faced) breeds kept indoors in climate-controlled environments during summer?',
        'Do you know the direct phone number and route to our 24/7 Animal Emergency ICU?'
      ]
    },
    relatedIds: ['puppy-vaccines', 'feline-pain'],
    cta: {
      title: 'Facing an Animal Medical Emergency?',
      text: 'Our 24/7 Critical Care & Emergency Trauma ICU is fully staffed and ready 365 days a year with zero appointment needed.',
      btnText: 'Call (555) 924-PETS',
      btnLink: 'tel:5559247387'
    }
  },

  'renal-nutrition': {
    id: 'renal-nutrition',
    title: 'Clinical Dietary Protocols for Chronic Renal Disease',
    category: 'nutrition',
    badge: 'Clinical Nutrition',
    readTime: '5 Min Read',
    date: 'September 02, 2026',
    author: {
      name: 'Dr. Marcus Vance, DACVIM',
      title: 'Head of Feline Internal Medicine',
      image: 'assets/images/vets/vet-marcus.jpg',
      bio: 'Dr. Vance specializes in metabolic disease management, therapeutic nutrition plans, and staging feline chronic kidney disease using modern SDMA biomarkers.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-5.jpg',
    lead: 'Chronic Kidney Disease (CKD) is among the most frequent diagnoses in senior cats and canines. While nephron loss is irreversible, research conclusively demonstrates that clinical renal diets double median survival times and maintain vital body condition.',
    contentHtml: `
      <h3 class="mb-3">1. The Critical Pillars of Renal Diets</h3>
      <p>Prescription renal foods are precision-engineered medical diets, not standard commercial pet foods:</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-check2-circle text-accent fs-5 align-middle me-2"></i><strong>Phosphorus Restriction:</strong> Prevents secondary renal hyperparathyroidism and decelerates nephron calcification.</li>
        <li><i class="bi bi-check2-circle text-accent fs-5 align-middle me-2"></i><strong>High-Quality, Moderate Protein:</strong> Reduces toxic nitrogenous waste (BUN) while preserving lean muscle mass.</li>
        <li><i class="bi bi-check2-circle text-accent fs-5 align-middle me-2"></i><strong>Omega-3 EPA/DHA Fatty Acids:</strong> Lowers intraglomerular capillary pressure and combats systemic inflammation.</li>
        <li><i class="bi bi-check2-circle text-accent fs-5 align-middle me-2"></i><strong>Potassium & B-Vitamin Fortification:</strong> Replenishes vital micronutrients lost through polyuria.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-lightbulb-fill text-warning me-2"></i> Hydration Strategy:</h5>
        <p class="small text-muted mb-0">"Cats naturally have low thirst drive. Switching from dry kibble to canned renal food or adding filtered warm water to stews is the single most effective home intervention for renal patients." — Dr. Marcus Vance</p>
      </div>
    `,
    checklist: {
      title: '5-Point Chronic Kidney Care Checklist',
      subtitle: 'Key monitoring parameters for pets diagnosed with early or advanced CKD:',
      items: [
        'Is your pet consuming exclusively veterinary-prescribed renal diet meals without high-phosphorus treats?',
        'Are multiple fresh water fountains or wide ceramic bowls accessible in quiet rooms of your home?',
        'Are you tracking daily urine output and water intake volume to detect early dehydration episodes?',
        'Has blood pressure been measured to rule out secondary renal hypertension and retinal detachment?',
        'Are routine SDMA, creatinine, and urinalysis panels scheduled every 3–6 months for IRIS staging?'
      ]
    },
    relatedIds: ['feline-pain', 'ultrasound-imaging'],
    cta: {
      title: 'Need a Personalized Renal Nutrition Plan?',
      text: 'Schedule an internal medicine and nutrition consult with Dr. Marcus Vance to optimize your companion’s kidney wellness and longevity.',
      btnText: 'Book Nutrition Consult',
      btnLink: 'appointments.html'
    }
  },

  'ultrasound-imaging': {
    id: 'ultrasound-imaging',
    title: 'How Ultrasound Imaging Diagnoses Internal Illness Painlessly',
    category: 'canine',
    badge: 'Diagnostics & Imaging',
    readTime: '4 Min Read',
    date: 'August 28, 2026',
    author: {
      name: 'Dr. Brian O’Connor, DVM',
      title: 'Exotic Pet Clinician & Diagnostic Radiologist',
      image: 'assets/images/vets/vet-james.jpg',
      bio: 'Dr. O’Connor has 10 years of diagnostic imaging experience, using high-frequency ultrasound transducers and color Doppler to assess soft-tissue architecture.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-6.jpg',
    lead: 'While digital X-rays provide unmatched bone detail and overall organ silhouettes, ultrasound offers high-resolution real-time cross-sectional architecture of soft tissues—revealing intestinal layers, gallbladder sludge, and splenic nodules with zero radiation.',
    contentHtml: `
      <h3 class="mb-3">1. Radiography vs. Ultrasonography: A Complementary Duo</h3>
      <p>Pet owners frequently ask why both modalities are recommended. Consider an analog: digital X-rays provide the book cover, while ultrasonography allows the veterinary radiologist to turn and read the individual pages.</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-display text-accent fs-5 align-middle me-2"></i><strong>Digital X-Ray:</strong> Detects bone fractures, bladder stones, pulmonary fluid, and organ enlargement.</li>
        <li><i class="bi bi-soundwave text-primary fs-5 align-middle me-2"></i><strong>Color Doppler Ultrasound:</strong> Measures myocardial contractility, vascular flow velocities, and intestinal wall layers down to millimeters.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-check-circle-fill text-accent me-2"></i> Completely Painless & Safe</h5>
        <p class="small text-muted mb-0">"Ultrasound utilizes high-frequency acoustic sound waves with zero ionizing radiation. Most pets gently nap on padded foam troughs with comforting acoustic music during the scan." — Dr. Brian O’Connor</p>
      </div>
    `,
    checklist: {
      title: '5-Point Pre-Ultrasound Preparation Checklist',
      subtitle: 'Guidelines to prepare your pet for their diagnostic abdominal ultrasound:',
      items: [
        'Has your pet fasted for 8–12 hours prior to the scan to minimize gastrointestinal gas shadowing?',
        'Have you ensured your pet has a comfortably full urinary bladder if urinary staging is needed?',
        'Are you aware that a small rectangle of fur will be gently clipped to ensure acoustic gel contact?',
        'Have you brought previous diagnostic records or referral bloodwork panels to the appointment?',
        'Has our team discussed mild calming medications (like Gabapentin) if your pet is naturally nervous?'
      ]
    },
    relatedIds: ['renal-nutrition', 'senior-dental'],
    cta: {
      title: 'Does Your Pet Need In-Depth Diagnostic Imaging?',
      text: 'Our reference in-house laboratory and GE Logiq e Doppler ultrasound deliver definitive clinical answers in one peaceful visit.',
      btnText: 'Book Diagnostic Workup',
      btnLink: 'appointments.html'
    }
  },

  'senior-arthritis': {
    id: 'senior-arthritis',
    title: 'Multimodal Arthritis & Joint Care for Aging Pets',
    category: 'canine',
    badge: 'Senior & Joint Health',
    readTime: '6 Min Read',
    date: 'August 24, 2026',
    author: {
      name: 'Nurse Alisha Brooks, LVT',
      title: 'Head Veterinary Nurse & Fear-Free Elite Lead',
      image: 'assets/images/vets/vet-alisha.jpg',
      bio: 'Alisha has 9 years of veterinary rehabilitation and fear-free nursing experience, specializing in class IV laser therapy, Adequan protocols, and home comfort modifications.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-7.jpg',
    lead: 'Osteoarthritis affects 1 in 5 adult dogs and up to 90% of senior cats. Modern veterinary medicine has moved far beyond simple pain relievers: a multimodal approach combining Class IV laser therapy, joint supplements, physical rehab, and home modifications delivers transformative relief.',
    contentHtml: `
      <h3 class="mb-3">1. The Four Pillars of Multimodal Joint Therapy</h3>
      <p>Treating chronic osteoarthritis requires targeting inflammation from multiple biological pathways simultaneously:</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-lightning-charge-fill text-warning me-2"></i><strong>Class IV Deep-Tissue Laser Therapy:</strong> Photobiomodulation stimulates cellular ATP synthesis, accelerating tissue repair and reducing nerve sensitivity.</li>
        <li><i class="bi bi-capsule text-accent me-2"></i><strong>Disease-Modifying Osteoarthritis Drugs (DMOADs):</strong> Polysulfated glycosaminoglycans (Adequan) inhibit cartilage-degrading enzymes and nourish synovial fluid.</li>
        <li><i class="bi bi-droplet-half text-primary me-2"></i><strong>High-Dose Omega-3 Marine Lipids:</strong> EPA and DHA reduce articular cartilage breakdown and prostaglandin production.</li>
        <li><i class="bi bi-shield-check text-success me-2"></i><strong>Targeted Targeted NSAIDs & Monoclonal Antibodies:</strong> Modern therapies (like Librela or Galliprant) target specific nerve growth factors with reduced renal and hepatic strain.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-house-heart-fill text-danger me-2"></i> Low-Cost Home Modifications:</h5>
        <p class="small text-muted mb-0">"Placing non-slip yoga mats over slippery hardwood hallways, installing low-gradient pet ramps, and raising food bowls 6 inches makes a dramatic daily difference in senior mobility." — Nurse Alisha Brooks</p>
      </div>
    `,
    checklist: {
      title: '5-Point Senior Joint Mobility Assessment',
      subtitle: 'Evaluate your senior companion’s mobility every 30 days:',
      items: [
        'Does your pet rise smoothly from rest without stiffness or trembling in their hind limbs?',
        'Are they eager to participate in daily walks without slowing down or lagging behind?',
        'Do they comfortably navigate stairs without hesitating or taking steps one paw at a time?',
        'Have you installed non-skid runners or area rugs across smooth tile and hardwood surfaces?',
        'Has your senior companion had a physical rehabilitation and joint evaluation in the past 6 months?'
      ]
    },
    relatedIds: ['puppy-vaccines', 'post-operative-care'],
    cta: {
      title: 'Help Your Senior Companion Walk Comfortably Again',
      text: 'Schedule a comprehensive physical rehabilitation and Class IV laser therapy consult with our pain management team.',
      btnText: 'Book Senior Mobility Exam',
      btnLink: 'appointments.html'
    }
  },

  'post-operative-care': {
    id: 'post-operative-care',
    title: 'Safe Post-Operative Recovery & Wound Care at Home',
    category: 'surgery',
    badge: 'Surgery & Wound Recovery',
    readTime: '5 Min Read',
    date: 'August 19, 2026',
    author: {
      name: 'Dr. Emily Carter, DACVS',
      title: 'Medical Director & Chief of Surgery',
      image: 'assets/images/vets/vet-emily.jpg',
      bio: 'Dr. Carter has performed thousands of orthopedic, soft-tissue, and reconstructive surgeries, pioneering positive-pressure sterile operating protocols.',
      profileLink: 'vets.html'
    },
    heroImage: 'assets/images/blog/blog-8.jpg',
    lead: 'The surgeon’s work in the operating theatre is only half the journey. Uninterrupted surgical recovery depends crucially on vigilant at-home nursing during the crucial 10 to 14 days post-op: preventing licking, managing strict exercise restriction, and recognizing early complications.',
    contentHtml: `
      <h3 class="mb-3">1. The Golden Rule: Suture Protection (The E-Collar)</h3>
      <p>The single most frequent post-surgical emergency is incision dehiscence caused by patient licking. A dog’s tongue possesses abrasive papillae that can dissolve absorbable sutures in under 3 minutes.</p>
      <ul class="list-unstyled d-flex flex-column gap-2 mb-4 ps-3">
        <li><i class="bi bi-x-circle text-danger me-2"></i> Never remove the Elizabethan collar (cone) unsupervised—even for "just a quick nap."</li>
        <li><i class="bi bi-check-circle text-success me-2"></i> Soft padded cones or surgical recovery onesies can be used as veterinarian-approved comfortable alternatives.</li>
        <li><i class="bi bi-check-circle text-success me-2"></i> Ensure the collar extends 2 inches beyond the tip of your pet's nose to prevent reaching the wound.</li>
      </ul>

      <div class="card bg-subtle p-4 border-0 rounded-4 my-4">
        <h5 class="text-primary mb-2"><i class="bi bi-exclamation-octagon-fill text-danger me-2"></i> Red Flag Incision Signs:</h5>
        <p class="small text-muted mb-0">"Mild bruising and clean surgical edges are normal. Active bleeding, cloudy discharge, sudden foul odor, or opening between suture margins require immediate clinic evaluation." — Dr. Emily Carter</p>
      </div>

      <h3 class="mb-3">2. Pain Medication Schedule & Activity Restriction</h3>
      <p>Administer all prescribed analgesics and antibiotics strictly on schedule, even if your pet seems energetic. Exercise must be restricted strictly to short, controlled leash walks for bathroom breaks only—no jumping on beds, stairs, or zoomies until sutures are formally removed at day 10–14.</p>
    `,
    checklist: {
      title: '5-Point Surgical Recovery Home Checklist',
      subtitle: 'Daily protocol for the first 14 days following soft-tissue or orthopedic surgery:',
      items: [
        'Is the surgical incision clean, dry, and free from swelling, discharge, or open gaps?',
        'Is the protective recovery collar worn 24/7 whenever your pet is not actively eating?',
        'Are prescribed medications administered with food strictly on their designated hourly schedule?',
        'Is your pet confined to a comfortable, non-slip single-level room without stairs or jumpable furniture?',
        'Is your complimentary suture removal recheck appointment booked with our clinical team?'
      ]
    },
    relatedIds: ['senior-arthritis', 'canine-heatstroke'],
    cta: {
      title: 'Questions About Your Pet’s Surgical Healing?',
      text: 'Our surgical nursing team is on-call 24/7 to review incision photos and answer post-operative recovery questions.',
      btnText: 'Contact Surgical Coordinator',
      btnLink: 'contact.html'
    }
  }
};

// DOM Renderer for blog-details.html
document.addEventListener('DOMContentLoaded', () => {
  const articleHero = document.getElementById('article-hero');
  const articleContent = document.getElementById('article-content');
  if (!articleHero || !articleContent) return; // Not on blog-details.html

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');
  const article = BLOG_ARTICLES_DATA[requestedId] || BLOG_ARTICLES_DATA['feline-pain'];

  // 1. Update Page Title & Breadcrumb
  document.title = `${article.title} | VetCare Pro Animal Hospital Journal`;
  const breadcrumbCurrent = document.querySelector('.breadcrumb .breadcrumb-item.active');
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = article.title.length > 35 ? article.title.substring(0, 35) + '...' : article.title;
  }

  // 2. Update Article Hero
  const categoryBadge = articleHero.querySelector('.badge');
  if (categoryBadge) {
    categoryBadge.textContent = article.badge;
  }

  const articleHeading = articleHero.querySelector('h1');
  if (articleHeading) {
    articleHeading.textContent = article.title;
  }

  const authorImg = articleHero.querySelector('img.rounded-circle');
  if (authorImg) {
    authorImg.src = article.author.image;
    authorImg.alt = article.author.name;
  }

  const authorName = articleHero.querySelector('h6');
  if (authorName) {
    authorName.textContent = article.author.name;
  }

  const metaSpan = articleHero.querySelector('.small.text-muted');
  if (metaSpan) {
    metaSpan.textContent = `Published on ${article.date} • ${article.readTime}`;
  }

  // 3. Update Hero Media & Body Content
  const heroMediaImg = articleContent.querySelector('img.img-fluid');
  if (heroMediaImg) {
    heroMediaImg.src = article.heroImage;
    heroMediaImg.alt = article.title;
  }

  const articleBody = articleContent.querySelector('.article-text-body');
  if (articleBody) {
    articleBody.innerHTML = `
      <p class="lead text-main mb-4">${article.lead}</p>
      ${article.contentHtml}
    `;
  }

  // 4. Update 5-Point Takeaway Checklist
  const checklistSection = document.getElementById('takeaway-checklist');
  if (checklistSection && article.checklist) {
    const checkTitle = checklistSection.querySelector('h3');
    if (checkTitle) checkTitle.textContent = article.checklist.title;

    const checkSubtitle = checklistSection.querySelector('p.text-muted.small');
    if (checkSubtitle) checkSubtitle.textContent = article.checklist.subtitle;

    const checklistContainer = checklistSection.querySelector('.d-flex.flex-column.gap-3');
    if (checklistContainer && article.checklist.items) {
      checklistContainer.innerHTML = article.checklist.items.map((item, idx) => `
        <div class="d-flex align-items-center gap-3 p-3 bg-subtle rounded-3">
          <input type="checkbox" class="form-check-input mt-0 fs-5" id="check_${idx + 1}" ${idx === 0 ? 'checked' : ''}>
          <label for="check_${idx + 1}" class="small mb-0">${item}</label>
        </div>
      `).join('');
    }
  }

  // 5. Update Author Bio Card
  const authorBioSection = document.getElementById('author-bio');
  if (authorBioSection && article.author) {
    const authorBioImg = authorBioSection.querySelector('img');
    if (authorBioImg) {
      authorBioImg.src = article.author.image;
      authorBioImg.alt = article.author.name;
    }

    const authorBioName = authorBioSection.querySelector('h4');
    if (authorBioName) authorBioName.textContent = article.author.name;

    const authorBioTitle = authorBioSection.querySelector('p.text-muted.small');
    if (authorBioTitle) authorBioTitle.textContent = article.author.title;

    const authorBioDesc = authorBioSection.querySelector('p.small.text-muted.mb-3');
    if (authorBioDesc) authorBioDesc.textContent = article.author.bio;

    const authorBioLink = authorBioSection.querySelector('a.btn');
    if (authorBioLink) authorBioLink.href = article.author.profileLink || 'vets.html';
  }

  // 6. Update Related Articles
  const relatedSection = document.getElementById('related-articles');
  if (relatedSection && article.relatedIds && article.relatedIds.length > 0) {
    const relatedContainer = relatedSection.querySelector('.row.g-4');
    if (relatedContainer) {
      relatedContainer.innerHTML = article.relatedIds.map(relId => {
        const rel = BLOG_ARTICLES_DATA[relId];
        if (!rel) return '';
        return `
          <div class="col-md-6">
            <div class="card h-100 card-hover">
              <img src="${rel.heroImage}" class="card-img-top" alt="${rel.title}" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <span class="badge badge-subtle-primary mb-2">${rel.badge}</span>
                  <h5 class="mb-2">${rel.title}</h5>
                  <p class="small text-muted mb-3">${rel.lead.substring(0, 105)}...</p>
                </div>
                <a href="blog-details.html?id=${rel.id}" class="btn btn-sm btn-outline-primary mt-auto">Read Article <i class="bi bi-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 7. Update Bottom CTA
  const ctaSection = document.getElementById('blog-details-cta');
  if (ctaSection && article.cta) {
    const ctaTitle = ctaSection.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = article.cta.title;

    const ctaText = ctaSection.querySelector('p.lead');
    if (ctaText) ctaText.textContent = article.cta.text;

    const ctaBtn = ctaSection.querySelector('a.btn-accent');
    if (ctaBtn) {
      ctaBtn.href = article.cta.btnLink;
      ctaBtn.innerHTML = `<i class="bi bi-calendar-check me-1"></i> ${article.cta.btnText}`;
    }
  }

  // 8. Interactive Share & Copy Link Handler
  const copyBtn = document.getElementById('copyArticleLinkBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="bi bi-check2 text-success"></i>';
        copyBtn.classList.add('border-success');
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          copyBtn.classList.remove('border-success');
        }, 2000);
      } catch (err) {
        window.prompt('Copy this article link:', window.location.href);
      }
    });
  }
});

