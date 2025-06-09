// Get the form data from the URL parameters
 const urlParams = new URLSearchParams(window.location.search);
 const firstName = urlParams.get('first-name');
 const lastName = urlParams.get('last-name');
 const middleName = urlParams.get('middle-name');
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

window.onload = function() {
    displayTimestamp();
};


 // Display the form data
 document.getElementById('first-name-output').textContent = firstName;
 document.getElementById('last-name-output').textContent = lastName;
  document.getElementById('middle-name-output').textContent = lastName;
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