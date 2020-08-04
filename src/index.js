import './style.css';
import weatherAPI from './weather';
import 'bootstrap/dist/css/bootstrap.min.css';

const header = () => {
  const topContainer = document.createElement('div');

  const navBar = document.createElement('nav');
  navBar.innerHTML = `
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Ella's Weather App</a>
        <form class="form-inline change-location">
            <input class="form-control mr-sm-2" type="search" name="city" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
      `;
  topContainer.appendChild(navBar);

  document.body.appendChild(topContainer);
};

header();
weatherAPI();