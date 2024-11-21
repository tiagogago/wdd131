var ctx = document.getElementById("workSummaryChart").getContext("2d");
var workSummaryChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Last 9 Months",
        data: [500, 600, 800, 1200, 1500, 1300, 1100, 900, 1000],
        borderColor: "#00f",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
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
