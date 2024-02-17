import { MainFrame } from './Home.styled';
import image from './plane.png';

const Home = () => {
  return (
    <MainFrame>
      <img src={image} alt="airplane"></img>
    </MainFrame>
  );
};

export default Home;
/*
import { MainFrame, Frame, Caps } from "./Home.styled";


export const MainFrame = styled.main`
  position: relative;
  padding: 8px 0;
  width: 100%;
  // margin: auto;
  border-bottom: 1px solid black;
  background-color: lightgrey;
  > img {
    height: 100%;
    opacity: 0.3;
  }
  > div {
    border: 1px solid green;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    gap: 12px;
  }
`;



<div>
        <Frame>
          <Caps>
            A<i>sociația</i>
          </Caps>
        </Frame>
        <Frame>
          <Caps>
            R<i>omână pentru</i>
          </Caps>
        </Frame>
        <Frame>
          <Caps>
            P<i>ropaganda și</i>
          </Caps>
        </Frame>
        <Frame>
          <Caps>
            I<i>storia</i>
          </Caps>
        </Frame>
        <Frame>
          <Caps>
            A<i>viației</i>
          </Caps>
        </Frame>
      </div>

*/
