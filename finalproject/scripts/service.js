
const galleryContainer = document.querySelector('.gallery-container');
const cardGallery = document.querySelector('.card-gallery');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Get the card width
const cardWidth = cardGallery.querySelector('.card').offsetWidth;

// Add event listeners to the buttons
prevButton.addEventListener('click', () => {
  cardGallery.scrollLeft -= cardWidth;
});

nextButton.addEventListener('click', () => {
  cardGallery.scrollLeft += cardWidth;
});





fetch('data/event.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each item in the data array
    data.forEach(item => {
      // Create a new HTML element for each item
      const eventHTML = `
        <div class="event">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <p>Date: ${item.date}</p>
          <p>Time: ${item.time}</p>
          <p>Location: ${item.location}</p>
          <img src="${item.image}" alt="${item.title}">
        </div>
      `;
      // Append the HTML element to the webpage
      document.getElementById('events').innerHTML += eventHTML;
    });
  })
  .catch(error => console.error('Error:', error));













































const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





const footerCopyrightYear = document.getElementById('footerCopyrightYear');
const lastModifiedDate = document.getElementById('lastModifiedDate');

// Display copyright year on footer
footerCopyrightYear.textContent = new Date().getFullYear();

// Function to display last modification date
function displayLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    lastModifiedDate.textContent = lastModified.toDateString();
}

displayLastModifiedDate();