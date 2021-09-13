import React, { Fragment } from "react";
// 1.- React es el la libreria js para desarrollo frontend, en base a componentes y una sola pagina.
//2.- Fragment, permite agrupar sin agregar nodos, sustituye al div, sin colocar mas etiquetas
import { useState, useEffect } from "react";
// 1.- para el uso de variables de estado locales
// 2.- para montar los componentes, antes durante o despues de la renderizacion.
import { useSelector, useDispatch } from "react-redux";
//1.- nos permite extraer los estados del store
//2.- nos permite enviar acciones al reducer y por consiguiente almacenar datos al store
import { Link } from "react-router-dom";
// 1.- para el enrutamiento de react
import {
  Get_Elements,
  Filter_Type,
  Filter_Created,
  Order_Fuerza,
  Order_Name,
} from "../actions";
// import s from '../style/home.module.css'

/* importacion de componentes  */
import Card from "./Card";
import Paginate from "./Paginate";
import NavBar from "./NavBar";

/* Inicio del componente */ 
export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allpokemons = useSelector((state) => state.allpokemons);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const itemInPage = pokemons.slice(firstItem, lastItem);

  const paginado = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    dispatch(Get_Elements());
  }, [dispatch]);

  function handleRefresh(e) {
    e.preventDefault();
    dispatch(Get_Elements());
  }

  function handlerFilterTypes(e) {
    dispatch(Filter_Type(e.target.value));
  }
  function handlerFilterCreated(e) {
    dispatch(Filter_Created(e.target.value));
  }
  function handlerOrderFuerza(e) {
    dispatch(Order_Fuerza(e.target.value));
  }
  function handlerOrderName(e) {
    dispatch(Order_Name(e.target.value));
  }

  return (
    <div >
      {allpokemons.length < 1 ? (
        <div /*className={s.loading}*/>
         
         <h1 /* className={s.text}*/>
           Cargando.... 
         </h1>
        </div>
      ) : (
        <div /*className={s.contain} */ >
          <h1>Preparense para los Problemas</h1>
          <Link to="/creator">
            <button>Registrar Nuevo Pokémon en el Pokédex</button>
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
            <NavBar />
            <select onChange={(e) => handlerOrderName(e)}>
              <option value="asc">Z-A</option>
              <option value="desc">A-Z</option>
            </select>
            <select onChange={(e) => handlerOrderFuerza(e)}>
              <option value="top">Fuertes primero </option>
              <option value="bot"> Debil primero </option>
            </select>
              <button value="top" onClick={(e) => handlerOrderFuerza(e)}>debil</button>
              <button value="bot"   onClick={(e) => handlerOrderFuerza(e)}> fuerte</button>
            <select onChange={(e) => handlerFilterCreated(e)}>
              <option value="all">Todos</option>
              <option value="api">Canon</option>
              <option value="db">Creados</option>
            </select>
            <select onChange={(e) => handlerFilterTypes(e)}>
              <option value="all">all</option>
              <option value="normal">normal</option>
              <option value="flying">flying</option>
              <option value="fighting">fighting</option>
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
          <div /*className= {s.card}*/>
            {itemInPage &&
              itemInPage.map((e) => {
                return (
                  <Fragment>
                    <Link to={"/home/" + e.id}>
                      <Card
                        name={e.name}
                        img={e.img}
                        type={e.type}
                        fuerza={e.fuerza}
                      />
                    </Link>
                  </Fragment>
                );
              })}
          </div>
          <div>
            <Paginate
              pokemons={pokemons.length}
              itemsPerPage={itemsPerPage}
              paginado={paginado}
            />
          </div>
        </div>
      )}
    </div>
  );
}
