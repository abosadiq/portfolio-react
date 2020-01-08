import React from "react";
import selfImage from "../img/self.jpg";
import logo from "../img/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__position">
        <div className="navbar__img left slide-in">
          <img src={selfImage} alt="wafi" className="navbar__img--selfimage" />
          <img src={logo} alt="Front end " className="navbar__img--logo" />
        </div>
        <p className="navbar__paragraph right slide-in">
          1 Focus, creative, and innovative Computer Science professional with
          strong knowledge of web development tools and programming languages.
          <br />2 Confident and adept at designing a framework for creating user
          applications and implementing responsible web design principles to
          ensure efficient website rendering across multiple devices.
        </p>
        <nav className="navbar__list">
          <a aria-label="mobile menu" className="navbar__list--nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul className="navbar__list--menue">
            <li className="navbar__list--menue-item">
              <a href="#home" className="navbar__list--menue-item-link">
                Home
              </a>
            </li>
            <li className="navbar__list--menue-item">
              <a href="#about" className="navbar__list--menue-item-link">
                About
              </a>
            </li>
            <li className="navbar__list--menue-item">
              <a href="#skills" className="navbar__list--menue-item-link">
                Skills
              </a>
            </li>
            <li className="navbar__list--menue-item">
              <a href="#experience" className="navbar__list--menue-item-link">
                Experience
              </a>
            </li>
            <li className="navbar__list--menue-item">
              <a href="" className="navbar__list--menue-item-link">
                Work
              </a>
            </li>
            <li className="navbar__list--menue-item">
              <a href="" className="navbar__list--menue-item-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="follow">Follow me</div>
          <ul className="social_media">
            <li className="social_media-item">
              <a href="#">
                {/* <i className="icon fa fa-facebook"></i> */}
                <FacebookIcon className="icon fa fa-facebook" />
              </a>
            </li>
            <li className="social_media-item">
              <a href="#">
                <i className="icon fa fa-twitter"></i>
              </a>
            </li>
            <li className="social_media-item">
              <a href="#">
                {/* <i className="icon fa fa-instagram "></i> */}

                <InstagramIcon className="icon fa-instagram" />
              </a>
            </li>
            <li className="social_media-item">
              <a href="#">
                <i className="icon fa wp-icon fa-linkedin"></i>
              </a>
            </li>
            <li className="social_media-item">
              <a href="#">
                <i className="icon fa fa-google-plus fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
