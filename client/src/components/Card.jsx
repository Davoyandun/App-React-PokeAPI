import React from "react";
import { Link } from "react-router-dom";
 import s from '../css/card.module.css'

export default function Card({ name, img, type, id , fuerza }) {
  
  return (
    <div key={id+0.1}  className={s.contain} >
      <h2 className={s.h2}   >{name.toUpperCase()}</h2>
      <Link to ={'/home/'+ id}>
      <img src={img} alt="no found "  className={s.img} height= '250px' width = '250px'/ >
      </Link>
      <p className={s.fuerza}> Fuerza: {fuerza}</p>
      <div className={s.tipo}>Pokemon de Tipo: {type ? type.map((e,i)=>{
        return <p  key ={i+.01}> {e}</p>
      }
      ): <p>tipo no encontrado</p>
      }</div>
    </div>
  );
};
