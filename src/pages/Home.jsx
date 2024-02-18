import { useEffect, useState } from 'react';
import { Cover, MainFrame, Piece } from './Home.styled';
import image from './plane.png';

let titleBox, coverElem, backImg;
let animTitle, animCoverElem, animBackImg;

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function animate() {
      titleBox = document.getElementsByClassName('box')[0];
      animTitle = titleBox.animate(
        [{ transform: 'translateX(-100px)' }, { transform: 'translateX(0px)' }],
        {
          duration: 1500,
          iterations: 1,
        }
      );
      coverElem = document.getElementById('cover');
      animCoverElem = coverElem.animate(
        [
          { transform: 'translateX(-2005px)' },
          { transform: 'translateX(-2000px)' },
          { transform: 'translateX(-1800px)' },
        ],
        {
          duration: 3000,
          iterations: 1,
        }
      );
      backImg = document.getElementsByTagName('img')[1];
      animBackImg = backImg.animate(
        {
          opacity: [0, 1],
        },
        {
          delay: 3000,
          duration: 3000,
          iterations: 1,
        }
      );
      animBackImg.onfinish = event => {
        titleBox.innerHTML = '';
      };
    }
    function pauseNremove() {
      if (counter > 1) return;
      animTitle.cancel();
      animCoverElem.cancel();
      backImg.getAnimations().forEach(animation => animation.finish());
    }
    window.addEventListener('click', pauseNremove);
    if (counter !== 0) return;
    animate();
    setCounter(counter => counter + 1);
    // va tb si return pt curatenie la incheierea animatiei
  }, [counter]);

  return (
    <MainFrame>
      <img src={image} alt="airplane"></img>
      <div className="box">
        <Piece>
          <h1>A</h1>
          <span>SOCIAȚIA</span>
        </Piece>
        <Piece>
          <h1>R</h1>
          <span>OMÂNĂ PENTRU</span>
        </Piece>
        <Piece>
          <h1>P</h1>
          <span>ROPAGANDA ȘI</span>
        </Piece>
        <Piece>
          <h1>I</h1>
          <span>STORIA</span>
        </Piece>
        <Piece>
          <h1>A</h1>
          <span>ERONAUTICII</span>
        </Piece>
        <Cover id="cover"></Cover>
      </div>
    </MainFrame>
  );
};

export default Home;
