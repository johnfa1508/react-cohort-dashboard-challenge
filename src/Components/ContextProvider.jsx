/* eslint-disable react/prop-types */
import { PostContext, FormContext } from '../context.jsx';

export default function ContextProvider({
	children,
	postData,
	setPostData,
	formData,
	setFormData,
	fetchData,
}) {
	return (
		<>
			<FormContext.Provider value={{ formData, setFormData }}>
				<PostContext.Provider value={{ postData, setPostData, fetchData }}>
					{children}
				</PostContext.Provider>
			</FormContext.Provider>
		</>
	);
}
