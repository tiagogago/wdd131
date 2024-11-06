const input = document.querySelector('#favchap');
const button = document('button');
const list = document.querySelector('input, button, list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
li.append(deleteButton);
li.append(li);

deleteButton.textContent = '❌';