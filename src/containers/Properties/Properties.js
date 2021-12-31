// import { getDownloadURL, ref } from 'firebase/storage';
// import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
// import { storage } from '../../firebase';
import '../../stylesheets/styles.css';

const Properties = ({ APIRoute }) => {
  const navigate = useNavigate();
  const { ads } = useData();

  return (
    <Container className="p-4">
      {/* <Col className="col-12 col-md-5 p-0">
        <Card.Img variant="top" src={APIRoute + thumbUrl} />
      </Col> */}

      <Row>
        {ads?.map((ad) => {
          const {
            id,
            area,
            area_unit,
            bath,
            bed,
            price,
            currency,
            title,
            // thumbnail,
            location,
          } = ad;
          return (
            <Card key={id} className="mb-4">
              <Row>
                <Col>{}</Col>
                <Col>
                  <Card.Body>
                    <Card.Title className="display-6">{title}</Card.Title>
                    <Card.Text className="lead">In {location}</Card.Text>
                    <div className="d-flex gap-1">
                      <Card.Text>{bed} Bed,</Card.Text>
                      <Card.Text>{bath} Bath,</Card.Text>
                      <Card.Text>{`${area} ${area_unit}`}.</Card.Text>
                    </div>
                    <Card.Text className="lead text-primary fw-bold">{`${price} ${currency}`}</Card.Text>
                    <Button
                      onClick={() => {
                        navigate(`${ad.id}`);
                      }}
                      variant="primary"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Properties;
