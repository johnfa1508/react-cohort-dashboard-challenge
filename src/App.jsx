import { useState } from 'react';
import './styles/App.css';
import Home from './Components/Home';
import ContextProvider from './Components/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [postData, setPostData] = useState([]);
	const [formData, setFormData] = useState({
		title: 'test',
		content: '',
		contactId: 1,
	});
	const apiURL = 'https://boolean-uk-api-server.fly.dev/johnfa1508/post/';

	const fetchData = async () => {
		const response = await fetch(apiURL);
		const jsonData = await response.json();

		setPostData(jsonData);
	};

	return (
		<>
			<ContextProvider
				postData={postData}
				setPostData={setPostData}
				formData={formData}
				setFormData={setFormData}
				fetchData={fetchData}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</>
	);
}

export default App;
