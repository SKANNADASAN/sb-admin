import React from 'react'
import Base from '../Base/Base'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <Base>
    <Container className='bg-primary login'>
    <Row>
      <Col sm={5}>
      <img className='loginimage' src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDA0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" alt=""/>
      </Col>
      <Col sm={5} className='bg-light loginright ' >
      <h1 className='loginheading'>Welcome Back!</h1>
      <form>
        <div className='formone'>
        <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Enter Email Address.."
            className='rounded '
          />
         </div>
         <div className='formone'>
           <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Password"
            className='rounded '
          />
        </div>
        <div className='formone'>
        <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="Remember Me."
          feedbackType="invalid"
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

export default Login