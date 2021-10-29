import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Get_Id } from "../actions";
import s from "../css/details.module.css";
import {ProgressBar} from 'react-bootstrap'

export default function Details(props) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(Get_Id(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  let e = useSelector((e) => e.id);




 

  return (
    <div className={s.img}>
    <Link to="/home" className={s.linck}>
      <h2 className={s.titulo}>Regresar</h2>
    </Link>
    {e.length < 1 ? (
      <h3>Aun no esta disponible</h3>
    ) : (
      <div className={s.box}>
        <h2>{e[0].name.toUpperCase()}</h2>
        <img src={e[0].img} alt="Img no found" width="300px" height="300" />

        <div className={s.stats}>
          <p> Vida: {e[0].vida}</p>
       
          <ProgressBar now={e[0].vida } max={110}/>
          <p> Fuerza: {e[0].fuerza}</p>
          <ProgressBar now={e[0].defensa } max={100}/>
          <p>Defensa : {e[0].defensa}</p>
          <ProgressBar now={e[0].defensa } max={150}/>
          <p> Velocidad : {e[0].velocidad}</p>
          <ProgressBar now={e[0].velocidad } max={130}/>
          <p> Altura: {e[0].altura} dm.</p>
          <ProgressBar now={e[0].altura } max={30}/>
          <p> Peso: {e[0].peso} Hgs.</p>
          <ProgressBar now={e[0].peso } max={1000}/>

        </div>
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
      </div>
    )}
  </div>
  );
}
