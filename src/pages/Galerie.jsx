import React from 'react';
import { galerie } from 'data/galerie';
import './Galerie.css';

const Galerie = () => {
  return (
    <main className="maindiv">
      {galerie.map(({ text, path, image }, index) => {
        let source = path + image;
        return (
          <figure key={index}>
            <img src={source} alt="plane" />
            <figcaption>{text}</figcaption>
          </figure>
        );
      })}
    </main>
  );
};

export default Galerie;
