import React, { Component } from 'react';
import Card from '../Card/Card';

export class CardContainer extends Component {
	render() {
		const { pokemon } = this.props;

		return (
			<div className="container">
				{pokemon.map(card => {
					card.map(poke => <Card name={poke.name} weight={poke.weight} sprites={poke.sprites} key={poke.id} />);
				})}
			</div>
		);
	}
}

export default CardContainer;
