import Post from './Post';
import { useEffect, useContext } from 'react';
import { PostContext } from '../context';

export default function PostFeed() {
	const { postData, setPostData } = useContext(PostContext);
	const apiURL = 'https://boolean-uk-api-server.fly.dev/johnfa1508/post/';

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiURL);
			const jsonData = await response.json();

			setPostData(jsonData);
		};

		fetchData();
	}, [setPostData]);

	return (
		<>
			<section>
				{postData
					.slice()
					.reverse()
					.map((post) => (
						<Post post={post} key={post.id} />
					))}
			</section>
		</>
	);
}
