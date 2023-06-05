import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Dropdown from "react-bootstrap/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBusinessTime,
  faGear,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";

function Base({ children }) {
  const history = useHistory();
  return (
    <div className="base-design">
      <div className="left-content">
        <p className="heading">
          <span>
            <FontAwesomeIcon className="smileicon" icon={faSmileWink} />
          </span>
          <h5>
            SB ADMIN <small>2</small>
          </h5>
        </p>

        <button onClick={() => history.push("/")}>
          <FontAwesomeIcon icon={faBusinessTime} /> Dashboard
        </button>
        <div className="devider"></div>
        <div className="sidebar-heading">Interface</div>

        <Example />

        <button onClick={() => history.push("/table")}>Table</button>

      </div>
      <div className="right-content">{children}</div>
    </div>
  );
}

export default Base;

function Example() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <FontAwesomeIcon className="dashnavenvo" icon={faGear} /> Components{" "}
        <FontAwesomeIcon className="dashnavenvo" icon={faArrowDown} />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="sidecomp">
          <h6 class="collapse-header">Custom Components:</h6>
          <Button
            className="collapsetext"
            onClick={() => history.push("/buttons")}
          >
            Buttons
          </Button>
          <Button
            className="collapsetext"
            onClick={() => history.push("/Card")}
          >
            Cards
          </Button>
        </div>
      </Collapse>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Utilities
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <h6 class="collapse-header">Custom Utilities:</h6>
          <Dropdown.Item onClick={() => history.push("/colors")}>
            Colors
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/border")}>
            Borders
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/Animation")}>
            Animations
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/Other")}>
            Other
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">Pages</Dropdown.Toggle>

        <Dropdown.Menu>
          <h6 class="collapse-header">LOGIN SCREENS:</h6>
          <Dropdown.Item onClick={() => history.push("/login")}>
            Login
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/signup")}>
            Register
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/forgetpassword")}>
            forgetpassword
          </Dropdown.Item>
          <h6 class="collapse-header">OTHER PAGES:</h6>
          <Dropdown.Item onClick={() => history.push("/nopage")}>
            404 Page
          </Dropdown.Item>
          <Dropdown.Item onClick={() => history.push("/Other")}>
            Blank Page
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}