import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';

const SignUp = (props) => {
  const navigate = useNavigate();
  const realnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const registerAcc = async (e) => {
    e.preventDefault();
    setLoading(true);
    const realname = realnameRef.current.value;
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    try {
      await createUserWithEmailAndPassword(auth, email, pass).then(
        async (userCred) => {
          await setDoc(doc(db, 'users', userCred.user.uid), {
            realname: realname,
            username: `@${email.substring(0, email.lastIndexOf('@'))}`,
          });
        }
      );

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
          <Modal.Title id="contained-modal-title-vcenter">
            Register as an Agency
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Real name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                ref={realnameRef}
              />
            </Form.Group>

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
          <Button onClick={registerAcc} variant="success" disabled={loading}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignUp;
