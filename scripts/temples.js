// Preencher o ano atual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Preencher a data da última modificação
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

const navButton = document.querySelector(".menu-icon");

navButton.addEventListener("click", function () {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    navButton.innerHTML = "X";
  } else {
    navButton.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
