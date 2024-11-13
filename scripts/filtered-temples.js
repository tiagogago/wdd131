document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("last-modified");

  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  lastModifiedSpan.textContent = document.lastModified;

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-exterior-1075694-wallpaper.jpg",
    },
    {
      templeName: "Laie Hawaii",
      location: "Laie, Hawaii, United States",
      dedicated: "1919, November, 27",
      area: 10000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-hawaii-temple-sunrise-1075915-wallpaper.jpg",
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52966,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-1398427-wallpaper.jpg",
    },
  ];

  function renderTemples(filteredTemples) {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";
    filteredTemples.forEach((temple) => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            `;
      gallery.appendChild(figure);
    });
  }

  renderTemples(temples);

  function filterTemples(criteria) {
    let filtered;
    switch (criteria) {
      case "old":
        filtered = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() < 1900
        );
        break;
      case "new":
        filtered = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() > 2000
        );
        break;
      case "large":
        filtered = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
        filtered = temples.filter((temple) => temple.area < 10000);
        break;
      default:
        filtered = temples;
    }
    renderTemples(filtered);
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute("data-filter");
      filterTemples(filter);
    });
  });

  const nav = document.querySelector("nav");
  const toggleButton = document.getElementById("menu-toggle");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
});
