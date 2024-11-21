import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, github, deploy }) => {
  return (
    <Col className='proj-col' size={12} xs={12} sm={12} md={12} lg={6} xl={6}>
      <div className="proj-imgbx">
        <img alt='Joe Schlitz Profile Pic' className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="proj-desc">{description}</span>

          <a href={deploy} target='blank' rel="noreferrer">
            {(function() {
              if (deploy) {
                return (<Button className="proj-button">
                  View Deploy
                </Button>)

              }


            })()

            }
          </a>
          <a href={github} target='blank' rel="noreferrer">
            <Button className="proj-button">
              View Repo
            </Button>
          </a>

        </div>
      </div>
    </Col>
  )
}
