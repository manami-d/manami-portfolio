import styled from 'styled-components';

export const GlobalStyles = styled.main`
    font-family: 'Cardo', Helvetica;
    text-align: center;
    width: 99vw;
    padding: 0;
    margin: 0;
    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: grey;
    }
    .footer {
        margin: 0 auto;
        bottom: 0;
        width: 100%;
        height: 5vh;
        text-align: center;
    }
    .contact-page {
        min-height: 80vh;
        width: 100vw;
    }
`;

export const styledPage = styled.section`
    min-height: 80vh;
`;
