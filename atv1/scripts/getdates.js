var soma1 = document.getElementById("soma1");
var soma2 = document.getElementById("soma2");
var btn = document.getElementById("btn");
var result = document.getElementById("resultado");

btn.addEventListener("click", function () {
  somatotal();
});

function somatotal() {
  var soma1Val = parseInt(soma1.value);
  var soma2Val = parseInt(soma2.value);
  var soma = soma1Val + soma2Val;
  document.getElementById("resultado").value = soma;
}
