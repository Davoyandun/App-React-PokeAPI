let initialState = {
  pokemons: [],
  allpokemons :[],
  types: [],
};

function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: actions.payload,
        allpokemons :actions.payload,

      };

    case "FILTER_TYPE":
      let allpokemons = state.allpokemons;
      let types =
        actions.payload === "all"
          ? allpokemons
          : allpokemons.filter(e => e.type.includes(actions.payload)=== true);
      console.log(types);
      return {
        ...state,
        pokemons: types,
      };

    default:
      return state;
  }
}

export default rootReducer;
