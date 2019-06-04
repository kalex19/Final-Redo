import React, { Component } from 'react';

export class Card extends Component {
	render() {
		return (
			<div className="card">
				<p>Name: {this.props.name}</p>
				<p>Weight: {this.props.weight}</p>
				<p>Sprites: {this.props.sprites}</p>
			</div>
		);
	}
}

export default Card;
