

// OpenWeatherMap API Key
const apiKey = '5dbabf82b728bb11e1eebdd89b435475';

// Chamber location (London, UK)
const lat = '51.507351';
const lon = '-0.127758';

// Get current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    // Display current weather data
    document.getElementById('current-weather').innerText = `Weather in ${data.name}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('feels-like').innerText = `Feels like: ${data.main.feels_like}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-condition').innerText = `Weather Condition: ${data.weather[0].description}`;
  })
  .catch(error => {
    console.error(error);
  });

// Get 3-day weather forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${'5dbabf82b728bb11e1eebdd89b435475'}&units=metric`)
  .then(response => response.json())
  .then(data => {
    // Extract forecast data for today, tomorrow, and next tomorrow
    const forecastData = data.list.filter((item, index) => index % 8 === 0); // 8 intervals per day
    const todayForecast = forecastData[0];
    const tomorrowForecast = forecastData[1];
    const nextTomorrowForecast = forecastData[2];

    // Display 3-day weather forecast
    const forecastHtml = `
      <h4>Today</h4>
      <p>Temperature: ${todayForecast.main.temp}°C</p>
      <p>Weather: ${todayForecast.weather[0].description}</p>
      <h4>Tomorrow</h4>
      <p>Temperature: ${tomorrowForecast.main.temp}°C</p>
      <p>Weather: ${tomorrowForecast.weather[0].description}</p>
      <h4>Next-Tomorrow</h4>
      <p>Temperature: ${nextTomorrowForecast.main.temp}°C</p>
      <p>Weather: ${nextTomorrowForecast.weather[0].description}</p>
    `;
    document.querySelector('.weather-forecast').innerHTML += forecastHtml;
  })
  .catch(error => {
    console.error(error);

    getCurrentWeather();
getWeatherForecast();


});






// Get the spotlights container element
const spotlightsContainer = document.getElementById('spotlights-container');

// Load the members data from the JSON file
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    // Filter the gold and silver members
    const goldAndSilverMembers = data.filter(member => member.membershipLevel.includes('Gold') || member.membershipLevel.includes('Silver'));

    // Randomly select 2-3 members from the filtered list
    const randomMembers = goldAndSilverMembers.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 2) + 2);

    // Create the spotlight cards for the randomly selected members
    const spotlightsHtml = randomMembers.map(member => {
      return `
        <div class="spotlight">
          <h5>${member.name}</h5>
          <img src="${member.image}" alt="${member.name}">
          <p>Phone: ${member.phone}</p>
          <p>Address: ${member.address}</p>
          <p>Website: <a href="${member.website}">${member.website}</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
        </div>
      `;
    }).join('');

    // Add the spotlight cards to the container element
    spotlightsContainer.innerHTML = spotlightsHtml;
  })
  .catch(error => {
    console.error(error);
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