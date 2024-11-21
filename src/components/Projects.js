import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dealuploader from '../assets/img/projects/dealuploader.png'
import joeSays from '../assets/img/projects/JOE_SAYS.png'
import tropicalNucleus from '../assets/img/projects/tropical_nucleus.png'
import canvasGame from '../assets/img/projects/canvasgame.png'
import threeDprojection from '../assets/img/projects/3dProjection.png'
import UIeffects from '../assets/img/projects/UIeffects.png'
import passwordGen from '../assets/img/projects/passwordGenerator.png'
import colorSharp from "../assets/img/color-sharp.png"
import pythontank from '../assets/img/python3dtank.png'

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects_tab1 = [
    {
      title: "Dealuploader.com",
      description: "MERN stack application in beta for SWFL wholesaling start-up. Used as proof of concept and still in development",
      imgUrl: dealuploader,
      deploy: 'https://dealuploader.com',
      github: 'https://github.com/PoshMonger/dealuploader-beta'
    },
    {
      title: "3D Projection in Python",
      description: "3D projection using .obj files, and transformation matrices, rotating on all three axes, translating, and scaling. ",
      imgUrl: pythontank,
      github: 'https://github.com/PoshMonger/3D-Projection-with-Python',
    
    },

    {
      title: "Password Generator",
      description: "Vanilla Javascript password generation app with GUI",
      imgUrl: passwordGen,
      github: 'https://github.com/PoshMonger/Password-Generator',
      deploy: 'https://poshmonger.github.io/Password-Generator/'
    },
 
    {
      title: "Tropical Nucleus",
      description: "Animated pixelation algorithm on art work by Mark T. Cole. Built with instance of Image class and HTML canvas",
      imgUrl: tropicalNucleus,
      github: 'https://github.com/PoshMonger/Tropical_Nucleus-Art-By-Mark-T-Cole-',
      deploy: 'https://poshmonger.github.io/Tropical_Nucleus-Art-By-Mark-T-Cole-/'
    },

 

  ];
  const projects_tab2 = [
    {
      title: "3D Projection",
      description: "Projecting 3d vertice coordinates onto a 2d plane using HTML canvas element for draw methods",
      imgUrl: threeDprojection,
      github: 'https://github.com/PoshMonger/3-D-projection',
      deploy: 'https://poshmonger.github.io/3-D-projection/'
    },

 
    {
      title: "Satelite Mini-Game",
      description: "Quick mini game built with HTML canvas element, es6 modules, webpack, and babel. ",
      imgUrl: canvasGame,
      github: 'https://github.com/PoshMonger/canvaslib',
      deploy: 'https://poshmonger.github.io/canvaslib/'
    },

    {
      title: "Simon Says Clone",
      description: "Another rendition of a timeless classic",
      imgUrl: joeSays,
      deploy: 'https://poshmonger.github.io/Joe-Says/',
      github: 'https://github.com/PoshMonger/Joe-Says'

    },
    {
      title: "UI/UX Effects Library (beta)",
      description: "Javascript and CSS library to add to vanilla web projects to add basic UI effects like side menu and focusing an image",
      imgUrl: UIeffects,
      github: 'https://github.com/PoshMonger/UI-Effects',

    },


  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A collection of some of my recent work.  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects_tab1.map((project, index) => {
                              return (
                                <ProjectCard

                                  key={index}
                                  {...project}
                                />
                              )
                            })


                          }
                
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                          {
                            projects_tab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                                
                              )
                              
                            })
                          }
                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row xs={12} sm={12} md={12} lg={12} xl={12}>
                      <p>If you wish to see some of my other repositories feel free to <p className='myGitHub'>check out my github:</p>
                       <br/><a href='https://github.com/PoshMonger' target='blank'> <Button className='proj-button-github'>PoshMonger</Button></a>
                        </p>
                          
                        </Row>
                      
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
    </section>
  )
}
