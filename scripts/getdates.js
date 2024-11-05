// Preencher o ano atual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Preencher a data da última modificação
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;
