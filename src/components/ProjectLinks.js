import React from 'react';
import portfolioImg from '../img/portfolio.png';
import todoappImg from '../img/todoapp.png';
import recipewebsiteImg from '../img/recipewebsite.png';
import weatherappImg from '../img/weatherapi.png';
import { Card } from 'react-bootstrap';
const projects = [
    { appName: 'To Do App', techUsed: 'HTML | CSS | JavaScript | Bootstrap', appUrl: 'https://jwd4-todolist-app.netlify.app/', appImg: todoappImg },
    { appName: 'Weather API', techUsed: 'HTML | CSS | JavaScript | Bootstrap | APIs', appUrl: 'https://github.com/manami-d/Weather-API', appImg: weatherappImg },
    { appName: 'Recipe Website', techUsed: 'HTML | CSS | JavaScript | Bootstrap', appUrl: 'https://recipe-website-bootstrap.netlify.app/', appImg: recipewebsiteImg },
    { appName: 'Portfolio Website', techUsed: 'HTML | CSS | JavaScript | React | React Bootstrap', appUrl: 'https://manami-davidson.netlify.app/', appImg: portfolioImg }
];

const ProjectLinks = () => {
    const projectList = projects.map((project, index) => {
        return (
            <Card key={index.toString()} className="project">
                <Card.Img variant="top" className="img" src={project.appImg} />
                <Card.Body className="cardBodyStyle">
                    <Card.Title style={{ fontWeight: 'bold' }}>{project.appName}</Card.Title>
                    <Card.Text>{project.techUsed}</Card.Text>
                    <Card.Link href={project.appUrl}>Check out the app</Card.Link>
                </Card.Body>
            </Card>
        );
    });

    return <div className="wrapper">{projectList}</div>;
};

export default ProjectLinks;
