import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const { ads, APIRoute } = useData();
  let details;
  if (ads) {
    details = ads.filter((ad) => ad.id === propertyId)[0].attributes;
  }
  return details ? (
    <Container>
      <Row className="my-4">
        <Col className="col-12 col-md-6">
          <img
            alt={details.title}
            src={APIRoute + details.thumbnail.data.attributes.url}
            className="img-fluid border rounded"
          />
        </Col>
        <Col>
          <Container className="p-4 border border-1 rounded h-100" fluid>
            <h1>{details.title}</h1>
            <p className="lead">In {details.location}</p>
            <p>{details.bedrooms} Bedrooms</p>
            <p>{details.bathrooms} Bathrooms</p>
            <p>{`${details.area} ${details.area_unit}`}.</p>
            <p className="lead text-primary fw-bold">{`${details.price} ${details.currency}`}</p>
          </Container>
        </Col>
      </Row>
      <Row className="my-4">
        <h2 className="mb-4">More Images:</h2>

        <Carousel variant="dark">
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={APIRoute + details.thumbnail.data.attributes.url}
              alt="First slide"
            />
          </Carousel.Item> */}
          {details.images.data.map((img) => {
            return (
              <Carousel.Item key={img.attributes.url}>
                <img
                  className="d-block w-100 border rounded"
                  src={APIRoute + img.attributes.url}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
    </Container>
  ) : (
    <p>Loading...</p>
  );
};

export default PropertyDetails;
