import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import { useState } from "react";
import "./navbar.scss";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Главная</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Сериалы</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Фильмы</span>
          </Link>
          <span>Новинки</span>
          <span>Мой список</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Pirate_Bay_logo.svg/529px-The_Pirate_Bay_logo.svg.png?20090421191123"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
