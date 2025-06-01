const timestampField = document.getElementById('timestamp');
timestampField.value = new Date().toLocaleString();



// Add click event listeners to the modal links
const modalLinks = document.querySelectorAll('.modal-link');
modalLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const modal = document.getElementById(`${['np', 'bronze', 'silver', 'gold'][index]}-modal`);
    modal.style.display = 'block';
  });
});

// Add click event listener to the close buttons
const closeBtns = document.querySelectorAll('.close-button');
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
  });
});

// Add animation/transition to the membership cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 300);
});

// Get the form data from the URL parameters
 const urlParams = new URLSearchParams(window.location.search);
 const firstName = urlParams.get('first-name');
 const lastName = urlParams.get('last-name');
 const email = urlParams.get('email');
 const phone = urlParams.get('phone');
 const orgName = urlParams.get('org-name');
 const timestamp = urlParams.get('timestamp');

 function displayTimestamp() {
    const timestampDiv = document.getElementById('timestamp-output');
    const now = new Date();
    const timestamp = now.toLocaleString(); 

    timestampDiv.textContent = 'Submission Timestamp: ' + timestamp;
}

// Call the displayTimestamp function when the page loads
window.onload = function() {
    displayTimestamp();
};


 // Display the form data
 document.getElementById('first-name-output').textContent = firstName;
 document.getElementById('last-name-output').textContent = lastName;
 document.getElementById('email-output').textContent = email;
 document.getElementById('phone-output').textContent = phone;
 document.getElementById('org-name-output').textContent = orgName;
 document.getElementById('timestamp-output').textContent = timestamp;

 function prepareThankYouPage(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const urlParams = new URLSearchParams(formData);
    const queryString = urlParams.toString();
    
    window.location.href = `thank-you.html?${queryString}`;
  }


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