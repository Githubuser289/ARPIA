import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const hdrHghtPercent = 8;
let headerHeight =
  Math.floor((window.innerHeight * hdrHghtPercent) / 100).toString() + 'px';
let backDivHeight =
  Math.floor((window.innerHeight * (100 - hdrHghtPercent)) / 100).toString() +
  'px';

export const Container = styled.div`
  // border: 1px solid red;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: #5ab9ea;
  height: ${headerHeight};
  > nav {
    display: flex;
    padding: 5px 0;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  display: flex;
  align-items: center;
  > span {
    font-size: 25px;
  }
  > img {
    width: 40px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5680e9;
  }
`;

export const BackDiv = styled.div`
  position: absolute;
  top: ${headerHeight};
  z-index: -1;
  height: ${backDivHeight};
  width: 100%;
  // background-color: #c1c8e4;
  background-color: #e8ffff;
`;
