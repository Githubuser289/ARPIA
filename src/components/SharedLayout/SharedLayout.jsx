import { Outlet } from 'react-router-dom';
import { BackDiv, Container, Header, Logo, Link } from './SharedLayout.styled';
import icon from './war-plane-icon.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
             <img src={icon} alt="jet icon"></img>  A.R.P.I.A.
        </Logo>
        <nav>
          <Link to="/">Prima pagină</Link>
          <Link to="/asociatia">Asociația</Link>
          <Link to="/filiale">Filiale</Link>
          <Link to="/initiative">Inițiative</Link>
          <Link to="/activitati">Activități</Link>
          <Link to="/galerie">Galerie</Link>
        </nav>
      </Header>
      <BackDiv></BackDiv>

      <Outlet />
    </Container>
  );
};
