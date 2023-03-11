// import logo from './logo.svg';
import react, {Component} from 'react';
import './App.css';
// import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component 
{
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={`${process.env.PUBLIC_URL}/apple logo 2.png`} className="img-fluid" alt="" style={{width : "50px", height : "auto"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
        <Row style={{margin : "2px"}}>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card>
                <Card.Img variant="top" src="/image/IMG_2827 Small.jpeg" />
                <Card.Body>
                  <Card.Title>Cat Family</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </div>
    )
  }
}

export default App;
