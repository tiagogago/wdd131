var ctx = document.getElementById("workSummaryChart").getContext("2d");
var workSummaryChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Last 9 Months",
        data: [500, 600, 800, 1200, 1500, 1300, 1100, 900, 1000],
        borderColor: "#ff7f32",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
        backgroundColor:"#ff7f32",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

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

