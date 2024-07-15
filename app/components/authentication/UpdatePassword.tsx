'use client'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import globalcss from '../../global.module.css';
import styles from '../../styles/UpdatePassword.module.css';
import { FaCheckCircle, FaTimesCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

const UpdatePassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
    });

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setNewPassword(newPassword);
        setPasswordValidations({
            minLength: newPassword.length >= 8,
            hasUppercase: /[A-Z]/.test(newPassword),
            hasLowercase: /[a-z]/.test(newPassword),
            hasNumber: /\d/.test(newPassword),
        });
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            // Handle form submission logic
            console.log('Form submitted');
        }
    };

    const isPasswordValid = Object.values(passwordValidations).every(Boolean);
    const isFormValid = isPasswordValid && newPassword === confirmPassword;

    return (
        <Container className={styles.container}>
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs={12} md={8} lg={6} className={styles.content}>
                    <h2 className={globalcss.heading}>Update your password</h2>
                    <p className={styles.subheading}>
                        Set your new password with minimum 8 characters with
                        a combination of letters and numbers
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formBasicPassword" className="mb-3">
                            <Form.Label className={styles.formLabel}>New Password <span className={styles.required}>*</span></Form.Label>
                            <div className={styles.passwordContainer}>
                                <Form.Control
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    className={styles.passwordInput}
                                />
                                <span onClick={toggleShowNewPassword} className={styles.eyeIcon}>
                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </Form.Group>

                        <Row className={styles.validationRow}>
                            <Col className={styles.validationCol}>
                                <span
                                    className={`${styles.validationItem} ${
                                        passwordValidations.minLength ? styles.valid : styles.invalid
                                    }`}
                                >
                                    {passwordValidations.minLength ? (
                                        <FaCheckCircle className={styles.validIcon} />
                                    ) : (
                                        <FaTimesCircle className={styles.invalidIcon} />
                                    )}
                                    8 characters
                                </span>
                            </Col>
                            <Col className={styles.validationCol}>
                                <span
                                    className={`${styles.validationItem} ${
                                        passwordValidations.hasUppercase ? styles.valid : styles.invalid
                                    }`}
                                >
                                    {passwordValidations.hasUppercase ? (
                                        <FaCheckCircle className={styles.validIcon} />
                                    ) : (
                                        <FaTimesCircle className={styles.invalidIcon} />
                                    )}
                                    Uppercase letter (A-Z)
                                </span>
                            </Col>
                        </Row>

                        <Row className={styles.validationRow}>
                            <Col className={styles.validationCol}>
                                <span
                                    className={`${styles.validationItem} ${
                                        passwordValidations.hasLowercase ? styles.valid : styles.invalid
                                    }`}
                                >
                                    {passwordValidations.hasLowercase ? (
                                        <FaCheckCircle className={styles.validIcon} />
                                    ) : (
                                        <FaTimesCircle className={styles.invalidIcon} />
                                    )}
                                    Lowercase letter (a-z)
                                </span>
                            </Col>
                            <Col className={styles.validationCol}>
                                <span
                                    className={`${styles.validationItem} ${
                                        passwordValidations.hasNumber ? styles.valid : styles.invalid
                                    }`}
                                >
                                    {passwordValidations.hasNumber ? (
                                        <FaCheckCircle className={styles.validIcon} />
                                    ) : (
                                        <FaTimesCircle className={styles.invalidIcon} />
                                    )}
                                    Number (0-9)
                                </span>
                            </Col>
                        </Row>

                        <Form.Group as={Row} controlId="formConfirmPassword" className="mb-3">
                            <Form.Label className={styles.formLabel}>Confirmation New Password <span className={styles.required}>*</span></Form.Label>
                            <div className={styles.passwordContainer}>
                                <Form.Control
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Re-type your new password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className={styles.passwordInput}
                                />
                                <span onClick={toggleShowConfirmPassword} className={styles.eyeIcon}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </Form.Group>
                        <Button type="submit" className={globalcss.submitButton}>Submit</Button>
                    </Form>
                </Col>
            </Row>
            <footer className={styles.footer}>
                <p>© 2023 Humanline. All rights reserved. <a href="#" className={styles.link}>Terms & Conditions</a> | <a href="#" className={styles.link}>Privacy Policy</a></p>
            </footer>
        </Container>
    );
};

export default UpdatePassword;
