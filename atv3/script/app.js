document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const todayIndex = today.getDay();
  const todayName = daysOfWeek[todayIndex];

  document.getElementById("today").innerText = `Today is ${todayName}.`;

  const futureDaysList = document.getElementById("future-days-list");
  for (let i = 1; i <= 6; i++) {
    const futureDayIndex = (todayIndex + i) % 7;
    const futureDayName = daysOfWeek[futureDayIndex];
    const listItem = document.createElement("li");
    listItem.innerText = futureDayName;
    futureDaysList.appendChild(listItem);
  }
});
