import React, { useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,

  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  Filter_Type,
  Filter_Created,
  Order_Fuerza,
  Order_Name,
  Get_name,
} from "../actions";

import Creator from "./Creator";

export default function NavBar({ setCurrentPage }) {
  const [name, setName] = useState("");
  const [, setRender] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  function handlerSetName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handlerGetName(e) {
    e.preventDefault();
    dispatch(Get_name(name));
    setName("");
  }
  function handlerFilterTypes(e) {
    dispatch(Filter_Type(e.target.value));
    setCurrentPage(1);
    setRender(`tipos ${e.target.value}`);
  }
  function handlerFilterCreated(e) {
    dispatch(Filter_Created(e.target.value));
    setCurrentPage(1);
    setRender(`Creacion ${e.target.value}`);
  }
  function handlerOrderFuerza(e) {
    e.preventDefault();
    dispatch(Order_Fuerza(e.target.value));
    setCurrentPage(1);
    setRender(`fuerza ${e.target.value}`);
  }
  function handlerOrderName(e) {
    dispatch(Order_Name(e.target.value));
    setCurrentPage(1);
    setRender(`nombre ${e.target.value}`);
  }

  function showModal() {
    setShow(!show);
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky=" top "
    
    >
      <Container fluid  >
        <Navbar.Brand href="#" fixed=" top ">
          PokeApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "1000px" }}
            navbarScroll
           
          >
            <Button onClick={(e) => showModal(e)}>Crear Pokémon</Button>

            <Form.Select
              onChange={(e) => handlerOrderName(e)}
              aria-label="Default select example"
            >
              <option disabled="disabled" selected={true}>
                {" "}
                Abc
              </option>
              <option value="asc">Z-A</option>
              <option value="desc">A-Z</option>
            </Form.Select>

            <Form.Select onChange={(e) => handlerOrderFuerza(e)}>
              <option disabled="disabled" selected={true}>
                {" "}
                Fuerza
              </option>
              <option value="top">Fuertes</option>
              <option value="bot"> Debil</option>
            </Form.Select>

            <Form.Select onChange={(e) => handlerFilterCreated(e)}>
              <option disabled="disabled" selected={true}>
                {" "}
                Origen
              </option>
              <option value="all">Todos</option>
              <option value="api">Canon</option>
              <option value="db">Creados</option>
            </Form.Select>

            <Form.Select onChange={(e) => handlerFilterTypes(e)}>
              <option disabled="disabled" selected={true}>
                Tipos
              </option>
              <option value="all">Todos</option>
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
            </Form.Select>
          </Nav>
          <Form>
            <FormControl
              type="search"
              placeholder="Busca un pokemon..."
              onChange={(e) => handlerSetName(e)}
            />
            <Button type="submit" onClick={(e) => handlerGetName(e)}>
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Creator show= {show} showModal={showModal}/>
    </Navbar>
  );
}
