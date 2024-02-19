import { Link, Outlet } from 'react-router-dom';
import { filiale } from '../data/filiale';
import './Filiale.css';

const Filiale = () => {
  return (
    <main>
      <h1>F I L I A L E</h1>
      <p>
        A.R.P.I.A. se organizează, la nivel național, cu organe de conducere
        centrale și locale, cu filiale în localitățile unde se întrunesc cel
        puțin 15 membri, în afara membrilor aspiranți, fără a exista două sau
        mai multe filiale în aceeași localitate.
      </p>
      <ul>
        {filiale.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${index}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </main>
  );
};

export default Filiale;
