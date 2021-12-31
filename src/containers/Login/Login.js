import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = (props) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const loginAcc = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = emailRef.current.value;
    const pass = passwordRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, pass);

      props.onHide();
      navigate('/dashboard');
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="johndoe@email.com"
                ref={emailRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={loginAcc}
            variant="success"
            size="lg"
            className="px-4 py-2"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
