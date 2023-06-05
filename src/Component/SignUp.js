import React from 'react'
import Base from '../Base/Base'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
  return (
    <Base>
    <Container className='bg-primary login'>
    <Row>
      <Col sm={5}>
      <img className='loginimage' src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDA0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" alt=""/>
      </Col>
      <Col sm={5} className='bg-light loginright ' >
      <h1 className='loginheading'>Create an Account!</h1>
      <form>
       <Row>
       <div className='formone'>
        <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="First Name"
            className='rounded '
          />
         </div>
         <div className='formone'>
           <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Last name"
            className='rounded '
          />
        </div>
       </Row>
        <div className='formone'>
        <Form.Group className="mb-3">
        <Form.Control
            required
            type="text"
            placeholder="Email address"
            defaultValue="Email address"
            className='rounded '
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
            required
            type="text"
            placeholder="Password"
            defaultValue="Password"
            className='rounded '
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
            required
            type="text"
            placeholder="Reset Password"
            defaultValue="Reset Password"
            className='rounded '
          />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
       Login
      </Button>
      <Button variant="danger" size="lg">
        Login with Google
      </Button>
      <Button variant="info" size="lg">
        Login with facebook
      </Button>
    </div>
        </div>
      </form>
      </Col>
    </Row>
    </Container>
    </Base>
  )
}

export default SignUp