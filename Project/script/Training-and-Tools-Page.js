function toggleAnswer(answer) {
  if (answer.style.display == "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "";
  }
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", function (e) {
    document.querySelectorAll(".faq-question").forEach((btn) => {
      const answerElement = btn.parentElement.nextElementSibling;
      answerElement.style.display = "";
    });
    const answerElement = button.parentElement.nextElementSibling;
    toggleAnswer(answerElement);
  });
});

function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active"); // Adiciona ou remove a classe active
}

// Detecta mudanças no modo fullscreen
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.body.classList.add("fullscreen"); // Adiciona a classe 'fullscreen' ao body
  } else {
    document.body.classList.remove("fullscreen"); // Remove a classe 'fullscreen' do body
  }
});
