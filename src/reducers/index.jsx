import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import typesReducer from './typesReducer';

export const rootReducer = combineReducers => ({
	typesReducer,
	pokeReducer
});

export default rootReducer;
