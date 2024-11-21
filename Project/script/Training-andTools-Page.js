// Open Tool Function
function openTool(toolName) {
  alert(`Opening ${toolName}...`);
}

// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const toggleButton = faq.querySelector(".toggle-faq");
    const content = faq.querySelector(".faq-content");

    toggleButton.addEventListener("click", () => {
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
      toggleButton.textContent = isVisible ? "+" : "-";
    });
  });
});
