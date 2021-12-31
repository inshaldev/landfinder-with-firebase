import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export const LookingToSell = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center min-vh-100 align-items-end px-4"
        >
          <h1 className="display-5 fw-bold text-end">
            The concept of Digital Agencies
          </h1>
          <p className="lead">
            Register as an agency now and start posting your ads.
          </p>
          <Button variant="success" size="lg" className="mt-5 px-4">
            Sign Up
          </Button>
        </Col>
        <Col className="d-flex flex-column justify-content-center min-vh-100 align-items-end p-0">
          <Container className="sell_img_grid">
            <img
              className="img-1 img-fluid border rounded shadow-lg"
              src="https://source.unsplash.com/RCF5KSWb7Ms/600x400"
              alt="by Ksenia Balandina"
            />
            <img
              className="img-2 img-fluid rounded shadow"
              src="https://source.unsplash.com/XGvwt544g8k/600x400"
              alt="by Ksenia Balandina"
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
