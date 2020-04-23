//

import React from 'react';

import Die from './Die';

import random from '../utilities/utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRolling: false,
			die1: 0,
			die2: 0
		};
	}

	rolldice = () => {
		this.setState({ die1: random() });
		this.setState({ die2: random() });
	}

	render() {
		// console.log('App::render(); this.state ', this.state, ' this.props ', this.props);
		const { isRolling } = this.state;

		const buttonText = isRolling ? "Rolling..." : "Roll Dice!";

		return (
			<>
				<div className="app--die">
					<Die value={this.state.die1} />
					<Die value={this.state.die2} />
				</div>
				<div>
					<button type="button" className="app--button" onClick={this.rolldice}>{buttonText}</button>
				</div>
			</>
		);
	}
}

export default App;
