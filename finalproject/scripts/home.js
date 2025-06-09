const gridView = document.querySelector('.four-view');

const content = [
  {
    title: 'Turn Your Vision Into Reality',
    text: 'Dreaming of a fairytale wedding? Our dedicated team of coordinators will work closely with you to bring your vision to life. With meticulous planning and attention to detail, we ensure that every aspect of your wedding reflects your unique style and personality. Trust us to make your dream wedding a reality.',
  },
  {
    title: 'Let Us Make Your Event Unforgettable',
    text: 'Our expert event management team is dedicated to creating a unique and memorable experience for you and your guests. From planning and coordination to execution, we handle every detail with precision and creativity. Choose us to turn your event into a stress-free success!',
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

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  card.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = item.text;
  card.appendChild(p);

  gridView.appendChild(card);
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show-menu');
}

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