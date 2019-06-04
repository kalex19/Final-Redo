const pokeReducer = (state = [], action) => {
	switch (action.type) {
		case 'ALL_POKEMON':
			return [ action.data ];
		default:
			return state;
	}
};

export default pokeReducer;
