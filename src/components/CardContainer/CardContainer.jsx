import React, { Component } from 'react';
import Card from '../Card/Card';

export class CardContainer extends Component {
	render() {
		const { pokemon } = this.props;
		let display = pokemon.map(card => {
			card.map(poke => {
				return <Card name={poke.name} weight={poke.weight} sprites={poke.sprites} key={poke.id} />;
			});
		});
		return <div>{display}</div>;
	}
}

export default CardContainer;
