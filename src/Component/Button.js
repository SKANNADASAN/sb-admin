import React from "react";
import Base from "../Base/Base";
import Navbar from "./Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const Buttons = () => {
  return (
    <Base>
      <Navbar />
      <Row>
        <Col className="Cards">Buttons</Col>
        <div className="buttonflex">
          <div className="buttonscards">
            <div className="buttonheader">
              <h6 className="text-primary">Circle Buttons</h6>
            </div>
            <div className="buttonbody">
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              <p className="text-danger">.btn-circle</p>
              <Col xs={6} md={8}>
                <Image
                  className="buttonimage"
                  src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
                  roundedCircle
                />
                <Image
                  className="buttonimage"
                  src="https://static.vecteezy.com/system/resources/previews/000/572/931/original/vector-check-mark-icon.jpg"
                  roundedCircle
                />
                <Image
                  className="buttonimage"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/1024px-Info_icon_002.svg.png"
                  roundedCircle
                />
                <Image
                  className="buttonimage"
                  src="https://openclipart.org/image/2400px/svg_to_png/307426/1538316074.png"
                  roundedCircle
                />
                <Image
                  className="buttonimage"
                  src="https://th.bing.com/th/id/OIP.wCEHnDYSVK0S_ewpHgsY3QHaHV?pid=ImgDet&rs=1"
                  roundedCircle
                />
              </Col>
              <Row>
                <p className="text-danger">.btn-circle .btn-sm</p>
                <Col xs={6} md={8}>
                  <Image
                    className="buttonimagesm"
                    src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagesm"
                    src="https://static.vecteezy.com/system/resources/previews/000/572/931/original/vector-check-mark-icon.jpg"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagesm"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/1024px-Info_icon_002.svg.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagesm"
                    src="https://openclipart.org/image/2400px/svg_to_png/307426/1538316074.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagesm"
                    src="https://th.bing.com/th/id/OIP.wCEHnDYSVK0S_ewpHgsY3QHaHV?pid=ImgDet&rs=1"
                    roundedCircle
                  />
                </Col>
              </Row>
              <Row>
                <p className="text-danger">.btn-circle .btn-lg</p>
                <Col xs={6} md={8}>
                  <Image
                    className="buttonimagelg"
                    src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagelg"
                    src="https://static.vecteezy.com/system/resources/previews/000/572/931/original/vector-check-mark-icon.jpg"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagelg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/1024px-Info_icon_002.svg.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagelg"
                    src="https://openclipart.org/image/2400px/svg_to_png/307426/1538316074.png"
                    roundedCircle
                  />
                  <Image
                    className="buttonimagelg"
                    src="https://th.bing.com/th/id/OIP.wCEHnDYSVK0S_ewpHgsY3QHaHV?pid=ImgDet&rs=1"
                    roundedCircle
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="buttonscardsone">
            <div className="buttonheader">
              <h6 className="text-primary">Split Buttons with Icon</h6>
            </div>
            <div className="buttonbody">
              <p>
                Works with any button colors, just use the .btn-icon-split class
                and the markup in the examples below. The examples below also
                use the .text-white-50 helper class on the icons for additional
                styling, but it is not required.
              </p>

              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="primary">Split Button Primary</Button>
                <Dropdown.Toggle
                  split
                  variant="primary"
                  id="dropdown-custom-2"
                />
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>

              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button Success</Button>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-custom-2"
                />
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>

              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="info">Split Button Info</Button>
                <Dropdown.Toggle
                  split
                  variant="info"
                  id="dropdown-custom-2"
                />
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>

              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="warning">Split Button Warning</Button>
                <Dropdown.Toggle
                  split
                  variant="warning"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>

              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="danger">Split Button Danger</Button>
                <Dropdown.Toggle
                  split
                  variant="danger"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>
              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="secondary">Split Button Secondary</Button>
                <Dropdown.Toggle
                  split
                  variant="secondary"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>
              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="light">Split Button Light</Button>
                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>
              <div className="paddingdesi" >
              Also works with small and large button classes!
              </div>
              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="primary">Split Button Small</Button>
                <Dropdown.Toggle
                  split
                  variant="primary"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>
              <div className="paddingdesi" >
              <Dropdown as={ButtonGroup}>
                <Button variant="primary">Split Button Large</Button>
                <Dropdown.Toggle
                  split
                  variant="primary"
                  id="dropdown-custom-2"
                />
              </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Base>
  );
};

export default Buttons;