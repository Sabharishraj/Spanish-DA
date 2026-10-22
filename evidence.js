
document.querySelectorAll("[data-reveal]").forEach((button) => {
    button.addEventListener("click", () => {
        const clueId = button.dataset.reveal;
        const clue = document.getElementById(clueId);

        if (!clue) return;

        clue.hidden = !clue.hidden;

        if (clue.hidden) {
            button.setAttribute("aria-expanded", "false");
        } else {
            button.setAttribute("aria-expanded", "true");
        }
    });
});
