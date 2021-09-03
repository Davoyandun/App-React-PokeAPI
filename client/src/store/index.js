import { createStore , applyMiddleware } from 'redux' // applyMiddlewares son funcionalidades personalizadas para trabajo asincrono
import { composeWithDevTools } from 'redux-devtools-extension'; // sirve para ver el store en la extension del navegador 
import thunk  from 'redux-thunk'; //sirve para retornar funciones y realizar trabajo asincrono
import rootReducer from '../reducer'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
