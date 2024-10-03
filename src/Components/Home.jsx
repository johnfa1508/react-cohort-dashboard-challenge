import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Header from './Header';
import Navbar from './Navbar';

export default function Home() {
	return (
		<>
			<Header />
			<Navbar />

			<main>
				<h1>Home</h1>
				<PostForm />
				<PostFeed />
			</main>
		</>
	);
}
