/* eslint-disable react/prop-types */
import { PostContext, UserContext } from '../context.jsx';

export default function ContextProvider({
	children,
	user,
	setUser,
	postData,
	setPostData,
}) {
	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<PostContext.Provider value={{ postData, setPostData }}>
					{children}
				</PostContext.Provider>
			</UserContext.Provider>
		</>
	);
}
