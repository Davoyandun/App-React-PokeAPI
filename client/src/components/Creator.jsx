import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get_Types, Post_Pokemon } from "../actions";

export default function Creator() {
  let dispatch = useDispatch();
  let types = useSelector((s) => s.types);
  const [input, setInput] = useState({
    img: "No found",
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

  function handlerSave(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  }
  function handlerType(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        type: [...input.type, e.target.value],
      });
    }
  }
  function handlerSubmit(e){
    e.preventDefault()
    dispatch(Post_Pokemon(input))
  }
  return (
    <Fragment>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Registra tu Nuevo Pokémon</h1>
      <form onSubmit= {(e)=>handlerSubmit(e)}>
        <div>
          <label> Agrega un Nombre</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handlerSave(e)}
          />
        </div>
        <div>
          <label> Nivel de Vida</label>
          <input
            type="range"
            min="0"
            max="100"
            value={input.vida}
            name="vida"
            onChange={(e) => handlerSave(e)}
          />
        </div>
        <div>
          <label> Nivel de Fuerza</label>
          <input
            type="range"
            min="20"
            max="100"
            step="1"
            value={input.fuerza}
            name="fuerza"
            onChange={(e) => handlerSave(e)}
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
            name="ataque"
            onChange={(e) => handlerSave(e)}
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
            onChange={(e) => handlerSave(e)}
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
            onChange={(e) => handlerSave(e)}
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
            onChange={(e) => handlerSave(e)}
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
            onChange={(e) => handlerSave(e)}
          />
          {/* kg*/}
        </div>
        <div>
          <h3>Seleccione el tipo</h3>
          {types.map((e) => (
            <label onChange={(e) => handlerType(e)} key = {e.id}>
              <input type="checkbox" value={e.type} name="type" /> {e.type}
            </label>
          ))}
        </div>
        <button type="submit"   > Enviar Formulario</button>
      </form>
    </Fragment>
  );
}
