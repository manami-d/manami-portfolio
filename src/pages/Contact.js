import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
    min-height: 80vh;
    width: 100vw;
    h1 {
        margin-top: 10px;
    }
    p {
        margin: 20px 0;
    }
`;

const Contact = () => {
    return (
        <StyledContact>
            <h1>Get in touch with me</h1>
            <p>
                <a href="mailto:manamikdavidson@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i> Send Email
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/manami-davidson/">
                    <i className="fab fa-linkedin-in"></i> Contact on LinkedIn
                </a>
            </p>
        </StyledContact>
    );
};

export default Contact;
