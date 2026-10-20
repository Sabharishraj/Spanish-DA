/**
 * ==============================================================================
 * ¿QUIÉN FUE? — FORENSIC INVESTIGATION & VERDICT CONTROLLER
 * File: reveal.js
 * Lead Engineer & Designer: Sabharish K. (Member 5 — Final Reveal)
 * Architecture: Reactive state machine, accessible WAI-ARIA controls,
 *               bilingual educational dictionary, transparent scoring engine,
 *               and zero-dependency vanilla JavaScript.
 * ==============================================================================
 */

"use strict";

/**
 * ------------------------------------------------------------------------------
 * CENTRAL CASE CONFIGURATION (STORY_CONFIG)
 * ------------------------------------------------------------------------------
 * Grounded in verified pre-Columbian metallurgy records from Colombia's
 * Museo del Oro. All placeholders and template tokens have been replaced with
 * verified, logically coherent historical and fictional crime facts.
 */
const STORY_CONFIG = {
  // Author & Team Configuration
  author: {
    name: "Sabharish K.",
    role: "Member 5 — Final Accusation, Verdict Reveal, Evidence Synthesis, Scoring Engine & Replay",
    projectTitle: "¿Quién Fue? — The Mystery of the Stolen Sun Pectoral",
  },

  // Complete Team Roster
  team: [
    { member: "Member 1", name: "Sofia Ramirez", role: "Museum Archives & Historical Narrative" },
    { member: "Member 2", name: "Mateo Gomez", role: "Suspect Interrogations & Alibis" },
    { member: "Member 3", name: "Camila Torres", role: "Spanish Language Puzzles & Ciphers" },
    { member: "Member 4", name: "Diego Alvarez", role: "Crime Scene Inspection & Chemical Analysis" },
    { member: "Member 5", name: "Sabharish K.", role: "Final Accusation, Verdict Reveal & Scoring Engine (Module Lead)" }
  ],

  // Canonical Case Metadata (Single Source of Truth)
  caseMeta: {
    museum: "The National Museum of Archaeology & Gold Archives (Bogotá, Colombia)",
    theftDate: "Thursday, October 15, 2026",
    incidentTime: "21:44 – 21:48 HRS (Facility Power Transfer: 240s; Physical Extraction: 180s)",
    location: "Hall 4: Pre-Columbian Gold & Metallurgy Wing, Sector C-4 Vault",
    powerTransferDuration: "4 minutes (240 seconds: 21:44:00 – 21:48:00 HRS)",
    theftDuration: "180 seconds (3 minutes: 21:45:00 – 21:48:00 HRS)",
    alarmBehavior: "Piezoelectric shock sensors bypassed via chemical DMF silicone dissolution. Secondary barometric sensor tripped at 22:10 HRS when the degraded seal collapsed under HVAC currents.",
    cameraFootage: "Camera #03 offline from 21:40 HRS due to physical wire cut at Hall 4 junction box. Central server recorded zero digital tampering."
  },

  // Incident Chronology (Single Source of Truth Timeline)
  timeline: [
    {
      time: "20:30 HRS",
      title: "Diplomatic Escort & Hall 4 Clearance",
      body: "Chief Curator Dr. Mateo Valenzuela escorts university benefactors to the North Portico. Biometric logs confirm his exit to the Grand Vestibule.",
      badge: "ALIBI LOG"
    },
    {
      time: "21:15 HRS",
      title: "Basement Acoustic Diversion",
      body: "Night Guard Héctor Delgado receives an urgent dispatch to inspect reported water hammer vibrations in Sub-Level -2, leaving the South Wing unmonitored.",
      badge: "DIVERSION"
    },
    {
      time: "21:40 HRS",
      title: "Physical Camera Sabotage",
      body: "Surveillance Camera #03 drops offline due to a physical wire cut at the interior wall junction box inside Hall 4.",
      badge: "SABOTAGE"
    },
    {
      time: "21:44 HRS",
      title: "Auxiliary Power Transfer Commences (4-Min Total)",
      body: "Facility switches to secondary diesel generators for scheduled 4-minute auxiliary transfer (21:44–21:48 HRS). Sector C-4 vault lighting extinguished.",
      badge: "BLACKOUT"
    },
    {
      time: "21:45 HRS",
      title: "Chemical Breach & Physical Extraction (180s Window)",
      body: "Perpetrator applies analytical-grade DMF to dissolve silicone vitrine seal silently. Gold pectoral extracted and resin replica concealed in HVAC duct.",
      badge: "THEFT EVENT"
    },
    {
      time: "22:10 HRS",
      title: "Atmospheric Alarm Trigger & Facility Lockdown",
      body: "HVAC airflow causes the chemically compromised seal to collapse. Barometric pressure sensors trip emergency sirens; facility enters full lockdown.",
      badge: "ALARM ENGAGED"
    }
  ],

  // Heritage Artefact Specifications (Verified Calima-Yotoco Culture)
  artefact: {
    name: "The Golden Pectoral of the Sun God",
    spanishName: "El Pectoral Dorado del Sol",
    originCulture: "Calima-Yotoco Culture (Valle del Cauca, Colombia)",
    estimatedDate: "Late Calima / Yotoco Period (ca. 200 BCE – 1300 CE)",
    catalogNumber: "MO-4521-COL (Banco de la República / Museo del Oro)",
    historicalContext: "A ceremonial hammered sheet gold and copper alloy (tumbaga) chest ornament representing solar deities and zoomorphic jaguar motifs. Recovered from the Calima river basin, it reflects supreme ritual authority and is protected under Colombia's National Cultural Heritage Registry.",
    significance: "Supreme ceremonial regalia representing the solar-jaguar pantheon and divine metallurgical mastery of the Calima-Yotoco peoples.",
    fictionalNotice: "Fictional case artefact created for the investigative simulation. Historical metallurgical techniques, Calima-Yotoco cultural context, and provenance frameworks are factual and grounded in peer-reviewed Museo del Oro and ICANH literature."
  },

  // Prime Culprit Identifier (Matches 'suspect-3')
  culpritId: "suspect-3",

  // Master Culprit Dossier
  culprit: {
    name: "Valeria Sotomayor",
    role: "Senior Materials Conservator & Restorer (*Restauradora de Arte*)",
    avatar: "🔬",
    motive: "Crippling private debts from personal loans combined with coercive pressure from an illicit international antiquities trafficking syndicate, which offered to erase her family's liabilities in exchange for substituting the original pectoral with an undetectable cast replica.",
    modusOperandi: "Exploited the scheduled 4-minute auxiliary power transfer (21:44–21:48 HRS). Applied analytical-grade dimethylformamide (DMF) to dissolve the vitrine's silicone gasket silently, lifted the gold pectoral without triggering the piezoelectric vibration sensors during the 180-second physical window (21:45–21:48 HRS), and temporarily concealed the cast replica and tools in the HVAC exhaust duct.",
    confession: "I never intended for the heritage to be destroyed or melted down... The syndicate promised it would remain intact in a climate-controlled private collection. The replica I cast was nearly indistinguishable under display lighting, and I desperately needed a way out of my financial ruin."
  },

  // Five Persons of Interest (Interrogations, Testimonies & Alibis)
  suspects: [
    {
      id: "suspect-1",
      name: "Dr. Mateo Valenzuela",
      role: "Chief Antiquities Curator (*Curador Principal*)",
      avatar: "👤",
      snippet: "Held physical master keys to Hall 4 vitrines. Escorted university donors to the North Portico at 20:30 and remained in the main reception until sirens engaged.",
      motive: "Frustration over budgetary reallocations away from pre-Columbian catalog conservation.",
      alibi: "Grand Vestibule CCTV logs confirm his exit to the reception hall at 20:30 with diplomatic attachés.",
      testimony: "I have dedicated twenty-eight years to cataloging the Banco de la República collection. My master keys never left my lapel pocket during the North Portico reception. If I appeared hurried at 20:30, it was solely to settle an uncouth dispute with the banquet caterers regarding champagne service in the gallery foyer.",
      redHerring: "Carrying physical master keys and witnessed moving hurriedly near Hall 4 twenty minutes prior to the gala opening.",
      redHerringExplanation: "Master keys were required to verify display mounts before VIP arrival. His hurry was administrative catering management, and biometric turnstiles prove he stayed in the Grand Vestibule throughout the blackout.",
      access: "Level-3 physical master keys for exhibition cabinets; no conservation lab chemical clearances.",
      opportunity: "In North Portico and Grand Vestibule from 20:30 onward; zero physical access during the 21:44–21:48 power transfer.",
      exoneration: "Grand Vestibule security cameras and sworn diplomatic statements confirm he exited Hall 4 at 20:30. Biometric turnstile badge #408 proves he never re-entered the exhibition wing during the blackout."
    },
    {
      id: "suspect-2",
      name: "Héctor Delgado",
      role: "Night Security Supervisor (*Guardia Nocturno*)",
      avatar: "👮",
      snippet: "Patrolled the South Wing perimeter. Received an acoustic pipe alert in the basement at 21:15, temporarily leaving Hall 4 unmonitored.",
      motive: "Strained labor relations following uncompensated overtime during the gala preparations.",
      alibi: "Dispatched by Central Control to inspect water hammer vibrations in Sub-Level -2.",
      testimony: "Central Control radioed me directly about heavy water-hammer rattling down in Sub-Level -2 pipes. I ran downstairs because a burst pipe would flood the basement storage. By the time I checked the valves and rode the freight lift back up, the sirens were already wailing. I don't touch ancient gold—my job is keeping kids off the stanchions.",
      redHerring: "Abandoned post right before the theft, and his master patrol fob showed unlogged movement on Sub-Level -2.",
      redHerringExplanation: "The acoustic anomaly was an intentional perpetrator diversion. Central Control radio logs and elevator telemetry prove he was trapped in Sub-Level -2, and his security card lacked the cryptographic codes needed to open display vitrines.",
      access: "Perimeter patrol card and service corridor keys; no cryptographic cabinet access or solvent knowledge.",
      opportunity: "Dispatched away from Hall 4 at 21:15; confirmed physically in Sub-Level -2 between 21:14 and 21:52.",
      exoneration: "Central Control audio radio transcripts and freight elevator telemetry corroborate his descent to Level -2 between 21:14 and 21:52. Though in violation of guard post protocol, his credentials lacked access to the vitrine lock codes."
    },
    {
      id: "suspect-3",
      name: "Valeria Sotomayor", // The True Culprit
      role: "Senior Materials Conservator & Restorer (*Restauradora de Arte*)",
      avatar: "🔬",
      snippet: "Forensic specialist in synthetic polymers and adhesive solvents. Signed out analytical-grade DMF solvent 24 hours prior to clean ceramic seals.",
      motive: "Crushing financial debt and an illicit contract with an overseas black-market antiquities broker.",
      alibi: "Claimed to be calibrating microscopic imaging equipment alone in the conservation lab throughout the gala.",
      testimony: "I requisitioned fifty milliliters of dimethylformamide on Wednesday specifically to dissolve aged Paraloid B-72 consolidation varnish on a fractured Muisca ceramic urn. Solvents are standard conservation consumables. I spent the gala alone in the clean room calibrating the stereo-microscope; I cannot help that the lab has no corridor-facing cameras.",
      redHerring: "Requisitioned DMF solvent 24 hours earlier; no witness to confirm her lone presence in the clean room.",
      redHerringExplanation: "This was not an innocent coincidence—it was the actual execution of the crime. GC-MS spectrometry matched the vitrine residue uniquely to her reagent lot, and the resin replica in the vent carried her cyanoacrylate-fumed ridge impressions.",
      access: "Full biometric access to conservation chemical storage, solvent hoods, and Hall 4 vitrine seal maintenance.",
      opportunity: "Unsupervised in conservation wing directly abutting Hall 4 service duct during the 21:44–21:48 power transfer.",
      exoneration: "CONFIRMED CULPRIT! She has no corroborating witness or camera footage between 21:30 and 22:00. Micro-spectroscopy links the solvent on the display case exclusively to her lab requisition, and her latent fingerprints were recovered from the molding putty in the vent."
    },
    {
      id: "suspect-4",
      name: "Dr. Elena Morales",
      role: "Visiting Archeologist & Pre-Columbian Historian (*Historiadora Visitante*)",
      avatar: "📚",
      snippet: "International expert in Calima gold iconography; had requested permission to photograph the pectoral's reverse inscription.",
      motive: "Ambition to publish a career-defining monograph identifying previously unknown solar glyphs.",
      alibi: "Delivering an international keynote livestream from the North Auditorium between 21:00 and 22:30.",
      testimony: "The Calima-Yotoco solar pectoral contains geometric glyphs that dismantle the orthodox chronology of Southwestern metallurgy. Of course I argued vehemently with Dr. Valenzuela for permission to photograph the reverse casing! But I spent that entire evening delivering our keynote to the Andean Archaeological Congress via streaming video from Auditorium B.",
      redHerring: "Overheard in a heated academic dispute with Curator Valenzuela over access to photograph the pectoral's reverse glyphs.",
      redHerringExplanation: "Her passionate argument was purely intellectual ambition. Over 140 webinar participants, continuous timestamped video archive, and auditorium router IP telemetry conclusively verify her alibi 400 meters away.",
      access: "Temporary visitor research credentials; zero physical keys, cabinet codes, or chemical supplies access.",
      opportunity: "Stationed in North Auditorium B from 21:00 to 22:30; completely isolated from Hall 4.",
      exoneration: "Over 140 remote university attendees, continuous timestamped video archive, and authenticated router IP telemetry conclusively place her 400 meters away in Auditorium B throughout the theft window."
    },
    {
      id: "suspect-5",
      name: "Carlos Mendoza",
      role: "CCTV & Security Networks Technician (*Técnico de Redes*)",
      avatar: "🔧",
      snippet: "Serviced CCTV multiplex fiber wiring on the morning of the exhibition; knew camera angles and blind spots intimately.",
      motive: "Technical capability to manipulate server feeds and familiarity with security blind spots.",
      alibi: "Dining in the third-floor staff cafeteria with facilities personnel between 21:35 and 22:05.",
      testimony: "I was replacing a damaged Cat-6 transceiver on CAM-03 at ten in the morning—that is why my fingerprint was on the external bracket! If I wanted to steal the piece, why would I violently hack the physical wire with pliers like an amateur when I could simply loop the RTSP video feed from my terminal? Besides, I was eating empanadas in the cafeteria with the HVAC techs.",
      redHerring: "Latent fingerprint identified on CAM-03 external housing, and possessed intimate knowledge of surveillance blind spots.",
      redHerringExplanation: "His fingerprint was left during a logged maintenance ticket (#IT-402) at 10:15 AM. Digital audit confirmed CAM-03 was severed physically with pliers, while server logs show zero software manipulation, and three cafeteria witnesses corroborate his presence.",
      access: "Digital administrative access to CCTV server racks; no physical keys to exhibition vitrines or chemical reagents.",
      opportunity: "Third-floor cafeteria from 21:35 to 22:05; corroborated by point-of-sale timestamps and facility staff.",
      exoneration: "Digital forensic audit of the server room showed Camera #03 was severed physically with a hand cutter at the Hall 4 wall junction box, while server network logs confirm zero remote software tampering occurred."
    }
  ],

  // Decisive Forensic Evidence Files (Chemical, Documentary, Physical)
  evidence: [
    {
      id: "clue-1",
      title: "Chemical Solvent Residue (DMF Traces)",
      type: "Chemical Analysis • Crime Lab Report",
      discovery: "Gas chromatography-mass spectrometry (GC-MS) identified micro-residues of analytical-grade dimethylformamide (DMF) along the vitrine's acoustic silicone gasket.",
      connection: "Laboratory Requisition Log #RQ-882 confirms that only Valeria Sotomayor checked out analytical-grade DMF solvent from central supply within the past 48 hours.",
      significance: "Explains how the vitrine was opened silently without shattering glass or tripping the piezoelectric acoustic and seismic impact sensors.",
      proves: "Proves that the vitrine was breached silently through targeted chemical dissolution of the silicone polymer rather than physical blunt force.",
      doesNotProve: "Does not prove by itself that Valeria applied the solvent at 21:45 HRS, as another party could theoretically have stolen the solvent from her bench without corroborating evidence."
    },
    {
      id: "clue-2",
      title: "Handwritten Shift Schedule Fragment",
      type: "Documentary Evidence • Forensic Graphology",
      discovery: "A torn notebook page recovered from the service stairwell bearing handwritten Spanish notes: '21:40 cambio de turno — corte auxiliar 180s — ducto norte'.",
      connection: "Graphological comparison and paper-fiber spectroscopy match the proprietary gridded field notebooks issued exclusively to the Conservation Department.",
      significance: "Establishes criminal premeditation, detailed reconnaissance of guard patrol intervals, and technical knowledge of the auxiliary power grid transfer.",
      proves: "Proves that the theft was premeditated with exact foreknowledge of the 4-minute auxiliary electrical transfer window and guard patrol blind spots.",
      doesNotProve: "Does not prove the author's identity conclusively on its own without matching handwriting samples and physical fingerprint identification."
    },
    {
      id: "clue-3",
      title: "Concealed Resin Replica & Latent Fingerprints",
      type: "Physical Evidence • Latent Ridge Analysis",
      discovery: "An uncured polyurethane resin and plaster replica of the sun pectoral hidden inside the HVAC air return duct in the staff corridor adjacent to Hall 4.",
      connection: "Cyanoacrylate fuming revealed three clear latent ridge impressions on the casting putty matching the right index finger and thumb of Valeria Sotomayor.",
      significance: "Demonstrates the perpetrator's modus operandi to swap the genuine gold pectoral with an undetectable painted cast, preventing immediate discovery.",
      proves: "Conclusively links Valeria Sotomayor's physical hands to the fabrication and concealment of the counterfeit artefact intended for the swap.",
      doesNotProve: "Does not prove whether she acted alone or in conspiracy with an overseas antiquities trafficking syndicate to transport the original piece."
    }
  ],

  // Verified Institutional Bibliographic Citations (Academic Integrity)
  culturalSources: [
    {
      title: "Pre-Hispanic Metallurgy in the Colombian Southwest: Calima and Malagana Traditions",
      institution: "Banco de la República — Museo del Oro (Bogotá, Colombia)",
      citation: "Lleras Pérez, Roberto (2007). Pre-Hispanic Metallurgy in the Colombian Southwest: Calima and Malagana Traditions. Boletín Museo del Oro, No. 54, pp. 12–47. ISSN: 0120-7296.",
      notes: "Primary academic catalog documenting hammered sheet gold pectorals, tumbaga casting methods, and ceremonial solar iconography of the Yotoco period."
    },
    {
      title: "Convention on the Means of Prohibiting and Preventing the Illicit Import, Export and Transfer of Ownership of Cultural Property",
      institution: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
      citation: "UNESCO General Conference, 16th Session (1970). Convention on Illicit Antiquities Trade, Resolution 3.121, 823 U.N.T.S. 231. Paris: UNESCO Publishing.",
      notes: "International legal framework governing the recovery of stolen Latin American antiquities, museum custody protocols, and forensic provenance tracking."
    },
    {
      title: "Norma Técnica para la Conservación Preventiva de Bienes Metálicos Prehispánicos",
      institution: "Instituto Colombiano de Antropología e Historia (ICANH)",
      citation: "ICANH (2019). Manual de Conservación Preventiva y Seguridad Museográfica para Orfebrería Prehispánica, Guía Técnica No. 12, Bogotá: Imprenta Nacional.",
      notes: "Official security, climate control, and anti-tamper standards for displaying pre-Columbian gold collections in national exhibitions."
    }
  ],

  // Educational Spanish Glossary (30 Distinct Forensic & Cultural Terms with Examples)
  vocabulary: [
    {
      spanish: "El culpable",
      english: "The culprit / guilty party",
      pos: "Noun (masculine)",
      context: "The individual legally proven to have planned and executed the museum theft.",
      example: "El culpable utilizó un solvente químico para abrir la vitrina.",
      exampleTranslation: "The culprit used a chemical solvent to open the display case."
    },
    {
      spanish: "El sospechoso / La sospechosa",
      english: "The suspect",
      pos: "Noun (masc. / fem.)",
      context: "A person of interest under active police investigation due to circumstantial evidence.",
      example: "Cada sospechoso tenía una coartada durante el apagón.",
      exampleTranslation: "Each suspect had an alibi during the blackout."
    },
    {
      spanish: "La evidencia",
      english: "The evidence",
      pos: "Noun (feminine)",
      context: "Objective material exhibit or forensic trace examined by crime laboratory scientists.",
      example: "La evidencia forense desmintió el testimonio del guardia.",
      exampleTranslation: "The forensic evidence disproved the guard's testimony."
    },
    {
      spanish: "La pista",
      english: "The clue / lead",
      pos: "Noun (feminine)",
      context: "A critical piece of information that guides detectives toward reconstructing the truth.",
      example: "La nota encontrada en la escalera fue una pista decisiva.",
      exampleTranslation: "The note found in the stairwell was a decisive clue."
    },
    {
      spanish: "El artefacto",
      english: "The artefact / artifact",
      pos: "Noun (masculine)",
      context: "An archaeological masterpiece of high historical and ceremonial significance.",
      example: "El artefacto de oro fue devuelto a la bóveda del museo.",
      exampleTranslation: "The gold artefact was returned to the museum vault."
    },
    {
      spanish: "El museo",
      english: "The museum",
      pos: "Noun (masculine)",
      context: "The public cultural institution safeguarding the pre-Columbian heritage collection.",
      example: "El museo reforzó sus protocolos de seguridad tras el robo.",
      exampleTranslation: "The museum reinforced its security protocols after the theft."
    },
    {
      spanish: "La investigación",
      english: "The investigation",
      pos: "Noun (feminine)",
      context: "The methodical inquiry combining alibi verification, chemistry, and timeline analysis.",
      example: "La investigación policial se centró en cinco personas.",
      exampleTranslation: "The police investigation focused on five people."
    },
    {
      spanish: "El motivo",
      english: "The motive",
      pos: "Noun (masculine)",
      context: "The underlying psychological or financial cause that incites criminal behavior.",
      example: "Las deudas financieras fueron el motivo principal del crimen.",
      exampleTranslation: "Financial debts were the primary motive for the crime."
    },
    {
      spanish: "La coartada",
      english: "The alibi",
      pos: "Noun (feminine)",
      context: "Corroborated proof that a suspect was physically elsewhere when the crime occurred.",
      example: "La historiadora presentó una coartada verificada por video.",
      exampleTranslation: "The historian presented a video-verified alibi."
    },
    {
      spanish: "Acusar",
      english: "To accuse / charge",
      pos: "Verb",
      context: "To formally name an individual as the perpetrator before the judicial magistrate.",
      example: "El detective decidió acusar formalmente a la restauradora.",
      exampleTranslation: "The detective decided to formally accuse the conservator."
    },
    {
      spanish: "El testigo / La testigo",
      english: "The witness",
      pos: "Noun (masc. / fem.)",
      context: "A person who observed or heard relevant anomalies on the night of the incident.",
      example: "El testigo confirmó haber visto luces en la sala cuatro.",
      exampleTranslation: "The witness confirmed seeing lights in Hall 4."
    },
    {
      spanish: "La huella",
      english: "The fingerprint / impression",
      pos: "Noun (feminine)",
      context: "A latent friction ridge mark left involuntarily on physical evidence at the scene.",
      example: "La huella dactilar coincidió con la restauradora.",
      exampleTranslation: "The fingerprint matched the conservator."
    },
    {
      spanish: "El robo",
      english: "The theft / robbery",
      pos: "Noun (masculine)",
      context: "The unlawful extraction and misappropriation of protected national treasures.",
      example: "El robo ocurrió durante un apagón eléctrico de tres minutos.",
      exampleTranslation: "The theft occurred during a three-minute electrical blackout."
    },
    {
      spanish: "Descubrir",
      english: "To discover / uncover",
      pos: "Verb",
      context: "To expose hidden motives, concealed tools, or decisive forensic connections.",
      example: "El equipo logró descubrir la réplica oculta en el ducto.",
      exampleTranslation: "The team managed to discover the replica hidden in the duct."
    },
    {
      spanish: "El misterio",
      english: "The mystery",
      pos: "Noun (masculine)",
      context: "The complex puzzle of the darkened gallery that requires deductive reasoning.",
      example: "El misterio del pectoral dorado quedó completamente resuelto.",
      exampleTranslation: "The mystery of the golden pectoral was completely solved."
    },
    {
      spanish: "La verdad",
      english: "The truth",
      pos: "Noun (feminine)",
      context: "The factual reality established through incontrovertible forensic proof.",
      example: "El análisis químico reveló la verdad detrás del incidente.",
      exampleTranslation: "Chemical analysis revealed the truth behind the incident."
    },
    {
      spanish: "Inocente",
      english: "Innocent",
      pos: "Adjective",
      context: "Free from legal culpability after verified alibi verification and timeline audits.",
      example: "Cuatro de los cinco sospechosos resultaron ser inocentes.",
      exampleTranslation: "Four of the five suspects turned out to be innocent."
    },
    {
      spanish: "Culpable",
      english: "Guilty",
      pos: "Adjective",
      context: "Proven responsible beyond reasonable doubt for committing the crime.",
      example: "La evidencia demostró quién era el culpable del delito.",
      exampleTranslation: "The evidence demonstrated who was guilty of the crime."
    },
    {
      spanish: "La exposición",
      english: "The exhibition",
      pos: "Noun (feminine)",
      context: "The public or gala display of antiquities curated for cultural appreciation.",
      example: "La exposición de orfebrería prehispánica cerró temprano.",
      exampleTranslation: "The pre-Hispanic goldwork exhibition closed early."
    },
    {
      spanish: "El guardia",
      english: "The security guard",
      pos: "Noun (masculine)",
      context: "The patrol personnel entrusted with physical surveillance and visitor security.",
      example: "El guardia descendió al sótano tras escuchar una alarma acústica.",
      exampleTranslation: "The guard descended to the basement after hearing an acoustic alarm."
    },
    {
      spanish: "La vitrina",
      english: "The display case / vitrine",
      pos: "Noun (feminine)",
      context: "The reinforced, sensor-equipped glass enclosure shielding the artefact.",
      example: "La vitrina hermética fue abierta sin romper el cristal.",
      exampleTranslation: "The hermetic display case was opened without breaking the glass."
    },
    {
      spanish: "El informe",
      english: "The official report",
      pos: "Noun (masculine)",
      context: "The formal technical document recording lab discoveries and police conclusions.",
      example: "El informe pericial detalló los restos de solvente DMF.",
      exampleTranslation: "The forensic report detailed the DMF solvent residue."
    },
    {
      spanish: "La confesión",
      english: "The confession",
      pos: "Noun (feminine)",
      context: "The voluntary formal admission of guilt and modus operandi given by the perpetrator.",
      example: "La sospechosa firmó una confesión completa ante las autoridades.",
      exampleTranslation: "The suspect signed a full confession before authorities."
    },
    {
      spanish: "El enigma",
      english: "The enigma / riddle",
      pos: "Noun (masculine)",
      context: "A coded Spanish cipher or cryptic inscription requiring linguistic decoding.",
      example: "El enigma de la vitrina requirió razonamiento deductivo.",
      exampleTranslation: "The vitrine enigma required deductive reasoning."
    },
    {
      spanish: "La recompensa",
      english: "The reward / score",
      pos: "Noun (feminine)",
      context: "The academic rating and quantitative score achieved through sound deduction.",
      example: "El detective recibió una alta recompensa por su precisión.",
      exampleTranslation: "The detective received a high score for their accuracy."
    },
    {
      spanish: "Puntuación",
      english: "Score / Rating",
      pos: "Noun (feminine)",
      context: "The transparent evaluation score measuring deductive and investigative accuracy.",
      example: "La puntuación final refleja las deducciones comprobadas.",
      exampleTranslation: "The final score reflects verified deductions."
    },
    {
      spanish: "Deducción",
      english: "Deduction / Reasoning",
      pos: "Noun (feminine)",
      context: "The analytical process of deriving logical conclusions from physical premises.",
      example: "Una deducción lógica descartó a los sospechosos inocentes.",
      exampleTranslation: "A logical deduction ruled out innocent suspects."
    },
    {
      spanish: "Revisar",
      english: "To review / examine",
      pos: "Verb",
      context: "To thoroughly audit evidence logs, alibis, and timeline discrepancies.",
      example: "Es necesario revisar todas las pistas antes de acusar.",
      exampleTranslation: "It is necessary to review all clues before accusing."
    },
    {
      spanish: "Reiniciar",
      english: "To restart / reset",
      pos: "Verb",
      context: "To reset the investigation session to test alternate investigative hypotheses.",
      example: "El jugador puede reiniciar el caso para probar otra hipótesis.",
      exampleTranslation: "The player can restart the case to test another hypothesis."
    },
    {
      spanish: "El archivo",
      english: "The archive / case file",
      pos: "Noun (masculine)",
      context: "The organized repository of testimonies, chemical spectra, and case records.",
      example: "El archivo judicial contiene las actas de interrogatorio.",
      exampleTranslation: "The judicial file contains the interrogation transcripts."
    }
  ]
};

