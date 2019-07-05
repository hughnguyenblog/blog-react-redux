import axios from 'axios';

export const storeState = (data) => {
	return {
		type: 'GET_STATE',
		payload: data
	};
};

export const getState = () => {
	return (dispatch) => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
			const slice = response.data.slice(0, 90);
			dispatch(storeState(slice));
		});
	};
};

export const getPostID = (id) => ({
	type: 'GET_POST_ID',
	payload: id
});

export const getPage = (page) => ({
	type: 'GET_PAGE',
	payload: page
});

export const getValue = (value) => ({
	type: 'GET_VALUE',
	payload: value
});
