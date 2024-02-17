import { Link, Outlet } from 'react-router-dom';

const Initiative = () => {
  return (
    <main>
      <h1>I N I T I A T I V E</h1>
      <p>
        Oamenii inimoși care doresc să se alăture eforturilor membrilor
        asociației noastre, aflați la început, formează inițiative.
      </p>
      <ul>
        <li>
          <Link to="mission">Localitatea 1</Link>
        </li>
        <li>
          <Link to="team">Localitatea 2</Link>
        </li>
        <li>
          <Link to="reviews">Localitatea 3</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default Initiative;
