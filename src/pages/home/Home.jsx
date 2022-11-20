import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="homeItem">
          <Sidebar />
        </div>
        <Feed />
        <div className="homeItem">
          <Rightbar />
        </div>
      </div>
    </>
  );
}
