import React from "react";
import s from '../css/paginacion.module.css'

export default function Paginate({ itemsPerPage, pokemons, paginado }) {
  let number = [];
  for (let i = 1; i <= Math.ceil(pokemons / itemsPerPage); i++) {
    number.push(i);
  }
  return (
    <nav>
      <ul>
        {number &&
          number.map((e, i) => <button onClick={() => paginado(e)} key = {i} className={s.pg}>{e}</button>) }
      </ul>
    </nav>
  );
}
