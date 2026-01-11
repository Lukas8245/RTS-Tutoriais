document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cmd").forEach(button => {
    button.addEventListener("click", () => {
      const text = button.dataset.copy;
      navigator.clipboard.writeText(text);
    });
  });
});
