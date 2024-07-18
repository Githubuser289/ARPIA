import { useState } from 'react';
import './Accordion.css';
import Contact from './Contact.jsx';

export function formatText(text) {
  // Înlocuim '*' cu '<br>' și adăugăm 5 caractere blank (&nbsp;) la începutul fiecărui rând
  const formattedText = text
    .split('*')
    .map(line => `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}`)
    .join('<br>');
  return formattedText;
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          link={el.link || ''}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ curOpen, onOpen, title, num, link, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">*</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && (
        <div className="content-box">
          <p dangerouslySetInnerHTML={{ __html: formatText(children) }}></p>
        </div>
      )}
      {isOpen && link !== '' && (
        <a
          className="content-box"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          link spre document
        </a>
      )}
      {isOpen && title === 'Contact' && <Contact />}
    </div>
  );
}

export default Accordion;
