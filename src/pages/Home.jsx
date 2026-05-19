import { useEffect, useState } from 'react';
import { Cover, MainFrame, Piece, TitleBox } from './Home.styled';
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
        const markup = `
          <p></p>
    <h2>Aici pot apărea anunțuri și ultimele n postări cu activități desfășurate în toate filialele</h2>

    <div id="pdfModal" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    ">
      <div style="
        width: 80vw;
        height: 85vh;
        background: white;
        border-radius: 8px;
        padding: 16px;
        position: relative;
      ">
        <button id="closePdfModal" style="
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          padding: 8px 12px;
          cursor: pointer;
        ">
          Închide
        </button>

        <iframe
          src="/ARPIA/apelGlRujinschi.pdf"
          style="
            width: 100%;
            height: calc(100% - 40px);
            margin-top: 40px;
            border: none;
          "
        ></iframe>
      </div>
    </div>
        `;
        titleBox.innerHTML = markup;

        const closeButton = document.getElementById('closePdfModal');
        const pdfModal = document.getElementById('pdfModal');

        closeButton.addEventListener('click', () => {
          pdfModal.style.display = 'none';
        });
      };
    }
    window.addEventListener('click', () => {
      if (counter > 1) return;
      animTitle.cancel();
      animCoverElem.cancel();
      backImg.getAnimations().forEach(animation => animation.finish());
    });
    if (counter !== 0) return;
    animate();
    setCounter(counter => counter + 1);
    // va tb si return pt curatenie la incheierea animatiei
  }, [counter]);

  return (
    <MainFrame>
      <img src={image} alt="airplane"></img>
      <TitleBox className="box">
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
      </TitleBox>
    </MainFrame>
  );
};

export default Home;
