import { MainFrame } from "./Home.styled";
import Accordion from "../components/Accordion/Accordion";
import { meniu } from "../data/meniu";

const Asociatia = () => {
  return (
    <MainFrame>
      <Accordion data={meniu} />
    </MainFrame>
  );
};

export default Asociatia;
