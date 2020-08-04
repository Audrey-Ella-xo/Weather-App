const weatherPromise = () => {
  const key = '3d86e91bf2b41fc3fd1f768f864ed86c';
  
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