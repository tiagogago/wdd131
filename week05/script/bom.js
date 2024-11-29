const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// Função para obter a lista de capítulos do localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList")) || [];
}

// Exibe todos os capítulos existentes na lista
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Adiciona um evento de clique ao botão
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    displayList(input.value); // Chama a função para exibir o capítulo
    chaptersArray.push(input.value); // Adiciona o capítulo ao array
    setChapterList(); // Atualiza o localStorage com o novo array
    input.value = ""; // Limpa o input
    input.focus(); // Define o foco de volta no input
  }
});

// Função para exibir um capítulo na lista
function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item; // Define o texto do item
  deleteButton.textContent = "❌"; // Define o texto do botão de deletar
  deleteButton.classList.add("delete"); // Adiciona uma classe para o botão de deletar

  li.append(deleteButton); // Adiciona o botão ao item da lista
  list.append(li); // Adiciona o item da lista ao elemento da lista

  // Adiciona um evento de clique ao botão de deletar
  deleteButton.addEventListener("click", function () {
    list.removeChild(li); // Remove o item da lista
    deleteChapter(item); // Remove o capítulo do array e do localStorage
    input.focus(); // Define o foco de volta no input
  });
}

// Função para remover um capítulo do array e do localStorage
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList(); // Atualiza o localStorage
}

// Função para atualizar o localStorage com a lista de capítulos
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
