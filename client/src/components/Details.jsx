import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Get_Id } from "../actions";

export default function Details(props) {
  let dispatch = useDispatch();
  useEffect(
    (e) => {
      dispatch(Get_Id(props.match.params.id));
    },
    [dispatch]
  );


  let e = useSelector((e) => e.id);
 

  return (
    <div>
      {e.length < 1 ? (
        <div>Aun no esta disponible</div>
      ) : (
        <div>

          <h1>{e[0].name}</h1>
          <img src={e[0].img} alt="Img no found" />
          <div>
            Pokemon de tipo:{" "}
            {e[0].type ? (
              e[0].type.map((e) => {
                return <p> {e}</p>;
              })
            ) : (
              <p>tipo no encontrado</p>
            )}
          </div>

          <p>{e[0].vida}</p>
          <p>{e[0].fuerza}</p>
          <p>{e[0].defensa}</p>
          <p>{e[0].velocidad}</p>
          <p>{e[0].altura}</p>
          <p>{e[0].peso}</p>
          <Link to= '/home'>
          <button>Home</button>
        </Link>
        </div>
       
      )}
    </div>
  );
}
