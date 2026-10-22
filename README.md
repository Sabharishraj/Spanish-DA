# ¿Quién Fue? (Who Was It?) — Expediente Confidencial N.º 047
## Interactive Bilingual Spanish Mystery & Forensic Investigation

> **Live Webpage:** [https://sabharishraj.github.io/Spanish-DA/](https://sabharishraj.github.io/Spanish-DA/)  
> **Case Identity:** Expediente Confidencial N.º 047 (*El archivo de las identidades perdidas / The Archive of Lost Identities*)  
> **Aesthetic Direction:** Unified Dark Palette (`#0B0F0E`, `#141A17`, `#1C2520`, `#B89959`)  
> **Accessibility:** Bilingual (Spanish with clear English translations & subtitles), WCAG AA compliant contrast, semantic HTML5, zero informal symbols or emojis  
> **Tech Stack:** Semantic HTML5, Modular CSS3, Pure Vanilla JavaScript (Zero External Dependencies)

---

## 1. Project Overview & Team Structure

*¿Quién Fue?* is an interactive educational mystery game designed to engage learners with Spanish language, historical inquiry, and Latin American cultural heritage. The investigation spans five seamlessly integrated modules:

| Module | Page | Lead / Member | Primary Focus |
| :--- | :--- | :--- | :--- |
| **01. Inicio (Home)** | [`index.html`](index.html) | **Anushka** (Miembro 1) | Narrative introduction, case background, and mission briefing. |
| **02. Sospechosos (Suspects)** | [`suspects.html`](suspects.html) | **Surender** (Miembro 2) | Interrogation profiles, motive analysis, and stated alibis. |
| **03. Evidencias (Evidence)** | [`evidence.html`](evidence.html) | **Annu** (Miembro 3) | Visual evidence, 1932/1941 portraits, 10:05 access log, and confidential letter. |
| **04. Acertijos (Puzzles)** | [`puzzles.html`](puzzles.html) | **Abhishek** (Miembro 4) | Spanish language challenges, Caesar cipher decoding, and Colombian cultural heritage quiz. |
| **05. Veredicto (Verdict)** | [`reveal.html`](reveal.html) | **Sabharish Raj** (Miembro 5) | Forensic accusation engine, scoring audit, suspect exoneration, and full culprit reveal. |

---

## 2. Case Synopsis & Core Canon

* **Stolen Heritage Item:** A valuable historical family document and cultural heirloom (*El Documento Histórico Familiar*).
* **Location:** Archive Vault, Museum of History & Culture (*Museo de Historia y Cultura*).
* **Incident Window:** October 14, between 10:05 and 10:30 HRS (critical 25-minute timeline).
* **The Motive:** Preventing an ancestral lineage secret from being publicly exposed by the upcoming museum exhibition.

---

## 3. Persistent Clues & Forensics

1. **Exhibit 01 — Photographic Records (1932 vs 1941):**
   * **Fotografía A (1932):** Vintage portrait registered under the name **Isabel Martín** (`images/sp_3.png`).
   * **Fotografía B (1941):** Official museum file containing the identical portrait registered under **Elena Castillo** (`images/sp2.jpg`).
   * *Forensic Finding:* Confirms the suspect used dual identities across decades to protect her lineage.

2. **Exhibit 02 — Administrative Access Log (October 14):**
   * `10:05` Suspect enters the museum archive.
   * `10:20` Historical document seen in the display case for the last time.
   * `10:30` Disappearance officially detected by archive staff.
   * *Forensic Finding:* Places Elena Castillo inside the archive during the exact window of the theft.

3. **Exhibit 03 — Confidential Family Letter:**
   * Unsigned letter: *“Debemos proteger este recuerdo y la herencia de nuestra familia. El pasado histórico no debe salir a la luz.”* (*“We must protect this memory and our family heritage. The historical past must not come to light.”*)
   * *Forensic Finding:* Proves non-monetary, ancestral motivation to suppress the historical document.

---

## 4. Suspect Roster & Verified Alibis

| Suspect | Role | Stated Alibi | Resolution |
| :--- | :--- | :--- | :--- |
| **Diego Salazar** `[DS]` | El Archivista *(The Archivist)* | In the reading room cross-referencing loan catalogs from 10:05 to 10:35. | **Exonerated:** Biometric turnstile log and sworn librarian statements confirm he never approached the display case. |
| **Elena Castillo (Alias: Isabel Martín)** `[EC]` | La Descendiente e Investigadora *(Visiting Researcher)* | Claimed she walked out to the courtyard at 10:10 due to unattended staff. | **CONFIRMED CULPRIT:** Lacks witnesses. Dual 1932/1941 photos prove alternate identity, 10:05 access log places her inside during the theft, and confidential letter proves her motive. |
| **Rafael Ortega** `[RO]` | El Coleccionista *(The Art Collector)* | In the main lobby conversing with diplomats and museum board members (10:00–10:45). | **Exonerated:** Eyewitness testimony from museum directors and security cameras in the main lobby confirm presence. |
| **Lucía Navarro** `[LN]` | La Restauradora *(The Conservator / Restorer)* | In the conservation workshop binding manuscripts with two student interns (09:30–10:30). | **Exonerated:** Sworn affidavits from two university interns and digital scanner logs confirm continuous lab work. |
| **Tomás Vega** `[TV]` | El Guardia de Seguridad *(The Security Guard)* | Investigating a ground-floor emergency door alert (10:00–10:25). | **Exonerated:** Central dispatch radio logs and elevator telemetry confirm ground-floor presence until 10:25. |

---

## 5. Running the Project

### Option A: Live Website
Visit the published GitHub Pages site:  
👉 **[https://sabharishraj.github.io/Spanish-DA/](https://sabharishraj.github.io/Spanish-DA/)**

### Option B: Local Browser Launch
1. Clone the repository:
   ```bash
   git clone https://github.com/Sabharishraj/Spanish-DA.git
   cd Spanish-DA
   ```
2. Open [`index.html`](index.html) in any modern web browser or run with Python:
   ```bash
   python3 -m http.server 5500
   ```
3. Navigate to `http://localhost:5500/` to test all five interactive modules.
