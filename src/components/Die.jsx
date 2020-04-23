/* eslint-disable react/prefer-stateless-function */
//

import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const MY_ICONS = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

class Die extends React.Component {

	render() {
		console.log('App::render(); this.props ', this.props);
		const { value } = this.props;
		const icon = MY_ICONS[value];

		return (
			<div className="die">
				<FontAwesomeIcon icon={icon} size="5x" />
			</div>
		);
	}
}

Die.propTypes = {
	value: PropTypes.number.isRequired
};

export default Die;