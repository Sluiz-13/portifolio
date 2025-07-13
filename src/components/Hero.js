
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroBg from '../assets/developer_web.jpg'; // Importa a imagem

function Hero() {
  return (
    <header 
      id="home" 
      className="hero" 
      style={{ 
        backgroundImage: `url(${heroBg})` 
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1>Olá, eu sou o Luiz Felippe!</h1>
            <p>Transformo ideias em soluções web escaláveis com foco em produtividade e organização.</p>
            <Button variant="custom" href="https://www.linkedin.com/in/luiz-felippe-8b3597286/" target="_blank">Vamos conversar</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
