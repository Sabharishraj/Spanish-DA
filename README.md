# ¿Quién Fue? (Who Was It?) — Confidential Case File #047
## Interactive Forensic Mystery: Final Accusation & Verdict Reveal

> **Project Role:** Member 5 — Final Accusation, Culprit Reveal, Evidence Synthesis, Scoring Engine & Replay  
> **Author & Lead Developer:** Sabharish Raj G K  
> **Collaborative Integration:** Synthesizes evidence from Page 1 developed by **Shaik Annu** (Member 3 — *Evidence Archive & Lost Identities*)  
> **Case Identity:** Confidential Case File #047 (*El archivo de las identidades perdidas*)  
> **Aesthetic Direction:** Classic Noir Archive (Forest Green `#0b1713`, Deep Moss Panels `#12231c`, Aged Gold `#c9a66b`, Cream `#f0e5d0`, and Vintage Parchment `#e0cba5`)  
> **Typography:** *Cormorant Garamond* (Serif) & *Special Elite* (Typewriter Monospace)  
> **Tech Stack:** Semantic HTML5, Modular CSS3, and Pure Vanilla JavaScript (Zero External Dependencies)

---

## 1. Quick Start

Run completely offline in any modern browser without servers or build tools:

1. **Option A (VS Code Live Server — Recommended):**
   - Open `/Users/sabharish/quien-fue-final-reveal` in VS Code.
   - Right-click [`reveal.html`](file:///Users/sabharish/quien-fue-final-reveal/reveal.html) and select **"Open with Live Server"**.
   - Accessible at `http://127.0.0.1:5500/reveal.html`.
2. **Option B (Direct Browser Launch):**
   - Double-click [`reveal.html`](file:///Users/sabharish/quien-fue-final-reveal/reveal.html) in macOS Finder or drag it into Chrome, Safari, or Firefox.

---

## 2. Case Summary & Core Canon

* **Stolen Item:** Valuable Historical Family Document & Cultural Heirloom (*The Archive of Lost Identities*).
* **Location:** Administrative Archive & Vault, Museum of History & Culture.
* **Incident Time:** October 14, between 10:05 and 10:30 HRS (25-minute critical window).
* **The Crime:** The document was extracted from the archive vitrine right before an upcoming exhibition.
* **The Motive:** Preventing an ancestral family secret from being publicly exposed.

---

## 3. Decisive Evidence Matrix

1. **Exhibit #01 — Photographic Evidence (1932 vs 1941):**
   - **Photo A (1932):** Historical portrait registered as *Isabel Martín* (`images/sp_3.png`).
   - **Photo B (1941):** Official record using an identical portrait under the name *Elena Castillo* (`images/sp2.jpg`).
   - **Finding:** Facial matching proves the suspect used dual identities across decades to conceal her family lineage.
2. **Exhibit #02 — Administrative Access Log (October 14):**
   - `10:05` Suspect enters the museum archive.
   - `10:20` Cultural treasure seen for the last time.
   - `10:30` Disappearance discovered by staff.
   - **Finding:** Places Elena Castillo inside the archive during the exact window of the theft.
3. **Exhibit #03 — Confidential Family Letter:**
   - Unsigned letter: *“We must protect this memory and our family inheritance. The historical past must not come to light.”*
   - **Finding:** Establishes the non-monetary motive: suppressing a private family secret linked to Latin American heritage.

---

## 4. Suspect Profiles & Verified Alibis

| Suspect | Institutional Role | Stated Alibi | Case Resolution |
| :--- | :--- | :--- | :--- |
| **Dr. Mateo Valenzuela** | Archive Director | Meeting with university board in the main lobby (10:00–10:45). | **Exonerated:** Turnstile badge #01 and diplomatic witnesses confirm presence in the lobby. |
| **Héctor Delgado** | Security Supervisor | Responding to a door sensor alert on the ground floor (10:00–10:25). | **Exonerated:** Central radio recordings and elevator telemetry confirm presence on the ground floor. |
| **Elena Castillo (Alias: Isabel Martín)** | Visiting Researcher & Family Descendant | Claimed she left for the gardens at 10:10 due to unattended staff. | **TRUE CULPRIT:** Lacks witnesses. Photos A & B prove her alias history, access log proves she remained inside during the theft (10:05–10:25), and the letter reveals her family motive. |
| **Sofía Morales** | Archive Cataloguer | Restoring manuscripts with two student interns (09:30–10:30). | **Exonerated:** Both interns testified under oath, and scanner activity logs confirm continuous lab work. |
| **Carlos Mendoza** | Maintenance Technician | Replacing fluorescent lights in Exhibition Room 2 (10:05–10:40). | **Exonerated:** Signed work order #OT-104 and two cleaning staff eyewitnesses verify his presence on a ladder. |

---

## 5. Core Interactive Features

* **Evidence Dossier (Page 1 Format):** Interactive clues toggleable with `[data-reveal]` buttons, displaying vintage sepia photo comparisons, striped administrative documents, and parchment letter quotes.
* **Accessible Accusation System:** Keyboard-accessible radio group (`role="radio"`, arrow navigation) with live validation alerts.
* **Forensic Deduction Field:** Optional text area rewarding +20 points for reasoned explanations ($\ge 20$ chars).
* **Dramatic Verdict Reveal:**
  * **Correct Verdict:** Displays success banner (`CASE SOLVED`), reveals Elena Castillo's full signed confession, and confirms recovery of the document.
  * **Incorrect Verdict:** Displays disproven notice, explains why the accused is innocent, and presents the true culprit's dossier.
* **Exoneration Audit:** Detailed breakdown demonstrating why the other 4 suspects are completely cleared.
* **Transparent Scoring Engine (100 Pts Max):**
  * Culprit Identification: **50 pts**
  * Forensic Deduction Reasoning: **20 pts**
  * Evidence Discovered / Analyzed: **30 pts**
* **Replay Engine:** Cleans all inputs and resets state for a fresh investigation run.
* **30-Term Bilingual Glossary:** Educational Spanish-English dictionary with real-time live search.
* **Field Note Decryption:** Formative 4-term matching exercise (*la vitrina*, *la huella*, *el motivo*, *la coartada*).
