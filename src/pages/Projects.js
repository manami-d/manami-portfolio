import React from 'react';
import portfolioImg from '../img/portfolio.png';
import todoappImg from '../img/todoapp.png';
import recipewebsiteImg from '../img/recipewebsite.png';
import weatherappImg from '../img/weatherapi.png';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

// import ProjectLinks from '../components/ProjectLinks';
const StyledProjects = styled.section`
    min-height: 80vh;
    width: 100vw;
    /* h1 {
        margin: 2rem 0 1rem 0;
        font-size: 3.2rem;
    } */
    .cardBodyStyle {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        /* div {
            font-size: 1.5rem;
        } */
        a {
            color: darkblue;
        }
    }
    .wrapper {
        width: 91vw;
        margin: 0 auto;
        min-height: 80vh;
        display: flex;
        flex-wrap: wrap;
    }
    .project {
        width: 90vw;
        height: 40vh;
        margin: 0 2.5vw;
        /* padding: 1rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255, 255, 255, 0.6);
    }
    .img {
        padding: 1rem;
        margin: 0 auto;
        width: 75%;
        max-height: 50%;
        object-fit: contain;
        border: 0.1px solid grey;
    }
    //tablet
    @media only screen and (min-width: 720px) {
        font-size: 1.5rem;
        .img {
            width: 25vw;
            max-height: 25vw;
        }
    }
    //desktop
    @media only screen and (min-width: 1200px) {
        /* .project {
            margin-top: 2.5rem;
        } */
        .project {
            width: 40vw;
            /* margin: 2vw; */
        }
    }
`;

const Projects = () => {
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <div className="wrapper">
                <Card className="project">
                    <Card.Img variant="top" className="img" src={todoappImg} />
                    <Card.Body className="cardBodyStyle">
                        <Card.Title>To Do App</Card.Title>
                        <Card.Text>HTML | CSS | JavaScript | Bootstrap</Card.Text>
                        <Card.Link href="https://jwd4-todolist-app.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="project">
                    <Card.Img variant="top" className="img" src={recipewebsiteImg} />
                    <Card.Body className="cardBodyStyle">
                        <Card.Title>Recipe Website</Card.Title>
                        <Card.Text>HTML | CSS | JavaScript | React | React Bootstrap</Card.Text>
                        <Card.Link href="https://recipe-website-bootstrap.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="project">
                    <Card.Img variant="top" className="img" src={weatherappImg} />
                    <Card.Body className="cardBodyStyle">
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>HTML | CSS | JavaScript | Bootstrap | APIs</Card.Text>
                        <Card.Link href="https://github.com/manami-d/Weather-API">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="project">
                    <Card.Img variant="top" className="img" src={portfolioImg} />
                    <Card.Body className="cardBodyStyle">
                        <Card.Title>Portfolio Website</Card.Title>
                        <Card.Text>HTML | CSS | JavaScript | React | React Bootstrap</Card.Text>
                        <Card.Link href="https://manami-davidson.netlify.app/">Check out the app</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </StyledProjects>
    );
};

export default Projects;
