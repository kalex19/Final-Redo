import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App/App';
import { mapStateToProps, mapDispatchToProps } from '../containers/App/App';
import { allTypes, allPokemon } from '../actions';

describe('APP', () => {
	describe('mapStateToProps', () => {
		it('should return an object with the types array', () => {
			const mockState = {
				types: [
					{
						id: 1,
						name: 'normal',
						pokemon: [ '1', '2', '3', '4' ]
					}
				]
			};
			const expected = {
				types: [
					{
						id: 1,
						name: 'normal',
						pokemon: [ '1', '2', '3', '4' ]
					}
				]
			};
			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});

		it('should return an object with the pokemon array', () => {
			const mockState = {
				pokemon: [
					{
						name: 'bob',
						id: 16,
						type: 1,
						weight: 18,
						sprites: {
							back_female: null,
							back_shiny_female: null
						}
					}
				]
			};
			const expected = {
				pokemon: [
					{
						name: 'bob',
						id: 16,
						type: 1,
						weight: 18,
						sprites: {
							back_female: null,
							back_shiny_female: null
						}
					}
				]
			};
			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});

		describe('mapDispatchToProps', () => {
			it('calls dispatch with an allTypes action', () => {
				const mockDispatch = jest.fn();
				const actionToDispatch = allTypes(1, 'normal', [ '1', '2', '3', '4' ]);

				const mappedProps = mapDispatchToProps(mockDispatch);
				mappedProps.allTypes(1, 'normal', [ '1', '2', '3', '4' ]);
				expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
			});

			it('calls dispatch with an allPokemon action', () => {
				const mockDispatch = jest.fn();
				const actionToDispatch = allPokemon('bob', 16, 1, 18, {
					back_female: null,
					back_shiny_female: null
				});

				const mappedProps = mapDispatchToProps(mockDispatch);
				mappedProps.allPokemon('bob', 16, 1, 18, {
					back_female: null,
					back_shiny_female: null
				});
				expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
			});
		});
	});
});
