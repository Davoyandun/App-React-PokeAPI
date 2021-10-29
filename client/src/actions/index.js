import axios from "axios";

export function Get_Elements() {
  return async function (dispatch) {
    let allpokemons = await axios.get("/pokemons");
    return dispatch({
      type: "GET_POKEMONS",
      payload: allpokemons.data,
    });
  };
}
export function Filter_Type(payload) {
  return {
    type: "FILTER_TYPE",
    payload: payload,
  };
}

export function Filter_Created(payload) {
  return {
    type: "FILTER_CREATED",
    payload: payload,
  };
}
export function Order_Fuerza(payload) {
  return {
    type: "ORDER_FUERZA",
    payload,
  };
}
export function Order_Name(payload) {
  return {
    type: "ORDER_NAME",
    payload,
  };
}

export function Get_name(value) {
  return async function (dispatch) {
    try{
       let filterName = await axios.get(
      "/pokemons?name=" + value
    );
   
    return dispatch({
      type: "GET_NAME",
      payload: filterName.data,
    });
    } catch(e){
      let error ={
        name: "no foun",
        img: "no foun",
        id: 1000,
        fuerza: "no foun",
        type: ["no foun"],
      }
      return dispatch({
        type: "GET_NAME",
        payload: [error] ,
      });

    }
   
  };
}
export function Get_Types(value) {
  return async function (dispatch) {
    let types = await axios.get("/types");
    return dispatch({
      type: "GET_TYPES",
      payload: types.data,
    });
  };
}

export function Post_Pokemon(payload) {
  return async function (dispatch) {
 await axios.post("/pokemons", payload);

    return dispatch({
      type: "POST_POKEMONS",
      payload,
    });
  };
}
export function Get_Id (ids) {
  return async function (dispatch) {
    let id = await axios.get("/pokemons/" + ids);
    return dispatch({
      type: "GET_ID",
      payload: id.data,
    });
  };
}
