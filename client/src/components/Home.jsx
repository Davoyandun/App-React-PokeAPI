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
import { Get_Elements } from "../actions";
import s from "../css/home.module.css";

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



  /* inicio del renderizado
  ♙♙♙♙♙♙♙♙
  ♖♘♗♔♕♗♘♖*/
  return (
    <div key="loading">
      {allpokemons.length < 1 ? (
        <div className={s.loading}>
    
          <h1 className={s.text}>Cargando....</h1>
        </div>
      ) : (
        <div className={(s.contain, s.fondo)} key="home">
          
          <NavBar setCurrentPage={setCurrentPage} />

          <div className={s.card} key="card">
            {itemInPage.length < 1 ? (
              <div className={s.nofound}>Pokémons no encontrados</div>
            ) : (
              itemInPage.map((e, i) => {
                return (
                  <Fragment key={i}>
                    <Card
                      name={e.name}
                      img={e.img}
                      type={e.type}
                      fuerza={e.fuerza}
                      id={e.id}
                    />
                  </Fragment>
                );
              })
            )}
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
