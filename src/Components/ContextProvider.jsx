/* eslint-disable react/prop-types */
import { PostContext } from '../context.jsx';

export default function ContextProvider({ children, postData, setPostData }) {
	return (
		<>
			<PostContext.Provider value={{ postData, setPostData }}>
				{children}
			</PostContext.Provider>
		</>
	);
}
