/**
 * ==============================================================================
 * ¿QUIÉN FUE? (WHO WAS IT?) — FORENSIC INVESTIGATION & FINAL VERDICT
 * Archivo: reveal.js
 * Rol del Proyecto: Miembro 5 — Veredicto Final, Revelación de la Culpable, 
 *                   Síntesis de Evidencias, Sistema de Puntuación y Reinicio.
 * Autor: Sabharish Raj G K (En colaboración con Miembro 3: Shaik Annu — Página 1)
 * Expediente: EXPEDIENTE CONFIDENCIAL · N.º 047 (El archivo de las identidades perdidas)
 * ==============================================================================
 */

"use strict";

/**
 * ------------------------------------------------------------------------------
 * CONFIGURACIÓN CENTRAL DEL CASO (STORY_CONFIG)
 * ------------------------------------------------------------------------------
 * Canon simplificado y directo, sincronizado con el Expediente 047 de Shaik Annu.
 * Con traducciones claras al inglés para títulos, botones y conceptos clave.
 */
const STORY_CONFIG = {
  // Configuración de Autoría y Equipo
  author: {
    name: "Sabharish Raj G K",
    role: "Miembro 5 — Veredicto Final, Revelación de la Culpable & Puntuación (Final Accusation & Scoring)",
    projectTitle: "¿Quién Fue? — El archivo de las identidades perdidas (The Archive of Lost Identities)",
    caseNumber: "EXPEDIENTE CONFIDENCIAL · N.º 047"
  },

  // Roster del Equipo de Investigación
  team: [
    { member: "Miembro 1", name: "Sofia Ramirez", role: "Archivos del Museo (Museum Archives)" },
    { member: "Miembro 2", name: "Mateo Gomez", role: "Interrogatorios y Coartadas (Suspect Alibis)" },
    { member: "Miembro 3", name: "Shaik Annu", role: "Archivo de Evidencias y Fotografías (Evidence Archive · Página 1)" },
    { member: "Miembro 4", name: "Diego Alvarez", role: "Inspección de la Escena (Crime Scene Inspection)" },
    { member: "Miembro 5", name: "Sabharish Raj G K", role: "Veredicto Final & Revelación (Final Accusation & Verdict Reveal)" }
  ],

  // Metadatos Canónicos del Caso
  caseMeta: {
    caseNumber: "EXPEDIENTE CONFIDENCIAL · N.º 047",
    subtitle: "El archivo de las identidades perdidas (The Archive of Lost Identities)",
    museum: "Museo de Historia y Cultura (Museum of History & Culture)",
    theftDate: "14 de octubre (October 14)",
    incidentTime: "10:05 – 10:30 HRS",
    location: "Archivo Administrativo y Fondos Reservados (Administrative Archive Vault)",
    theftDuration: "25 minutos (25-minute window: 10:05 to 10:30 HRS)",
    incidentSummary: "Un valioso documento histórico y tesoro familiar desapareció del archivo del museo el 14 de octubre entre las 10:05 y las 10:30."
  },

  // Cronología Oficial de los Hechos (Historical Timeline)
  timeline: [
    {
      time: "1932",
      title: "Registro de Isabel Martín (First Record)",
      body: "La sospechosa aparece registrada formalmente bajo el nombre de Isabel Martín (Fotografía A · 1932).",
      badge: "1932 · ISABEL MARTÍN"
    },
    {
      time: "1941",
      title: "Registro de Elena Castillo (Second Record)",
      body: "Nueve años después, otro documento oficial utiliza el nombre de Elena Castillo con una fotografía idéntica (Fotografía B · 1941).",
      badge: "1941 · ELENA CASTILLO"
    },
    {
      time: "14 OCT · 10:05 HRS",
      title: "Entrada al Archivo (Suspect Enters Archive)",
      body: "Elena Castillo ingresa al archivo del museo con pase de investigadora temporal.",
      badge: "10:05 · ENTRADA"
    },
    {
      time: "14 OCT · 10:20 HRS",
      title: "Último Avistamiento (Treasure Last Seen)",
      body: "El documento histórico y tesoro familiar se ve por última vez en la vitrina de custodia.",
      badge: "10:20 · VISTO"
    },
    {
      time: "14 OCT · 10:30 HRS",
      title: "Descubrimiento del Robo (Theft Discovered)",
      body: "El personal administrativo detecta la vitrina abierta y la ausencia del documento histórico. Se activa la alerta.",
      badge: "10:30 · DESAPARICIÓN"
    },
    {
      time: "14 OCT · 11:00 HRS",
      title: "Fase de Veredicto (Final Verdict Phase)",
      body: "Se abre el Expediente Confidencial 047 para interrogar a los cinco sospechosos y formalizar la acusación.",
      badge: "11:00 · VEREDICTO"
    }
  ],

  // Bien Patrimonial Desaparecido
  artefact: {
    name: "Documento Histórico y Tesoro Familiar (Family Heritage Document)",
    spanishName: "Documento Patrimonial y Recuerdo Histórico Familiar",
    originCulture: "Patrimonio Cultural de América Latina (Latin American Heritage)",
    estimatedDate: "1932 – 1941",
    catalogNumber: "EXP-047-DOC",
    historicalContext: "Documento patrimonial que resguarda la genealogía y el secreto fundacional de una familia histórica. Su exhibición pública amenazaba con exponer un secreto celosamente protegido.",
    significance: "Pieza clave del patrimonio cultural vinculada a la identidad histórica de la familia Castillo-Martín."
  },

  // Identificador de la Culpable Real
  culpritId: "suspect-3",

  // Expediente Maestro de la Culpable
  culprit: {
    name: "Elena Castillo (Alias: Isabel Martín)",
    role: "Investigadora Visitante e Historiadora Familiar (Visiting Researcher & Family Descendant)",
    avatar: "🕵️‍♀️",
    motive: "Proteger el secreto ancestral de su linaje familiar para que el pasado no saliera a la luz pública (To protect her ancestral family secret and legacy from being exposed by the museum exhibition).",
    modusOperandi: "Ingresó al archivo a las 10:05 HRS. Aprovechó la breve ausencia del supervisor a las 10:20 HRS para extraer el documento y retirarse antes de las 10:30 HRS. El cotejo fotográfico de 1932 (Isabel Martín) y 1941 (Elena Castillo) demostró su doble identidad.",
    confession: "“Debemos proteger este recuerdo y la herencia de nuestra familia. El pasado histórico no debe salir a la luz... No busqué lucrarme ni dañar el patrimonio; solo quería proteger a mi familia de la exposición pública. Ahora que el archivo fotográfico ha revelado la verdad, devuelvo el documento intacto al museo.”"
  },

  // Los Cinco Sospechosos (Interrogatorios y Coartadas Simplificadas)
  suspects: [
    {
      id: "suspect-1",
      name: "Dr. Mateo Valenzuela",
      role: "Director del Archivo (Museum Archive Director)",
      avatar: "🏛️",
      snippet: "Custodio de las llaves maestras del archivo. Estuvo con directivos en el vestíbulo principal.",
      motive: "Conflictos sobre la desclasificación de archivos reservados.",
      alibi: "Reunido con diplomáticos en el vestíbulo principal entre las 10:00 y las 10:45 HRS.",
      testimony: "Estuve toda la mañana con los directivos en el vestíbulo revisando el catálogo; las cámaras y tres testigos confirman que jamás me acerqué a la sala de archivo.",
      redHerring: "Poseía copia de las llaves y fue visto cerca del pasillo a las 09:50 HRS.",
      redHerringExplanation: "Estaba verificando la iluminación del pasillo antes de recibir a los directivos. El torniquete biométrico #01 prueba que no entró al archivo.",
      exoneration: "Verificado por torniquete de acceso biométrico #01 y declaraciones juradas de tres diplomáticos en el vestíbulo."
    },
    {
      id: "suspect-2",
      name: "Héctor Delgado",
      role: "Supervisor de Seguridad (Security Supervisor)",
      avatar: "👮",
      snippet: "Patrullaba galerías. Atendió un sensor de puerta en la planta baja a las 10:00 HRS.",
      motive: "Inconformidad laboral por turnos extraordinarios sin compensar.",
      alibi: "Inspeccionando una puerta de emergencia en la planta baja entre las 10:00 y las 10:25 HRS.",
      testimony: "La central me avisó por radio de una puerta abierta en la planta baja. Bajé a cerrarla y cuando volví a subir ya habían dado la alarma por el documento.",
      redHerring: "Abandonó su puesto de vigilancia habitual justo a las 10:00 HRS.",
      redHerringExplanation: "Atendió una orden legítima de la central de seguridad. Las grabaciones de radio certifican su presencia en la planta baja.",
      exoneration: "Grabaciones de radio institucional y cámaras del montacargas corroboran su presencia en la planta baja hasta las 10:25 HRS."
    },
    {
      id: "suspect-3",
      name: "Elena Castillo (Alias: Isabel Martín)", // CULPABLE
      role: "Investigadora Visitante (Visiting Researcher & Descendant)",
      avatar: "🕵️‍♀️",
      snippet: "Registrada a las 10:05 HRS. Identificada en las fotografías de 1932 y 1941 con nombres distintos.",
      motive: "Ocultar el secreto familiar y proteger la herencia privada de su estirpe.",
      alibi: "Alegó haber salido a los jardines exteriores a las 10:10 HRS tras no encontrar al bibliotecario.",
      testimony: "Entré a las 10:05 para consultar bibliografía. Como el encargado no estaba, salí a caminar a los jardines a las diez y diez. No tengo nada que ver con el robo.",
      redHerring: "Alegó una salida apresurada por falta de atención del personal.",
      redHerringExplanation: "¡No salió! El registro prueba que permaneció dentro del archivo hasta después de las 10:20 HRS. Las fotografías de 1932 y 1941 y la carta confidencial comprueban su autoría.",
      exoneration: "¡CULPABLE CONFIRMADA! No tiene testigos de su supuesta salida. Las fotografías A y B prueban su identidad encubierta, el registro de acceso la ubica durante el robo (10:05–10:25) y la carta confidencial revela su móvil."
    },
    {
      id: "suspect-4",
      name: "Sofía Morales",
      role: "Archivera y Catalogadora (Archive Cataloguer)",
      avatar: "📚",
      snippet: "Encargada de catalogar manuscritos. Fue quien reportó la desaparición a las 10:30 HRS.",
      motive: "Interés académico en fondos reservados para su tesis doctoral.",
      alibi: "Trabajando en el taller de encuadernación con dos pasantes de 09:30 a 10:30 HRS.",
      testimony: "Estuve toda la mañana restaurando pergaminos junto a dos pasantes. A las 10:30 entré al archivo para guardar pliegos y descubrí que la carpeta no estaba.",
      redHerring: "Descubrió y reportó la desaparición, y tenía huellas en la carpeta por labores matutinas.",
      redHerringExplanation: "Manipuló la carpeta en la catalogación rutinaria de las 08:30 HRS. Dos pasantes testificaron que no abandonó el taller de restauración.",
      exoneration: "Testimonios coincidentes de dos pasantes universitarios y el registro digital del escáner confirman su presencia continua en el taller."
    },
    {
      id: "suspect-5",
      name: "Carlos Mendoza",
      role: "Técnico de Instalaciones (Maintenance Technician)",
      avatar: "🔧",
      snippet: "Visto cerca del archivo a las 10:00 HRS con una escalera y herramientas para cambiar luces.",
      motive: "Acceso a llaves de servicio y conocimiento de los horarios del museo.",
      alibi: "Reparando fluorescentes en la Sala 2 de Historia desde las 10:05 hasta las 10:40 HRS.",
      testimony: "Estuve en una escalera cambiando tubos de luz en la Sala 2 frente al personal de limpieza. No toqué ningún documento ni me acerqué al archivo.",
      redHerring: "Fue visto cerca del archivo a las 10:00 HRS cargando herramientas.",
      redHerringExplanation: "Transportaba material hacia la Sala 2 según la orden de trabajo #OT-104. Dos empleados de limpieza confirmaron que estuvo subido en la escalera.",
      exoneration: "Orden de trabajo firmada y testimonio de dos empleados de limpieza confirman que estuvo en la Sala 2 de 10:05 a 10:40 HRS."
    }
  ],

  // Archivo de Evidencias Decisivas (Idéntico a la Página 1 con Traducción Integrada)
  evidence: [
    {
      id: "clue-1",
      title: "Las Fotografías y la Evidencia Visual (Photographs & Visual Evidence)",
      type: "ARCHIVO FOTOGRÁFICO · 01 (VISUAL EVIDENCE)",
      discovery: "Compara los registros históricos: Fotografía A registrada en 1932 como Isabel Martín y Fotografía B registrada en 1941 como Elena Castillo.",
      connection: "El cotejo facial pericial demuestra que ambas fichas utilizan nombres diferentes para ocultar la verdad sobre la identidad de la sospechosa.",
      significance: "Demuestra que la investigadora Elena Castillo y la figura de Isabel Martín son la misma persona utilizando identidades alternas.",
      proves: "Prueba que la sospechosa utilizó múltiples nombres para ocultar su verdadera identidad familiar.",
      photoA: {
        src: "images/sp_3.png",
        alt: "Retrato antiguo de Isabel Martín (1932)",
        name: "Isabel Martín",
        nameEn: "Registered name: Isabel Martín",
        stamp: "1932",
        label: "Fotografía A (Photo A)"
      },
      photoB: {
        src: "images/sp2.jpg",
        alt: "Retrato registrado con otro nombre (1941)",
        name: "Elena Castillo",
        nameEn: "Registered name: Elena Castillo",
        stamp: "1941",
        label: "Fotografía B (Photo B)"
      },
      findingEs: "La evidencia fotográfica muestra que ambas fichas utilizan nombres diferentes para ocultar la verdad sobre la identidad del sospechoso en la historia.",
      findingEn: "Photographic evidence proves both files use different names to conceal the suspect's true family identity."
    },
    {
      id: "clue-2",
      title: "El Registro Administrativo de Acceso (Administrative Access Log)",
      type: "DOCUMENTO A · 02 (ADMINISTRATIVE RECORD)",
      discovery: "Registro de acceso del 14 de octubre con las horas críticas: 10:05 entrada del sospechoso, 10:20 tesoro visto por última vez, 10:30 reporte de desaparición.",
      connection: "Elena Castillo fue la única persona ajena al personal que ingresó a las 10:05 HRS, permaneciendo en el recinto durante el robo a las 10:20 HRS.",
      significance: "Fija con precisión la ventana de 25 minutos (10:05 a 10:30 HRS) en que se cometió la sustracción del documento.",
      proves: "Prueba la oportunidad cronológica exacta y la presencia física del sospechoso en la sala durante el robo.",
      findingEs: "Este documento revela una coincidencia sospechosa que impulsa nuestra investigación para encontrar al responsable del robo.",
      findingEn: "This log establishes that Elena Castillo was inside the archive precisely when the document disappeared."
    },
    {
      id: "clue-3",
      title: "La Carta Confidencial (Confidential Family Letter)",
      type: "DOCUMENTO B · 03 (CONFIDENTIAL LETTER)",
      discovery: "Carta confidencial manuscrita sin firma: “Debemos proteger este recuerdo y la herencia de nuestra familia. El pasado histórico no debe salir a la luz.”",
      connection: "El texto explica la urgencia de Elena Castillo por sustraer el documento antes de que fuera expuesto en la muestra del museo.",
      significance: "Aporta la prueba irrefutable del móvil: ocultar un secreto familiar vinculado al patrimonio histórico de América Latina.",
      proves: "Prueba de manera definitiva la motivación familiar e histórica que impulsó la sustracción.",
      findingEs: "La carta demuestra que alguien intentó ocultar un secreto familiar vinculado al patrimonio cultural de América Latina.",
      findingEn: "The letter proves someone acted to protect an ancestral family secret from being publicly exposed."
    }
  ],

  // Fuentes Institucionales Simplificadas
  culturalSources: [
    {
      title: "El Archivo de las Identidades Perdidas (Archive of Lost Identities)",
      institution: "Archivo Histórico y Cultural de América Latina",
      citation: "Castillo & Martín, F. (1932–1941). Registros Documentales y Memoria Familiar. Revista de Historia y Sociedad.",
      notes: "Metodología pericial para cotejar fichas fotográficas históricas y salvaguarda de patrimonio documental."
    },
    {
      title: "Convención para la Protección del Patrimonio Cultural (UNESCO Convention)",
      institution: "UNESCO (1972)",
      citation: "UNESCO (1972). Tratado Internacional de Preservación de Archivos Históricos y Bienes Culturales. París.",
      notes: "Marco legal internacional sobre la custodia de documentos de valor histórico en museos y archivos públicos."
    }
  ],

  // Glosario de 30 Términos Bilingüe Conciso
  vocabulary: [
    { spanish: "El culpable / La culpable", english: "The culprit / guilty person", pos: "Sustantivo", context: "Persona responsable legal del delito.", example: "La culpable utilizó dos nombres para ocultar su identidad.", exampleTranslation: "The culprit used two names to hide her identity." },
    { spanish: "El sospechoso / La sospechosa", english: "The suspect", pos: "Sustantivo", context: "Persona de interés bajo investigación.", example: "Cada sospechoso fue interrogado sobre su horario el 14 de octubre.", exampleTranslation: "Each suspect was interrogated about their schedule on Oct 14." },
    { spanish: "La evidencia", english: "The evidence", pos: "Sustantivo", context: "Prueba material analizada por los detectives.", example: "La evidencia fotográfica demostró la doble identidad.", exampleTranslation: "The photographic evidence proved the double identity." },
    { spanish: "La pista", english: "The clue / lead", pos: "Sustantivo", context: "Dato clave que orienta la resolución.", example: "La carta confidencial fue una pista decisiva.", exampleTranslation: "The confidential letter was a decisive clue." },
    { spanish: "El artefacto / El tesoro", english: "The artifact / cultural treasure", pos: "Sustantivo", context: "Documento histórico de gran valor patrimonial.", example: "El tesoro cultural desapareció de la vitrina del archivo.", exampleTranslation: "The cultural treasure disappeared from the display case." },
    { spanish: "El museo", english: "The museum", pos: "Sustantivo", context: "Institución que resguarda el patrimonio histórico.", example: "El museo custodia valiosos archivos de la historia.", exampleTranslation: "The museum safeguards valuable historical archives." },
    { spanish: "La investigación", english: "The investigation", pos: "Sustantivo", context: "Proceso metódico de análisis del caso.", example: "Nuestra investigación reveló una coincidencia sospechosa.", exampleTranslation: "Our investigation revealed a suspicious coincidence." },
    { spanish: "El motivo", english: "The motive", pos: "Sustantivo", context: "La razón familiar que impulsó el robo.", example: "El motivo principal era proteger un secreto familiar.", exampleTranslation: "The main motive was to protect a family secret." },
    { spanish: "La coartada", english: "The alibi", pos: "Sustantivo", context: "Prueba de estar en otro lugar durante el robo.", example: "El director presentó una coartada comprobada por testigos.", exampleTranslation: "The director presented an alibi verified by witnesses." },
    { spanish: "Acusar", english: "To accuse / formalize charge", pos: "Verbo", context: "Señalar formalmente a la persona culpable.", example: "El detective decidió acusar formalmente a Elena Castillo.", exampleTranslation: "The detective decided to formally accuse Elena Castillo." },
    { spanish: "El testigo / La testigo", english: "The witness", pos: "Sustantivo", context: "Persona que presenció hechos o valida una coartada.", example: "Los testigos confirmaron la presencia del técnico en la Sala 2.", exampleTranslation: "Witnesses confirmed the technician was in Room 2." },
    { spanish: "La huella", english: "The fingerprint / trace", pos: "Sustantivo", context: "Marca física dejada en la escena.", example: "No se encontró ninguna huella forzada en la cerradura.", exampleTranslation: "No forced mark was found on the lock." },
    { spanish: "El robo", english: "The theft / robbery", pos: "Sustantivo", context: "Sustracción ilícita de un documento protegido.", example: "El robo ocurrió entre las diez y cinco y las diez y media.", exampleTranslation: "The theft occurred between 10:05 and 10:30." },
    { spanish: "Descubrir", english: "To discover / uncover", pos: "Verbo", context: "Revelar información oculta o identidades falsas.", example: "Logramos descubrir el significado oculto de la carta.", exampleTranslation: "We managed to discover the hidden meaning of the letter." },
    { spanish: "El misterio", english: "The mystery", pos: "Sustantivo", context: "Enigma sobre la desaparición del tesoro.", example: "El misterio de las identidades perdidas quedó resuelto.", exampleTranslation: "The mystery of the lost identities was solved." },
    { spanish: "La verdad", english: "The truth", pos: "Sustantivo", context: "Realidad demostrada mediante pruebas periciales.", example: "El pasado no debe salir a la luz, pero la verdad triunfó.", exampleTranslation: "The past must not come to light, but the truth triumphed." },
    { spanish: "Inocente", english: "Innocent", pos: "Adjetivo", context: "Libre de culpa tras verificarse las coartadas.", example: "Cuatro de los cinco sospechosos resultaron ser inocentes.", exampleTranslation: "Four of the five suspects turned out to be innocent." },
    { spanish: "Culpable", english: "Guilty", pos: "Adjetivo", context: "Responsable comprobado de cometer el delito.", example: "La evidencia fotográfica demostró quién era la culpable.", exampleTranslation: "The photographic evidence demonstrated who was guilty." },
    { spanish: "La identidad", english: "The identity", pos: "Sustantivo", context: "Datos legales que definen a un individuo.", example: "Elena Castillo ocultó su identidad bajo el nombre de Isabel.", exampleTranslation: "Elena Castillo concealed her identity under the name Isabel." },
    { spanish: "El archivo", english: "The archive / file", pos: "Sustantivo", context: "Recinto donde se custodian documentos de valor.", example: "El sospechoso entró en el archivo del museo a las 10:05.", exampleTranslation: "The suspect entered the museum archive at 10:05." },
    { spanish: "La vitrina", english: "The display case / vitrine", pos: "Sustantivo", context: "Mueble de cristal donde se exhibe el tesoro.", example: "El tesoro se vio por última vez en la vitrina a las 10:20.", exampleTranslation: "The treasure was last seen in the display case at 10:20." },
    { spanish: "El registro", english: "The administrative record / log", pos: "Sustantivo", context: "Bitácora oficial de entradas y salidas.", example: "El registro administrativo confirmó la entrada a las 10:05.", exampleTranslation: "The administrative log confirmed entry at 10:05." },
    { spanish: "La carta", english: "The letter", pos: "Sustantivo", context: "Manuscrito que revela pensamientos o secretos.", example: "La carta confidencial demostró el pacto familiar.", exampleTranslation: "The confidential letter demonstrated the family pact." },
    { spanish: "La herencia", english: "The inheritance / heritage", pos: "Sustantivo", context: "Bienes o recuerdos transmitidos de generación en generación.", example: "Debemos proteger este recuerdo y la herencia de la familia.", exampleTranslation: "We must protect this memory and our family heritage." },
    { spanish: "El patrimonio", english: "The cultural heritage", pos: "Sustantivo", context: "Bienes históricos que pertenecen a una nación.", example: "El documento está vinculado al patrimonio cultural.", exampleTranslation: "The document is linked to cultural heritage." },
    { spanish: "La confesión", english: "The confession", pos: "Sustantivo", context: "Declaración donde el culpable admite los hechos.", example: "La culpable firmó una confesión detallando su móvil.", exampleTranslation: "The culprit signed a confession detailing her motive." },
    { spanish: "El veredicto", english: "The verdict", pos: "Sustantivo", context: "Resolución formal emitida tras analizar las pruebas.", example: "El veredicto final confirmó la culpabilidad de Elena.", exampleTranslation: "The final verdict confirmed Elena's guilt." },
    { spanish: "La deducción", english: "The deduction / reasoning", pos: "Sustantivo", context: "Razonamiento lógico basado en evidencias.", example: "Una deducción rigurosa conectó las dos fotografías.", exampleTranslation: "A rigorous deduction connected both photographs." },
    { spanish: "Puntuación", english: "Score / Rating", pos: "Sustantivo", context: "Evaluación del desempeño del detective.", example: "Obtuviste la máxima puntuación por tu deducción.", exampleTranslation: "You earned the maximum score for your deduction." },
    { spanish: "Reiniciar", english: "To restart / reset", pos: "Verbo", context: "Restablecer el expediente para una nueva prueba.", example: "Puedes reiniciar el caso para revisar las pistas.", exampleTranslation: "You can restart the case to review the clues." }
  ]
};