/**
 * ------------------------------------------------------------------------------
 * REACTIVE GAME STATE (GAME_STATE)
 * ------------------------------------------------------------------------------
 */
const GAME_STATE = {
  selectedSuspectId: null,
  accusationSubmitted: false,
  accusationReason: "",
  finalScore: 0,
  
  // Integration parameters (from Modules 1–4 or Sandbox Drawer)
  priorCluesDiscovered: 3,  // 0 to 3 clues discovered in previous modules
  priorPuzzleSolved: true   // Spanish cipher solved
};

/**
 * ------------------------------------------------------------------------------
 * DOM INITIALIZATION
 * ------------------------------------------------------------------------------
 */
document.addEventListener("DOMContentLoaded", () => {
  detectIntegrationParameters();
  populateStoryPlaceholders();
  renderIncidentTimeline();
  renderEditorialSuspects();
  renderSelectionSuspects();
  renderEvidenceArchive();
  renderExonerationList();
  setupSpanishPracticeChallenge();
  renderGlossary(STORY_CONFIG.vocabulary);
  renderCulturalSources();
  setupEventListeners();
  setupNavigationInteractions();
});

/**
 * ------------------------------------------------------------------------------
 * 1. INTEGRATION PARAMETER DETECTION (MODULES 1–4)
 * ------------------------------------------------------------------------------
 */
