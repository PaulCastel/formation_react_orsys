import { Container, Nav, Navbar as NavBar } from 'react-bootstrap'
import style from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = (props) => {

  return (
    <NavBar bg="dark" variant="dark">
    <Container>
    <NavBar.Brand href="#home">Meme Generator</NavBar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">New</Nav.Link>
      <Nav.Link href="#features">Edit</Nav.Link>
      <Nav.Link href="#pricing">Thumbnail</Nav.Link>
      <Nav.Link href="#pricing">Thumbnail PDF</Nav.Link>
    </Nav>
    </Container>
  </NavBar>
  )
}


export default Navbar
