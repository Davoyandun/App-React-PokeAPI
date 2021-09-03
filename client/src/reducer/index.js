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

    default:
      return state;
  }
}

export default rootReducer;