function detectIntegrationParameters() {
  // 1. URL Query Parameters (e.g., reveal.html?clues=3&puzzle=1)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("clues")) {
    const cluesVal = parseInt(urlParams.get("clues"), 10);
    if (!isNaN(cluesVal) && cluesVal >= 0 && cluesVal <= 3) {
      GAME_STATE.priorCluesDiscovered = cluesVal;
    }
  }
  if (urlParams.has("puzzle")) {
    GAME_STATE.priorPuzzleSolved = urlParams.get("puzzle") === "1" || urlParams.get("puzzle") === "true";
  }

  // 2. localStorage Integration
  try {
    const savedState = localStorage.getItem("quienFueGameState");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      if (typeof parsed.cluesCount === "number") GAME_STATE.priorCluesDiscovered = parsed.cluesCount;
      if (typeof parsed.puzzleSolved === "boolean") GAME_STATE.priorPuzzleSolved = parsed.puzzleSolved;
    }
  } catch (e) {
    // Standalone fallback
  }

  // 3. Shared Global Window Object
  if (window.quienFueSharedData) {
    if (typeof window.quienFueSharedData.cluesDiscovered === "number") {
      GAME_STATE.priorCluesDiscovered = window.quienFueSharedData.cluesDiscovered;
    }
    if (typeof window.quienFueSharedData.puzzleSolved === "boolean") {
      GAME_STATE.priorPuzzleSolved = window.quienFueSharedData.puzzleSolved;
    }
  }

  // Sync Simulator Controls
  const simCluesInput = document.getElementById("simCluesCount");
  const simPuzzleCheck = document.getElementById("simPuzzleCheckbox");
  if (simCluesInput) simCluesInput.value = GAME_STATE.priorCluesDiscovered;
  if (simPuzzleCheck) simPuzzleCheck.checked = GAME_STATE.priorPuzzleSolved;
}

