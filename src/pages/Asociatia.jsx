import Accordion from '../components/Accordion/Accordion';
import { meniu } from '../data/meniu';
import './Asociatia.css';

const Asociatia = () => {
  return (
    <div className="asociatia">
      <Accordion data={meniu} />
    </div>
  );
};

export default Asociatia;
