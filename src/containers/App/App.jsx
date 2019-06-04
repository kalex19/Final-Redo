import React, { Component } from 'react';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			isLoading: true
		};
	}
	componentDidMount() {
		fetch('http://localhost:3001/types')
			.then(res => res.json())
			.then(results => this.props.allTypes(results))
			.catch(err => {
				this.setState({
					error: err,
					isLoading: false
				});
			});

		fetch('http://localhost:3001/pokemon')
			.then(res => res.json())
			.then(data => this.props.allPokemon(data))
			.catch(err => {
				this.setState({
					error: err,
					isLoading: false
				});
			});
	}

	render() {
		return (
			<div>
				<CardContainer error={this.state.error} loading={this.state.loading} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { results: state.typesReducer, data: state.pokeReducer };
};

const mapDispatchToProps = dispatch => {
	allTypes: results => dispatch(allTypes(results));
	allPokemon: data => dispatch(allPokemon(data));
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