/**
 * ------------------------------------------------------------------------------
 * 2. DOM POPULATION FROM STORY_CONFIG
 * ------------------------------------------------------------------------------
 */
function populateStoryPlaceholders() {
  // Author Identification
  document.querySelectorAll(".author-inline-name").forEach(el => {
    el.textContent = STORY_CONFIG.author.name;
  });

  // Artefact Metadata
  document.querySelectorAll(".artefact-inline-name").forEach(el => {
    el.textContent = STORY_CONFIG.artefact.name;
  });

  const statsArtefact = document.getElementById("statsArtefactName");
  if (statsArtefact) statsArtefact.textContent = STORY_CONFIG.artefact.name;

  const displayCultureName = document.getElementById("displayCultureName");
  if (displayCultureName) displayCultureName.textContent = STORY_CONFIG.artefact.originCulture;

  const displayArtefactPeriod = document.getElementById("displayArtefactPeriod");
  if (displayArtefactPeriod) displayArtefactPeriod.textContent = STORY_CONFIG.artefact.estimatedDate;

  const displayArtefactContext = document.getElementById("displayArtefactContext");
  if (displayArtefactContext) displayArtefactContext.textContent = STORY_CONFIG.artefact.historicalContext;
}

/**
 * ------------------------------------------------------------------------------
 * 2B. INCIDENT TIMELINE (SECTION D)
 * ------------------------------------------------------------------------------
 */
