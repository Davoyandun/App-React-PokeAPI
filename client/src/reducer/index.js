import { act } from "react-dom/test-utils";

let initialState = {
  pokemons: [],
  allpokemons: [],
  types: [],
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

      if (actions.payload === "db") {
        allpokemons2 = allpokemons2.filter((e) => typeof e.id == "string");
        return {
          ...state,
          pokemons: allpokemons2,
        };
      } else if (!isNaN(actions.payload)) {
        allpokemons2 = allpokemons2.filter((e) => !typeof e.id == "string");
        return {
          ...state,
          pokemons: allpokemons2,
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
