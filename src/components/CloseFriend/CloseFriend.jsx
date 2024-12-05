import './closeFriend.css';

const Close = ({user}) => {
	return (
		<li className="leftbarFriend">
			<img src={user.profilePicture} alt="" className="leftbarFriendImg" />
			<span className="leftbarFriendName">{user.username}</span>
		</li>
	);
};

export default Close;
