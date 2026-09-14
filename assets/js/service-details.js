/**
 * VETCARE PRO — Dynamic Service Details Hydration Engine
 * Parses ?id=<serviceId> from URL and dynamically renders procedure details,
 * clinical protocols, inclusions, procedural timelines, FAQs, and CTAs.
 */

const SERVICES_DATA = {
  'vaccinations': {
    id: 'vaccinations',
    breadcrumb: 'Vaccinations & Immunizations',
    badge: '<i class="bi bi-capsule"></i> Preventive Medicine',
    title: 'Pet Vaccinations & Immunization Care',
    lead: 'Timely vaccines are the single most effective barrier protecting dogs and cats from fatal viral infections like Rabies, Parvovirus, and Distemper. We administer gentle, customized vaccination plans based on your pet’s exact lifestyle.',
    heroImage: 'assets/images/services/service-vaccine.jpg',
    heroAlt: 'Veterinarian preparing a gentle vaccine with an ultra-fine syringe',
    heroCtaText: 'Book Immunization Visit',
    appointmentDept: 'wellness',
    overviewTag: '<i class="bi bi-shield-plus"></i> Evidence-Based Protection',
    overviewHeading: 'Understanding Core vs. Lifestyle Vaccines',
    overviewDesc: 'Veterinary medicine categorizes vaccines into two primary groups: <strong>Core vaccines</strong>, vital for all companion animals regardless of indoor/outdoor exposure, and <strong>Non-Core (Lifestyle) vaccines</strong>, recommended based on geographic risk, boarding frequency, and outdoor exposure.',
    overviewImage: 'assets/images/clinical/dept-preventive.jpg',
    overviewImgAlt: 'Veterinary preventive care and puppy examination',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Canine Protocols:',
      items: [
        '<strong>Core:</strong> Rabies (Mandatory by law), DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza).',
        '<strong>Lifestyle:</strong> Bordetella (Kennel Cough), Leptospirosis, Lyme Disease, Canine Influenza H3N2/H3N8.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Feline Protocols:',
      items: [
        '<strong>Core:</strong> Rabies, FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia).',
        '<strong>Lifestyle:</strong> FeLV (Feline Leukemia Virus for all outdoor, balcony, or multi-cat households).'
      ]
    },
    inclusionsTag: '<i class="bi bi-card-checklist"></i> Comprehensive Protocol',
    inclusionsHeading: 'What is Included in Every Vaccination Visit',
    inclusionsLead: 'We never simply inject a vaccine. Every immunization appointment includes a rigorous safety screening to ensure your pet is healthy enough to build protective antibodies.',
    inclusions: [
      {
        icon: 'bi-thermometer-half',
        title: 'Pre-Vaccine Physical Exam',
        desc: 'Checking vitals, auscultating heart and lungs, and palpating lymph nodes. Sick or febrile pets are never vaccinated until cleared.'
      },
      {
        icon: 'bi-eyedropper',
        title: 'Lifestyle Risk Assessment',
        desc: 'Consulting with you regarding dog parks, hiking habits, grooming, or boarding plans to prevent unnecessary over-vaccination.'
      },
      {
        icon: 'bi-file-earmark-medical',
        title: 'Digital Certificate & Passport',
        desc: 'Official Rabies certificate and batch number logging instantly updated in your 24/7 Pet Parent Digital Portal account.'
      }
    ],
    procedureTag: '<i class="bi bi-arrow-repeat"></i> Fear-Free Process',
    procedureHeading: 'Our Gentle Immunization Process',
    procedureLead: 'We turn vaccination visits into positive experiences with gentle handling, distraction treats, and ultra-fine needles.',
    steps: [
      {
        num: '1',
        title: 'Acclimatization & Treat Distraction',
        desc: 'Your pet explores the quiet exam room while receiving organic lickable treats, calming organic peanut butter, or feline mousse.'
      },
      {
        num: '2',
        title: 'Low-Stress Subcutaneous Injection',
        desc: 'Using ultra-fine gauge veterinary micro-needles, vaccines are administered quickly, smoothly, and virtually painlessly.'
      },
      {
        num: '3',
        title: '10-Minute Clinical Monitoring',
        desc: 'We observe your companion for any acute hypersensitivity or anaphylactic symptoms before departure for complete safety.'
      },
      {
        num: '4',
        title: 'Booster Schedule Auto-Sync',
        desc: 'Automated SMS reminders and dashboard passport updates are scheduled for the next annual or 3-year booster date.'
      }
    ],
    aftercareTitle: 'Post-Vaccine Aftercare Guide',
    aftercareDesc: 'Mild sleepiness or slight tenderness at the injection site for 24 hours is completely normal as the immune system builds protective antibodies.',
    normalBehaviors: 'Extra napping, mild decrease in appetite for 1 meal, slight localized soreness.',
    warningSigns: 'Facial swelling, hives, repeated vomiting, or difficulty breathing (Extremely rare: <0.05% of patients). Call emergency immediately.',
    faqHeading: 'Pet Vaccination FAQs',
    faqLead: 'Answers to common questions about vaccination schedules, core requirements, and pet safety.',
    faqs: [
      {
        q: 'How often does my adult dog or cat need booster shots?',
        a: 'After the initial puppy/kitten series and 1-year booster, core vaccines such as Rabies and DHPP/FVRCP are typically given every 3 years according to AAHA guidelines. Lifestyle vaccines (such as Bordetella and Leptospirosis) require annual boosters to maintain active antibody protection.'
      },
      {
        q: 'Can an indoor-only cat skip vaccinations?',
        a: 'Even strictly indoor cats require the Rabies vaccine (mandated by law) and FVRCP. Viruses such as Panleukopenia are resilient and can be tracked into your home on shoes or clothing. Indoor cats can also escape or encounter stray wildlife such as bats that enter attics.'
      },
      {
        q: 'What is an antibody titer test, and do you offer it?',
        a: 'Yes, VetCare Pro offers vaccine titer testing. A titer test is a simple blood test measuring existing circulating antibody levels against Parvovirus and Distemper. If antibody counts are sufficiently high, revaccination may be postponed safely.'
      }
    ],
    bottomCtaTitle: 'Protect Your Pet with Timely Immunization',
    bottomCtaText: 'Check your pet’s vaccine status and book a quick, stress-free appointment today. Free digital health certificate included with all vaccinations.',
    bottomCtaBtn: 'Schedule Vaccination Visit'
  },

  'surgery': {
    id: 'surgery',
    breadcrumb: 'Soft Tissue & Orthopedic Surgery',
    badge: '<i class="bi bi-bandaid"></i> Surgical Specialty',
    title: 'Advanced Soft Tissue & Orthopedic Surgery',
    lead: 'From life-changing TPLO cruciate reconstructions and minimally invasive laparoscopy to routine spay/neuter and critical mass resections, our DACVS-led surgical suite offers university-level precision with compassionate bedside recovery.',
    heroImage: 'assets/images/services/service-surgery.jpg',
    heroAlt: 'Board-certified veterinary surgeons operating in modern sterile surgical theatre',
    heroCtaText: 'Schedule Surgical Consultation',
    appointmentDept: 'surgery',
    overviewTag: '<i class="bi bi-hospital"></i> Gold-Standard Operating Suites',
    overviewHeading: 'Sterile Operating Theatres & Dedicated Anesthesia',
    overviewDesc: 'Every surgical patient at VetCare Pro is assigned a dedicated licensed veterinary technician whose sole clinical focus is managing anesthesia depth, continuous vitals, and thermal patient warming throughout the entire procedure.',
    overviewImage: 'assets/images/clinical/dept-surgery.jpg',
    overviewImgAlt: 'High-tech surgical suite with positive pressure HEPA filtration',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Orthopedic Capabilities:',
      items: [
        '<strong>TPLO & Cruciate:</strong> Tibial Plateau Leveling Osteotomy using locking titanium compression plates.',
        '<strong>Joint & Fracture:</strong> Patellar luxation realignment, complex fracture plating, and arthroscopic joint debridement.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Soft Tissue & Oncology:',
      items: [
        '<strong>Minimally Invasive:</strong> Laparoscopic spay, prophylactic gastropexy (bloat prevention), and cystoscopy.',
        '<strong>General Surgery:</strong> Foreign body retrieval, splenectomy, tumor resection with clean histopathology margins.'
      ]
    },
    inclusionsTag: '<i class="bi bi-shield-check"></i> Uncompromising Safety Standards',
    inclusionsHeading: 'What is Included in Every Surgical Procedure',
    inclusionsLead: 'We provide comprehensive, end-to-end surgical care without hidden fees. Our hospital bundle includes pre-op testing, continuous telemetry, and take-home multimodal analgesia.',
    inclusions: [
      {
        icon: 'bi-activity',
        title: 'Continuous Multi-Parameter Telemetry',
        desc: 'Continuous real-time tracking of ECG, Capnography (ETCO2), pulse oximetry, core body temperature, and arterial blood pressure.'
      },
      {
        icon: 'bi-capsule-pill',
        title: 'Multimodal Pain Management',
        desc: 'Pre-emptive regional nerve blocks, continuous CRI analgesia during surgery, and tailored take-home pain medications.'
      },
      {
        icon: 'bi-heart-pulse-fill',
        title: 'Heated Inpatient Recovery Suites',
        desc: 'Bair Hugger forced-air thermal blankets, quiet dimmable ICU suites, and one-on-one recovery supervision until fully alert.'
      }
    ],
    procedureTag: '<i class="bi bi-clipboard2-pulse"></i> Surgical Pathway',
    procedureHeading: 'Our 4-Stage Surgical Protocol',
    procedureLead: 'From morning check-in to evening discharge, our structured surgical pathway prioritizes comfort, safety, and rapid return to mobility.',
    steps: [
      {
        num: '1',
        title: 'Pre-Anesthetic Blood Work & Exam',
        desc: 'Comprehensive blood chemistry, CBC, and clotting panel run in our in-house lab 60 minutes prior to premedication.'
      },
      {
        num: '2',
        title: 'Balanced Premedication & Intubation',
        desc: 'Gentle sedatives and targeted analgesia reduce stress and lower the required dose of isoflurane/sevoflurane gas anesthesia.'
      },
      {
        num: '3',
        title: 'Precision Sterile Surgery',
        desc: 'Positive-pressure HEPA-filtered theatre, autoclaved instrumentation, and rigorous aseptic scrub protocols.'
      },
      {
        num: '4',
        title: 'Nurse-Supervised Recovery & Discharge',
        desc: 'Extubation occurs only when swallowing reflexes are fully restored. Detailed written and digital post-op care instructions provided.'
      }
    ],
    aftercareTitle: 'Post-Operative Recovery Guide',
    aftercareDesc: 'A smooth recovery depends on strict rest, proper incision hygiene, and uninterrupted pain management during the first 10-14 days.',
    normalBehaviors: 'Mild grogginess for 12 hours, small appetite on first evening, incision site clean and dry without active bleeding.',
    warningSigns: 'Excessive swelling, persistent redness, discharge or foul odor from incision, pale gums, or lethargy after 24 hours. Call our surgical hotline.',
    faqHeading: 'Frequently Asked Surgical Questions',
    faqLead: 'Answers to common questions regarding pet anesthesia, preparation, and surgical recovery.',
    faqs: [
      {
        q: 'How safe is anesthesia for my older or senior pet?',
        a: 'With modern pre-anesthetic lab work, tailored anesthetic protocols, and continuous multi-parameter telemetry monitored by a dedicated licensed technician, anesthesia in senior pets is remarkably safe. We run pre-op kidney and liver panels to ensure medications are metabolized safely.'
      },
      {
        q: 'Should my dog or cat fast before surgery?',
        a: 'Yes. Unless otherwise instructed for very young puppies, withhold food after 9:00 PM the night prior to surgery to prevent vomiting and aspiration risk during induction. Fresh drinking water may be offered until 6:00 AM.'
      },
      {
        q: 'How long does recovery take for a TPLO cruciate repair?',
        a: 'Bone healing takes approximately 8-10 weeks. Pets undergo strict leash-walking rest for the first 6 weeks, followed by follow-up digital radiographs and a structured physical rehabilitation program with laser therapy to rebuild muscle mass.'
      }
    ],
    bottomCtaTitle: 'Consult with Our Chief Veterinary Surgeon',
    bottomCtaText: 'Discuss your companion’s surgical treatment options, review diagnostic radiographs, and receive a comprehensive written surgical estimate.',
    bottomCtaBtn: 'Book Surgical Consultation'
  },

  'diagnostics': {
    id: 'diagnostics',
    breadcrumb: 'Diagnostics, Radiology & Lab',
    badge: '<i class="bi bi-cpu"></i> Advanced Diagnostics',
    title: 'Digital Radiology, Ultrasound & In-House Laboratory',
    lead: 'Accurate treatment begins with definitive diagnostic clarity. Our facility is equipped with point-of-care Idexx hematology, low-dose digital Sound-Eklin radiography, and color Doppler ultrasound delivering conclusive answers in under 15 minutes.',
    heroImage: 'assets/images/services/service-diagnostics.jpg',
    heroAlt: 'Veterinarian analyzing digital radiograph scans on medical monitor',
    heroCtaText: 'Schedule Diagnostic Workup',
    appointmentDept: 'diagnostics',
    overviewTag: '<i class="bi bi-display"></i> 15-Minute Laboratory Results',
    overviewHeading: 'Point-of-Care Laboratory & Instant Tele-Radiology',
    overviewDesc: 'Waiting days for critical lab results causes undue stress. Our hospital features a full clinical pathology suite capable of evaluating organ function, electrolytes, blood counts, and infectious antigens while you wait in our comfortable lounge.',
    overviewImage: 'assets/images/clinical/dept-diagnostics.jpg',
    overviewImgAlt: 'Veterinary clinical laboratory with automated analyzers',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> In-House Laboratory Capabilities:',
      items: [
        '<strong>Hematology & Chem:</strong> Catalyst One & ProCyte Dx running complete blood count, kidney, and liver chemistries.',
        '<strong>Rapid Antigens:</strong> 4Dx vector disease (Heartworm, Lyme, Anaplasma, Ehrlichia), Parvo, Giardia, and FeLV/FIV.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Advanced Imaging Modalities:',
      items: [
        '<strong>Digital Radiography:</strong> High-definition skeletal, chest, and abdominal X-rays with board-certified radiologist tele-read.',
        '<strong>Ultrasound & Doppler:</strong> Real-time abdominal organ architecture, echocardiogram screening, and ultrasound-guided cystocentesis.'
      ]
    },
    inclusionsTag: '<i class="bi bi-clipboard2-check"></i> Diagnostic Accuracy',
    inclusionsHeading: 'What is Included in a Diagnostic Workup',
    inclusionsLead: 'Every diagnostic session is performed gently without stress. We interpret all findings collaboratively with pet parents on high-resolution room monitors.',
    inclusions: [
      {
        icon: 'bi-laptop',
        title: 'Direct Clinician Image Review',
        desc: 'Your veterinarian walks you through digital X-rays and ultrasound loops on wall monitors with complete anatomical transparency.'
      },
      {
        icon: 'bi-clock-history',
        title: 'Same-Day Treatment Decisions',
        desc: 'Immediate blood work means no delayed prescriptions. Medications or dietary changes can begin before you leave the clinic.'
      },
      {
        icon: 'bi-cloud-arrow-down',
        title: 'Portal Image Access & Cloud Sharing',
        desc: 'All DICOM digital images and lab reports are uploaded to your pet portal account for personal records or specialty referrals.'
      }
    ],
    procedureTag: '<i class="bi bi-lightning-charge"></i> Diagnostic Workflow',
    procedureHeading: 'Our Rapid Diagnostic Workflow',
    procedureLead: 'From blood draw to board-certified radiographic review, here is how we reach a definitive clinical diagnosis.',
    steps: [
      {
        num: '1',
        title: 'Stress-Free Sample Collection',
        desc: 'Gentle low-stress blood draws and fine-needle aspirates performed in minutes with gentle holding and positive treat reinforcement.'
      },
      {
        num: '2',
        title: 'Automated Microfluidic Analysis',
        desc: 'Samples processed through optical laser cytometry and dry-slide chemistry analyzers delivering results in 8-12 minutes.'
      },
      {
        num: '3',
        title: 'Low-Radiation Digital Imaging',
        desc: 'Gentle positioning on foam cradles for digital radiograph exposures or warm gel application for abdominal ultrasound scanning.'
      },
      {
        num: '4',
        title: 'Treatment Formulation & Client Consultation',
        desc: 'Doctor reviews all diagnostic data, explains underlying pathology, and tailors an immediate, evidence-based therapy plan.'
      }
    ],
    aftercareTitle: 'Diagnostic Preparation Guide',
    aftercareDesc: 'Certain tests require brief fasting or a full bladder for optimal image quality and accurate biochemical values.',
    normalBehaviors: 'A small shaved patch of fur on the neck, leg, or abdomen where samples were drawn or ultrasound was applied grows back within 2-3 weeks.',
    warningSigns: 'If your pet experiences excessive bruising at a venipuncture site or remains weak, please contact our diagnostic team.',
    faqHeading: 'Frequently Asked Diagnostic Questions',
    faqLead: 'Everything you need to know about preparing for blood tests, X-rays, and ultrasounds.',
    faqs: [
      {
        q: 'Does my pet need to be sedated for X-rays or ultrasound?',
        a: 'The vast majority of pets do not require sedation! Our gentle handling team and padded positioning troughs allow calm pets to rest comfortably. Mild, reversible sedation is only recommended if an animal is in acute orthopedic pain that makes positioning uncomfortable.'
      },
      {
        q: 'Why does my pet need to fast before abdominal ultrasound?',
        a: 'Fasting for 8-12 hours empties the stomach and reduces gastrointestinal gas, which acts as a barrier to sound waves. An empty GI tract allows the ultrasonographer to clearly inspect the pancreas, liver, adrenal glands, and kidneys.'
      },
      {
        q: 'How quickly will I receive the final laboratory results?',
        a: 'Routine CBC, organ chemistries, urinalysis, and digital X-rays are completed within 15-20 minutes during your appointment! Complex histopathology or specialized endocrine panels sent to reference labs typically return in 48-72 hours.'
      }
    ],
    bottomCtaTitle: 'Need Fast, Definitive Diagnostic Answers?',
    bottomCtaText: 'Schedule a comprehensive diagnostic consultation with our diagnostic team today. Walk-ins welcome for urgent and emergency screenings.',
    bottomCtaBtn: 'Book Diagnostic Workup'
  },

  'dental': {
    id: 'dental',
    breadcrumb: 'Veterinary Dentistry & COHAT',
    badge: '<i class="bi bi-emoji-smile"></i> Dental Health',
    title: 'Veterinary Dentistry & Oral Surgery',
    lead: 'Over 80% of dogs and cats over the age of three suffer from periodontal disease. Our Comprehensive Oral Health Assessment & Treatment (COHAT) features ultrasonic scaling, subgingival curettage, 360° intraoral digital X-rays, and surgical extractions with regional nerve blocks.',
    heroImage: 'assets/images/services/service-dental.jpg',
    heroAlt: 'Veterinary dentist performing ultrasonic dental cleaning on a dog',
    heroCtaText: 'Book Dental Assessment',
    appointmentDept: 'dental',
    overviewTag: '<i class="bi bi-shield-shaded"></i> Complete Oral Health',
    overviewHeading: 'Full-Mouth Dental Radiography & Ultrasonic Hygiene',
    overviewDesc: 'Over 60% of a pet’s tooth structure lies hidden beneath the gum line. Without intraoral digital radiographs, tooth root abscesses, bone loss, and feline resorptive lesions (FORLs) go completely undetected and cause silent chronic pain.',
    overviewImage: 'assets/images/clinical/dept-dental.jpg',
    overviewImgAlt: 'Modern veterinary dental suite with intraoral digital X-ray machine',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Diagnostic Dental Standards:',
      items: [
        '<strong>Full-Mouth Dental X-rays:</strong> High-resolution digital intraoral sensors capturing root apices and periodontal pockets.',
        '<strong>Periodontal Probing:</strong> Individual 6-point pocket depth charting and gingival sulcus evaluation.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Advanced Surgical Therapies:',
      items: [
        '<strong>Subgingival Scaling:</strong> Piezo-ultrasonic tips safely removing bacterial biofilm from beneath inflamed gums.',
        '<strong>Surgical Extractions:</strong> Mucoperiosteal flaps and burr sectioning with absorbable sutures for diseased teeth.'
      ]
    },
    inclusionsTag: '<i class="bi bi-star"></i> Clinical Hygiene Rigor',
    inclusionsHeading: 'What is Included in Every COHAT Procedure',
    inclusionsLead: 'We hold our dentistry to human hospital standards. Anesthetized airway protection, active warming, and local anesthesia blocks are mandatory.',
    inclusions: [
      {
        icon: 'bi-shield-check',
        title: 'Cuffed Endotracheal Protection',
        desc: 'Ensures water mist and bacteria generated during ultrasonic scaling never enter the lungs or respiratory airway.'
      },
      {
        icon: 'bi-bandaid',
        title: 'Local & Regional Nerve Blocks',
        desc: 'Targeted dental nerve blocks (infraorbital, inferior alveolar) eliminate surgical pain before extractions begin.'
      },
      {
        icon: 'bi-gem',
        title: 'Enamel Polishing & Fluoride Barrier',
        desc: 'Smooths microscopic grooves created by scaling and applies protective fluoride paste to retard future plaque adhesion.'
      }
    ],
    procedureTag: '<i class="bi bi-list-check"></i> Dental Pathway',
    procedureHeading: 'Our 4-Stage Oral Health Procedure',
    procedureLead: 'From dental assessment to discharge, here is how we restore pain-free chewing and fresh breath.',
    steps: [
      {
        num: '1',
        title: 'Pre-Op Awake Oral Exam & Grading',
        desc: 'Assessing calculus levels, gingivitis, and bad breath to provide an accurate preliminary treatment estimate.'
      },
      {
        num: '2',
        title: '360° Digital Dental Radiographs',
        desc: 'Intraoral X-rays taken of all 42 canine or 30 feline teeth to diagnose hidden root fractures and bone erosion.'
      },
      {
        num: '3',
        title: 'Ultrasonic Scaling & Polishing',
        desc: 'Plaque and calculus removed from crowns and sulci, followed by fine-grit prophy paste polishing.'
      },
      {
        num: '4',
        title: 'Before & After Photographic Charting',
        desc: 'You receive high-definition photographic dental charts detailing every tooth treated and extraction site.'
      }
    ],
    aftercareTitle: 'Post-Dental Home Care Instructions',
    aftercareDesc: 'Soft food and quiet rest are recommended for 5-7 days if tooth extractions were performed.',
    normalBehaviors: 'Slight pink-tinged saliva on water bowls for 24 hours, healthy appetite for wet food, significantly fresher breath.',
    warningSigns: 'Active oral bleeding, refusal to eat after 24 hours, or persistent pawing at the mouth. Contact our dental department.',
    faqHeading: 'Veterinary Dentistry FAQs',
    faqLead: 'Learn why anesthesia-free dentistry is unsafe and how routine oral care prevents heart and kidney disease.',
    faqs: [
      {
        q: 'Why can’t dental cleanings be done without anesthesia ("anesthesia-free")?',
        a: 'Anesthesia-free dental cleanings are purely cosmetic and medically unsafe. They only scrape tartar from the outer crown, ignoring the subgingival pocket where 80% of bacteria and bone loss occur. Furthermore, sharp instruments near an awake, moving animal risk severe oral lacerations.'
      },
      {
        q: 'How does periodontal disease affect my pet’s general organs?',
        a: 'Severe periodontal disease creates a chronic open vascular wound in the mouth. Millions of oral bacteria enter the bloodstream daily, seeding micro-abscesses in the kidneys, liver, and heart valves (bacterial endocarditis).'
      },
      {
        q: 'Will my pet still be able to eat if they need tooth extractions?',
        a: 'Yes, wonderfully! Pets feel IMMENSE relief once diseased, infected teeth are extracted. Even pets with full-mouth extractions happily eat dry kibble once their gums heal, because infected teeth cause constant chronic pain.'
      }
    ],
    bottomCtaTitle: 'Freshen Breath & Protect Your Pet’s Smile',
    bottomCtaText: 'Schedule a Comprehensive Oral Health Assessment with Dr. Martinez today. Digital dental radiography included with all dental packages.',
    bottomCtaBtn: 'Book Dental Consultation'
  },

  'emergency': {
    id: 'emergency',
    breadcrumb: '24/7 Emergency Trauma & Critical Care',
    badge: '<i class="bi bi-lightning-fill"></i> Critical Care ICU',
    title: '24/7 Critical Trauma & Emergency Veterinary Care',
    lead: 'When life hangs in the balance, every second counts. Our hospital maintains an on-site, fully staffed emergency trauma team, Snyder oxygen ICU chambers, continuous transfusion therapy, and emergency surgical capabilities 24 hours a day, 365 days a year.',
    heroImage: 'assets/images/services/service-emergency.jpg',
    heroAlt: 'Emergency veterinary trauma ICU resuscitation room',
    heroCtaText: 'Call Emergency: (555) 924-PETS',
    appointmentDept: 'emergency',
    overviewTag: '<i class="bi bi-hospital-fill"></i> Immediate Triage',
    overviewHeading: 'Zero-Wait Emergency Triage & ICU Support',
    overviewDesc: 'Unlike appointments, emergencies do not wait. Any arriving patient displaying respiratory distress, cardiovascular collapse, traumatic bleeding, or sudden paralysis is immediately whisked to our crash resuscitation bay for instant veterinary intervention.',
    overviewImage: 'assets/images/hero/emergency-hero.jpg',
    overviewImgAlt: 'Veterinarians stabilizing a critically injured dog in trauma suite',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-danger me-2"></i> Acute Trauma Protocols:',
      items: [
        '<strong>Trauma Resuscitation:</strong> Shock fluid therapy, whole blood/plasma transfusions, chest tube thoracocentesis.',
        '<strong>Emergency Surgery:</strong> Splenectomy for hemangiosarcoma, GDV gastric detorsion (bloat), and c-sections.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-danger me-2"></i> Critical ICU Monitoring:',
      items: [
        '<strong>Oxygen Therapy:</strong> Climate-controlled Snyder oxygen kennels for feline asthma, heart failure, and pneumonia.',
        '<strong>Toxin Decontamination:</strong> Apomorphine emesis, activated charcoal hemoperfusion, and lipid emulsion antidotes.'
      ]
    },
    inclusionsTag: '<i class="bi bi-heart-pulse"></i> Life Support Capabilities',
    inclusionsHeading: 'What Is Included in Our Emergency Trauma Center',
    inclusionsLead: 'Our emergency room is built with human-grade trauma hospital infrastructure and dedicated critical care clinicians.',
    inclusions: [
      {
        icon: 'bi-stopwatch-fill',
        title: 'Triage Within 60 Seconds',
        desc: 'Immediate clinical grading of airway, breathing, circulation, and neurological status upon arrival at our emergency doors.'
      },
      {
        icon: 'bi-droplet-fill',
        title: 'On-Site Blood Bank & Transfusions',
        desc: 'Canine and feline packed red blood cells (pRBCs) and fresh frozen plasma (FFP) immediately available on site.'
      },
      {
        icon: 'bi-clipboard-pulse',
        title: '24-Hour Continuous Telemetry',
        desc: 'Continuous Capnography, ECG rhythm telemetry, arterial blood gases, and hourly lactate tracking throughout the night.'
      }
    ],
    procedureTag: '<i class="bi bi-exclamation-triangle"></i> Emergency Protocol',
    procedureHeading: 'Our 4-Step Emergency Stabilization Pathway',
    procedureLead: 'How our emergency clinicians rapidly evaluate and stabilize critically injured or ill animals.',
    steps: [
      {
        num: '1',
        title: 'Immediate Airway & Hemodynamic Triage',
        desc: 'Securing patent airways, initiating high-flow oxygen, and establishing high-bore intravenous catheter access.'
      },
      {
        num: '2',
        title: 'Point-of-Care Ultrasound (AFAST/TFAST)',
        desc: 'Instant 2-minute ultrasound sweep of abdomen and chest to detect internal hemorrhage, pneumothorax, or pericardial effusion.'
      },
      {
        num: '3',
        title: 'Active Resuscitation & Analgesia',
        desc: 'Rapid shock boluses, balanced opioid analgesia, and antidote administration tailored to the clinical crisis.'
      },
      {
        num: '4',
        title: 'Continuous ICU Monitoring & Client Updates',
        desc: 'Direct doctor phone updates and continuous overnight monitoring in heated ICU suites until stabilized.'
      }
    ],
    aftercareTitle: 'What to Do While En Route to Our Emergency Room',
    aftercareDesc: 'Safe transport minimizes stress and prevents further injury to critical pets.',
    normalBehaviors: 'Call (555) 924-PETS so our trauma team can pre-warm the crash table and prepare oxygen before your car pulls in.',
    warningSigns: 'Pale or blue gums, active arterial bleeding, abdominal distension with unproductive retching, or collapse require IMMEDIATE transit.',
    faqHeading: 'Emergency Room FAQs',
    faqLead: 'Critical information for pet parents facing a sudden medical emergency.',
    faqs: [
      {
        q: 'Do I need an appointment for the emergency room?',
        a: 'No! Our Emergency Trauma Center is open and fully staffed 24 hours a day, 7 days a week, 365 days a year without appointments. If possible, a quick phone call while driving allows us to prep the crash table before you pull in.'
      },
      {
        q: 'How are emergency patients prioritized?',
        a: 'Just like in human emergency rooms, patients are seen based on medical acuity and triage level, not arrival time. Pets with respiratory distress, severe bleeding, or cardiac collapse are treated immediately ahead of stable cases.'
      },
      {
        q: 'What should I do if my dog swallowed a foreign object or toxic plant?',
        a: 'Bring any remaining packaging, plant leaves, or chemicals with you to the clinic. Do NOT attempt to induce vomiting at home with hydrogen peroxide without speaking to a veterinarian, as corrosive substances cause severe esophageal burns.'
      }
    ],
    bottomCtaTitle: 'Facing a Pet Medical Crisis Right Now?',
    bottomCtaText: 'Our emergency trauma hospital is open and fully staffed. Call ahead or walk directly through our emergency entrance.',
    bottomCtaBtn: 'Emergency Protocol & Directions'
  },

  'wellness': {
    id: 'wellness',
    breadcrumb: 'Comprehensive Physical Exams',
    badge: '<i class="bi bi-heart-pulse"></i> Preventive Care',
    title: 'Comprehensive Physical Examinations & Wellness Care',
    lead: 'Pets age up to seven times faster than humans. Our thorough, nose-to-tail wellness examinations detect subtle early indicators of renal disease, heart murmurs, osteoarthritis, and dental decline years before symptoms become obvious.',
    heroImage: 'assets/images/services/service-preventive.jpg',
    heroAlt: 'Compassionate veterinarian performing physical examination on happy dog',
    heroCtaText: 'Book Wellness Examination',
    appointmentDept: 'wellness',
    overviewTag: '<i class="bi bi-heart-fill text-danger"></i> Nose-to-Tail Clinical Rigor',
    overviewHeading: 'Whole-Body Clinical Assessment & Unhurried Conversations',
    overviewDesc: 'We dedicate 30 to 45 minutes to every wellness consultation. Our clinicians examine every organ system, listen attentively to your lifestyle observations, and formulate proactive wellness plans customized to your pet’s exact age and breed risks.',
    overviewImage: 'assets/images/clinical/dept-preventive.jpg',
    overviewImgAlt: 'Friendly veterinarian examining a dog’s eyes and ears in bright exam suite',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Physical Exam Checklist:',
      items: [
        '<strong>Eyes, Ears & Mouth:</strong> Ophthalmoscopic retinal check, otoscopic ear canal cytology, and dental tartar staging.',
        '<strong>Heart & Lungs:</strong> Cardiac auscultation for murmurs/arrhythmias and thorough lung field sound screening.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Palpation & Biometrics:',
      items: [
        '<strong>Abdomen & Lymph Nodes:</strong> Spleen, kidneys, bladder, and intestinal loop palpation for masses or pain.',
        '<strong>Musculoskeletal:</strong> Joint range of motion, spine palpation for disc discomfort, and body condition scoring (BCS).'
      ]
    },
    inclusionsTag: '<i class="bi bi-award"></i> The VetCare Pro Standard',
    inclusionsHeading: 'What is Included in Every Wellness Checkup',
    inclusionsLead: 'Every wellness exam includes personalized counseling, weight management tracking, and complimentary nail trim recommendations.',
    inclusions: [
      {
        icon: 'bi-chat-dots-fill',
        title: 'Unhurried Doctor Discussion',
        desc: 'Ample time to discuss nutrition, behavior, litter box habits, joint stiffness, and travel requirements without any rush.'
      },
      {
        icon: 'bi-clipboard-data-fill',
        title: 'Nutritional & Weight Profiling',
        desc: 'Precision body condition scoring (BCS) and caloric intake calculations to prevent obesity and joint wear.'
      },
      {
        icon: 'bi-folder2-open',
        title: 'Personalized Health Passport',
        desc: 'Complete summary of findings, vaccination booster roadmap, and prescription summaries delivered to your phone.'
      }
    ],
    procedureTag: '<i class="bi bi-check2-circle"></i> Exam Walkthrough',
    procedureHeading: 'Our 4-Step Examination Pathway',
    procedureLead: 'How we make routine checkups calm, fear-free, and thoroughly comprehensive.',
    steps: [
      {
        num: '1',
        title: 'Warm Welcoming & Weigh-In',
        desc: 'Non-slip scale weigh-in with positive praise and organic treats to establish a cheerful, stress-free vibe.'
      },
      {
        num: '2',
        title: 'Nose-to-Tail Systematic Exam',
        desc: 'Detailed examination of eyes, ears, oral cavity, coat, joints, cardiovascular, and abdominal organs.'
      },
      {
        num: '3',
        title: 'Preventive Lab Screenings (Optional)',
        desc: 'Annual 4Dx heartworm/tick screening or senior blood chemistry panels to establish healthy baseline values.'
      },
      {
        num: '4',
        title: 'Personalized Wellness Plan Review',
        desc: 'Tailored recommendations for parasite prevention, dental care, diet, and booster schedules explained transparently.'
      }
    ],
    aftercareTitle: 'Wellness Preparation & Tips',
    aftercareDesc: 'Bring any recent veterinary records, medication bottles, and stool samples for comprehensive parasite testing.',
    normalBehaviors: 'Bring your pet slightly hungry so our organic distraction treats work wonders during the exam!',
    warningSigns: 'Sudden weight loss, increased thirst or urination, or subtle limping should be reported to your doctor during checkup.',
    faqHeading: 'Wellness Examination FAQs',
    faqLead: 'Answers to pet parents about examination frequency, senior care, and baseline testing.',
    faqs: [
      {
        q: 'How often should my dog or cat receive a physical exam?',
        a: 'Healthy adult dogs and cats (ages 1 to 7) should receive a comprehensive wellness checkup annually. Senior pets (aged 7 and older) benefit tremendously from bi-annual (every 6 months) checkups, as age-related changes occur rapidly.'
      },
      {
        q: 'Why does my apparently healthy pet need blood work?',
        a: 'Pets are masters at hiding disease until late stages. Annual wellness blood panels establish your pet’s unique healthy baseline and detect early renal decline, liver elevation, or endocrine imbalances when they are easiest and most affordable to manage.'
      },
      {
        q: 'What should I bring to my pet’s wellness appointment?',
        a: 'Please bring any previous vaccine records, a list of current foods and supplements, and a fresh pea-sized stool sample (under 12 hours old) for microscopic intestinal parasite and Giardia screening.'
      }
    ],
    bottomCtaTitle: 'Invest in Your Companion’s Lifelong Health',
    bottomCtaText: 'Schedule a gentle, fear-free wellness examination today. First-time visitors receive a complimentary Welcome Gift Bag and Health Passport.',
    bottomCtaBtn: 'Book Wellness Consultation'
  },

  'internal-medicine': {
    id: 'internal-medicine',
    breadcrumb: 'Internal Medicine & Chronic Care',
    badge: '<i class="bi bi-heart-pulse"></i> Specialized Care',
    title: 'Internal Medicine & Chronic Disease Management',
    lead: 'Chronic systemic diseases require advanced clinical acumen, precision diagnostics, and compassionate lifelong partnership. Led by Dr. Marcus Vance, DACVIM, our internal medicine service specializes in endocrine, renal, gastrointestinal, and immune-mediated disorders.',
    heroImage: 'assets/images/services/service-dermatology.jpg',
    heroAlt: 'Board-certified veterinary internist evaluating patient diagnostics',
    heroCtaText: 'Consult with an Internist',
    appointmentDept: 'internal',
    overviewTag: '<i class="bi bi-capsule"></i> Board-Certified Medical Expertise',
    overviewHeading: 'Systematic Staging for Complex Medical Conditions',
    overviewDesc: 'When symptoms are elusive or standard treatments fall short, internal medicine specialists delve deeper. We utilize advanced endocrine curves, renal IRIS staging, GI endoscopy, and allergy immunotherapy to restore quality of life.',
    overviewImage: 'assets/images/clinical/dept-internal.jpg',
    overviewImgAlt: 'Veterinary internist examining patient with ultrasound and ECG diagnostics',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Endocrine & Renal Focus:',
      items: [
        '<strong>Endocrine Diseases:</strong> Continuous glucose curve monitoring for Diabetes Mellitus, Addison’s (hypoadrenocorticism), and Cushing’s disease.',
        '<strong>Renal & Urological:</strong> IRIS Chronic Kidney Disease staging, proteinuria management, and sublingual fluid therapy protocols.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Gastrointestinal & Immunology:',
      items: [
        '<strong>Gastroenterology:</strong> Inflammatory Bowel Disease (IBD), PLE (protein-losing enteropathy), and dietary elimination trials.',
        '<strong>Immune Disorders:</strong> IMHA (immune-mediated hemolytic anemia), ITP (thrombocytopenia), and cyclosporine therapy.'
      ]
    },
    inclusionsTag: '<i class="bi bi-clipboard2-data"></i> Comprehensive Management',
    inclusionsHeading: 'What is Included in an Internal Medicine Consultation',
    inclusionsLead: 'We provide extensive diagnostic synthesis, specialist collaboration, and tailored home medication schedules.',
    inclusions: [
      {
        icon: 'bi-file-medical-fill',
        title: 'Comprehensive Diagnostic Review',
        desc: 'In-depth review of historical lab trends, radiograph series, and previous treatment responses from prior clinics.'
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Serial Staging & Titration',
        desc: 'Careful drug titration, blood pressure monitoring, and urine protein/creatinine (UPC) checks to prevent organ degradation.'
      },
      {
        icon: 'bi-chat-left-heart-fill',
        title: 'Dedicated Nurse Case Manager',
        desc: 'Direct email and portal access to a specialized internal medicine nurse for routine dose adjustments and advice.'
      }
    ],
    procedureTag: '<i class="bi bi-journal-medical"></i> Clinical Protocol',
    procedureHeading: 'Our Chronic Care Management Protocol',
    procedureLead: 'How we systematically diagnose, stabilize, and maintain pets with complex chronic conditions.',
    steps: [
      {
        num: '1',
        title: 'Comprehensive Medical History Intake',
        desc: '60-minute deep-dive consultation exploring clinical chronology, diet history, thirst patterns, and activity changes.'
      },
      {
        num: '2',
        title: 'Targeted Advanced Diagnostic Workup',
        desc: 'High-resolution ultrasound, endocrine stimulation tests (ACTH, Dex-Suppression), or GI endoscopy as clinically indicated.'
      },
      {
        num: '3',
        title: 'Multimodal Case Formulation',
        desc: 'Designing a customized treatment strategy combining prescription therapeutic nutrition, targeted pharmaceuticals, and hydration.'
      },
      {
        num: '4',
        title: 'Long-Term Telemetry & Checkpoints',
        desc: 'Scheduled recheck intervals to monitor biomarkers, prevent drug toxicity, and maintain optimal vitality.'
      }
    ],
    aftercareTitle: 'Chronic Medication Guidelines',
    aftercareDesc: 'Consistent medication administration times are vital for managing endocrine diseases like diabetes and Addison’s.',
    normalBehaviors: 'Gradual improvement in energy, normalized water consumption, and stabilization of body weight over 2-4 weeks.',
    warningSigns: 'Sudden weakness, refusal to eat, extreme lethargy, or yellowing of the gums/eyes (jaundice) requires immediate emergency evaluation.',
    faqHeading: 'Internal Medicine FAQs',
    faqLead: 'Answers regarding managing chronic conditions, specialist consultations, and ongoing care.',
    faqs: [
      {
        q: 'What is the advantage of seeing a board-certified internist (DACVIM)?',
        a: 'A board-certified internist has completed a 3-year intensive residency and rigorous specialty examinations after veterinary school. They specialize exclusively in puzzling, chronic, multi-system diseases that require deep diagnostic nuance and complex drug management.'
      },
      {
        q: 'Can a cat or dog live a happy life with chronic kidney disease (CKD)?',
        a: 'Absolutely! With early IRIS diagnosis, renal support diets, phosphorus binders, blood pressure control, and home subcutaneous fluids, many dogs and cats with CKD live comfortably for years with wonderful quality of life.'
      },
      {
        q: 'How does VetCare Pro manage diabetic pets?',
        a: 'We emphasize fear-free, home-based blood glucose monitoring (using modern wearable continuous glucose sensors like FreeStyle Libre) to prevent clinic-stress artificial hyperglycemia, ensuring smooth and safe insulin dosing.'
      }
    ],
    bottomCtaTitle: 'Partner with Our Board-Certified Internist',
    bottomCtaText: 'Schedule a specialized internal medicine consultation with Dr. Marcus Vance, DACVIM, to formulate a clear, proactive care plan.',
    bottomCtaBtn: 'Book Specialist Consultation'
  },

  'rehabilitation': {
    id: 'rehabilitation',
    breadcrumb: 'Physical Rehab & Laser Therapy',
    badge: '<i class="bi bi-lightning"></i> Mobility & Rehab',
    title: 'Physical Rehabilitation & Class IV Laser Therapy',
    lead: 'Whether recovering from TPLO orthopedic surgery or managing senior osteoarthritis, our certified veterinary rehabilitation team utilizes Class IV photobiomodulation laser therapy, proprioceptive conditioning, and joint viscosupplementation to relieve pain and restore joyful mobility.',
    heroImage: 'assets/images/clinical/dept-rehab.jpg',
    heroAlt: 'Certified veterinary rehabilitation nurse administering Class IV laser therapy to dog',
    heroCtaText: 'Book Rehab Assessment',
    appointmentDept: 'rehab',
    overviewTag: '<i class="bi bi-activity"></i> Non-Invasive Cellular Healing',
    overviewHeading: 'Photobiomodulation & Targeted Joint Therapy',
    overviewDesc: 'Class IV Deep Tissue Laser Therapy delivers near-infrared photons deep into damaged tissues, accelerating ATP cellular energy production, reducing localized inflammation, and releasing natural endorphins without medications or side effects.',
    overviewImage: 'assets/images/services/service-dermatology.jpg',
    overviewImgAlt: 'Veterinary physical rehabilitation room with therapy balance equipment',
    protocolBox1: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Modalities & Equipment:',
      items: [
        '<strong>Class IV Deep Tissue Laser:</strong> Penetrates deep joints to reduce edema, accelerate wound healing, and relieve osteoarthritis.',
        '<strong>Therapeutic Exercise:</strong> Cavaletti rails, balance wobble boards, and peanut physio-balls to rebuild muscle mass.'
      ]
    },
    protocolBox2: {
      title: '<i class="bi bi-check-circle-fill text-accent me-2"></i> Regenerative & Joint Injections:',
      items: [
        '<strong>Adequan DMOAD:</strong> Intramuscular polysulfated glycosaminoglycan that stimulates cartilage repair and inhibits joint enzymes.',
        '<strong>Therapeutic Massage & Stretches:</strong> Passive range of motion (PROM) and gentle myofascial trigger-point release.'
      ]
    },
    inclusionsTag: '<i class="bi bi-trophy"></i> Restoring Vitality',
    inclusionsHeading: 'What is Included in Every Rehabilitation Session',
    inclusionsLead: 'Every rehab session is customized to your pet’s exact comfort level and surgical recovery timeline.',
    inclusions: [
      {
        icon: 'bi-rulers',
        title: 'Objective Goniometry & Stance Analysis',
        desc: 'Measuring exact joint flexion/extension angles and limb weight-bearing distribution to objectively chart recovery progress.'
      },
      {
        icon: 'bi-shield-shaded',
        title: 'Eye Protection & Stress-Free Mats',
        desc: 'Protective laser safety goggles (Doggles for pets!) on soft orthopedic memory foam beds with peanut butter lick mats.'
      },
      {
        icon: 'bi-house-check-fill',
        title: 'Custom At-Home Exercise Guide',
        desc: 'Step-by-step illustrated home exercise instructions and environmental modification tips (ramps, rugs) for your home.'
      }
    ],
    procedureTag: '<i class="bi bi-person-walking"></i> Rehabilitation Pathway',
    procedureHeading: 'Our 4-Step Mobility Program',
    procedureLead: 'How we take pets from painful, stiff joints to active, wagging mobility.',
    steps: [
      {
        num: '1',
        title: 'Initial Mobility & Gait Assessment',
        desc: 'Evaluating stride length, muscle atrophy, spinal posture, and joint comfort while pet walks across our non-slip runway.'
      },
      {
        num: '2',
        title: 'Targeted Class IV Laser Application',
        desc: 'Painless, warm laser probe swept smoothly across affected hips, knees, or spinal segments for 5-10 minutes.'
      },
      {
        num: '3',
        title: 'Passive Range of Motion & Massage',
        desc: 'Gentle cyclical joint flexion and stretching to improve synovial fluid circulation and reduce muscle guarding.'
      },
      {
        num: '4',
        title: 'Proprioceptive Strengthening Work',
        desc: 'Low-impact stepping over soft foam cavaletti rails to re-educate neuromuscular connections and build hindlimb stability.'
      }
    ],
    aftercareTitle: 'Post-Rehab Guidance & Tips',
    aftercareDesc: 'Many pets experience immediate pain relief and feel invigorated after laser therapy, but gradual strengthening is key.',
    normalBehaviors: 'A relaxed, restful nap immediately after therapy, followed by noticeably easier rising and walking that evening.',
    warningSigns: 'Avoid letting your pet run or jump excessively right after therapy just because they feel good; steady controlled healing is best.',
    faqHeading: 'Physical Rehabilitation FAQs',
    faqLead: 'Learn how therapeutic laser and rehab exercises help pets of all ages.',
    faqs: [
      {
        q: 'Does Class IV Laser Therapy hurt or burn my pet?',
        a: 'Not at all! Laser therapy feels like a soothing, warm, gentle massage. Most dogs and cats visibly relax, lean into the probe, and sometimes even fall asleep during treatment because of the immediate pain-relieving endorphin release.'
      },
      {
        q: 'How many laser sessions will my dog or cat need?',
        a: 'For chronic conditions like arthritis, we typically recommend a standard induction protocol of 6 sessions over 3 weeks, followed by a maintenance session every 3 to 4 weeks. Acute surgical wounds or muscle strains often resolve in 3 to 4 sessions.'
      },
      {
        q: 'Can physical rehabilitation replace surgery for ACL/cruciate tears?',
        a: 'For very small dogs or pets with high surgical risk factors, conservative medical management with laser therapy, custom bracing, and rehab can help. However, for medium and large active dogs, surgical TPLO stabilization followed by post-op rehab delivers the highest long-term success.'
      }
    ],
    bottomCtaTitle: 'Help Your Pet Move Freely & Pain-Free Again',
    bottomCtaText: 'Schedule a physical rehabilitation evaluation with Nurse Alisha Brooks, CCRVN, and Dr. Carter today.',
    bottomCtaBtn: 'Book Mobility Consultation'
  }
};

