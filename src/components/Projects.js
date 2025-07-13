
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projectData = [
  {
    title: "Controle Financeiro",
    imageUrl: `${process.env.PUBLIC_URL}/dashboard.jpg`,
    description: "Um sistema web para gerenciamento financeiro pessoal, com cadastro de transações, resumo mensal, filtros por período e gráficos de entradas e saídas. Desenvolvido com Node.js, React, PostgreSQL e autenticação JWT.",
    githubUrl: "https://github.com/Sluiz-13/controle-financeiro",
    liveUrl: "https://controlefinanceiroweb.netlify.app/",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"]
  },
  {
    title: "Buscador de Protocolos",
    imageUrl: null, // Adicionar uma imagem ou placeholder
    description: "Ferramenta de consulta de protocolos internos de ligação, permitindo busca rápida por numeros de protocolos com ano, mes e dia. Interface simples e eficiente, ideal para uso em empresas com fluxo interno de documentos.",
    githubUrl: "https://github.com/Sluiz-13",
    liveUrl: null, // Substitua pelo link da aplicação online
    tags: ["Python", "Tkinter"]
  },
  {
    title: "Patrimônio de TI",
    imageUrl: `${process.env.PUBLIC_URL}/patrimonioTi.png`,
    description: "Sistema para controle de máquinas, monitores e mesas por setor, com registro de patrimônio e movimentações. Desenvolvido com foco em organização da infraestrutura de TI e exportação de dados para Excel.",
    githubUrl: "https://github.com/Sluiz-13",
    liveUrl: null, // Substitua pelo link da aplicação online
    tags: ["Python", "Tkinter", "Excel"]
  }
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">Meus Projetos</h2>
          </Col>
        </Row>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card bg="dark" text="white">
                {project.imageUrl && <Card.Img variant="top" src={project.imageUrl} />}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-secondary me-2">{tag}</span>
                    ))}
                  </div>
                  <Button variant="custom" href={project.githubUrl} target="_blank">Ver no GitHub</Button>
                  {project.liveUrl && 
                    <Button variant="outline-light" href={project.liveUrl} target="_blank" className="ms-2">Ver Online</Button>
                  }
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
