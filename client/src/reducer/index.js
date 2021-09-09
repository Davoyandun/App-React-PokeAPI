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
      let filter = [];

      if (actions.payload === "db") {
        filter = allpokemons2.filter((e) => typeof e.id === "string");
        return {
          ...state,
          pokemons: filter,
        };
      } else if (actions.payload === "api") {
        filter = allpokemons2.filter((e) => typeof e.id !== "string");
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
    

    case "ORDER_FUERZA":
      let orderFuerza = state.allpokemons;
      if (actions.payload === "all") {
        return {
          ...state,
          pokemons: state.allpokemons,
        };
      } else if (actions.payload === "top") {
        let top = orderFuerza.sort(function (a, b) {
          if (a.fuerza < b.fuerza) {
            return 1;
          }
          if (a.fuerza > b.fuerza) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          pokemons: top,
        };
      } else if (actions.payload === "bot") {
        let bot = orderFuerza.sort(function (a, b) {
          if (a.fuerza > b.fuerza) {
            return 1;
          }
          if (a.fuerza < b.fuerza) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          pokemons: bot,
        };
      } break; 
      case 'ORDER_NAME':
        let orderName = state.allpokemons;
        if (actions.payload === "all") {
          return {
            ...state,
            pokemons: state.allpokemons,
          };
        } else if (actions.payload === "asc") {
          let asc = orderName.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            pokemons: asc,
          };
        } else if (actions.payload === "desc") {
          let desc = orderName.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            pokemons: desc,
          };
        } break; 




    default:
      return state;
  }

}

export default rootReducer;
