//

import React from 'react';

import Die from './Die';

import random from '../utilities/utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			die1: 0,
			die2: 0,
			isRolling: false
		};
	}

	rolldice = () => {
		this.setState({ isRolling: true });
		setTimeout(this.rolling, 2000);
	}

	rolling = () => {
		this.setState({ isRolling: false });
		this.setState({ die1: random() });
		this.setState({ die2: random() });
	}

	render() {
		console.log('App::render(); this.state ', this.state);
		const { isRolling } = this.state;

		const buttonText = isRolling ? "Rolling..." : "Roll Dice!";

		return (
			<>
				<div className="app--die">
					<Die value={this.state.die1} animate={isRolling} />
					<Die value={this.state.die2} animate={isRolling} />
				</div>
				<div>
					<button
						type="button"
						className="app--button"
						onClick={this.rolldice}
						disabled={isRolling}
					>
						{buttonText} 
					</button>
				</div>
			</>
		);
	}
}

export default App;
