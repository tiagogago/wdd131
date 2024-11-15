let firstName = "Tiago";
let lastName = "Gago";

function fullName(Tiago, Gago) {
  return `${Tiago} ${Gago}`;
}
const fullName = function (Tiago, Gago) {
  return `${Tiago} ${Gago}`;
};

const fullName = (Tiago, Gago) => `${Tiago} ${Gago}`;

document.querySelector("#fullName").innerHTML = fullName(Tiago, Gago);
