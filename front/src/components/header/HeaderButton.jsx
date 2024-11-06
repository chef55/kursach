import React from 'react';
import {Link} from "react-router-dom";

function HeaderButton(props) {
  return (
    <Link to={props.path} className="header-button">
        {props.name}
    </Link>
  );
}

export default HeaderButton;
