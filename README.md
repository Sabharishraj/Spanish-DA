# ¿Quién Fue? — Expediente Confidencial N.º 047
## Veredicto Final, Revelación de la Culpable, Síntesis de Evidencias y Sistema de Puntuación

> **Rol del Proyecto:** Miembro 5 — Veredicto Final, Revelación de la Culpable, Síntesis de Evidencias, Sistema de Puntuación y Rejugabilidad  
> **Autor & Diseñador Principal:** Sabharish Raj G K  
> **Integración Colaborativa:** Página 1 desarrollada por **Shaik Annu** (Miembro 3 — *Archivo de Evidencias e Identidades Perdidas*)  
> **Expediente Oficial:** `EXPEDIENTE CONFIDENCIAL · N.º 047`  
> **Dirección Visual:** Estética Archivo Noir idéntica a la Página 1 (Verde Bosque `#0b1713`, Paneles Degradados `#12231c`, Oro Envejecido `#c9a66b`, Crema `#f0e5d0` y Papel Pergamino `#e0cba5`)  
> **Tipografía:** *Cormorant Garamond* y *Special Elite*  
> **Stack Técnico:** HTML5 Semántico, CSS3 Modular y Vanilla JavaScript Puro (Cero Dependencias Externas)

---

## 1. Estructura del Proyecto

El proyecto está autocontenido dentro del directorio `quien-fue-final-reveal`:

```text
quien-fue-final-reveal/
├── images/
│   ├── sp_3.png      # Fotografía A (1932): Retrato histórico bajo el nombre de Isabel Martín
│   └── sp2.jpg       # Fotografía B (1941): Retrato histórico bajo el nombre de Elena Castillo
├── reveal.html       # Estructura semántica completa (Nav, Hero, Stats, Cronología, Sospechosos, Evidencias, Veredicto, Glosario, Reflexión)
├── reveal.css        # Paleta y estilos tomados de la Página 1: Verde bosque, oro, pergamino, Cormorant Garamond y Special Elite
├── reveal.js         # Máquina de estados reactiva, STORY_CONFIG del Expediente 047, validaciones accesibles, scoring y replay
└── README.md         # Documentación técnica, canon del caso, matriz forense y guía de evaluación
```

---

## 2. Cómo Ejecutar Localmente

