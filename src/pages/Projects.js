import React from 'react';
import portfolioImg from '../img/portfolio.png';
import todoappImg from '../img/todoapp.png';
import recipewebsiteImg from '../img/recipewebsite.png';
import weatherappImg from '../img/weatherApp.png';

import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

// import ProjectLinks from '../components/ProjectLinks';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '10vw' }} src={todoappImg} />
                            <Card.Body>
                                <Card.Title>To Do App</Card.Title>
                                <Card.Text>HTML|CSS|JavaScript|Bootstrap</Card.Text>
                                <Card.Link href="https://jwd4-todolist-app.netlify.app/">Check out the app</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '10vw' }} src={recipewebsiteImg} />
                            <Card.Body>
                                <Card.Title>Recipe Website</Card.Title>
                                <Card.Text>HTML|CSS|JavaScript|React|React Bootstrap</Card.Text>
                                <Card.Link href="https://recipe-website-bootstrap.netlify.app/">Check out the app</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '10vw' }} src={weatherappImg} />
                            <Card.Body>
                                <Card.Title>Weather App</Card.Title>
                                <Card.Text>HTML|CSS|JavaScript|Bootstrap|APIs</Card.Text>
                                <Card.Link href="https://github.com/manami-d/Weather-API">Check out the app</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '10vw' }} src={portfolioImg} />
                            <Card.Body>
                                <Card.Title>Portfolio Website</Card.Title>
                                <Card.Text>HTML|CSS|JavaScript|React|React Bootstrap</Card.Text>
                                <Card.Link href="https://manami-davidson.netlify.app/">Check out the app</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
