import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrackVisibility from 'react-on-screen';
import { Button } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://nodemailerforportfolio.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="contact">
      <Container className='contact-form'>
        <Col className='contact-header-cont' size={12}>  <h2>Get In Touch</h2></Col>
    
        <Row className='contact-main-cont'>
         
          <Col   xs={12}  sm={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div  >
               
                <form  onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} xs={6} md={12} lg={12} xl={12} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6  } xs={6}  md={12} lg={12} xl={12} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} xs={6}  className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} xs={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col  size={6} sm={12} xs={12}  md={12} lg={12} xl={12}  >
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                     
                    </Col>
                    <Col className='contact-button-cont' xs={6} sm={6} md={12} lg={12} xl={12}>
                    <Button type="submit"><span>{buttonText}</span></Button>
                    {
                      status.message &&

                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                     
                    }
                    </Col>

                   
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
