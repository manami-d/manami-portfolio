import React from 'react';
import topImage from '../img/pexels-gya-den-2303781.jpg';
import styled from 'styled-components';
import { styledPage } from '../styles/globalStyles';

const StyledAbout = styled(styledPage)`
    background: red;
`;

const About = () => {
    const topImageStyle = {
        width: '30%',
        height: '30%'0
    };

    return (
        <StyledAbout>
            <div className={'main-left'}>
                <h1>Manami Davidson</h1>
                <h3>Web Developer</h3>
                <p>HTML | CSS | JavaScript | Bootstrap | Git | Github</p>
            </div>
            <div className={'main-right'}>
                <img src={topImage} alt="beach and combi" style={topImageStyle} />
            </div>
        </StyledAbout>
    );
};

export default About;
