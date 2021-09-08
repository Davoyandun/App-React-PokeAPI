import { act } from "react-dom/test-utils";

let initialState = {
  pokemons: [],
  allpokemons: [], // no modificar

};

function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: actions.payload,
        allpokemons: actions.payload,
      };

    case "FILTER_TYPE":
      let allpokemons = state.allpokemons;
      let types =
        actions.payload === "all"
          ? allpokemons
          : allpokemons.filter(
              (e) => e.type.includes(actions.payload) === true
            );

      return {
        ...state,
        pokemons: types,
      };

    case "FILTER_CREATED":
      let allpokemons2 = state.allpokemons;
      let filter =[]

      if (actions.payload === "db") {
        filter = allpokemons2.filter((e) => typeof e.id === 'string');
        return {
          ...state,
          pokemons: filter,
        };
      } else if (actions.payload === "api") {
        filter = allpokemons2.filter((e) => typeof e.id !== 'string');
        return {
          ...state,
          pokemons: filter,
        };
      } else {
        return {
          ...state,
          pokemons: allpokemons2,
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
