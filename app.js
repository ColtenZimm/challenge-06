const form = document.querySelector('form');
const weatherData = document.querySelector('#weather-data');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;
  const apiKey = 'YOUR_API_KEY_HERE';
  
  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Display weather data on the page
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const location = `${data.name}, ${data.sys.country}`;
      weatherData.innerHTML = `<p>${location}: ${description}, ${temperature} &deg;C</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherData.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
