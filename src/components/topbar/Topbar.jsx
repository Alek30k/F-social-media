import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Logout } from "../../context/AuthActions";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    dispatch(Logout());
    history.push("/login");
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Feisbuk</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search on Feisbuk" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div onClick={openModal}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </div>
        <div
          className={`modal ${isOpenModal && "modal-open"}`}
          onClick={closeModal}
        >
          <div className="modal__dialog" onClick={handleModalDialogClick}>
            <div className="link">
              <Link
                to={`/profile/${user.username}`}
                style={{
                  textDecoration: "none",
                  color: "rgb(26, 19, 19)",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                <div>
                  <img
                    src={
                      user.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                    className="topbarImg"
                  />
                  {user.username}
                </div>
              </Link>
            </div>
            {isOpenModal && (
              <div className="modalAvatar" onClick={handleLogout}>
                <LogoutIcon />
                Logout
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
