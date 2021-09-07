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
      let created =
        actions.payload === "db"
          ? allpokemons2.filter((e) => e.createDB)
          : allpokemons2.filter((e) => !e.createDB);
          return {
            ...state,
            pokemons : created
          }

    default:
      return state;
  }
}

export default rootReducer;
