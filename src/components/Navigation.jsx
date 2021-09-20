import logo from '../images/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';


console.log(logo)

const Navigation = () => {
    return (
            <Navbar expand="lg" sticky="top" className="bar">
                <img src={logo} className="logo space-left" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navbar"
                        style={{ maxHeight: '400px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="home space">Home</Nav.Link>
                        <Nav.Link href="#action2" className="space">About</Nav.Link>
                        <Nav.Link href="#action3" className="space">Services</Nav.Link>
                        <Nav.Link href="#action4" className="space">Instructors</Nav.Link>
                        <NavDropdown className="space" title="Courses" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action5" className="spaceone">Junior course</NavDropdown.Item>
                            <NavDropdown.Item href="#action6" className="spaceone">Senior course</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action5" className="space">Blog</Nav.Link>
                    </Nav>
                        <Button variant="outline-success">Contact</Button>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;
