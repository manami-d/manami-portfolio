import React from 'react'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Link to='https://jwd4-todolist-app.netlify.app/'>To Do List App</Link> 
      <p>HTML|CSS|JavaScript|Bootstrap</p>
      <br />
      <Link to='https://recipe-website-bootstrap.netlify.app/index.html'>Recipe Website</Link>
      <p>HTML|CSS|Bootstrap</p>
      <br />
      <Link to='https://github.com/manami-d/Weather-API'>Weather App</Link> 
      <p>HTML|CSS|JavaScript|Bootstrap|APIs</p>
      <br />
      <Link to='https://manami-davidson.netlify.app/'>Portfolio Website</Link>
      <p>HTML|CSS|JavaScript|React</p>
    </div>
  )
}

export default Projects
