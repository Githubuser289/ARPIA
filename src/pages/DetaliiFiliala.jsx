import { Link, useLocation, useParams } from "react-router-dom";
import { filiale } from "../data/filiale";
import { useRef } from "react";
import { MainDiv } from "./DetaliiFiliala.styled";

export const DetaliiFiliala = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || "/filiale/");
  const txtURL = "https://dummyimage.com/400x250/000/fff&text=" + filiale[id];

  return (
    <MainDiv>
      <Link to={backLinkHref.current}>⬅️ Înapoi</Link>
      <img src={txtURL} alt="" />
      <div>
        <h2>Filiala - {filiale[id]}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </MainDiv>
  );
};
