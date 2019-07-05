import React, { Component, Suspense } from 'react';

import SinglePost from './SinglePost';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { getState } from '../action/actions';

const PostList = React.lazy(() => import('./PostList'));

export class AllPost extends Component {
	componentDidMount() {
		this.props.getstate();
	}

	render() {
		return (
			<div>
				<h2>All Posts</h2>
				<Suspense fallback={<div>Loading ...</div>}>
					{this.props.loadDone ? (
						<React.Fragment>
							<Switch>
								<Route path="/" exact component={PostList} />
								<Route path="/post/:id" exact component={SinglePost} />
							</Switch>
						</React.Fragment>
					) : (
						<div>Loading ...</div>
					)}
				</Suspense>
			</div>
		);
	}
}

const mapState = (state) => ({
	allPosts: state.posts,
	loadDone: state.loadDone
});

const mapDispatch = (dispatch) => ({
	getstate: () => dispatch(getState())
});

export default connect(mapState, mapDispatch)(AllPost);
