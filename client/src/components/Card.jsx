import React from "react";

export default function Card({ name, img, type, id }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={img} alt="no found " />
      <p>Pokemon de tipo: {type.map(e=>{
        return <div> {e}</div>
      }
      )

      }</p>
    </div>
  );
}
