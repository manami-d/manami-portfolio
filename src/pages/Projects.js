import React from 'react';
import styled from 'styled-components';
import ProjectLinks from '../components/ProjectLinks';

const StyledProjects = styled.section`
    min-height: 80vh;
    width: 100vw;
    h1 {
        margin-top: 10px;
    }
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
        .img {
            width: 25vw;
            max-height: 25vw;
        }
    }
    //desktop
    @media only screen and (min-width: 1200px) {
        .project {
            width: 40vw;
        }
    }
`;

const Projects = () => {
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <ProjectLinks />
        </StyledProjects>
    );
};

export default Projects;
