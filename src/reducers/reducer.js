const initialState = {
	loadDone: false,
	posts: [],
	allPost: [],
	selectedPost: [],
	pageLimit: 10,
	rangePages: [],
	currentPage: 0,
	searchValue: '',
	range: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_STATE':
			const length = Math.ceil(action.payload.length / state.pageLimit);
			const currentPost = action.payload.slice(state.currentPage * state.pageLimit, state.pageLimit);
			return {
				...state,
				range: [ ...Array(length).keys() ],
				posts: currentPost,
				postSlice: currentPost,
				loadDone: true,
				rangePages: [ ...Array(length).keys() ],
				allPost: action.payload
			};
		case 'GET_POST_ID':
			return {
				...state,
				selectedPost: action.payload
			};
		case 'GET_PAGE':
			const startPage = action.payload * state.pageLimit;
			const currentPostClick = state.allPost.slice(startPage, startPage + state.pageLimit);
			return {
				...state,
				posts: currentPostClick,
				postSlice: currentPostClick,
				currentPage: action.payload
			};

		case 'GET_VALUE':
			const filteredPost = state.allPost.filter((post) => {
				return post.title.includes(action.payload);
			});
			if (action.payload === '') {
				return {
					...state,
					posts: state.postSlice,
					searchValue: action.payload,
					rangePages: state.range
				};
			} else
				return {
					...state,
					posts: filteredPost,
					searchValue: action.payload,
					rangePages: []
				};

		default:
			return state;
	}
};

export default reducer;
