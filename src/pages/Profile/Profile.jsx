import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Leftbar />
				<div className="profileRight">
					<div className="profileRightTop">
                  <div className="profileCover">
                     <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                     <img src="/assets/person/1.jpg" alt="" className="profileUserImg" />
                  </div>
                  <div className="profileInfo">
                     <h4 className="profileInfoName">Anirudh Hada</h4>
                     <span className="profileInfoDesc">Hello my friends!</span>
                  </div>
               </div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
