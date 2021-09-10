import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get_Types } from "../actions";

export default function Creator() {
  let dispatch = useDispatch();
  let types = useSelector((s) => s.types);
  const [input, setInput] = useState({
    img: "",
    name: "",
    type: [],
    id: Math.random(),
    vida: "",
    fuerza: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
  });

  useEffect(() => {
    dispatch(Get_Types());
  }, [dispatch]);

  return (
    <Fragment>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Registra tu Nuevo Pokémon</h1>
      <form>
        <div>
          <label> Agrega un Nombre</label>
          <input type="text" value={input.name} name="name" />
        </div>
        <div>
          <label> Nivel de Vida</label>
          <input
            type="range"
            min="0"
            max="100"
            value={input.vida}
            name="vida"
          />
        </div>
        <div>
          <label> Nivel de Ataque</label>
          <input
            type="range"
            min="20"
            max="100"
            step="1"
            value={input.ataque}
          />
        </div>
        <div>
          <label> Nivel de Defenza</label>
          <input
            type="range"
            min="20"
            max="100"
            value={input.defensa}
            name="defensa"
          />
        </div>
        <div>
          <label> Velocidad Maxima</label>
          <input
            type="range"
            min="5"
            max="180"
            value={input.velocidad}
            name="velocidad"
          />
        </div>
        <div>
          <label> Altura</label>
          <input
            type="range"
            min="20"
            max="200"
            value={input.altura}
            name="altura"
          />
          {/* cm*/}
        </div>
        <div>
          <label> Peso</label>
          <input
            type="range"
            min="1"
            max="100"
            value={input.peso}
            name="peso"
          />
          {/* kg*/}
        </div>
        <div>
          <label> Agrega un Nombre</label>
          <input type="fire"  name="name" />
        </div>
      </form>
    </Fragment>
  );
}