/**
 * ------------------------------------------------------------------------------
 * ESTADO REACTIVO DEL JUEGO (GAME_STATE)
 * ------------------------------------------------------------------------------
 */
const GAME_STATE = {
  selectedSuspectId: null,
  accusationSubmitted: false,
  accusationReason: "",
  finalScore: 0,
  priorCluesDiscovered: 3,
  priorPuzzleSolved: true
};

/**
 * ------------------------------------------------------------------------------
 * INICIALIZACIÓN DEL DOM
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

function detectIntegrationParameters() {
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

  try {
    const savedState = localStorage.getItem("quienFueGameState");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      if (typeof parsed.cluesCount === "number") GAME_STATE.priorCluesDiscovered = parsed.cluesCount;
      if (typeof parsed.puzzleSolved === "boolean") GAME_STATE.priorPuzzleSolved = parsed.puzzleSolved;
    }
  } catch (e) {
    // Modo autónomo
  }

  const simCluesInput = document.getElementById("simCluesCount");
  const simPuzzleCheck = document.getElementById("simPuzzleCheckbox");
  if (simCluesInput) simCluesInput.value = GAME_STATE.priorCluesDiscovered;
  if (simPuzzleCheck) simPuzzleCheck.checked = GAME_STATE.priorPuzzleSolved;
}

function populateStoryPlaceholders() {
  document.querySelectorAll(".author-inline-name").forEach(el => {
    el.textContent = STORY_CONFIG.author.name;
  });

  document.querySelectorAll(".artefact-inline-name").forEach(el => {
    el.textContent = STORY_CONFIG.artefact.name;
  });

  const statsArtefact = document.getElementById("statsArtefactName");
  if (statsArtefact) statsArtefact.textContent = STORY_CONFIG.artefact.name;
}

/**
 * ------------------------------------------------------------------------------
 * 3. CRONOLOGÍA HISTÓRICA (TIMELINE)
 * ------------------------------------------------------------------------------
 */
