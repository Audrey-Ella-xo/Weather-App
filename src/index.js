import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherAPI from './weather';

const header = () => {
  const topContainer = document.createElement('div');

  const navBar = document.createElement('nav');
  navBar.innerHTML = `
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Ella's Weather App</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
      `;
  topContainer.appendChild(navBar);

  document.body.appendChild(topContainer);
};

header();
weatherAPI();