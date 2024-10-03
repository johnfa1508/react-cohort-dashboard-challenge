import { useContext } from 'react';
import { FormContext, PostContext } from '../context';
import '../styles/Form.css';

export default function PostForm() {
	const { formData, setFormData } = useContext(FormContext);
	const { setPostData, fetchData } = useContext(PostContext);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPost = { ...formData };

		fetch('https://boolean-uk-api-server.fly.dev/johnfa1508/post/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPost),
		})
			.then((response) => response.json())
			.then(() => {
				setPostData((prevContacts) => [...prevContacts, newPost]);

				alert('Post created successfully.');
				fetchData();
			})
			.catch((error) => {
				console.error('Error creating new post:', error);
			});

		setFormData({ title: 'test', content: '', contactId: 1 });
	};

	return (
		<>
			<section>
				<div className="post-card form-input">
					<div className="form__input-group">
						<form className="form" onSubmit={handleSubmit}>
							<label>
								<input
									type="text"
									name="content"
									onChange={handleChange}
									value={formData.content}
									placeholder="What's on your mind?"
								/>
							</label>

							<input className="form__submit" type="submit" value="Post" />
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
