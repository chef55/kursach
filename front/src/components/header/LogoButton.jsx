import React from 'react';
import {Link} from "react-router-dom";
function LogoButton(props) {
  return (
    <Link to='/' className="header-logo-button">
        <img src="..\site_logo.png" className="header-logo-button-image"></img>
    </Link>
  );
}

export default LogoButton;
