import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Get_Id } from "../actions";
import s from "../css/details.module.css";
import { Bar } from "react-chartjs-2";

export default function Details(props) {
  let dispatch = useDispatch();
  useEffect(
    (e) => {
      dispatch(Get_Id(props.match.params.id));
    },
    [dispatch, props.match.params.id]
  );

  let e = useSelector((e) => e.id);
  console.log(e);
  const [stats, setStats] = useState([]);

  

  const data = {
    labels: ["Vida", "Fuerza", "Defensa", "Velocidad", "Altura", "Peso"],
    datasets: [
      {
        label: "Estadisticas",
        backgroundColor: ["green", "red", "blue", "yellow", "gray", "orange"],
        borderColor: "black",
        borderWidth: 2,
        // hoverBackgroundColor: generateColors(),
        hoverBorderColor: "black",
        data: [
         1,2,3,4,5,6
        ],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className={s.img}>
      <Link to="/home" className={s.linck}>
        <h2 className={s.titulo}>Regresar</h2>
      </Link>
      {e.length < 1 ? (
        <h3>Aun no esta disponible</h3>
      ) : (
        <div>
          <h2>{e[0].name.toUpperCase()}</h2>
          <img src={e[0].img} alt="Img no found" width="300px" height="300" />
          <div className={s.stats}>
            Pokémon de Tipo:
            {e[0].type ? (
              e[0].type.map((e, i) => {
                return <p key={i}> {e}</p>;
              })
            ) : (
              <p>tipo no encontrado</p>
            )}
          </div>
          <div className={s.stats}>
            <Bar data={data} options={opciones} />
          </div>
        </div>
      )}
    </div>
  );
}
