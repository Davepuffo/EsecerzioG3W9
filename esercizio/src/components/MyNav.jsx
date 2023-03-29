import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <Navbar className="bg-dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="https://alisea.com/wp-content/uploads/2021/03/mondadori-logo.png" height="80px" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                        <Nav.Link href="#" className='text-light'>About</Nav.Link>
                        <Nav.Link href="#" className='text-light'>Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;