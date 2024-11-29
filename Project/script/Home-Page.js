function toggleAnswer(answer) {
  if (answer.style.display == "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "";
  }
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", function (e) {
    const answerElement = button.parentElement.nextElementSibling;
    toggleAnswer(answerElement);
  });
});

function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.body.classList.add("fullscreen");
  } else {
    document.body.classList.remove("fullscreen");
  }
});
