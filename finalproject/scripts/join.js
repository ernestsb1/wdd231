// Add click event listeners to the modal links
const modalLinks = document.querySelectorAll('.modal-link');
modalLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const modal = document.getElementById(`${['corporate-events', 'social-events', 'cultural-events', 'sports-events', 'educational-events','charity-events', 'virtual-events', 'exposandTradeshows','community-events',][index]}-modal`);
    modal.style.display = 'block';
  });
});

const closeBtns = document.querySelectorAll('.close-button');
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 300);
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