//packages
import React from 'react'
import { Switch, Route } from "react-router-dom";
//components and pages
import About from "./pages/About";
import Projects from './pages/Projects'
import Contact from "./pages/Contact";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (   
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
 )
};

export default App;

  /* Example of how to create a link in react
<Link to="/projects">Projects</Link> 
*/
