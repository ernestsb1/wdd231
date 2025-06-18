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








const gridView = document.querySelector('.four-view');

const content = [
  {
    title: 'Introduction',
    text: 'Event planning can be a daunting task, requiring meticulous attention to detail, creativity, and exceptional organizational skills. Thats where Eventify comes in a comprehensive event planning solution designed to make your events unforgettable.',
  },
  {
    title: 'Site Purpose',
    text: 'The site provides a comprehensive event planning solution, offering a user-friendly interface for creating and managing event details, including dates, times, locations, and guest lists.',
  },
  {
    title: 'Your Ultimate Destination Partner',
 text: 'Our Destination Management Services offer a seamless and personalized experience for your event or trip. From transportation and accommodation to unique local experiences, we handle every detail to ensure a memorable journey. Let us take the stress out of planning and create a bespoke itinerary that exceeds your expectations.',
  },

  {
    title:'Let Us Handle Every Detai',
    text: 'Our expert wedding coordinators are here to make your special day stress-free and unforgettable. From coordinating vendors to managing timelines, we take care of everything so you can focus on celebrating your love. Choose us for a seamless and magical wedding experience!'
  }
];


  content.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;
  card.appendChild(h4);

  const p = document.createElement('p');
  p.textContent = item.text;
  card.appendChild(p);

  gridView.appendChild(card);
});



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