import React from "react";

export default function Paginate({ itemsPerPage, pokemons, paginado }) {
  let number = [];
  for (let i = 1; i <= Math.ceil(pokemons / itemsPerPage); i++) {
    number.push(i);
  }
  return (
    <nav>
      <ul>
        {number &&
          number.map((e, i) => <button onClick={() => paginado(e)} key = {i}>{e}</button>) }
      </ul>
    </nav>
  );
}
