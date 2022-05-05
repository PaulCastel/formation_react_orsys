import { combineReducers } from "redux";
import { createStore } from "redux";
import { ADR_REST } from "../config/config";
import { DummyMeme } from "../interfaces/common";

const ressourcesInitialState = {
  images: [],
  memes: [],
};

export const ACTION_RESSOURCES = Object.freeze({
  ADD_ALL_RESSOURCES: "ADD_ALL_RESSOURCES",
  INIT_RESSOURCES: "INIT_RESSOURCES",
  ADD_MEME: "ADD_MEME",
});


export const ACTIONS_CURRENT = Object.freeze({
    UPDATE_MEME: "UPDATE_MEME",
});

const currentReducer = (state = DummyMeme, action) => {
    switch (action.type) {
  
    case ACTIONS_CURRENT.UPDATE_MEME:
      return { ...state, ...action.value }
  
    default:
      return state
    }
  }  

/**
 * Reducer pour les ressources
 * @param {object} state
 * @param {object} action
 */
function ressourcesReducer(state = ressourcesInitialState, action) {
  switch (action.type) {
    case ACTION_RESSOURCES.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    case ACTION_RESSOURCES.INIT_RESSOURCES:
      const memes = fetch(ADR_REST + "/memes").then((flux) => flux.json());
      const img = fetch(ADR_REST + "/images").then((flux) => flux.json());
      Promise.all([memes, img]).then((arr) => {
        store.dispatch({
          type: ACTION_RESSOURCES.ADD_ALL_RESSOURCES,
          values: arr,
        });
      });
      return state;
    case ACTION_RESSOURCES.ADD_ALL_RESSOURCES:
      return { ...state, memes: action.values[0], images: action.values[1] };

    default:
      return state;
  }
}

/*export const store = createStore(ressourcesReducer);*/

const conbinedReducer = combineReducers({current: currentReducer, ressources: ressourcesReducer})
export const store = createStore(conbinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type: ACTION_RESSOURCES.INIT_RESSOURCES});