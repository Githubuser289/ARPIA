import styled from "styled-components";

export const MainFrame = styled.main`
  position: relative;
  padding: 0;
  width: 100%;
  // background-color: #c1c8e4;
  background-color: #bfe7f2;
  > img {
    opacity: 0.3;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  > div {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
  }
`;

/**************************************** */
/*** cele de mai jos sunt pt landing page */
export const Frame = styled.div`
  max-width: 960px;
  // margin: 0 auto;
  padding: 0 16px;
`;

export const Caps = styled.h1`
  font-weight: 700;
  color: blue;
  margin: 0;
  > i {
    color: darkblue;
  }
`;
