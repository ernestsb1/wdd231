fetch('data/gallery-items.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.querySelector('.gallery');
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('gallery-card');
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn more</button>
            `;
            gallery.appendChild(card);
        });
    });




    // Populate sidebar content dynamically
const sidebar = document.querySelector('aside');
const lastVisitDate = localStorage.getItem('lastVisitDate');
const currentDate = Date.now();
if (!lastVisitDate) {
    sidebar.innerHTML = 'Welcome! Let us know if you have any questions.';
} else {
    const timeDiff = currentDate - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) {
        sidebar.innerHTML = 'Back so soon! Awesome!';
    } else if (daysDiff === 1) {
        sidebar.innerHTML = 'You last visited 1 day ago.';
    } else {
        sidebar.innerHTML = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem('lastVisitDate', currentDate);



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