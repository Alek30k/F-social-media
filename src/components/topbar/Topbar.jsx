import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { Logout } from "../../context/AuthActions";
import { useEffect } from "react";
import axios from "axios";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [OpenModalFriends, setOpenModalFriends] = useState(false);
  const [friends, setFriends] = useState([]);
  const history = useHistory();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const closeModalFriends = () => {
    setOpenModalFriends(false);
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleModalDialogClickk = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    dispatch(Logout());
    history.push("/login");
  };

  const handleClickFriends = () => {
    setOpenModalFriends(true);
  };

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axios.get(
          "https://b-social-media-production.up.railway.app/api/users/alls"
        );
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, []);

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
          <div className="topbarIconItem" onClick={handleClickFriends}>
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div
            className={`modalFriends ${
              OpenModalFriends && "modal-openFriends"
            }`}
            onClick={closeModalFriends}
          >
            <div className="modal__dialogg" onClick={handleModalDialogClickk}>
              <div className="avatarName">
                <div className="containerAvatar">
                  <div>
                    {friends.map((friend) => {
                      <div>
                        {friend.username}
                        <img
                          src={friend.profilePicture}
                          alt=""
                          className="topbarImg"
                        />
                        {friend.username}
                      </div>;
                    })}
                  </div>
                  ;
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/messenger"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div onClick={openModal} className="openModal">
          <img
            src={
              user?.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
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
            <Link
              to={`/profile/${user.username}`}
              style={{
                textDecoration: "none",
                color: "rgb(26, 19, 19)",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              <div className="avatarName">
                <div className="containerAvatar">
                  <div>
                    <img
                      src={
                        user?.profilePicture ||
                        "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                      }
                      alt=""
                      className="topbarImg"
                    />
                    {user.username}
                  </div>
                </div>
              </div>
            </Link>
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
