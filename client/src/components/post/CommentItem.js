import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ postId, comment: { _id, text, name, avatar, user, date }, auth, deleteComment }) => (
	<div class='post bg-white p-1 my-1'>
		<div>
			<Link to={`/profilr/${user}`}>
				<img
					class='round-img'
					src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
					alt=''
				/>
				<h4>{name}</h4>
			</Link>
		</div>
		<div>
			<p class='my-1'>{text}</p>
			<p class='post-date'>
				Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
			</p>
			{!auth.loading &&
			user === auth.user._id && (
				<button onClick={(e) => deleteComment(postId, _id)} type='button' className='btn-danger'>
					<i className='fas fa-times' />
				</button>
			)}
		</div>
	</div>
);

CommentItem.propTypes = {
	postId: PropTypes.number.isRequired,
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
