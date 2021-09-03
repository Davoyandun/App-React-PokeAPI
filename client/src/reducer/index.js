let initialState = {
  pokemons: [],
  types: [],
};

function rootReducer(state = initialState, actios) {
  switch (actions.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: actios.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
