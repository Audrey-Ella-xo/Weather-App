const weatherPromise = () => {
  const key = '3d86e91bf2b41fc3fd1f768f864ed86c';

  const getWeather = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const response = await fetch(base, { mode: 'cors' });
    const data = await response.json();

    return data;
  };

  getWeather('london')
    .then(data => console.log(data))
    .catch(err => console.log(err));
//   return getWeather();
};

export default weatherPromise;