import Base from "../Base/Base";
import Navbar from "./Navbar";
import Tabs from "./Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Cards = () => {
  return (
    <Base>
      <Navbar />
      <Row>
        <Col className="Cards">Cards</Col>
      </Row>
      <Tabs />
      <ResponsiveAutoExample />
    </Base>
  );
};

export default Cards;

function ResponsiveAutoExample() {
  return (
    <Container className="mb-5">
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Header>Default Card Example</Card.Header>
            <Card.Body>
              <Card.Text>
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Header>Dropdown Card Example</Card.Header>
            <Card.Body>
              <Card.Text>
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Header>Basic Card Example</Card.Header>
            <Card.Body>
              <Card.Text>
                The styling for this basic card example is created by using
                default Bootstrap utility classes. By using utility classes, the
                style of the card component can be easily modified with no need
                for any custom CSS!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Header>Dropdown Card Example</Card.Header>
            <Card.Body>
              <Card.Text>
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}