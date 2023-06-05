import React from "react";
import Base from "../Base/Base";
import Navbar from "../Component/Navbar";
import Col from "react-bootstrap/Col";
import  Tabs from "../Component/Tabs";

const UtilityBorder = () => {
  return (
    <Base>
      <Navbar />
      <Col className="Cards">Border Utilities</Col>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <Tabs />
    </Base>
  );
};

export default UtilityBorder;