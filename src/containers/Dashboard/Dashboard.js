import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useData } from '../../contexts/DataContext';

const Dashboard = () => {
  const { userData } = useData();
  return (
    <Container>
      <Row>
        <h1>Hola, {userData?.realname}!</h1>
      </Row>
    </Container>
  );
};

export default Dashboard;