function renderIncidentTimeline() {
  const container = document.getElementById("incidentTimelineContainer");
  if (!container || !STORY_CONFIG.timeline) return;

  container.innerHTML = "";
  STORY_CONFIG.timeline.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "timeline-entry";
    div.setAttribute("role", "listitem");
    div.innerHTML = `
      <span class="timeline-time">${entry.time}</span>
      <div class="timeline-body">
        <strong>${entry.title}:</strong> ${entry.body}
      </div>
    `;
    container.appendChild(div);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 3. EDITORIAL SUSPECT GALLERY (SECTION E)
 * ------------------------------------------------------------------------------
 */
function renderEditorialSuspects() {
  const container = document.getElementById("suspectsEditorialGallery");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.suspects.forEach((suspect, idx) => {
    const card = document.createElement("article");
    card.className = "editorial-suspect-card";
    card.innerHTML = `
      <div class="suspect-card-meta">
        <span class="suspect-id-tag">SOSPECHOSO #0${idx + 1} (Suspect File)</span>
        <span>INTERROGATION FILE</span>
      </div>
      <div class="suspect-avatar-box" aria-hidden="true">${suspect.avatar}</div>
      <h3 class="editorial-suspect-name">${suspect.name}</h3>
      <p class="editorial-suspect-role">${suspect.role}</p>
      <p class="editorial-suspect-snippet">${suspect.snippet}</p>

      ${suspect.testimony ? `
      <div class="suspect-testimony-box">
        <span class="suspect-testimony-label">First-Person Testimony:</span>
        <blockquote class="suspect-testimony-quote">“${suspect.testimony}”</blockquote>
      </div>` : ""}

      <div class="suspect-alibi-preview">
        <strong>Stated Alibi:</strong> ${suspect.alibi}
      </div>

      ${suspect.redHerring ? `
      <div class="suspect-herring-note">
        <strong>Suspicious Circumstance:</strong> ${suspect.redHerring}
      </div>` : ""}

      <a href="#veredicto" class="suspect-dossier-link" data-select-suspect="${suspect.id}">
        <span>INSPECT & ACCUSE</span>
        <span aria-hidden="true">→</span>
      </a>
    `;

    // Connect link to form pre-selection
    const link = card.querySelector(".suspect-dossier-link");
    if (link) {
      link.addEventListener("click", () => {
        selectSuspect(suspect.id);
      });
    }

    container.appendChild(card);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 4. ACCUSATION SUSPECT SELECTION (SECTION G — CORE MODULE)
 * ------------------------------------------------------------------------------
 */
function renderSelectionSuspects() {
  const container = document.getElementById("suspectsGrid");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.suspects.forEach((suspect, index) => {
    const card = document.createElement("div");
    card.className = "suspect-selection-card";
    card.id = `select-card-${suspect.id}`;
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", "false");
    card.setAttribute("tabindex", index === 0 ? "0" : "-1");
    card.dataset.suspectId = suspect.id;

    card.innerHTML = `
      <span class="selected-badge">SELECTED</span>
      <input
        type="radio"
        id="radio-${suspect.id}"
        name="suspectSelection"
        value="${suspect.id}"
        tabindex="-1"
        aria-label="Suspect ${index + 1}: ${suspect.name}, ${suspect.role}"
      >
      <div class="selection-avatar" aria-hidden="true">${suspect.avatar}</div>
      <h4 class="selection-name">${suspect.name}</h4>
      <p class="selection-role">${suspect.role}</p>
      <p class="selection-snippet">${suspect.snippet}</p>
    `;

    card.addEventListener("click", () => {
      selectSuspect(suspect.id);
    });

    // Keyboard Navigation (WAI-ARIA Radio Group)
    card.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        selectSuspect(suspect.id);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        navigateSelectionCards(index, 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigateSelectionCards(index, -1);
      }
    });

    container.appendChild(card);
  });
}

function navigateSelectionCards(currentIndex, offset) {
  const cards = document.querySelectorAll(".suspect-selection-card");
  const total = cards.length;
  const nextIndex = (currentIndex + offset + total) % total;

  cards.forEach((c, idx) => {
    c.setAttribute("tabindex", idx === nextIndex ? "0" : "-1");
  });

  cards[nextIndex].focus();
}

function selectSuspect(suspectId) {
  GAME_STATE.selectedSuspectId = suspectId;
  hideValidationError();

  const cards = document.querySelectorAll(".suspect-selection-card");
  cards.forEach((card) => {
    const isThisSelected = card.dataset.suspectId === suspectId;
    card.classList.toggle("is-selected", isThisSelected);
    card.setAttribute("aria-checked", isThisSelected ? "true" : "false");
    card.setAttribute("tabindex", isThisSelected ? "0" : "-1");

    const radioInput = card.querySelector('input[type="radio"]');
    if (radioInput) radioInput.checked = isThisSelected;
  });
}

/**
 * ------------------------------------------------------------------------------
 * 5. EVIDENCE ARCHIVE (SECTION F)
 * ------------------------------------------------------------------------------
 */
function renderEvidenceArchive() {
  const container = document.getElementById("evidenceCardsContainer");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.evidence.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "editorial-evidence-card";
    card.innerHTML = `
      <div class="evidence-meta-header">
        <span class="evidence-id-code">EVIDENCIA #0${index + 1} (Evidence Exhibit)</span>
        <span class="evidence-category">${item.type}</span>
      </div>
      <h3 class="editorial-evidence-title">${item.title}</h3>
      <div class="evidence-fact-group">
        <h6>🔍 DISCOVERY AT CRIME SCENE:</h6>
        <p class="evidence-fact-text">${item.discovery}</p>
      </div>
      <div class="evidence-fact-group">
        <h6>🔗 CONNECTION TO PRIME SUSPECT:</h6>
        <p class="evidence-fact-text">${item.connection}</p>
      </div>
      <div class="evidence-fact-group">
        <h6>⚖️ LEGAL & PROBATIVE VALUE:</h6>
        <p class="evidence-fact-text">${item.significance}</p>
      </div>
      ${item.proves ? `
      <div class="evidence-proves-box">
        <span class="evidence-proves-label">✓ What This Clue Proves:</span>
        <p class="evidence-fact-text">${item.proves}</p>
      </div>` : ""}
      ${item.doesNotProve ? `
      <div class="evidence-limits-box">
        <span class="evidence-limits-label">⚠ Limitations / Corroboration Needed:</span>
        <p class="evidence-fact-text">${item.doesNotProve}</p>
      </div>` : ""}
    `;
    container.appendChild(card);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 6. EXONERATION OF INNOCENT SUSPECTS (SECTION G)
 * ------------------------------------------------------------------------------
 */
function renderExonerationList() {
  const container = document.getElementById("exonerationListContainer");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.suspects.forEach((suspect) => {
    if (suspect.id === STORY_CONFIG.culpritId) return; // Culprit displayed in master card

    const item = document.createElement("div");
    item.className = "exoneration-card";
    item.innerHTML = `
      <div class="exoneration-card-header">
        <span class="exoneration-name">👤 ${suspect.name} (${suspect.role})</span>
        <span class="badge-cleared">EXONERATED (Alibi Verified)</span>
      </div>
      <p class="exoneration-reason-text">
        <strong>Forensic Exoneration Grounds:</strong> ${suspect.exoneration}
      </p>
      ${suspect.redHerringExplanation ? `
      <div class="exoneration-herring-box">
        <span class="exoneration-herring-label">Red Herring Explanation:</span>
        <p class="exoneration-reason-text">${suspect.redHerringExplanation}</p>
      </div>` : ""}
    `;
    container.appendChild(item);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 7. ACCUSATION SUBMISSION & VALIDATION
 * ------------------------------------------------------------------------------
 */
function handleAccusationSubmit(event) {
  event.preventDefault();

  if (!GAME_STATE.selectedSuspectId) {
    showValidationError("You must select one of the five suspects before formalizing your judicial accusation.");
    return;
  }

  const reasonInput = document.getElementById("accusationReason");
  GAME_STATE.accusationReason = reasonInput ? reasonInput.value.trim() : "";
  GAME_STATE.accusationSubmitted = true;

  revealCulpritOutcome();
}

function showValidationError(message) {
  const alertBox = document.getElementById("validationAlert");
  const alertText = document.getElementById("validationAlertText");
  if (alertBox && alertText) {
    alertText.textContent = message;
    alertBox.classList.remove("alert-hidden");
    alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
    alertBox.focus();
  }
}

function hideValidationError() {
  const alertBox = document.getElementById("validationAlert");
  if (alertBox) alertBox.classList.add("alert-hidden");
}

/**
 * ------------------------------------------------------------------------------
 * 8. DRAMATIC VERDICT REVEAL
 * ------------------------------------------------------------------------------
 */
function revealCulpritOutcome() {
  const isCorrect = GAME_STATE.selectedSuspectId === STORY_CONFIG.culpritId;
  const chosenSuspect = STORY_CONFIG.suspects.find(s => s.id === GAME_STATE.selectedSuspectId);
  const trueCulprit = STORY_CONFIG.suspects.find(s => s.id === STORY_CONFIG.culpritId) || STORY_CONFIG.culprit;

  const revealSection = document.getElementById("revealSection");
  const outcomeBanner = document.getElementById("outcomeBanner");
  const outcomeIcon = document.getElementById("outcomeIcon");
  const outcomeTag = document.getElementById("outcomeTag");
  const outcomeTitle = document.getElementById("revealHeading");
  const outcomeMessage = document.getElementById("outcomeMessage");

  // Populate Culprit Dossier
  document.getElementById("revealCulpritAvatar").textContent = trueCulprit.avatar || STORY_CONFIG.culprit.avatar;
  document.getElementById("revealCulpritName").textContent = STORY_CONFIG.culprit.name;
  document.getElementById("revealCulpritRole").textContent = STORY_CONFIG.culprit.role;
  document.getElementById("revealCulpritMotive").textContent = STORY_CONFIG.culprit.motive;
  document.getElementById("revealCulpritModus").textContent = STORY_CONFIG.culprit.modusOperandi;
  document.getElementById("revealCulpritConfession").textContent = `"${STORY_CONFIG.culprit.confession}"`;

  outcomeBanner.classList.remove("outcome-correct", "outcome-incorrect");

  if (isCorrect) {
    outcomeBanner.classList.add("outcome-correct");
    outcomeIcon.textContent = "⚖️";
    outcomeTag.textContent = "CASE SOLVED • ACCUSATION VERIFIED";
    outcomeTitle.textContent = `Correct Verdict! The perpetrator is ${STORY_CONFIG.culprit.name}`;
    outcomeMessage.textContent = `Your deduction against ${chosenSuspect.name} was impeccable. The chemical solvent analysis, shift notes, and latent fingerprints conclusively prove her guilt. The sun pectoral has been secured and returned to museum vaults.`;
  } else {
    outcomeBanner.classList.add("outcome-incorrect");
    outcomeIcon.textContent = "❌";
    outcomeTag.textContent = "WRONGFUL ACCUSATION • CASE FILE CLOSED";
    outcomeTitle.textContent = `Your accusation against ${chosenSuspect ? chosenSuspect.name : "the suspect"} was disproven`;
    outcomeMessage.textContent = `Although circumstantial suspicions existed, ${chosenSuspect ? chosenSuspect.name : "this suspect"} possessed an airtight alibi. Forensic evidence conclusively identified the real culprit as ${STORY_CONFIG.culprit.name}. Examine her full confession and decisive evidence below.`;
  }

  calculateAndRenderScore(isCorrect);
  revealSection.classList.remove("section-hidden");
  revealSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * ------------------------------------------------------------------------------
 * 9. TRANSPARENT MATHEMATICAL SCORING ENGINE
 * ------------------------------------------------------------------------------
 */
function calculateAndRenderScore(isAccusationCorrect) {
  // Criterion 1: Correct Accusation (50 pts)
  const accusationPoints = isAccusationCorrect ? 50 : 0;

  // Criterion 2: Detective Forensic Reasoning Bonus (20 pts)
  const reasonLen = GAME_STATE.accusationReason.length;
  let reasonPoints = 0;
  let reasonStatus = "No reasoning provided (0 pts)";
  if (reasonLen >= 20) {
    reasonPoints = 20;
    reasonStatus = `Comprehensive deduction documented (${reasonLen} characters)`;
  } else if (reasonLen > 0) {
    reasonPoints = 10;
    reasonStatus = `Brief deduction note (${reasonLen} characters)`;
  }

  // Criterion 3: Discovered Physical Evidence (30 pts: 10 pts per clue)
  const cluesPoints = Math.min(3, Math.max(0, GAME_STATE.priorCluesDiscovered)) * 10;
  const cluesStatus = `${GAME_STATE.priorCluesDiscovered} of 3 forensic exhibits analyzed`;

  let totalScore = accusationPoints + reasonPoints + cluesPoints;
  if (totalScore > 100) totalScore = 100;
  GAME_STATE.finalScore = totalScore;

  document.getElementById("finalScoreNumber").textContent = totalScore;
  const rankInfo = getRankDetails(totalScore);
  document.getElementById("finalRankTitle").textContent = rankInfo.title;
  document.getElementById("finalRankFeedback").textContent = rankInfo.feedback;

  const tbody = document.getElementById("scoreBreakdownBody");
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td><strong>IDENTIFICATION OF THE TRUE CULPRIT</strong><br><small>Formal judicial verdict in court</small></td>
        <td>${isAccusationCorrect ? "✅ Correct (+50 pts)" : "❌ Incorrect (0 pts)"}</td>
        <td class="text-right">50</td>
        <td class="text-right points-assigned">${accusationPoints}</td>
      </tr>
      <tr>
        <td><strong>FORENSIC DEDUCTION & REASONING</strong><br><small>Analytical argument written by the detective</small></td>
        <td>${reasonStatus}</td>
        <td class="text-right">20</td>
        <td class="text-right points-assigned">${reasonPoints}</td>
      </tr>
      <tr>
        <td><strong>FORENSIC EVIDENCE UNDER CUSTODY</strong><br><small>Exhibits synthesized during the investigation</small></td>
        <td>${cluesStatus}</td>
        <td class="text-right">30</td>
        <td class="text-right points-assigned">${cluesPoints}</td>
      </tr>
      <tr style="background: rgba(129, 59, 45, 0.15); font-weight: bold;">
        <td colspan="2">TOTAL AUDITED INVESTIGATION SCORE</td>
        <td class="text-right">100</td>
        <td class="text-right points-assigned" style="font-size: 1.2rem; color: var(--color-rust-light);">${totalScore}</td>
      </tr>
    `;
  }
}

function getRankDetails(score) {
  if (score >= 90) {
    return {
      title: "🏆 Master Antiquities Investigator",
      feedback: "Exceptional detective work! You solved the museum heist with flawless evidentiary synthesis and airtight logical reasoning."
    };
  } else if (score >= 70) {
    return {
      title: "🔍 Shrewd Forensic Detective",
      feedback: "Strong forensic analysis. You identified critical clues and unraveled the core methodology of the crime."
    };
  } else if (score >= 50) {
    return {
      title: "📋 Police Assistant Investigator",
      feedback: "You identified the culprit or provided useful deductions, though deeper examination of chemical evidence was needed."
    };
  } else {
    return {
      title: "⚠️ Trainee Detective (Cold Case)",
      feedback: "The accusation collapsed under cross-examination. Re-examine the timeline and exhibits, then try again."
    };
  }
}

/**
 * ------------------------------------------------------------------------------
 * 10. REPLAY & STATE RESET ENGINE
 * ------------------------------------------------------------------------------
 */
function handleReplay() {
  GAME_STATE.selectedSuspectId = null;
  GAME_STATE.accusationSubmitted = false;
  GAME_STATE.accusationReason = "";
  GAME_STATE.finalScore = 0;

  const form = document.getElementById("accusationForm");
  if (form) form.reset();

  const reasonInput = document.getElementById("accusationReason");
  if (reasonInput) reasonInput.value = "";
  updateCharCounter();

  const cards = document.querySelectorAll(".suspect-selection-card");
  cards.forEach((card, index) => {
    card.classList.remove("is-selected");
    card.setAttribute("aria-checked", "false");
    card.setAttribute("tabindex", index === 0 ? "0" : "-1");
    const radio = card.querySelector('input[type="radio"]');
    if (radio) radio.checked = false;
  });

  const revealSection = document.getElementById("revealSection");
  if (revealSection) revealSection.classList.add("section-hidden");
  hideValidationError();

  resetPracticeChallenge();

  const target = document.getElementById("veredicto");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (cards.length > 0) {
    cards[0].focus();
  }
}

/**
 * ------------------------------------------------------------------------------
 * 11. BILINGUAL SPANISH GLOSSARY (30 TERMS)
 * ------------------------------------------------------------------------------
 */
function renderGlossary(wordsToRender) {
  const container = document.getElementById("glossaryGridContainer");
  if (!container) return;

  container.innerHTML = "";

  if (wordsToRender.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; color: var(--color-text-muted); text-align: center; padding: 2rem;">No matching vocabulary terms found.</p>`;
    return;
  }

  wordsToRender.forEach(item => {
    const card = document.createElement("article");
    card.className = "glossary-item-card";
    card.innerHTML = `
      <div class="glossary-word-header">
        <h4 class="glossary-spanish-word">${item.spanish}</h4>
        <span class="glossary-pos-tag">${item.pos}</span>
      </div>
      <p class="glossary-translation">🇬🇧 ${item.english}</p>
      <p class="glossary-usage">${item.context}</p>
      <div class="glossary-example-box">
        <p class="glossary-example-es">“${item.example}”</p>
        <p class="glossary-example-en">(${item.exampleTranslation})</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function handleGlossarySearch(event) {
  const query = event.target.value.toLowerCase().trim();
  const filtered = STORY_CONFIG.vocabulary.filter(item => {
    return item.spanish.toLowerCase().includes(query) ||
           item.english.toLowerCase().includes(query) ||
           (item.pos && item.pos.toLowerCase().includes(query)) ||
           (item.context && item.context.toLowerCase().includes(query)) ||
           (item.example && item.example.toLowerCase().includes(query)) ||
           (item.exampleTranslation && item.exampleTranslation.toLowerCase().includes(query));
  });
  renderGlossary(filtered);

  const badge = document.getElementById("glossaryWordCountBadge");
  if (badge) {
    badge.textContent = `${filtered.length} of ${STORY_CONFIG.vocabulary.length} terms`;
  }
}

/**
 * ------------------------------------------------------------------------------
 * 12. CULTURAL SOURCES RENDERING
 * ------------------------------------------------------------------------------
 */
function renderCulturalSources() {
  const container = document.getElementById("sourcesListContainer");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.culturalSources.forEach(source => {
    const item = document.createElement("div");
    item.className = "source-dossier-item";
    item.innerHTML = `
      <h4 class="source-title-text">${source.title} — <em>${source.institution}</em></h4>
      <p class="source-citation-text"><strong>Academic Citation:</strong> ${source.citation}</p>
      <p class="source-citation-text" style="margin-top: 0.35rem; color: var(--color-text-muted);"><strong>Archival Provenance:</strong> ${source.notes}</p>
    `;
    container.appendChild(item);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 13. CHAR COUNTER FOR DEDUCTION FIELD
 * ------------------------------------------------------------------------------
 */
function updateCharCounter() {
  const reasonInput = document.getElementById("accusationReason");
  const counterSpan = document.getElementById("reasoningCharCounter");
  if (!reasonInput || !counterSpan) return;

  const len = reasonInput.value.length;
  counterSpan.textContent = `${len} characters entered`;

  if (len >= 20) {
    counterSpan.style.color = "var(--color-rust-light)";
    counterSpan.style.fontWeight = "bold";
  } else {
    counterSpan.style.color = "var(--color-text-muted)";
    counterSpan.style.fontWeight = "normal";
  }
}

/**
 * ------------------------------------------------------------------------------
 * 14. EVENT LISTENERS & NAVIGATION
 * ------------------------------------------------------------------------------
 */
function setupEventListeners() {
  const accusationForm = document.getElementById("accusationForm");
  if (accusationForm) {
    accusationForm.addEventListener("submit", handleAccusationSubmit);
  }

  const reasonInput = document.getElementById("accusationReason");
  if (reasonInput) {
    reasonInput.addEventListener("input", updateCharCounter);
  }

  const replayBtn = document.getElementById("replayBtn");
  if (replayBtn) {
    replayBtn.addEventListener("click", handleReplay);
  }

  const glossarySearch = document.getElementById("glossarySearchInput");
  if (glossarySearch) {
    glossarySearch.addEventListener("input", handleGlossarySearch);
  }

  const applySimBtn = document.getElementById("applyIntegrationSimBtn");
  if (applySimBtn) {
    applySimBtn.addEventListener("click", () => {
      const simCluesInput = document.getElementById("simCluesCount");
      const simPuzzleCheck = document.getElementById("simPuzzleCheckbox");
      const statusMsg = document.getElementById("simStatusMsg");

      if (simCluesInput) {
        GAME_STATE.priorCluesDiscovered = parseInt(simCluesInput.value, 10) || 0;
      }
      if (simPuzzleCheck) {
        GAME_STATE.priorPuzzleSolved = simPuzzleCheck.checked;
      }

      if (statusMsg) {
        statusMsg.textContent = "✓ Integration parameters updated.";
        setTimeout(() => { statusMsg.textContent = ""; }, 3000);
      }

      if (GAME_STATE.accusationSubmitted) {
        const isCorrect = GAME_STATE.selectedSuspectId === STORY_CONFIG.culpritId;
        calculateAndRenderScore(isCorrect);
      }
    });
  }
}

function setupNavigationInteractions() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * 15. OPTIONAL SPANISH PRACTICE CHALLENGE (FIELD NOTE DECRYPTION)
 * ------------------------------------------------------------------------------
 */
const PRACTICE_CHALLENGE = {
  terms: [
    { id: "vitrina", spanish: "La vitrina", english: "Display case / Vitrine" },
    { id: "huella", spanish: "La huella", english: "Fingerprint / Ridge impression" },
    { id: "motivo", spanish: "El motivo", english: "Criminal motive" },
    { id: "coartada", spanish: "La coartada", english: "Verified alibi" }
  ],
  selectedSpanishId: null,
  matchedIds: new Set()
};

function setupSpanishPracticeChallenge() {
  renderPracticeButtons();
  const resetBtn = document.getElementById("resetPracticeBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetPracticeChallenge);
  }
}

function renderPracticeButtons() {
  const spanishList = document.getElementById("spanishTermsList");
  const englishList = document.getElementById("englishTermsList");
  if (!spanishList || !englishList) return;

  spanishList.innerHTML = "";
  englishList.innerHTML = "";

  // Fixed order for Spanish terms
  PRACTICE_CHALLENGE.terms.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "term-match-btn";
    btn.id = `practice-es-${item.id}`;
    btn.dataset.termId = item.id;
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `<span>${item.spanish}</span><span class="match-icon" aria-hidden="true">➜</span>`;
    btn.addEventListener("click", () => handleSpanishTermClick(item.id));
    spanishList.appendChild(btn);
  });

  // Shuffled order for English meanings
  const shuffledEnglish = [
    PRACTICE_CHALLENGE.terms[3], // coartada
    PRACTICE_CHALLENGE.terms[0], // vitrina
    PRACTICE_CHALLENGE.terms[2], // motivo
    PRACTICE_CHALLENGE.terms[1]  // huella
  ];

  shuffledEnglish.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "term-match-btn";
    btn.id = `practice-en-${item.id}`;
    btn.dataset.termId = item.id;
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `<span>${item.english}</span><span class="match-icon" aria-hidden="true">➜</span>`;
    btn.addEventListener("click", () => handleEnglishMeaningClick(item.id));
    englishList.appendChild(btn);
  });

  updatePracticeStatus("Select a Spanish term on the left, then select its matching English meaning on the right.");
  updatePracticeCounter();
}

function handleSpanishTermClick(termId) {
  if (PRACTICE_CHALLENGE.matchedIds.has(termId)) return;

  PRACTICE_CHALLENGE.selectedSpanishId = termId;

  document.querySelectorAll("#spanishTermsList .term-match-btn").forEach(btn => {
    const isSelected = btn.dataset.termId === termId;
    btn.classList.toggle("is-active", isSelected);
    btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  const termObj = PRACTICE_CHALLENGE.terms.find(t => t.id === termId);
  updatePracticeStatus(`Selected "${termObj.spanish}". Now select its matching English meaning on the right.`);
}

function handleEnglishMeaningClick(termId) {
  if (PRACTICE_CHALLENGE.matchedIds.has(termId)) return;

  if (!PRACTICE_CHALLENGE.selectedSpanishId) {
    updatePracticeStatus("Please select a Spanish term on the left first.");
    return;
  }

  const selectedSpanishId = PRACTICE_CHALLENGE.selectedSpanishId;
  const esBtn = document.getElementById(`practice-es-${selectedSpanishId}`);
  const enBtn = document.getElementById(`practice-en-${termId}`);

  if (selectedSpanishId === termId) {
    // Correct Match
    PRACTICE_CHALLENGE.matchedIds.add(termId);
    PRACTICE_CHALLENGE.selectedSpanishId = null;

    if (esBtn) {
      esBtn.classList.remove("is-active");
      esBtn.classList.add("is-matched");
      esBtn.disabled = true;
      esBtn.setAttribute("aria-pressed", "false");
      const icon = esBtn.querySelector(".match-icon");
      if (icon) icon.textContent = "✓";
    }
    if (enBtn) {
      enBtn.classList.add("is-matched");
      enBtn.disabled = true;
      enBtn.setAttribute("aria-pressed", "false");
      const icon = enBtn.querySelector(".match-icon");
      if (icon) icon.textContent = "✓";
    }

    updatePracticeCounter();

    if (PRACTICE_CHALLENGE.matchedIds.size === PRACTICE_CHALLENGE.terms.length) {
      updatePracticeStatus("✓ Excellent! All 4 forensic terms decrypted successfully.");
      const banner = document.getElementById("practiceCompleteBanner");
      if (banner) banner.classList.remove("practice-hidden");
    } else {
      const matchedObj = PRACTICE_CHALLENGE.terms.find(t => t.id === termId);
      updatePracticeStatus(`✓ Correct! "${matchedObj.spanish}" matches "${matchedObj.english}". Select another term.`);
    }
  } else {
    // Mismatch
    if (esBtn) esBtn.classList.add("is-mismatch");
    if (enBtn) enBtn.classList.add("is-mismatch");

    updatePracticeStatus("❌ Not a match. Review the field note clue and try again.");

    setTimeout(() => {
      if (esBtn) {
        esBtn.classList.remove("is-mismatch", "is-active");
        esBtn.setAttribute("aria-pressed", "false");
      }
      if (enBtn) {
        enBtn.classList.remove("is-mismatch");
        enBtn.setAttribute("aria-pressed", "false");
      }
      PRACTICE_CHALLENGE.selectedSpanishId = null;
    }, 500);
  }
}

function updatePracticeStatus(msg) {
  const statusText = document.getElementById("practiceStatusText");
  if (statusText) statusText.textContent = msg;
}

function updatePracticeCounter() {
  const counter = document.getElementById("practiceSolvedCount");
  if (counter) counter.textContent = PRACTICE_CHALLENGE.matchedIds.size;
}

function resetPracticeChallenge() {
  PRACTICE_CHALLENGE.selectedSpanishId = null;
  PRACTICE_CHALLENGE.matchedIds.clear();

  const banner = document.getElementById("practiceCompleteBanner");
  if (banner) banner.classList.add("practice-hidden");

  renderPracticeButtons();
}

/**
 * ------------------------------------------------------------------------------
 * TEAM INTEGRATION API (MODULES 1–4)
 * ------------------------------------------------------------------------------
 */
window.QuienFueRevealModule = {
  setInvestigationData: function(cluesCount, puzzleSolved) {
    if (typeof cluesCount === "number") GAME_STATE.priorCluesDiscovered = cluesCount;
    if (typeof puzzleSolved === "boolean") GAME_STATE.priorPuzzleSolved = puzzleSolved;
    const simCluesInput = document.getElementById("simCluesCount");
    const simPuzzleCheck = document.getElementById("simPuzzleCheckbox");
    if (simCluesInput) simCluesInput.value = GAME_STATE.priorCluesDiscovered;
    if (simPuzzleCheck) simPuzzleCheck.checked = GAME_STATE.priorPuzzleSolved;
  },

  getGameState: function() {
    return { ...GAME_STATE };
  },

  resetGame: handleReplay
};
