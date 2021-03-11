import React from 'react';
import portfolioImg from '../img/portfolio.png';
import todoappImg from '../img/todoapp.png';
import recipewebsiteImg from '../img/recipewebsite.png';
import weatherappImg from '../img/weatherApp.png';

import { Card } from 'react-bootstrap';

// import ProjectLinks from '../components/ProjectLinks';

const Projects = () => {
    const projectStyle = {
        width: '40vw',
        height: '20vh',
        margin: '2.5vw',
        display: 'flex',
        justifyContent: 'center'
    };
    const cardBodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '25vw'
    };
    const imgStyle = {
        padding: '1rem',
        width: '20vw',
        objectFit: 'contain',
        border: '0.1px solid grey'
    };
    const wrapperStyle = {
        width: '91vw',
        margin: '0 auto',
        minHeight: '80vh',
        display: 'flex',
        flexWrap: 'wrap'
    };
    return (
        <div>
            <h1>Projects</h1>
            <div className="wrapper" style={wrapperStyle}>
                <Card style={projectStyle}>
                    <Card.Img variant="top" style={imgStyle} src={todoappImg} />
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>To Do App</Card.Title>
                        <Card.Text>HTML|CSS|JavaScript|Bootstrap</Card.Text>
                        <Card.Link href="https://jwd4-todolist-app.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={projectStyle}>
                    <Card.Img variant="top" style={imgStyle} src={recipewebsiteImg} />
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>Recipe Website</Card.Title>
                        <Card.Text>HTML|CSS|JavaScript|React|React Bootstrap</Card.Text>
                        <Card.Link href="https://recipe-website-bootstrap.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={projectStyle}>
                    <Card.Img variant="top" style={imgStyle} src={weatherappImg} />
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>HTML|CSS|JavaScript|Bootstrap|APIs</Card.Text>
                        <Card.Link href="https://github.com/manami-d/Weather-API">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={projectStyle}>
                    <Card.Img variant="top" style={imgStyle} src={portfolioImg} />
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>Portfolio Website</Card.Title>
                        <Card.Text>HTML|CSS|JavaScript|React|React Bootstrap</Card.Text>
                        <Card.Link href="https://manami-davidson.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
