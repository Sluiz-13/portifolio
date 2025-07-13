
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>Contato</h2>
            <p className="mb-4">
              Você pode me encontrar no <a href="https://www.linkedin.com/in/luiz-felippe-8b3597286/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} />LinkedIn</a> ou no <a href="https://github.com/Sluiz-13" target="_blank" rel="noopener noreferrer"><FaGithub size={24} />GitHub</a>
            </p>
            <Button variant="custom" href="mailto:luizfelippe.03@hotmail.com">
              Fale Comigo por E-mail
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
