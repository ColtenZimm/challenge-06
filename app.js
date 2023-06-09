const form = document.querySelector('form');
const weatherData = document.querySelector('#weather-data');

form.addEventListener('submit', function(event){
  event.preventDefault();
  
  const city = document.querySelector('#city').value;
  const apiKey = '19d898a9280e66dbe17ab3e90156196a';
  
  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
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
