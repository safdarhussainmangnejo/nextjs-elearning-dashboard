'use client'
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const SignInForm: React.FC = () => {
  return (
    <Container fluid className="d-flex align-items-center" style={{ height: '100vh', padding: '0' }}>
      <Row className="w-100 m-0" style={{ flexGrow: 1 }}>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center p-0" style={{ backgroundColor: '#f8f9fa' }}>
          <img
            src="/images/Photo.png"
            alt="Sign In"
            className="img-fluid"
            style={{ width: '100%', height: 'auto', maxWidth: '720px', maxHeight: '727px' }}
          />
          <div style={{
            width: '100%',
            maxWidth: '720px',
            padding: '50px 50px 80px 50px',
            gap: '24px',
            borderTop: '5px solid #27A376',
            backgroundColor: '#111827',
            color:'#FFFFFF'
          }}>
            <h1 style={{fontFamily:'Inter', fontSize:'50px', }}>Payroll & LMS Kobi Education</h1>
            <p style={{fontFamily:'Open Sans'}}>Study Overseas, Have a Better Life, and Make Big Impact</p>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center" style={{ padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4" style={{fontFamily:'Inter', fontSize:'24px', marginBottom:'5px', fontWeight:'bold'}}>Login first to your account</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Input your registered email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Input your password account" required />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox" className="mt-3 d-flex justify-content-between">
                <Form.Check type="checkbox" label="Remember Me" />
                <Link href="resetpassword" className="text-decoration-none">Forgot Password</Link>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100" disabled style={{background:'#111827'}}>
                Login
              </Button>
            </Form>
            </div>
            {/* <div style={{ width: '100%', textAlign: 'center', paddingTop: '10px', bottom: '2px' }}>
              <p>
                © 2024 Kobi Education. All rights reserved. <Link href="/terms">Terms & Conditions</Link> <Link href="/privacy">Privacy Policy</Link>
              </p>
            </div> */}
          
        </Col>
      </Row>
    </Container>
  );
};


export default SignInForm;