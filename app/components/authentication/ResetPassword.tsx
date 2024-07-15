'use client'
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ResetPasswordForm: React.FC = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h2>Reset your password</h2>
            <p>Enter your email address and we'll send you password reset instructions.</p>
          </div>
          <Form style={{ width: '100%', maxWidth: '400px' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Registered Email</Form.Label>
              <Form.Control type="email" placeholder="Input your registered email" required />
            </Form.Group>
            <Button variant="dark" type="submit" className="mt-3 w-100">
              Back to Login
            </Button>
            {/* <Button variant="outline-dark" className="mt-2 w-100">
              Back to Login
            </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default ResetPasswordForm;
