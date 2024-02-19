// evident ca la versiunea al carei design e acceptat/aprobat,
// voi face pozitionarea sa depinda de niste parametri
// adaptabili in functie de dispozitivul pe care se vede pagina
import styled from 'styled-components';
// import { keyframes } from 'styled-components';

export const MainFrame = styled.main`
  position: relative;
  padding: 0;
  width: 100%;
  // background-color: #c1c8e4;
  // background-color: #bfe7f2;
  background-color: #e8ffff;

  > img {
    // opacity: 0.3;
    width: 98%;
    height: 98%;

    object-fit: fit;
  }
  // ATENTIE!!!! AFECTEAZA SI ALTE DIVURI---VEZI ACCORDION
  > div {
    position: absolute;
    top: 0;
    left: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
  }
`;

export const Piece = styled.div`
  display: flex;
  align-items: baseline;
  height: 60px;
  > h1 {
    font-size: 50px;
    min-width: 36px;
    text-align: right;
    padding-right: 2px;
  }
  > span {
    font-size: 30px;
  }
`;
export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 2040px;
  z-index: 10;
  width: 2000px;
  height: 630px;
  // background-color: #bfe7f2;
  background-color: #f0ffff;
`;
