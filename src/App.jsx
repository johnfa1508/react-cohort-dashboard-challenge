import { useState } from 'react';
import './styles/App.css';
import Home from './Components/Home';
import ContextProvider from './Components/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [postData, setPostData] = useState([]);

	return (
		<>
			<ContextProvider postData={postData} setPostData={setPostData}>
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
