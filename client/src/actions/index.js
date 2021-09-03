import axios from "axios"

function Get_Elements  (){
    

   

    return async function (dispatch){

        let allgames = axios.get('http://localhost:3001/pokemons')
        return dispatch({
            type: 'GET_POKEMONS',
            PAYLOAD: allgames.data
        })
    }
}