import React, { useState } from "react";
import { Get_name } from "../actions";
import { useDispatch } from "react-redux";

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
    <form >
      <input type="text" placeholder="Busca un pokemon"  onChange={(e)=> handlerSetName(e)}/>
      <button type="submit" onClick={(e) => handlerGetName(e)}>
        Buscar
      </button>
    </form>
  );
}
