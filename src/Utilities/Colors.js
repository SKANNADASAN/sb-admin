import React from "react";
import Base from "../Base/Base";
import Navbar from "../Component/Navbar";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Colors() {
  return (
    <Base>
      <Navbar />
      <Col className="Cards">Color Utilities</Col>
      <p>Bootstrap's default utility classes can be found on the official
      Bootstrap Documentation page. The custom utilities below were created to
      extend this theme past the default utility classes built into Bootstrap's
      framework.
      </p>
      <WithHeaderStyledExample/>
    </Base>
  );
}

export default Colors;

function WithHeaderStyledExample() {
    return (
        <Container>
      <Row>
        <Col>
        <Card>
        <Card.Header as="h5">Custom Text Color Utilities</Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="customgray">
                <div className="custspce">.text-gray-100</div>
                <div className="custspce">
                .text-gray-200
                </div>
                <div className="custspce">
                .text-gray-300
                </div>
            </div>
            <div>
            <div className="custspce">
                .text-gray-400
                </div>
                <div className="custspce">
                .text-gray-500
                </div>
                <div className="custspce">
                .text-gray-600
                </div>
                <div className="custspce">
                .text-gray-700
                </div>
                <div className="custspce">
                .text-gray-800
                </div>
                <div className="custspce">
                .text-gray-900
                </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        <Col>
        <Card>
        <Card.Header as="h5">Custom Background Gradient Utilities</Card.Header>
        <Card.Body>
          <Card.Text>
                <div className="bg-primary colortabs">
                .bg-gradient-primary
                </div>
                <div className="bg-success colortabs">
                .bg-gradient-success
                </div>
                <div className="bg-info colortabs">
                .bg-gradient-info
                </div>
                <div className="bg-warning colortabs">
                .bg-gradient-warning
                </div>
                <div className="bg-danger colortabs">
                .bg-gradient-danger
                </div>
                <div className="bg-light colortabs">
                .bg-gradient-light
                </div>
                <div className="bg-dark colortabs">
                .bg-gradient-dark
                </div>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card>
        <Card.Header as="h5">Custom Grayscale Background Utilities</Card.Header>
        <Card.Body>
          <Card.Text>
          <div className="colorgraycustom colorcust1">
                .text-gray-100
                </div>
                <div className="colorgraycustom colorcust2">
                .text-gray-200
                </div>
                <div className="colorgraycustom colorcust3">
                .text-gray-300
                </div>
                <div className="colorgraycustom colorcust4">
                .text-gray-400
                </div>
                <div className="colorgraycustom colorcust5">
                .text-gray-500
                </div>
                <div className="colorgraycustom colorcust6">
                .text-gray-600
                </div>
                <div className="colorgraycustom colorcust7">
                .text-gray-700
                </div>
                <div className="colorgraycustom colorcust8">
                .text-gray-800
                </div>
                <div className="colorgraycustom colorcust9">
                .text-gray-900
                </div>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    
    );
  }