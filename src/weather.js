const weatherPromise = () => {
  const key = '3d86e91bf2b41fc3fd1f768f864ed86c';
  const submit = document.querySelector('button');
  const cityForm = document.querySelector('form');

  const weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'card');
  weatherCard.classList.add('shadow-lg', 'rounded', 'card-container', 'my-5', 'mx-auto');

  const weatherDetails = document.createElement('div');
  weatherDetails.setAttribute('class', 'card');
  weatherDetails.classList.add('text-muted', 'text-uppercase', 'text-center');

  weatherCard.appendChild(weatherDetails);

  const getWeather = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const response = await fetch(base, { mode: 'cors' });
    const data = await response.json();

    return data;
  };

  const updateUI = (data) => {
    // const { weatherDet } = data;
    const cityName = data.name;
    const { country } = data.sys;
    const tempValue = data.main.temp;
    // const tempValue = Math.floor(data.main.temp - KELVIN);
    const { description } = data.weather[0];
    const iconId = data.weather[0].icon;

    // update details template;
    weatherDetails.innerHTML = `
      <h5 class="my-3">${cityName}, ${country}</h5>
      <div class="my-3">${description}</div>
      <div class="display-4 my-4">
        <span>${tempValue}</span>
        <span>&deg;C</span>
      </div>
    `;
  };

  submit.addEventListener('click', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    const updateCity = async (city) => {
      const weatherDet = await getWeather(city);

      return weatherDet;
    };

    // Update UI with city value;
    updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
  });

  getWeather('lagos')
    .then(data => {
      console.log(data);
      console.log(data.name);
      console.log(data.sys.country);
    })
    .catch(err => console.log(err));
  //   return getWeather();
  document.body.appendChild(weatherCard);
};

export default weatherPromise;