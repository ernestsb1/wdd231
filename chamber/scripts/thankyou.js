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
