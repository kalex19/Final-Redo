// import * as actions from '../actions';

// describe('actions', () => {
// 	it('should have a type of All_TYPES', () => {
// 		const results = [
// 			{
// 				id: 1,
// 				name: 'normal',
// 				pokemon: [ '1', '2', '3', '4' ]
// 			}
// 		];
// 		const expectedAction = {
// 			type: 'ALL_TYPES',
// 			results: [
// 				{
// 					id: 1,
// 					name: 'normal',
// 					pokemon: [ '1', '2', '3', '4' ]
// 				}
// 			]
// 		};

// 		const outcome = actions.allTypes(result);

// 		expect(outcome).toEqual(expectedAction);
// 	});

// 	it('should have a type of ALL_POKEMON', () => {
// 		const data = [
// 			{
// 				id: 1,
// 				name: 'normal',
// 				pokemon: [ '1', '2', '3', '4' ]
// 			}
// 		];
// 		const expectedAction = {
// 			type: 'ALL_POKEMON',
// 			data: [
// 				{
// 					name: 'bob',
// 					id: 16,
// 					type: 1,
// 					weight: 18,
// 					sprites: {
// 						back_female: null,
// 						back_shiny_female: null
// 					}
// 				}
// 			]
// 		};

// 		const outcome = actions.allPokemon(result);

// 		expect(outcome).toEqual(expectedAction);
// 	});
// });
