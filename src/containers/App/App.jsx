import React, { Component } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import { connect } from 'react-redux';
import { allTypes, allPokemon } from '../../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			isLoading: false
		};
	}
	componentDidMount() {
		fetch('http://localhost:3001/types')
			.then(res => res.json())
			.then(results => this.props.allTypes(results))
			.catch(err => {
				this.setState({
					error: err,
					isLoading: true
				});
			});

		fetch('http://localhost:3001/pokemon')
			.then(res => res.json())
			.then(data => this.props.allPokemon(data))
			.catch(err => {
				this.setState({
					error: err,
					isLoading: true
				});
			});
	}

	render() {
		let display;
		if (this.state.isLoading) {
			display = (
				<div className="app">
					<h1>Loading....</h1>
				</div>
			);
		} else if (this.state.error) {
			display = (
				<div>
					<h1>{this.state.error}</h1>
				</div>
			);
		} else {
			display = (
				<div>
					<CardContainer pokemon={this.props.pokemon} />
				</div>
			);
		}

		return (
			<div>
				<h1>Pokemon!</h1>
				{display}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
	allTypes: results => dispatch(allTypes(results)),
	allPokemon: data => dispatch(allPokemon(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
