let initialState = {
  pokemons: [],
  types: [],
};

function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: actions.payload,
      };

    case "GET_TYPE":
      let allpokemons = state.pokemons;

      let types =
        actions.payload === "all"
          ? allpokemons
          : allpokemons.filter((e) => e.type === actions.payload);
      return {
        ...state,
        pokemons: types,
      };

    default:
      return state;
  }
}

export default rootReducer;
