// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cardsReducer } from './card/reducers';

const rootReducer = combineReducers({
    cardsReducer
})



export default function configureStore() {

    const middlewareEnhancer = applyMiddleware(thunkMiddleware)
  
    const composedEnhancers = compose(middlewareEnhancer)
  
    const store = createStore(rootReducer, composedEnhancers)
  
    return store
  }

export type RootState = ReturnType<typeof rootReducer>;