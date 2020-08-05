const weatherPromise = () => {
  const KELVIN = 273;
  const key = '3d86e91bf2b41fc3fd1f768f864ed86c';
  const submit = document.querySelector('button');
  const cityForm = document.querySelector('form');

  const weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'card');
  weatherCard.classList.add('shadow-lg', 'rounded', 'card-container', 'my-5', 'mx-auto', 'd-none');

  const weatherDetails = document.createElement('div');
  weatherDetails.setAttribute('class', 'details');
  weatherDetails.classList.add('text-muted', 'text-uppercase', 'text-center');
  weatherCard.style.backgroundColor = '#f5f0f038;'

  const celcius = document.createElement('button');
  celcius.innerText = '°C'
  celcius.setAttribute('class', 'cel');
  celcius.classList.add('btn', 'btn-outline-secondary', 'btn-sm');

  const fahr = document.createElement('button');
  fahr.innerText = '°F'
  fahr.setAttribute('class', 'fahr')
  fahr.classList.add('btn', 'btn-outline-secondary', 'btn-sm');

  const btnDiv = document.createElement('span');
  btnDiv.setAttribute('class', 'btnDiv');
  btnDiv.appendChild(celcius);
  btnDiv.appendChild(fahr);
  
  weatherCard.appendChild(weatherDetails);

  const getWeather = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const response = await fetch(base, { mode: 'cors' });
    const data = await response.json();

    return data;
  };

  const updateUI = (data) => {
    const cityName = data.name;
    const { country } = data.sys;
    const tempValueCelcius = Math.floor(data.main.temp - KELVIN);
    const tempValueFahr = Math.floor(tempValueCelcius * (9 / 5) + 32);
    const { description } = data.weather[0];
    const iconId = data.weather[0].icon;
    const { humidity } = data.main;
    const { pressure } = data.main;

    // update details template;

    
    weatherDetails.innerHTML = `
      <h5 class="my-3">${cityName}, ${country}</h5>
      <div class="my-3">${description}</div>
      <div class="icon bg-light mx-auto text-center">
        <img src="http://openweathermap.org/img/w/${iconId}.png" alt="">
      </div>
      <div class="display-4 my-4 tempDiv">
        <span>${tempValueCelcius}</span>
        <span>&deg;C</span>
      </div>
      <div class="display-8 my-4">
        <span>Humidity: ${humidity}%</span>
        <span>Pressure: ${pressure}</span>
      </div>
    `;
    const tempDiv = document.querySelector('.tempDiv');
    tempDiv.appendChild(btnDiv);

    celcius.addEventListener('click', e => {
      e.preventDefault();

      tempDiv.innerHTML = `
        <span>${tempValueCelcius}</span>
        <span>&deg;C</span>
      `;
      tempDiv.appendChild(btnDiv);
    })

    fahr.addEventListener('click', e => {
      e.preventDefault();

        tempDiv.innerHTML = `
        <span>${tempValueFahr}</span>
        <span>&deg;F</span>
      `;
      tempDiv.appendChild(btnDiv);
    })
    // 
    // remove the d-none class if present
    if (weatherCard.classList.contains('d-none')) {
      weatherCard.classList.remove('d-none');
    }
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
      .catch(err => {return err});
  });

  document.body.appendChild(weatherCard);
};

export default weatherPromise;