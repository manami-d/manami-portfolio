import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import NavLinks from './NavLinks';
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;

//   ${props =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `};
// `
const Ul = styled.ul`
  list-style-type: none;
  padding: 0; 
  margin: 0; 
`

const Navbar = () => {
  return (

    <div>
      <Ul>
        <li>
          {/* <Button>Home</Button> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Button promary>Projects</Button> */}

          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Ul>
      
    </div>
  )
}

export default Navbar
