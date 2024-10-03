/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/PostComment.css';

export default function PostComment({ comment }) {
	const [commentContact, setCommentContact] = useState(null);

	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${comment.contactId}`
			);
			const jsonData = await response.json();

			setCommentContact(jsonData);
		};

		fetchContact();
	}, [comment]);

	if (!commentContact)
		return (
			<>
				<div>
					<p className="loading">Loading...</p>
				</div>
			</>
		);

	return (
		<>
			<div className="comment-card" key={comment.id}>
				<div
					className="comment-avatar"
					style={{ backgroundColor: commentContact.favouriteColour }}
				>
					<span>
						{commentContact.firstName[0]}
						{commentContact.lastName[0]}
					</span>
				</div>

				<div className="comment-body">
					<h4>
						{commentContact.firstName} {commentContact.lastName}
					</h4>

					<p>{comment.content}</p>
				</div>
			</div>
		</>
	);
}
