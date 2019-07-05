import React from 'react';
import AllPost from './components/AllPost';

import './App.css';

function App() {
	return (
		<div className="App">
			<h1>This is nav</h1>
			<h1>Blog</h1>
			<h3>Use React, Redux, React-router, Redux-thunk</h3>
			<hr />
			<AllPost />
		</div>
	);
}

export default App;
