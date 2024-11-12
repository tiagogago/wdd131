function downloadFile() {
  const language = document.getElementById("languageSelect").value;

  // Defina o link de download de acordo com o idioma escolhido
  let fileUrl = "";
  if (language === "pt") {
    fileUrl = "path/to/portuguese-file.pdf";
  } else if (language === "en") {
    fileUrl = "path/to/english-file.pdf";
  } else if (language === "es") {
    fileUrl = "path/to/spanish-file.pdf";
  }

  // Crie um link temporário para o download
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = `documento-${language}.pdf`; // Nome do arquivo baixado
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
