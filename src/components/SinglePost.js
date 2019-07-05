import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class SinglePost extends Component {
	render() {
		const style = {
			background: '#d3f6f3',
			width: '90vw',
			height: '100%',
			margin: '20px auto'
		};
		return (
			<div style={style}>
				<h1>{this.props.selectedPost.title}</h1>
				<p>{this.props.selectedPost.body}</p>
				<Link to="/" style={{ fontSize: '2rem' }}>
					Back
				</Link>
			</div>
		);
	}
}

const mapState = (state) => ({
	selectedPost: state.selectedPost
});

export default connect(mapState)(SinglePost);
