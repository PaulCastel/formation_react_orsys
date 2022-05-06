import { Container, Nav, Navbar as NavBar } from 'react-bootstrap'
import style from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { LinkContainer } from 'react-router-bootstrap'

const Navbar = (props) => {
  return (
    <NavBar bg="dark" variant="dark">
    <Container>
    <LinkContainer to="/">
      <NavBar.Brand>Meme Generator</NavBar.Brand>
    </LinkContainer>
    <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/editor">
        <Nav.Link>New</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/editor/1">
        <Nav.Link>Edit</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/thumbnail">
        <Nav.Link>Thumbnail</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/thumbnailPDF">
        <Nav.Link>Thumbnail PDF</Nav.Link>
      </LinkContainer>
  </Nav>
    </Container>
  </NavBar>
  )
}


export default Navbar
