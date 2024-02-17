import { Route, Routes } from 'react-router-dom';
import Activitati from '../pages/Activitati';
import Asociatia from '../pages/Asociatia';
import Filiale from '../pages/Filiale';
import Galerie from '../pages/Galerie';
import Home from '../pages/Home';
import Initiative from '../pages/Initiative';
import { DetaliiFiliala } from '../pages/DetaliiFiliala';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="asociatia" element={<Asociatia />} />
        <Route path="filiale" element={<Filiale />} />
        <Route path="filiale/:id" element={<DetaliiFiliala />} />
        <Route path="initiative" element={<Initiative />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="activitati" element={<Activitati />} />
        <Route path="galerie" element={<Galerie />} />
      </Route>
    </Routes>
  );
};
// paleta de culori
// https://pankod.github.io/superplate/docs/react/styled-components/
