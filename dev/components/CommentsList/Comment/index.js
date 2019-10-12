import React, {Component} from 'react';

class Comment extends Component {
	render () {
		return(
			<li className="item">
				<header className="item__head">
					<h3 className="item__title">{this.props.name}</h3>
					<div className="item__action">
						<button className="button button--small">edit</button>
						<button className="button button--small">delete</button>
					</div>
				</header>
				<p>{this.props.message}</p>
			</li>
		);
	}

}

export default Comment;