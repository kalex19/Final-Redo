const typesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ALL_TYPES':
			return [ action.results ];
		default:
			return state;
	}
};

export default typesReducer;
