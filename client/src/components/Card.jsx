import React from "react";

export default function Card({ name, img, type, id , fuerza }) {
  return (
    <div key={id}>
      <h2 key={id + 100}  >{name}</h2>
      <img src={img} alt="no found " />
      <p>{fuerza}</p>
      <div>Pokemon de tipo: {type ? type.map(e=>{
        return <p> {e}</p>
      }
      ): <p>tipo no encontrado</p>
      }</div>
    </div>
  );
}
