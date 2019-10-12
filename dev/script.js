import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'

import Title from './components/Title';
import Form from './components/Form';
import CommentsList from './components/CommentsList';

class App extends Component {
	render() {
		return (
			<div className="box">
				<Title />
				<Form />
				<CommentsList />
			</div>
		)
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);