import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import nameOnlyLogo from '../../assets/img/nameOnlyLogo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import { Button } from "react-bootstrap";
import PDF from '../Resume/resume.pdf'
import {
  BrowserRouter as Router
} from "react-router-dom";

//assets
import './NavBar.css';
import '../../app.css'


export const NavBar = () => {
const [nav,setNav]= useState(false)
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
  
      } else {
        setScrolled(false);
       
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const onNavLinkClick = (value) => {
    onUpdateActiveLink(value);
    // Only auto-close when in collapsed (mobile) mode for expand="lg"
    if (window.innerWidth < 992) setNav(false);
  }

  return (
    <Router>
      <Navbar
        expand="lg"
        expanded={nav}
        onToggle={(nextExpanded) => setNav(nextExpanded)}
        className={`${(scrolled || nav) ? "scrolled" : ""} ${nav ? "navOpen" : ""}`}
      >
        <Container>
          <Navbar.Brand  href="/">
           <img src={nameOnlyLogo} alt="Logo" className="logo" ></img>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onNavLinkClick('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onNavLinkClick('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onNavLinkClick('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/joe-schlitz-ii-654434113/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/PoshMonger"><img src={navIcon2} alt="" /></a>
                {/* <a href="https://www.instagram.com/jschlitzii"><img src={navIcon3} alt="" /></a> */}
              </div>
              
              <Button className='nav-button' href={PDF} target='blank' rel="noreferrer"> Download CV</Button>
               
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
