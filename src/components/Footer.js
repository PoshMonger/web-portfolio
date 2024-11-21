import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">

        
          <Col  xl={10} lg={10} md={10} sm={12} xs={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joe-schlitz-ii-654434113/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/PoshMonger"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="https://www.instagram.com/jschlitzii/"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <div className='link-cont'><a className='phone-link' href='tel:4072578880'>(407) 257 8880 </a> <a className='phone-link2'  href='mailto:jschlitzii@gmail.com'>jschlitzii@gmail.com</a>
            </div>
            <p> Joe.Schlitz WebDev © 2022. All Rights Reserved</p>
          
          </Col>
             
        
        </Row>
      </Container>
    </footer>
  )
}