/**
 * Hydrates service-details.html based on ?id=<serviceId> URL param
 */
function initServiceDetails() {
  const params = new URLSearchParams(window.location.search);
  let rawId = params.get('id') || params.get('service') || window.location.hash.replace('#', '');
  if (rawId) rawId = rawId.toLowerCase().trim();

  const ALIASES = {
    'vaccine': 'vaccinations',
    'vaccines': 'vaccinations',
    'immunization': 'vaccinations',
    'immunizations': 'vaccinations',
    'routine-vaccinations': 'vaccinations',
    'soft-tissue-surgery': 'surgery',
    'orthopedics': 'surgery',
    'lab': 'diagnostics',
    'radiology': 'diagnostics',
    'xray': 'diagnostics',
    'ultrasound': 'diagnostics',
    'digital-diagnostics': 'diagnostics',
    'dentistry': 'dental',
    'oral-surgery': 'dental',
    'trauma': 'emergency',
    'critical-care': 'emergency',
    'icu': 'emergency',
    'exams': 'wellness',
    'physical-exams': 'wellness',
    'preventive': 'wellness',
    'internal': 'internal-medicine',
    'chronic-care': 'internal-medicine',
    'rehab': 'rehabilitation',
    'laser': 'rehabilitation'
  };

  const resolvedId = ALIASES[rawId] || rawId;
  const serviceId = (resolvedId && SERVICES_DATA[resolvedId]) ? resolvedId : 'vaccinations';
  const data = SERVICES_DATA[serviceId];

  if (!data) return;

  // 1. Update Document Title
  document.title = `${data.title} — VetCare Pro`;

  // 2. Update Breadcrumb
  const breadcrumbEl = document.getElementById('service-breadcrumb');
  if (breadcrumbEl) breadcrumbEl.textContent = data.breadcrumb;

  // 3. Update Hero Section
  const heroTagEl = document.getElementById('service-hero-tag');
  if (heroTagEl) heroTagEl.innerHTML = data.badge;

  const heroTitleEl = document.getElementById('service-hero-title');
  if (heroTitleEl) heroTitleEl.textContent = data.title;

  const heroLeadEl = document.getElementById('service-hero-lead');
  if (heroLeadEl) heroLeadEl.textContent = data.lead;

  const heroCtaEl = document.getElementById('service-hero-cta');
  if (heroCtaEl) {
    heroCtaEl.innerHTML = `<i class="bi bi-calendar-check"></i> ${data.heroCtaText}`;
    heroCtaEl.href = `appointments.html?dept=${data.appointmentDept}`;
  }

  const heroImgEl = document.getElementById('service-hero-img');
  if (heroImgEl) {
    heroImgEl.src = data.heroImage;
    heroImgEl.alt = data.heroAlt || data.title;
  }

  // 4. Update Overview Section (Section 2)
  const overviewTagEl = document.getElementById('service-overview-tag');
  if (overviewTagEl) overviewTagEl.innerHTML = data.overviewTag;

  const overviewHeadingEl = document.getElementById('service-overview-heading');
  if (overviewHeadingEl) overviewHeadingEl.textContent = data.overviewHeading;

  const overviewDescEl = document.getElementById('service-overview-desc');
  if (overviewDescEl) overviewDescEl.innerHTML = data.overviewDesc;

  const overviewImgEl = document.getElementById('service-overview-img');
  if (overviewImgEl) {
    overviewImgEl.src = data.overviewImage;
    overviewImgEl.alt = data.overviewImgAlt || data.overviewHeading;
  }

  const protocolsContainer = document.getElementById('service-protocols-container');
  if (protocolsContainer) {
    let box1Html = '';
    let box2Html = '';

    if (data.protocolBox1) {
      const items1 = data.protocolBox1.items.map(it => `<li class="mb-1">${it}</li>`).join('');
      box1Html = `
        <div class="card bg-subtle border-0 p-4 rounded-4 mb-3">
          <h5 class="text-primary mb-2">${data.protocolBox1.title}</h5>
          <ul class="list-unstyled small text-muted mb-0">${items1}</ul>
        </div>
      `;
    }

    if (data.protocolBox2) {
      const items2 = data.protocolBox2.items.map(it => `<li class="mb-1">${it}</li>`).join('');
      box2Html = `
        <div class="card bg-subtle border-0 p-4 rounded-4">
          <h5 class="text-primary mb-2">${data.protocolBox2.title}</h5>
          <ul class="list-unstyled small text-muted mb-0">${items2}</ul>
        </div>
      `;
    }

    protocolsContainer.innerHTML = box1Html + box2Html;
  }

  // 5. Update Inclusions Section (Section 3)
  const inclusionsTagEl = document.getElementById('service-inclusions-tag');
  if (inclusionsTagEl) inclusionsTagEl.innerHTML = data.inclusionsTag;

  const inclusionsHeadingEl = document.getElementById('service-inclusions-heading');
  if (inclusionsHeadingEl) inclusionsHeadingEl.textContent = data.inclusionsHeading;

  const inclusionsLeadEl = document.getElementById('service-inclusions-lead');
  if (inclusionsLeadEl) inclusionsLeadEl.textContent = data.inclusionsLead;

  const inclusionsContainer = document.getElementById('service-inclusions-container');
  if (inclusionsContainer && data.inclusions) {
    inclusionsContainer.innerHTML = data.inclusions.map(inc => `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 card-hover p-4 border rounded-4">
          <div class="icon-box icon-box-primary mb-3"><i class="bi ${inc.icon}"></i></div>
          <h5>${inc.title}</h5>
          <p class="small text-muted mb-0">${inc.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 6. Update Procedure Section (Section 4)
  const procedureTagEl = document.getElementById('service-procedure-tag');
  if (procedureTagEl) procedureTagEl.innerHTML = data.procedureTag;

  const procedureHeadingEl = document.getElementById('service-procedure-heading');
  if (procedureHeadingEl) procedureHeadingEl.textContent = data.procedureHeading;

  const procedureLeadEl = document.getElementById('service-procedure-lead');
  if (procedureLeadEl) procedureLeadEl.textContent = data.procedureLead;

  const timelineEl = document.getElementById('service-procedure-timeline');
  if (timelineEl && data.steps) {
    timelineEl.innerHTML = data.steps.map(step => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <h5 class="mb-1">${step.num}. ${step.title}</h5>
        <p class="small text-muted">${step.desc}</p>
      </div>
    `).join('');
  }

  const aftercareEl = document.getElementById('service-aftercare-guide');
  if (aftercareEl) {
    aftercareEl.innerHTML = `
      <div class="card bg-subtle p-4 rounded-4 border-0">
        <h4 class="mb-3"><i class="bi bi-shield-exclamation text-warning me-2"></i> ${data.aftercareTitle}</h4>
        <p class="small text-muted mb-3">${data.aftercareDesc}</p>
        <div class="p-3 bg-surface rounded-3 border mb-3">
          <h6 class="mb-1 text-success"><i class="bi bi-check-circle me-1"></i> Normal Behaviors:</h6>
          <span class="small text-muted">${data.normalBehaviors}</span>
        </div>
        <div class="p-3 bg-surface rounded-3 border">
          <h6 class="mb-1 text-danger"><i class="bi bi-exclamation-triangle me-1"></i> Call Clinic / Emergency If:</h6>
          <span class="small text-muted">${data.warningSigns}</span>
        </div>
      </div>
    `;
  }

  // 7. Update FAQs Section (Section 5)
  const faqHeadingEl = document.getElementById('service-faq-heading');
  if (faqHeadingEl) faqHeadingEl.textContent = data.faqHeading;

  const faqLeadEl = document.getElementById('service-faq-lead');
  if (faqLeadEl) faqLeadEl.textContent = data.faqLead;

  const faqAccordionEl = document.getElementById('service-faq-accordion');
  if (faqAccordionEl && data.faqs) {
    faqAccordionEl.innerHTML = data.faqs.map((faq, idx) => `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${idx === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaq${idx}" aria-expanded="${idx === 0}">
            ${faq.q}
          </button>
        </h2>
        <div id="collapseFaq${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#service-faq-accordion">
          <div class="accordion-body">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 8. Update Bottom CTA (Section 6)
  const bottomCtaTitleEl = document.getElementById('service-bottom-cta-title');
  if (bottomCtaTitleEl) bottomCtaTitleEl.textContent = data.bottomCtaTitle;

  const bottomCtaTextEl = document.getElementById('service-bottom-cta-text');
  if (bottomCtaTextEl) bottomCtaTextEl.textContent = data.bottomCtaText;

  const bottomCtaBtnEl = document.getElementById('service-bottom-cta-btn');
  if (bottomCtaBtnEl) {
    bottomCtaBtnEl.innerHTML = `<i class="bi bi-calendar-check"></i> ${data.bottomCtaBtn}`;
    bottomCtaBtnEl.href = `appointments.html?dept=${data.appointmentDept}`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServiceDetails);
} else {
  initServiceDetails();
}

