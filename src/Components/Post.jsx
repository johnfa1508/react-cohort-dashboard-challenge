/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PostComment from './PostComment';
import PostCommentForm from './PostCommentForm';
import '../styles/Post.css';

export default function Post({ post }) {
	const [postContact, setPostContact] = useState(null);
	const [postComments, setPostComments] = useState([]);

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
						<div className="avatar-initials">
							<span>
								{postContact.firstName[0]}
								{postContact.lastName[0]}
							</span>
						</div>
					</div>

					<h2>
						{postContact.firstName} {postContact.lastName}
					</h2>
				</div>

				<div className="post-content">
					<p className="post-title">{post.title}</p>
					<p>{post.content}</p>
				</div>

				<div className="comment-section">
					<h3>See previous comments</h3>
					{postComments.map((comment) => (
						<PostComment comment={comment} key={comment.id} />
					))}
				</div>

				<PostCommentForm post={post} setPostComments={setPostComments} />
			</article>
		</>
	);
}
