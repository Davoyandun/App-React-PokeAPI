import axios from "axios";

export function Get_Elements() {
  return async function (dispatch) {
    let allpokemons = await axios.get("http://localhost:3001/pokemons", {});
    return dispatch({
      type: "GET_POKEMONS",
      payload: allpokemons.data,
    });
  };
}
export function filter_Type(payload) {
  return {
    type: "FILTER_TYPE",
    payload: payload,
  };
}
