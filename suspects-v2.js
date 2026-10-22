document.querySelectorAll(".reveal-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.querySelector("span").textContent = willOpen ? "−" : "＋";
  });
});

document.querySelectorAll(".person-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    card.classList.toggle("selected");
  });
});

const form = document.getElementById("suspect-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const choice = document.getElementById("suspect-choice");
    const feedback = document.getElementById("guess-feedback");
    if (!choice.value) {
      feedback.textContent = "Selecciona una persona antes de continuar.";
      return;
    }
    document.querySelectorAll(".person-card").forEach((card) => {
      card.classList.toggle("selected", card.dataset.person === choice.value);
    });
    const selectedName = choice.options[choice.selectedIndex].text;
    feedback.textContent = `Sospecha registrada: ${selectedName}. Compara su declaración con las pruebas antes de decidir.`;
    document.querySelector(`[data-person="${choice.value}"]`)?.scrollIntoView({behavior:"smooth", block:"center"});
  });
}
