import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./home.css";

export default function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Leftbar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}