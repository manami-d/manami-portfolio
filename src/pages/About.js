import React from 'react';
import topImage from '../img/pexels-gya-den-2303781.jpg';
import styled from 'styled-components';
import { styledPage } from '../styles/globalStyles';

const StyledAbout = styled(styledPage)`
    background: white;
`;

const About = () => {
    const topImageStyle = {
        width: '30vw'
    };

    return (
        <StyledAbout>
            <div className={'main-left'}>
                <h1>Manami Davidson</h1>
                <br />
                <h3>Web Developer</h3>
                <br />
                <p>HTML | CSS | JavaScript | Bootstrap | Git | Github</p>
                <br />
            </div>
            <div className={'main-right'}>
                <img src={topImage} alt="beach and combi" style={topImageStyle} />
            </div>
        </StyledAbout>
    );
};

export default About;
