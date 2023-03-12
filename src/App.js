import "bootstrap/dist/css/bootstrap.min.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BasicExample() {
  return (
    <>
     <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={`${process.env.PUBLIC_URL}/apple logo 2.png`} className="img-fluid" alt="" style={{width : "50px", height : "auto"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="me-auto"></div>
              <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Service" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    <Row style={{margin : "2px"}}>
      <Col xs={12} md={4} lg={3}>
        <Card style={{ width: '18rem', height: '33rem' }}>
          {/* <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" /> */}
          <iframe
              src="https://www.youtube.com/embed/OU59iqw2ORE"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          <Card.Body className="d-flex flex-column">
            <Card.Title>Youtube</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" size="sm" className="mt-auto w-50">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} lg={3}>
        <Card style={{ width: '18rem', height: '33rem'}}>
          {/* <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" /> */}
          <video className="w-100" autoPlay loop muted controls>
            <source
              src="https://mdbootstrap.com/img/video/animation-intro.mp4"
              type="video/mp4"
              allowFullScreen
            />
          </video>
          <Card.Body className="d-flex flex-column">
            <Card.Title>mp4 from web site</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content increasing word for longer card.
            </Card.Text>
              <Button variant="primary" size="sm" className="mt-auto w-50">Go somewhere</Button> 
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} lg={3}>
        <Card style={{ width: '18rem', height: '33rem' }}>
          {/* <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" /> */}
          <div className="d-flex flex-column align-items-center">
            <video className="w-75" autoPlay loop muted controls>
              <source
                src="/image/IMG_2486.mp4"
                type="video/mp4"
                allowFullScreen
              />
            </video>
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title>Cat & Granparent</Card.Title>
            <Card.Text>
              Some quick example text.
            </Card.Text>
            <Button variant="primary" size="sm" className="mt-auto w-50">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} lg={3}>
        <Card style={{ width: '18rem', height: '33rem' }}>
          {/* <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" /> */}
          <div className="d-flex flex-column align-items-center">
            <video className="w-75" autoPlay loop muted controls>
              <source
                src="/image/IMG_2832.MOV"
                type="video/mp4"
                allowFullScreen
              />
            </video>
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title>Cat Knock</Card.Title>
            <Card.Text>
              Some quick example text.
            </Card.Text>
            <Button variant="primary" size="sm" className="mt-auto w-50">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Card className="text-center text-success">
      <Card.Footer>Copyright &#169; 2023 by Somboon Nontaganok Studio</Card.Footer>
    </Card>
    </>
  );
}

export default BasicExample;