import React from 'react'
import topImage from '../img/pexels-gya-den-2303781.jpg'


const About = () => {
  const topImageStyle = {
    width: '30%',
    height: '30%'
  }
  
  return (
    <div>
      <div className={'main-left'}>
        <h1>Manami Davidson</h1>
        <h3>Web Developer</h3>
        <p>HTML | CSS | JavaScript | Bootstrap | Git | Github</p>
      </div>
      <div className={'main-right'}>
        <img src={topImage} alt="beach and combi" style={topImageStyle} />
      </div>
    </div>
  )
}

export default About
