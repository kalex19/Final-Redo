import React, { Component } from 'react';

export class Card extends Component {
	render() {
		return (
			<div>
				<p>Name: {this.name}</p>
				<p>Weight: {this.weight}</p>
				<p>Sprites: {this.sprites}</p>
			</div>
		);
	}
}

export default Card;
