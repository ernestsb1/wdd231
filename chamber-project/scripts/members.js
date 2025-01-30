
const directory = document.getElementById('directory');
const gridButton = document.getElementById('grid-button');
const listButton = document.getElementById('list-button');

let view = 'grid';

async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = '';
  members.forEach((member) => {
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');
    if (view === 'grid') {
      memberElement.classList.add('grid');
    } else {
      memberElement.classList.add('list');
    }
    memberElement.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}">${member.website}</a></p>
      <p>Membership Level: ${member.membershipLevel}</p>
    `;
    directory.appendChild(memberElement);
  });
}

gridButton.addEventListener('click', () => {
  view = 'grid';
  loadMembers();
});

listButton.addEventListener('click', () => {
  view = 'list';
  loadMembers();
});

loadMembers();

document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("show-menu");
  });
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

