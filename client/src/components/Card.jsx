import React from "react";
// import s from '../style/card.module.css'

export default function Card({ name, img, type, id , fuerza }) {
  
  return (
    <div key={id+0.1} /* className={s.contain} */>
      <h2 /*className={s.h2}  */ >{name}</h2>
      <img src={img} alt="no found "  /*className={s.img} */height= '250px' width = '250px'/>
      <p> Fuerza: {fuerza}</p>
      <div>Pokemon de Tipo: {type ? type.map((e,i)=>{
        return <p key= {i}> {e}</p>
      }
      ): <p>tipo no encontrado</p>
      }</div>
    </div>
  );
};
