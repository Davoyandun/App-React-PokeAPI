import React from "react";

export default function Card({ name, img, type, id }) {
  return (
    <div key={id}>
      <h2 key={id + 100}  >{name}</h2>
      <img src={img} alt="no found " />
      <div>Pokemon de tipo: {type.map(e=>{
        return <p> {e}</p>
      }
      )

      }</div>
    </div>
  );
}
