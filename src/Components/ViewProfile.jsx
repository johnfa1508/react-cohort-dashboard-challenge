import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProfile() {
	const [profile, setProfile] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchProfile = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${id}`
			);
			const jsonData = await response.json();

			setProfile(jsonData);
		};

		fetchProfile();
	}, [id]);

	if (!profile)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'white' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<div className="main-content">
				<Header />
				<div className="content">
					<Navbar />

					<main>
						{/* TODO: Implement profile card */}
						<h1>
							{profile.firstName} {profile.lastName}
						</h1>
					</main>
				</div>
			</div>
		</>
	);
}
