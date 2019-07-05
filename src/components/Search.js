import React, { Component } from 'react';
import { getValue } from '../action/actions';
import { connect } from 'react-redux';

export class Search extends Component {
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Search"
					onChange={(e) => this.props.getValue(e.target.value)}
					value={this.props.searchValue}
				/>
			</div>
		);
	}
}

const mapState = (state) => ({
	searchValue: state.searchValue
});

const mapDispatch = (dispatch) => ({
	getValue: (e) => dispatch(getValue(e))
});

export default connect(mapState, mapDispatch)(Search);
