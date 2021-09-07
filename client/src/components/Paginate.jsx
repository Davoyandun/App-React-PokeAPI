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
          number.map((e) => <button onClick={() => paginado(e)}>{e}</button>)}
      </ul>
    </nav>
  );
}
