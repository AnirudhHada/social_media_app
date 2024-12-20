import './leftbar.css';
import {RssFeed, Bookmark, Chat, Group, HelpOutline, PlayCircleFilledOutlined, Event, School, WorkOutline } from '@mui/icons-material';
import { Users } from '../../dummyData'
import CloseFriend from '../CloseFriend/CloseFriend';

const Leftbar = () => {
	return (
		<div className='leftbar'>
			<div className="leftbarWrapper">
				<ul className="leftbarList">
					<li className="leftbarListItem">
						<RssFeed className='leftbarIcon' />
						<span className="leftbarListItemText">Feed</span>
					</li>
					<li className="leftbarListItem">
						<Chat className='leftbarIcon' />
						<span className="leftbarListItemText">Chats</span>
					</li>
					<li className="leftbarListItem">
						<PlayCircleFilledOutlined className='leftbarIcon' />
						<span className="leftbarListItemText">Videos</span>
					</li>
					<li className="leftbarListItem">
						<Group className='leftbarIcon' />
						<span className="leftbarListItemText">Groups</span>
					</li>
					<li className="leftbarListItem">
						<Bookmark className='leftbarIcon' />
						<span className="leftbarListItemText">Bookmarks</span>
					</li>
					<li className="leftbarListItem">
						<HelpOutline className='leftbarIcon' />
						<span className="leftbarListItemText">Questions</span>
					</li>
					<li className="leftbarListItem">
						<WorkOutline className='leftbarIcon' />
						<span className="leftbarListItemText">Jobs</span>
					</li>
					<li className="leftbarListItem">
						<Event className='leftbarIcon' />
						<span className="leftbarListItemText">Events</span>
					</li>
					<li className="leftbarListItem">
						<School className='leftbarIcon' />
						<span className="leftbarListItemText">Courses</span>
					</li>
				</ul>
				<button className="leftbarButton">Show More</button>
				<hr className='leftbarHr'/>
				<h4 className="leftbarTitle">Close Friends</h4>
				<ul className="leftbarFriendList">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Leftbar;