function renderIncidentTimeline() {
  const container = document.getElementById("incidentTimelineContainer");
  if (!container || !STORY_CONFIG.timeline) return;

  container.innerHTML = "";
  STORY_CONFIG.timeline.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.setAttribute("role", "listitem");
    article.innerHTML = `
      <span class="timeline-badge">${entry.time}</span>
      <div class="timeline-content">
        <h4 class="timeline-entry-title">${entry.title}</h4>
        <p class="timeline-entry-desc">${entry.body}</p>
      </div>
    `;
    container.appendChild(article);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 4. GALERÍA DE SOSPECHOSOS (SUSPECT GALLERY)
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
        <span class="eyebrow">FICHA · 0${idx + 1} (FILE 0${idx + 1})</span>
        <span class="case-label-small">EXP. 047</span>
      </div>
      <div class="suspect-avatar-box" aria-hidden="true">${suspect.avatar}</div>
      <h3 class="editorial-suspect-name">${suspect.name}</h3>
      <p class="editorial-suspect-role">${suspect.role}</p>
      <p class="editorial-suspect-snippet">${suspect.snippet}</p>

      ${suspect.testimony ? `
      <blockquote class="suspect-testimony-quote">
        “${suspect.testimony}”
      </blockquote>` : ""}

      <div class="suspect-alibi-preview">
        <strong>Coartada (Alibi):</strong> ${suspect.alibi}
      </div>

      <a href="#veredicto" class="button suspect-dossier-link" data-select-suspect="${suspect.id}">
        <span>Acusar a este sospechoso · Accuse Suspect</span>
        <span aria-hidden="true">→</span>
      </a>
    `;

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
 * 5. SELECCIÓN DE SOSPECHOSOS (RADIO GROUP ACCESIBLE)
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
      <span class="selected-badge">SELECCIONADO (SELECTED)</span>
      <input
        type="radio"
        id="radio-${suspect.id}"
        name="suspectSelection"
        value="${suspect.id}"
        tabindex="-1"
        aria-label="Sospechoso ${index + 1}: ${suspect.name}, ${suspect.role}"
      >
      <div class="selection-avatar" aria-hidden="true">${suspect.avatar}</div>
      <h4 class="selection-name">${suspect.name}</h4>
      <p class="selection-role">${suspect.role}</p>
      <p class="selection-snippet">${suspect.snippet}</p>
    `;

    card.addEventListener("click", () => {
      selectSuspect(suspect.id);
    });

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
 * 6. ARCHIVO DE EVIDENCIAS (FORMATO EXACTO CON TRADUCCIÓN INTEGRADA)
 * ------------------------------------------------------------------------------
 */
function renderEvidenceArchive() {
  const container = document.getElementById("evidenceCardsContainer");
  if (!container) return;

  container.innerHTML = "";

  // 1. Evidencia Fotográfica (Photographic Evidence)
  const photoEvidence = STORY_CONFIG.evidence[0];
  const photoPanel = document.createElement("section");
  photoPanel.className = "panel";
  photoPanel.innerHTML = `
    <p class="eyebrow">ARCHIVO FOTOGRÁFICO · 01 (PHOTOGRAPHIC ARCHIVE)</p>
    <h2>${photoEvidence.title}</h2>
    <p style="color: var(--muted); margin-bottom: 20px;">
      Compara los registros de la investigación y analiza cada pista del museo.<br>
      <span class="lang-sub">(Compare the investigative records and analyze each museum clue.)</span>
    </p>

    <div class="photo-grid">
      <article class="photo-card">
        <div class="photo portrait">
          <img src="${photoEvidence.photoA.src}" alt="${photoEvidence.photoA.alt}">
          <span class="photo-stamp">${photoEvidence.photoA.stamp}</span>
        </div>
        <h3>${photoEvidence.photoA.label}</h3>
        <p>Nombre registrado (Registered name): <strong>${photoEvidence.photoA.name}</strong></p>
      </article>

      <article class="photo-card">
        <div class="photo portrait">
          <img src="${photoEvidence.photoB.src}" alt="${photoEvidence.photoB.alt}">
          <span class="photo-stamp">${photoEvidence.photoB.stamp}</span>
        </div>
        <h3>${photoEvidence.photoB.label}</h3>
        <p>Nombre registrado (Registered name): <strong>${photoEvidence.photoB.name}</strong></p>
      </article>
    </div>

    <button type="button" class="button" data-reveal="photo-clue" aria-expanded="false" aria-controls="photo-clue">
      <span>Comparar las fotografías · Compare Photographs</span>
    </button>

    <div class="clue" id="photo-clue" hidden>
      <h3>Hallazgo de la investigación (Investigation Finding)</h3>
      <p>${photoEvidence.findingEs}</p>
      <p class="lang-sub">${photoEvidence.findingEn}</p>
    </div>
  `;
  container.appendChild(photoPanel);

  // 2. Registro Administrativo de Acceso (Administrative Access Log)
  const docEvidence = STORY_CONFIG.evidence[1];
  const docPanel = document.createElement("section");
  docPanel.className = "panel";
  docPanel.innerHTML = `
    <p class="eyebrow">DOCUMENTO A · 02 (ADMINISTRATIVE RECORD)</p>
    <h2>${docEvidence.title}</h2>

    <div class="document">
      <p class="document-title">
        REGISTRO DE ACCESO · HISTORIA Y CULTURA<br>
        <span style="font-size: 13px; font-weight: normal; color: #5a452e;">ACCESS LOG · HISTORY & CULTURE</span>
      </p>
      <p>14 de octubre (October 14)</p>
      <hr>
      <p><span>10:05</span> El sospechoso entra en el archivo del museo. <em class="doc-sub">(Suspect enters archive)</em></p>
      <p><span>10:20</span> El tesoro cultural se ve por última vez. <em class="doc-sub">(Treasure last seen)</em></p>
      <p><span>10:30</span> Se descubre la desaparición del documento. <em class="doc-sub">(Theft discovered)</em></p>
      <p class="signature">Archivo administrativo (Administrative Archive)</p>
    </div>

    <button type="button" class="button" data-reveal="record-clue" aria-expanded="false" aria-controls="record-clue">
      <span>Analizar el registro · Analyze Record</span>
    </button>

    <div class="clue" id="record-clue" hidden>
      <h3>Pista clave (Key Clue)</h3>
      <p>${docEvidence.findingEs}</p>
      <p class="lang-sub">${docEvidence.findingEn}</p>
    </div>
  `;
  container.appendChild(docPanel);

  // 3. Carta Confidencial (Confidential Family Letter)
  const letterEvidence = STORY_CONFIG.evidence[2];
  const letterPanel = document.createElement("section");
  letterPanel.className = "panel";
  letterPanel.innerHTML = `
    <p class="eyebrow">DOCUMENTO B · 03 (CONFIDENTIAL LETTER)</p>
    <h2>${letterEvidence.title}</h2>

    <blockquote class="letter">
      “Debemos proteger este recuerdo y la herencia de nuestra familia. El pasado histórico no debe salir a la luz.”
      <span class="letter-en">“We must protect this memory and our family inheritance. The historical past must not come to light.”</span>
      <span class="letter-sig">— Carta ficticia sin firma (Unsigned confidential letter)</span>
    </blockquote>

    <button type="button" class="button" data-reveal="letter-clue" aria-expanded="false" aria-controls="letter-clue">
      <span>Descubrir el significado · Discover Meaning</span>
    </button>

    <div class="clue" id="letter-clue" hidden>
      <h3>Móvil de la investigación (Investigation Motive)</h3>
      <p>${letterEvidence.findingEs}</p>
      <p class="lang-sub">${letterEvidence.findingEn}</p>
    </div>
  `;
  container.appendChild(letterPanel);

  // Comportamiento idéntico de alternancia interactiva [data-reveal]
  container.querySelectorAll("[data-reveal]").forEach((button) => {
    button.addEventListener("click", () => {
      const clueId = button.dataset.reveal;
      const clue = document.getElementById(clueId);
      if (!clue) return;

      clue.hidden = !clue.hidden;
      button.setAttribute("aria-expanded", clue.hidden ? "false" : "true");
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * 7. EXONERACIÓN DE SOSPECHOSOS INOCENTES
 * ------------------------------------------------------------------------------
 */
function renderExonerationList() {
  const container = document.getElementById("exonerationListContainer");
  if (!container) return;

  container.innerHTML = "";

  STORY_CONFIG.suspects.forEach((suspect) => {
    if (suspect.id === STORY_CONFIG.culpritId) return;

    const item = document.createElement("div");
    item.className = "exoneration-card";
    item.innerHTML = `
      <div class="exoneration-card-header">
        <span class="exoneration-name">👤 ${suspect.name}</span>
        <span class="badge-cleared">EXONERADO (ALIBI VERIFIED)</span>
      </div>
      <p class="exoneration-reason-text">
        <strong>Fundamento (Evidence):</strong> ${suspect.exoneration}
      </p>
    `;
    container.appendChild(item);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 8. ENVÍO Y VALIDACIÓN DE LA ACUSACIÓN
 * ------------------------------------------------------------------------------
 */
function handleAccusationSubmit(event) {
  event.preventDefault();

  if (!GAME_STATE.selectedSuspectId) {
    showValidationError("Debes seleccionar a uno de los cinco sospechosos antes de formalizar tu acusación. (You must select one of the suspects before submitting.)");
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
 * 9. REVELACIÓN DEL VEREDICTO (DRAMATIC VERDICT REVEAL)
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

  document.getElementById("revealCulpritAvatar").textContent = trueCulprit.avatar || STORY_CONFIG.culprit.avatar;
  document.getElementById("revealCulpritName").textContent = STORY_CONFIG.culprit.name;
  document.getElementById("revealCulpritRole").textContent = STORY_CONFIG.culprit.role;
  document.getElementById("revealCulpritMotive").textContent = STORY_CONFIG.culprit.motive;
  document.getElementById("revealCulpritModus").textContent = STORY_CONFIG.culprit.modusOperandi;
  document.getElementById("revealCulpritConfession").textContent = `${STORY_CONFIG.culprit.confession}`;

  outcomeBanner.classList.remove("outcome-correct", "outcome-incorrect");

  if (isCorrect) {
    outcomeBanner.classList.add("outcome-correct");
    outcomeIcon.textContent = "⚖️";
    outcomeTag.textContent = "¡CASO RESUELTO! (CASE SOLVED · ACCUSATION VERIFIED)";
    outcomeTitle.textContent = `¡Veredicto Correcto! La responsable es ${STORY_CONFIG.culprit.name}`;
    outcomeMessage.innerHTML = `
      Tu deducción judicial contra <strong>${chosenSuspect.name}</strong> ha sido impecable. El cotejo de las fotografías de 1932 (Isabel Martín) y 1941 (Elena Castillo), junto con el registro de acceso (10:05) y la carta confidencial, demuestran su culpabilidad. El documento histórico ha sido devuelto al museo.<br>
      <span class="lang-sub">(Your deduction was verified. The 1932 & 1941 photographs, 10:05 access log, and family letter prove Elena Castillo stole the document to protect her lineage secret. The document is safely recovered.)</span>
    `;
  } else {
    outcomeBanner.classList.add("outcome-incorrect");
    outcomeIcon.textContent = "❌";
    outcomeTag.textContent = "ACUSACIÓN ERRÓNEA (WRONGFUL ACCUSATION)";
    outcomeTitle.textContent = `La acusación contra ${chosenSuspect ? chosenSuspect.name : "el sospechoso"} fue desestimada`;
    outcomeMessage.innerHTML = `
      ${chosenSuspect ? chosenSuspect.name : "Este sospechoso"} contaba con una coartada comprobada. La verdadera culpable es <strong>${STORY_CONFIG.culprit.name}</strong>. Examina a continuación su confesión y las pruebas.<br>
      <span class="lang-sub">(This suspect has a verified alibi. Forensic evidence conclusively identified the true culprit as Elena Castillo. Review her confession and decisive clues below.)</span>
    `;
  }

  calculateAndRenderScore(isCorrect);
  revealSection.classList.remove("section-hidden");
  revealSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * ------------------------------------------------------------------------------
 * 10. SISTEMA DE PUNTUACIÓN MATEMÁTICA TRANSPARENTE
 * ------------------------------------------------------------------------------
 */
function calculateAndRenderScore(isAccusationCorrect) {
  const accusationPoints = isAccusationCorrect ? 50 : 0;

  const reasonLen = GAME_STATE.accusationReason.length;
  let reasonPoints = 0;
  let reasonStatus = "Sin justificación / No reasoning (0 pts)";
  if (reasonLen >= 20) {
    reasonPoints = 20;
    reasonStatus = `Deducción argumentada / Valid reasoning (${reasonLen} chars)`;
  } else if (reasonLen > 0) {
    reasonPoints = 10;
    reasonStatus = `Justificación breve / Brief note (${reasonLen} chars)`;
  }

  const cluesPoints = Math.min(3, Math.max(0, GAME_STATE.priorCluesDiscovered)) * 10;
  const cluesStatus = `${GAME_STATE.priorCluesDiscovered}/3 evidencias examinadas (clues analyzed)`;

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
        <td><strong>IDENTIFICACIÓN DE LA CULPABLE (CULPRIT ID)</strong><br><small>Acusación formal (Formal Accusation)</small></td>
        <td>${isAccusationCorrect ? "✅ Correcto / Correct (+50 pts)" : "❌ Incorrecto / Wrong (0 pts)"}</td>
        <td class="text-right">50</td>
        <td class="text-right points-assigned">${accusationPoints}</td>
      </tr>
      <tr>
        <td><strong>DEDUCCIÓN DEL DETECTIVE (FORENSIC REASONING)</strong><br><small>Argumentación escrita (Written justification)</small></td>
        <td>${reasonStatus}</td>
        <td class="text-right">20</td>
        <td class="text-right points-assigned">${reasonPoints}</td>
      </tr>
      <tr>
        <td><strong>EVIDENCIAS ANALIZADAS (EVIDENCE ANALYZED)</strong><br><small>Fotografías, Registro y Carta (Exhibits analyzed)</small></td>
        <td>${cluesStatus}</td>
        <td class="text-right">30</td>
        <td class="text-right points-assigned">${cluesPoints}</td>
      </tr>
      <tr style="background: rgba(201, 166, 107, 0.15); font-weight: bold;">
        <td colspan="2">PUNTUACIÓN TOTAL (TOTAL INVESTIGATION SCORE)</td>
        <td class="text-right">100</td>
        <td class="text-right points-assigned" style="font-size: 1.25rem; color: var(--gold);">${totalScore}</td>
      </tr>
    `;
  }
}

function getRankDetails(score) {
  if (score >= 90) {
    return {
      title: "🏆 Detective Maestro (Master Detective)",
      feedback: "¡Investigación impecable! Has resuelto el Expediente 047 conectando las fotografías de 1932 y 1941 con una deducción brillante. (Flawless deduction!)"
    };
  } else if (score >= 70) {
    return {
      title: "🔍 Investigador Sagaz (Shrewd Investigator)",
      feedback: "Excelente análisis. Identificaste las evidencias clave del museo y desenmascaraste la doble identidad. (Strong forensic analysis.)"
    };
  } else if (score >= 50) {
    return {
      title: "📋 Asistente Judicial (Assistant Investigator)",
      feedback: "Identificaste elementos del caso, pero faltó profundizar en el análisis de las pistas fotográficas. (Useful deductions provided.)"
    };
  } else {
    return {
      title: "⚠️ Detective en Formación (Trainee Detective)",
      feedback: "La acusación fue desestimada frente a las coartadas. Revisa las fotografías y el registro de acceso, y vuelve a intentarlo. (Try again.)"
    };
  }
}

/**
 * ------------------------------------------------------------------------------
 * 11. REINICIO DE LA INVESTIGACIÓN (REPLAY)
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
 * 12. GLOSARIO DE 30 TÉRMINOS BILINGÜE
 * ------------------------------------------------------------------------------
 */
function renderGlossary(wordsToRender) {
  const container = document.getElementById("glossaryGridContainer");
  if (!container) return;

  container.innerHTML = "";

  if (wordsToRender.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; color: var(--muted); text-align: center; padding: 2rem;">No se encontraron términos coincidentes. (No matching terms found.)</p>`;
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
    badge.textContent = `${filtered.length} / ${STORY_CONFIG.vocabulary.length} terms`;
  }
}

/**
 * ------------------------------------------------------------------------------
 * 13. FUENTES CULTURALES
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
      <p class="source-citation-text"><strong>Cita:</strong> ${source.citation}</p>
      <p class="source-citation-text" style="margin-top: 0.35rem; color: var(--muted);">${source.notes}</p>
    `;
    container.appendChild(item);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 14. CONTADOR DE CARACTERES
 * ------------------------------------------------------------------------------
 */
function updateCharCounter() {
  const reasonInput = document.getElementById("accusationReason");
  const counterSpan = document.getElementById("reasoningCharCounter");
  if (!reasonInput || !counterSpan) return;

  const len = reasonInput.value.length;
  counterSpan.textContent = `${len} caracteres ingresados (${len} chars)`;

  if (len >= 20) {
    counterSpan.style.color = "var(--gold)";
    counterSpan.style.fontWeight = "bold";
  } else {
    counterSpan.style.color = "var(--muted)";
    counterSpan.style.fontWeight = "normal";
  }
}

/**
 * ------------------------------------------------------------------------------
 * 15. PRÁCTICA FORMATIVA DE VOCABULARIO
 * ------------------------------------------------------------------------------
 */
const PRACTICE_CHALLENGE = {
  terms: [
    { id: "vitrina", spanish: "La vitrina", english: "Display case / Vitrine" },
    { id: "huella", spanish: "La huella", english: "Fingerprint / Trace" },
    { id: "motivo", spanish: "El motivo", english: "Motive / Reason" },
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

  updatePracticeStatus("Selecciona un término en español a la izquierda y su significado en inglés a la derecha. (Select Spanish term on left, English on right.)");
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
  updatePracticeStatus(`Has seleccionado "${termObj.spanish}". Ahora pulsa su traducción en inglés.`);
}

function handleEnglishMeaningClick(termId) {
  if (PRACTICE_CHALLENGE.matchedIds.has(termId)) return;

  if (!PRACTICE_CHALLENGE.selectedSpanishId) {
    updatePracticeStatus("Por favor, selecciona primero un término en español a la izquierda. (Select a Spanish term first.)");
    return;
  }

  const selectedSpanishId = PRACTICE_CHALLENGE.selectedSpanishId;
  const esBtn = document.getElementById(`practice-es-${selectedSpanishId}`);
  const enBtn = document.getElementById(`practice-en-${termId}`);

  if (selectedSpanishId === termId) {
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
      updatePracticeStatus("✓ ¡Excelente! Has descifrado los 4 términos del cuaderno de campo. (All terms decrypted!)");
      const banner = document.getElementById("practiceCompleteBanner");
      if (banner) banner.classList.remove("practice-hidden");
    } else {
      const matchedObj = PRACTICE_CHALLENGE.terms.find(t => t.id === termId);
      updatePracticeStatus(`✓ ¡Correcto! "${matchedObj.spanish}" = "${matchedObj.english}".`);
    }
  } else {
    if (esBtn) esBtn.classList.add("is-mismatch");
    if (enBtn) enBtn.classList.add("is-mismatch");

    updatePracticeStatus("❌ No coinciden. Revisa el texto de la pista e inténtalo de nuevo. (Not a match, try again.)");

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
 * 16. LISTENERS DE EVENTOS Y NAVEGACIÓN SUAVE
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
        statusMsg.textContent = "✓ Actualizado (Updated).";
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
