import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../stylesheets/styles.css';

export const Home = () => {
  const heroStyles = {
    backgroundImage: 'url(./images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Container fluid style={heroStyles}>
        <Row className="overlay">
          <Col className="min-vh-100 d-flex flex-column justify-content-center align-items-center col-xl-6">
            <div className="text-white">
              <h2 className="fw-bold display-5">
                Double-Story Houses
                <br />
                in Silicon Valley
              </h2>
              <p>Starting from $320,000</p>
              <Button variant="primary" className="mt-4 px-4 py-2">
                View Details
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
