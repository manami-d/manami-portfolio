import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import NavLinks from './NavLinks';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0, 10px;
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid black;
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
    }
    .nav-left {
        width: 20%;
    }
    .nav-right {
        width: 30%;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <ul className="nav-left">
                <li>
                    <a href="https://github.com/manami-d">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/manami-davidson/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
            <ul className="nav-right">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Nav>
    );
};

export default Navbar;
