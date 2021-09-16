import React, { useState } from "react";
import { Get_name } from "../actions";
import { useDispatch } from "react-redux";
import s from '../css/search.module.css'

export default function NavBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handlerSetName(e) {
    e.preventDefault();
    setName(e.target.value);
   

  }
  function handlerGetName(e) {
    e.preventDefault();
    dispatch(Get_name(name));
    setName('')
}

  return (
    <form className={s.form}>
      <input type="text" placeholder="Busca un pokemon..."  onChange={(e)=> handlerSetName(e)} className={s.input}/>
      <button type="submit" onClick={(e) => handlerGetName(e)} className={s.button}>
        Buscar
      </button>
    </form>
  );
}
