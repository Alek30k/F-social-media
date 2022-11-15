import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/633b5b17c095d7272f78b209/John-Curtius-is-leaving-Tiger-Global/0x0.jpg?format=jpg&width=960"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"> </div>
        </div>
        <span className="chatOnlineName">John</span>
      </div>
    </div>
  );
}
