import React from 'react';
import topImage from '../img/pexels-gya-den-2303781.jpg';
import styled from 'styled-components';
import { styledPage } from '../styles/globalStyles';

const StyledAbout = styled(styledPage)`
    background: white;
    h1 {
        margin-top: 10px;
    }
    h3 {
        margin: 10px 0;
    }
    p {
        margin: 10px 0;
    }

    img {
        margin-top: 10px;
        width: 60vw;
    }

    //tablet
    @media only screen and (min-width: 720px) {
        img {
            width: 50vw;
        }
    }
    //desktop
    @media only screen and (min-width: 1200px) {
        img {
            width: 30vw;
        }
    }
`;

const About = () => {
    // const topImageStyle = {
    //     width: '30vw'
    // };

    return (
        <StyledAbout>
            <div className={'main-left'}>
                <h1>Manami Davidson</h1>
                <h3>Web Developer</h3>
                <p>HTML | CSS | JavaScript | Bootstrap | Git | Github | WordPress | SEO</p>
            </div>
            <div className={'main-right'}>
                <img src={topImage} alt="beach and combi" />
            </div>
        </StyledAbout>
    );
};

export default About;
