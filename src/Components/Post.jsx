import PostComment from './PostComment';
import PostCommentForm from './PostCommentForm';

export default function Post() {
	return (
		<>
			<article>
				<h3>Post</h3>
				<PostComment />
				<PostCommentForm />
			</article>
		</>
	);
}
