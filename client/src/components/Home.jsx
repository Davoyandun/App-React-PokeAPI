import React, { Fragment } from "react";
import { useState, useEffect } from "react";
// 1.- para el uso de variables de estado locales
// 2.- para montar los componentes, antes durante o despues de la renderizacion.
import { useSelector, useDispatch } from "react-redux";
//1.- nos permite extraer los estados del store
//2.- nos permite enviar acciones al reducer y por consiguiente almacenar datos al store
import { Link } from "react-router-dom";
// 1.- para el enrutamiento de react
import { Get_Elements } from "../actions";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(Get_Elements());
  }, [dispatch]);


  
  function handleRefresh(e) {
    e.preventDefault();
    dispatch(Get_Elements());
  }
  console.log(pokemons)

  return (
    <div>
      <h1>Preparense para los Problemas</h1>
      <Link to="/pokemon">
        <button>Crear personaje</button>
      </Link>
      <br></br>
      <button
        onClick={(e) => {
          handleRefresh(e);
        }}
      >
        Pedir pokemons al Profesor Oak
      </button>
      <div>
        <label>
          <input type="text" />
          <button>Buscar</button>
        </label>
        <select name="alfabet" id="">
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select name="fuerza" id="">
          <option value="top">Mas fuerte </option>
          <option value="bot">Mas Debil </option>
        </select>
        <select name="source" id="source">
          <option value="all">Todos</option>
          <option value="api">Existente</option>
          <option value="db">Nuevo</option>
        </select>
        <select name="type" id="type">
          <option value="normal">normal</option>
          <option value="flying">fighting</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>
      </div>
      <div>
        {pokemons &&
          pokemons.map((e) => {
            return (
              <Fragment>
                <Link to={"/home/" + e.id}>
                  <Card name={e.name} img={e.img} type={e.type} />
                </Link>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
