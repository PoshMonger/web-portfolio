import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

//assets
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [whosThatPortrait, setWhosThatPortrait] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Dev", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="tint"></div>

      <div className="banner" id="home">
      
         
            <div className="banner-container">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <p className="greeting">
                      Hi! I'm Joe, <br />{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </p>

                    <p className="banner-text">
                     and passionate technologist who specializes in creating responsive and aesthetically pleasing web applications.
                    </p>
                    <a
                      className="contact-link"
                      target="_blank"
                      href="mailto:jschlitzii@gmail.com"
                    >
                      {" "}
                      <button
                        className="contactme"
                        onClick={() => console.log("connect")}
                      >
                        Contact Me <ArrowRightCircle  />
                      </button>{" "}
                    </a>
                  </div>
                )}
              </TrackVisibility>
            
          </div>
          <div
            className="portrait-container"
          >
            <div className="img-cont">
              <div
                className={
                  whosThatPortrait == 1
                    ? "portrait-ease-in"
                    : whosThatPortrait == 2
                    ? "portrait-ease-out"
                    : whosThatPortrait == 3
                    ? "image-ease-in"
                    : "image-ease-out"
                }
                onMouseEnter={() => {
                  setWhosThatPortrait(
                    whosThatPortrait < 4 ? whosThatPortrait + 1 : 1
                  );
                }}
                onClick ={() => {
                  setWhosThatPortrait(
                    whosThatPortrait < 4 ? whosThatPortrait + 1 : 1
                  );
                }}
        
              ></div>
            </div>
          </div>
      </div>
    </>
  );
};
