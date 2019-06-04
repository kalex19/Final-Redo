import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import typesReducer from './typesReducer';

export const rootReducer = combineReducers({
	type: typesReducer,
	pokemon: pokeReducer
});

export default rootReducer;
