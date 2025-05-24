
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

  

 



document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('directory').style.gridTemplateColumns = 'repeat(3, 1fr)';
  });
  loadMembers();
  
  document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('directory').style.gridTemplateColumns = '1fr';
  
  });


  const gridContainer = document.querySelector('.view');
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Function to set grid layout based on screen size
  function setGridLayout() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 1200) {
      gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (screenWidth >= 768) {
      gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (screenWidth >= 480) {
      gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      gridContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }

    function switchToGridView() {
      gridContainer.style.display = 'grid';
      setGridLayout();
    }
    
  }
  


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
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

