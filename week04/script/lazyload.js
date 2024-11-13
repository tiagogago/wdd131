document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
  return temp <= 10 && windSpeed > 4.8
    ? (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(1)
    : "N/A";
}

const temperature = 10; // Static value in Celsius
const windSpeed = 5; // Static value in km/h
document.getElementById("windChill").textContent = calculateWindChill(
  temperature,
  windSpeed
);

// Function to toggle image display based on screen size
function toggleImageDisplay() {
  const smallImage = document.getElementById("smallImage");
  const largeImage = document.getElementById("largeImage");

  if (window.innerWidth >= 768) {
    // Show large image on larger screens
    smallImage.style.display = "none";
    largeImage.style.display = "block";
  } else {
    // Show small image on mobile screens
    smallImage.style.display = "block";
    largeImage.style.display = "none";
  }
}

// Initial call to set the correct image on page load
toggleImageDisplay();

// Event listener to toggle images on window resize
window.addEventListener("resize", toggleImageDisplay);
