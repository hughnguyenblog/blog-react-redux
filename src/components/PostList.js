import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostID } from '../action/actions';
import Pagination from './Pagination';
import Search from './Search';

export class PostList extends Component {
	render() {
		const style = {
			backgroundColor: 'grey',
			border: 'solid 3px black',
			margin: '10px auto',
			color: 'ghostwhite',
			width: '40vw'
		};
		return (
			<div>
				<Search />
				{this.props.posts.map((post) => {
					return (
						<div style={style} key={post.id}>
							<Link to={'/post/' + post.id} onClick={() => this.props.getPostID(post)}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
							</Link>
						</div>
					);
				})}
				<Pagination />
			</div>
		);
	}
}
const mapState = (state, ownProps) => ({
	allPosts: state.allPost,
	posts: state.posts
});

const mapDispatch = (dispatch) => ({
	getPostID: (id) => dispatch(getPostID(id))
});

export default connect(mapState, mapDispatch)(PostList);
