
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5 bg-dark">
      <Container>
        <Row>
          <Col>
            <h2>Sobre Mim</h2>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas com experiência prática em infraestrutura de TI e foco crescente em desenvolvimento web. Ao longo da minha jornada, venho desenvolvendo projetos voltados para organização e produtividade, como sistemas de controle financeiro, buscadores internos e controle de patrimônio.
            </p>
            <p>
              Tenho familiaridade com ferramentas modernas como React, Node.js, PostgreSQL, Bootstrap e Vite, e procuro sempre transformar conhecimento técnico em soluções úteis no dia a dia.
            </p>
            <p>
              Meu principal objetivo é crescer como desenvolvedor back-end, unindo minha base técnica com boas práticas de código. Estou sempre buscando novos desafios, contribuindo em projetos reais e evoluindo com cada experiência. 
            </p>
            <p>
              Se chegou até aqui, agradeço por conhecer meu trabalho! Vamos conversar?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
