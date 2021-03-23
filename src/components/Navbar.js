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
    //mobile
    @media only screen and (max-width: 719px) {
        .mob-icon {
            display: inline-block;
        }
        span {
            display: none;
        }
    }
    //tablet and desktop
    @media only screen and (min-width: 720px) {
        .mob-icon {
            display: none;
        }
        span {
            display: inline-block;
        }
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
                    <Link to="/">
                        <i className="mob-icon fas fa-home"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <i className="mob-icon fas fa-laptop"></i>
                        <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <i className="mob-icon fa fa-envelope" aria-hidden="true"></i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};

export default Navbar;
