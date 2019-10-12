import React, {Component} from 'react';

import Comment from './Comment/index.js';

class CommentList extends Component {
	render () {
		return(
			<ul className="list">
				<Comment name="Николай"
					message="олололололололо"/>
				<Comment name="Юрий"
						 message="Всем привет" />
			</ul>
		);
	}

}

export default CommentList;