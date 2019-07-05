import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPage } from '../action/actions';

export class Pagination extends Component {
	render() {
		const style = {
			fontSize: '2rem',
			margin: '20px',
			cursor: 'pointer',
			background: 'blue'
		};
		return (
			<div>
				<ul className="pagination" style={{ justifyContent: 'center' }}>
					{this.props.rangePages.map((page, index) => {
						return (
							<li
								key={index}
								style={
									page === this.props.currentPage ? (
										style
									) : (
										{
											fontSize: '2rem',
											margin: '20px',
											cursor: 'pointer'
										}
									)
								}
								onClick={(e) => {
									e.preventDefault();
									this.props.getPage(page);
								}}
							>
								{page + 1}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapState = (state) => ({
	currentPage: state.currentPage,
	rangePages: state.rangePages
});

const mapDispatch = (dispatch) => ({
	getPage: (page) => dispatch(getPage(page))
});

export default connect(mapState, mapDispatch)(Pagination);
