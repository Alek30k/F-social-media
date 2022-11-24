import axios from "axios";
import { useEffect, useState } from "react";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await axios.get(
  //       "https://feisbuk-app.herokuapp.com/api/users/alls"
  //     );

  //     setUsers(res.data);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div>
      {/* {users?.map((u) => (
        <li className="sidebarFriend" key={u._id}>
          <img className="sidebarFriendImg" src={u?.profilePicture} alt="" />
          {user?.profilePicture}
          <span className="sidebarFriendName">{u?.username}</span>
        </li>
      ))} */}
    </div>
  );
}