1. Abre **Visual Studio Code**.
2. Selecciona **Archivo > Abrir Carpeta...** y elige `/Users/sabharish/quien-fue-final-reveal`.
3. **Opción A (Live Server):**
   - Haz clic derecho sobre [`reveal.html`](file:///Users/sabharish/quien-fue-final-reveal/reveal.html) y pulsa **"Open with Live Server"**.
   - Se abrirá en tu navegador en `http://127.0.0.1:5500/reveal.html`.
4. **Opción B (Navegador Directo):**
   - Haz doble clic sobre [`reveal.html`](file:///Users/sabharish/quien-fue-final-reveal/reveal.html) en el Finder de macOS o arrástralo a cualquier navegador web moderno (Chrome, Safari, Firefox). Funciona 100% offline sin servidores ni compilación previa.

---

## 3. Canon Oficial del Expediente Confidencial 047

El caso está sincronizado de forma fidedigna con la Página 1 de Shaik Annu:

### El Objeto del Robo
- **Bien Cultural:** Documento Histórico y Tesoro Patrimonial Familiar (*El archivo de las identidades perdidas*)
- **Procedencia:** Patrimonio Cultural y Memoria Histórica de América Latina
- **Ubicación del Suceso:** Archivo Administrativo y Sala de Fondos Reservados del Museo de Historia y Cultura
- **Fecha del Delito:** 14 de octubre (Intervalo pericial: 10:05 a 10:30 HRS)
- **Descripción:** Un valioso documento histórico que salvaguarda la genealogía, títulos y secretos fundacionales de una prominente familia histórica, cuya exhibición pública amenazaba con exponer un secreto celosamente guardado por generaciones.

---

### Matriz Forense de los Cinco Sospechosos

| ID | Nombre & Rol Institucional | Coartada Declarada | Resolución y Hallazgos Periciales |
| :--- | :--- | :--- | :--- |
| **`suspect-1`** | **Dr. Mateo Valenzuela**<br>*Director del Archivo del Museo* | Reunido con el comité de adquisiciones en el vestíbulo principal de 10:00 a 10:45 HRS. | **Exonerado:** El torniquete biométrico #01 y testimonios de diplomáticos certifican que permaneció en el vestíbulo durante todo el lapso del robo. |
| **`suspect-2`** | **Héctor Delgado**<br>*Supervisor de Seguridad del Museo* | Atendiendo una alerta de contacto de puerta en la planta baja entre 10:00 y 10:25 HRS. | **Exonerado:** Las bitácoras de audio de la radiofrecuencia y las grabaciones del montacargas corroboran su presencia en la planta baja, lejos del archivo. |
| **`suspect-3`** | **Elena Castillo (Alias: Isabel Martín)**<br>*Investigadora Visitante e Historiadora* | Alegó haber salido a los jardines exteriores a las 10:10 HRS por no encontrar al bibliotecario. | **CULPABLE CONFIRMADA:** El cotejo facial pericial demuestra que las fotografías de 1932 (Isabel Martín) y 1941 (Elena Castillo) corresponden a su linaje encubierto. El registro de acceso prueba su presencia entre las 10:05 y 10:25 HRS, y la carta confidencial revela su móvil familiar. |
| **`suspect-4`** | **Sofía Morales**<br>*Archivera y Catalogadora de Documentos* | Trabajando en el taller de encuadernación con dos pasantes de 09:30 a 10:30 HRS. | **Exonerada:** Dos pasantes juraron bajo testimonio haber estado junto a Sofía restaurando pergaminos; el escáner digital muestra actividad ininterrumpida. |
| **`suspect-5`** | **Carlos Mendoza**<br>*Técnico de Instalaciones del Museo* | Cambiando luminarias en la Sala 2 de Historia desde las 10:05 hasta las 10:40 HRS. | **Exonerado:** La orden de trabajo #OT-104 y dos empleados del equipo de limpieza testificaron que estuvo subido en una escalera reparando luces durante todo el intervalo del robo. |

---

### Evidencias Decisivas (Copiadas del Formato de la Página 1)

1. **Evidencia #01 (Archivo Fotográfico · 01):**
   - **Fotografía A (1932):** Registrada como *Isabel Martín* (`images/sp_3.png`, sello 1932).
   - **Fotografía B (1941):** Registrada como *Elena Castillo* (`images/sp2.jpg`, sello 1941).
   - **Hallazgo:** Ambas fichas utilizan nombres diferentes para ocultar la verdadera identidad del linaje de la sospechosa.
2. **Evidencia #02 (Documento A · 02 — Registro Administrativo de Acceso):**
   - Registro oficial con sello pericial del 14 de octubre:
     - `10:05` Entrada del sospechoso al archivo del museo.
     - `10:20` El tesoro cultural se ve por última vez.
     - `10:30` Se descubre la desaparición del documento.
   - **Hallazgo:** Establece la presencia física de Elena Castillo dentro del archivo durante la sustracción.
3. **Evidencia #03 (Documento B · 03 — Carta Confidencial sin Firma):**
   - Manuscrito epistolar: *“Debemos proteger este recuerdo y la herencia de nuestra familia. El pasado histórico no debe salir a la luz.”*
   - **Hallazgo:** Revela el móvil familiar de proteger la memoria y el patrimonio ancestral de América Latina ante la exposición pública.

---

## 4. Funciones Clave en JavaScript (`reveal.js`)

1. **`detectIntegrationParameters()`**: Lee parámetros de URL (`?clues=3&puzzle=1`), `localStorage` y `window.quienFueSharedData` para sincronizar el estado transferido desde la Página 1 de Shaik Annu.
2. **`renderEvidenceArchive()`**: Renderiza las tres evidencias con el formato visual exacto de la Página 1 (fotografías con filtro sepia, sellos angulados, documento mecanografiado con líneas repetitivas, carta en papel pergamino y botones con `data-reveal`).
3. **`selectSuspect(suspectId)`**: Gestiona la selección accesible del sospechoso mediante teclado (`role="radio"`, flechas de dirección y barra espaciadora).
4. **`handleAccusationSubmit(event)`**: Valida la selección del usuario. Si no se selecciona sospechoso, muestra una alerta con `role="alert"`. Si es válido, evalúa el veredicto.
5. **`revealCulpritOutcome()`**:
   - **Correcto:** Muestra el banner verde esmeralda (`¡CASO RESUELTO!`), confirma la culpabilidad de Elena Castillo, su confesión íntegra y la restitución del bien patrimonial.
   - **Incorrecto:** Muestra el banner carmesí (`ACUSACIÓN ERRÓNEA`), explica por qué el sospechoso elegido es inocente y revela a Elena Castillo como la culpable real con sus pruebas.
6. **`calculateAndRenderScore(isCorrect)`**: Fórmula matemática transparente:
   - Acusación de la culpable real: **50 pts**
   - Deducción forense documentada: **20 pts** (mín. 20 caracteres)
   - Evidencias analizadas: **30 pts** (10 pts por evidencia examinada)
   - Total: **100 pts** mapeados a rangos periciales oficiales.
7. **`handleReplay()`**: Restablece el formulario, limpia deducciones y devuelve la página a su estado original para una nueva prueba.
8. **`renderGlossary()` & `handleGlossarySearch()`**: Glosario de 30 términos en español e inglés con filtrado dinámico en tiempo real.
9. **`setupSpanishPracticeChallenge()`**: Práctica formativa de emparejamiento de 4 términos forenses (*la vitrina*, *la huella*, *el motivo*, *la coartada*).

---

## 5. Lista de Verificación y Defensa Académica

- [x] **Identidad del Expediente:** Expediente Confidencial N.º 047 (*El archivo de las identidades perdidas*).
- [x] **Alineación con la Página 1:** Adopta fielmente las fotografías A y B (`sp_3.png` y `sp2.jpg`), las fechas de 1932 y 1941, los nombres Isabel Martín y Elena Castillo, el registro de acceso del 14 de octubre (10:05 – 10:30) y la carta confidencial del secreto familiar.
- [x] **Diferenciación de Propósitos:** La Página 1 (Shaik Annu, Miembro 3) es el archivo de evidencias y exposición de pistas, mientras que esta página (Sabharish Raj G K, Miembro 5) es el **Veredicto Final**, la acusación judicial interactiva, la revelación de la culpable, la exoneración pericial y el sistema de puntuación.
- [x] **Diseño Visual:** Idéntico a la Página 1: Verde bosque `#0b1713`, paneles en degradado, marcos de oro `#c9a66b`, tipografía *Cormorant Garamond* y *Special Elite*.
- [x] **Accesibilidad WCAG AA:** Teclado completo, etiquetas ARIA, enlaces de salto, alto contraste y diseño adaptable a pantallas móviles.
- [x] **Glosario Educativo:** 30 términos en español con traducción, categoría gramatical y ejemplos contextualizados del robo en el museo.
- [x] **Reflexión Personal:** Documentada por Sabharish Raj G K reconociendo la colaboración con Shaik Annu y el aprendizaje arquitectónico del sistema.
