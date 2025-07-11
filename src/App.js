import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Luiz Felippe Da Silva</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#projects">Projetos</Nav.Link>
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Olá, eu sou o Luiz Felippe</h1>
              <p>Desenvolvedor Back-end Junior</p>
              <p>Sou um profissional de TI com habilidades de desenvolvimento back-end.</p>
              <Button variant="custom" href="https://www.linkedin.com/in/luiz-felippe-8b3597286/" target="_blank">Contrate-me</Button>
            </Col>
          </Row>
        </Container>
      </header>

      <section id="projects" className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Meus Projetos</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white">
                <Card.Body>
                  <Card.Title>Controle Financeiro</Card.Title>
                  <Card.Text>
                    Um sistema web para gerenciamento financeiro pessoal, com cadastro de transações, resumo mensal, filtros por período e gráficos de entradas e saídas. Desenvolvido com Node.js, React, PostgreSQL e autenticação JWT.
                  </Card.Text>
                  <Button variant="custom" href="https://github.com/Sluiz-13/controle-financeiro" target="_blank">Ver no GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white">
                <Card.Body>
                  <Card.Title>Buscador de Proto</Card.Title>
                  <Card.Text>
                    Ferramenta de consulta de protocolos internos, permitindo busca rápida por número, responsável ou setor. Interface simples e eficiente, ideal para uso em empresas com fluxo interno de documentos.
                  </Card.Text>
                  <Button variant="custom" href="https://github.com/Sluiz-13" target="_blank">Ver no GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white">
                <Card.Body>
                  <Card.Title>Patrimônio de TI</Card.Title>
                  <Card.Text>
                    Sistema para controle de máquinas, monitores e mesas por setor, com registro de patrimônio e movimentações. Desenvolvido com foco em organização da infraestrutura de TI e exportação de dados para Excel.
                  </Card.Text>
                  <Button variant="custom" href="https://github.com/Sluiz-13" target="_blank">Ver no GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5 bg-dark">
        <Container>
          <Row>
            <Col>
              <h2>Sobre Mim</h2>
              <p>
                Sou estudante de Análise e Desenvolvimento de Sistemas com experiência prática em infraestrutura de TI e foco crescente em desenvolvimento web. Ao longo da minha jornada, venho desenvolvendo projetos voltados para organização e produtividade, como sistemas de controle financeiro, buscadores internos e controle de patrimônio.

                Tenho familiaridade com ferramentas modernas como React, Node.js, PostgreSQL, Bootstrap e Vite, e procuro sempre transformar conhecimento técnico em soluções úteis no dia a dia.

                Meu principal objetivo é crescer como desenvolvedor full stack, unindo minha base técnica com boas práticas de código, UX e performance. Estou sempre buscando novos desafios, contribuindo em projetos reais e evoluindo com cada experiência.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer id="contact" className="py-5">
        <Container>
          <Row>
            <Col>
              <h2>Contato</h2>
              <p>
                Você pode me encontrar no <a href="https://www.linkedin.com/in/luiz-felippe-8b3597286/">LinkedIn</a> ou no <a href="https://github.com/Sluiz-13">GitHub</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;