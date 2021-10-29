import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, FormGroup, Form } from "react-bootstrap";
import { Get_Types, Post_Pokemon } from "../actions";


export default function Creator({ show, showModal }) {
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
        type: [""],
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
    <Modal show={show} onHide={(e) => showModal(e)}>
      <Modal.Header closeButton>
        <Modal.Title>Registra tu Nuevo Pokémon</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormGroup>
            <input
              placeholder="Ingrese un nombre"
              class="form-control"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handlerSave(e)}
              color={!input.name ? "danger" : "warning"}
            />
            {!input.name ? (
              <output> </output>
            ) : (
              <output> Nombre Aceptado</output>
            )}
          </FormGroup>
          <FormGroup>
            <output>{input.vida} Nivel de Vida</output>
            <input
              class="form-range"
              type="range"
              min="0"
              max="100"
              value={input.vida}
              name="vida"
              onChange={(e) => handlerSave(e)}
            />
          </FormGroup>
          <FormGroup>
            <output>{input.fuerza} Nivel de fuerza</output>
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
          </FormGroup>
          <FormGroup>
            <output>{input.ataque} Nivel de Daño</output>
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
          </FormGroup>
          <FormGroup>
            <output>{input.defensa} Escudo</output>
            <input
              class="form-range"
              type="range"
              min="20"
              max="100"
              value={input.defensa}
              name="defensa"
              onChange={(e) => handlerSave(e)}
            />
          </FormGroup>
          <FormGroup>
            <output>{input.velocidad} Km/H</output>
            <input
              class="form-range"
              type="range"
              min="5"
              max="180"
              value={input.velocidad}
              name="velocidad"
              onChange={(e) => handlerSave(e)}
            />
          </FormGroup>
          <FormGroup>
            <output>{input.altura} cm</output>
            <input
              class="form-range"
              type="range"
              min="20"
              max="200"
              value={input.altura}
              name="altura"
              onChange={(e) => handlerSave(e)}
            />
          </FormGroup>
          <FormGroup>
            <output>{input.peso} Kg</output>
            <input
              class="form-range"
              type="range"
              min="1"
              max="100"
              value={input.peso}
              name="peso"
              onChange={(e) => handlerSave(e)}
            />
          </FormGroup>
          <FormGroup class="form-check">
            <h3>Seleccione el tipo</h3>
            {types.map((e) => (
              <label
                onChange={(e) => handlerType(e)}
                key={e.id}
                class="form-check-label"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={e.type}
                  name="type"
                />{" "}
                {e.type}
              </label>
            ))}
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => showModal(e)}>
          Close
        </Button>
        <Button variant="primary" onSubmit={(e) => handlerSubmit(e)}>
          Crear Pokémon
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
