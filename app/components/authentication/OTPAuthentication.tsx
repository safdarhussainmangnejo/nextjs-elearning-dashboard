'use client'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from '../../styles/OtpVerification.module.css';
import globalcss from '../../global.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const OTPAuthentication = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));

  const handleChange = (element: any, index: number) => {
    const value = element.value;
    if (isNaN(value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('OTP Submitted: ' + otp.join(''));
  };

  return (
    <Container className={styles.container}>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={8} lg={6} className={styles.content}>
          <h2 className={globalcss.heading}>OTP Verification</h2>
          <p className={styles.text}>
            We have sent a verification code to email address<br />
            pristia@gmail.com.
            <Link href="#" className={styles.link}>Wrong Email?</Link>
          </p>
          <Form onSubmit={handleSubmit}>
            <div className={styles.otpInput}>
              {otp.map((data, index) => {
                return (
                  <input
                    className={styles.inputBox}
                    type="text"
                    name="otp"
                    maxLength={1}
                    key={index}
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onFocus={e => e.target.select()}
                  />
                );
              })}
            </div>
            <Button type="submit" className={globalcss.submitButton} style={{background:'black', width:'480px', height:'50px', border: '0 black'}}>Submit</Button>
          </Form>
        </Col>
      </Row>
      <footer className={styles.footer}>
        <p>© 2023 Humanline. All rights reserved. <a href="#" className={styles.link}>Terms & Conditions</a> | <a href="#" className={styles.link}>Privacy Policy</a></p>
      </footer>
    </Container>
  );
};

export default OTPAuthentication;
