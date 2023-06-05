import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBell,
    faEnvelope,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
<div className="dashboard-nav">
  <div className="dash-nav-left">
    <input
      placeholder="Search for..."
      type=""
      name=""
      value=""
      className="dashinput"
    />
    <FontAwesomeIcon className="dashsearch" icon={faSearch} />
  </div>

  <div className="div_top_hypers dash-nav-right">
    <ul className="ul_top_hypers">
      <li>
        <FontAwesomeIcon className="dashnavbell" icon={faBell} />
        <span className="dashbell">3+</span>
      </li>

      <li>
        <FontAwesomeIcon className="dashnavenvo" icon={faEnvelope} />
        <span className="dashenvolop">7+</span>
      </li>

      <li>
        <small className="dashperson">Douglas McGee</small>
        <img
          className="dashperson"
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
          alt=""
        />
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar;