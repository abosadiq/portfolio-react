import React from "react";
 import GetAppIcon from '@material-ui/icons/GetApp';
export const Header = () => {
  return (
    <header className="header">
      <div className="header__heading">
        <h1 className="header__heading--1 up slide-up-down">Hi!</h1>
        <h3 className="header__heading--3 up slide-up-down">I'm Software</h3>
        <h6 className="header__heading--6 down slide-up-down">
          Html | Css | JavaScript | Bootstrap | Jquery | Node.js | Python
        </h6>
        <a
          className="header__btn down slide-up-down"
          href="./Wafi_resume .doc"
          download
        >
          Download CV
          <GetAppIcon style={{marginLeft: '10px', lineHeight: '10px'}}/>
        </a>
      </div>
    </header>
  );
};
