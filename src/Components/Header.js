import React from "react";
import "../Components css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists,Playlists" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
