import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,} from "react-router-dom";
import { Get_Types, Post_Pokemon } from "../actions";
import s from '../css/creator.module.css'

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
  function handlerSubmit(e) {
    e.preventDefault();
    if (
      input.name &&
      input.type.length &&
      input.vida &&
      input.fuerza &&
      input.ataque &&
      input.defensa &&
      input.velocidad &&
      input.peso &&
      input.altura
    ) {
      dispatch(Post_Pokemon(input));
      setInput({
        img: "No found",
        name: "",
        type: [''],
        vida: "",
        fuerza: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
      });
      alert("Pokémon creado con Exito");
    } else {
      alert("No ingresaste toda la informacion.");
    }
  }
  return (
    <div className={s.img}>
      <Link to="/home">
        <button className={s.boton}>Home</button>
      </Link>

      <h1>Registra tu Nuevo Pokémon</h1>
      <div className={s.registro}>
      <div className={s.box}>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div>
          <label class="form-label"> Agrega un Nombre</label>
          <input
          class="form-control"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handlerSave(e)}
          />
          {!input.name ? (
            <output> ingrese un nombre</output>
          ) : (
            <output> nombre aceptado</output>
          )}
        </div>
        <div>
          <label class="form-label"> Nivel de Vida</label>
          <input
          class="form-range"
            type="range"
            min="0"
            max="100"
            value={input.vida}
            name="vida"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.vida} pts de vida</output>
        </div>
        <div>
          <label class="form-label"> Nivel de Fuerza</label>
          <input
          class="form-range"
            type="range"
            min="20"
            max="100"
            step="1"
            value={input.fuerza}
            name="fuerza"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.fuerza} pts de fuerza</output>
        </div>
        <div>
          <label class="form-label"> Nivel de Ataque</label>
          <input
          class="form-range"
            type="range"
            min="20"
            max="100"
            step="1"
            value={input.ataque}
            name="ataque"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.ataque} pts de daño</output>
        </div>
        <div>
          <label class="form-label"> Nivel de Defenza</label>
          <input
          class="form-range"
            type="range"
            min="20"
            max="100"
            value={input.defensa}
            name="defensa"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.defensa} escudo</output>
        </div>
        <div>
          <label class="form-label"> Velocidad Maxima</label>
          <input
          class="form-range"
            type="range"
            min="5"
            max="180"
            value={input.velocidad}
            name="velocidad"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.velocidad} km/h</output>
        </div>
        <div>
          <label class="form-label"> Altura</label>
          <input
          class="form-range"
            type="range"
            min="20"
            max="200"
            value={input.altura}
            name="altura"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.altura} cm</output>
        </div>
        <div>
          <label class="form-label"> Peso</label>
          <input
          class="form-range"
            type="range"
            min="1"
            max="100"
            value={input.peso}
            name="peso"
            onChange={(e) => handlerSave(e)}
          />
          <output>{input.peso} kg</output>
        </div>
        <div class="form-check">
          <h3>Seleccione el tipo</h3>
          {types.map((e) => (
            <label onChange={(e) => handlerType(e)} key={e.id} class="form-check-label">
              <input class="form-check-input" type="checkbox" value={e.type} name="type" /> {e.type}
            </label>
          ))}
        </div>
        <button type="submit" class="btn btn-danger"> Enviar Formulario</button>
      </form>
      <div className={s.creando}>
      </div>
      </div>

      </div>
    </div>
  );
}
