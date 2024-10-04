/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PostComment from './PostComment';
import PostCommentForm from './PostCommentForm';
import '../styles/Post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
	const [postContact, setPostContact] = useState(null);
	const [postComments, setPostComments] = useState([]);
	const [showAllComments, setShowAllComments] = useState(false);
	const commentsToDisplay = showAllComments
		? postComments
		: postComments.slice(0, 3);

	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${post.contactId}`
			);
			const jsonData = await response.json();

			setPostContact(jsonData);
		};

		fetchContact();
	}, [post]);

	useEffect(() => {
		const fetchComments = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/post/${post.id}/comment`
			);
			const jsonData = await response.json();

			setPostComments(jsonData);
		};

		fetchComments();
	}, [post, setPostComments]);

	if (!postContact)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'black' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<article className="post-card">
				<div className="author-info">
					<div
						className="author-avatar"
						style={{ backgroundColor: postContact.favouriteColour }}
					>
						<Link to={`/view/profile/${postContact.id}`} className="link">
							<div className="avatar-initials">
								<span className="link">
									{postContact.firstName[0]}
									{postContact.lastName[0]}
								</span>
							</div>
						</Link>
					</div>

					<h2>
						<Link to={`/view/profile/${postContact.id}`} className="link">
							{postContact.firstName} {postContact.lastName}
						</Link>
					</h2>
				</div>

				<div className="post-content">
					<Link to={`/view/post/${post.id}`} className="link">
						<p className="post-title link">{post.title}</p>
					</Link>
					<p>{post.content}</p>
				</div>

				<div className="comment-section">
					{postComments.length > 3 && (
						<p
							className="link"
							onClick={() => setShowAllComments((prev) => !prev)}
							style={{ cursor: 'pointer' }}
						>
							{showAllComments
								? `Hide comments`
								: `See all comments (${postComments.length})`}
						</p>
					)}
					{commentsToDisplay.map((comment) => (
						<PostComment comment={comment} key={comment.id} />
					))}
				</div>

				<PostCommentForm post={post} setPostComments={setPostComments} />
			</article>
		</>
	);
}
