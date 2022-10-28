import { Navbar, Nav, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function navbar() {
    return(
    <Navbar sticky="top" style = {{backgroundColor : "#32CD32", marginRight : "0px"}} variant = "dark" expand="lg">
      <Container>
        <Navbar.Brand href="#Home"><h3>Yash Advertising Agency</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto">
            <Nav.Link className = "text-white"><AnchorLink href = "#Home"><Button style = {{backgroundColor : "#32CD32", border:"none", fontSize : "20px"}}>Home</Button></AnchorLink></Nav.Link>
            <Nav.Link className = "text-white"><AnchorLink href = "#Projects"><Button style = {{backgroundColor : "#32CD32", border:"none", fontSize : "20px"}}>Projects</Button></AnchorLink></Nav.Link>
            <Nav.Link className = "text-white"><AnchorLink href = "#About"><Button style = {{backgroundColor : "#32CD32", border:"none", fontSize : "20px"}}>About US</Button></AnchorLink></Nav.Link>
            <Nav.Link className = "text-white"><AnchorLink href = "#Contact"><Button style = {{backgroundColor : "#32CD32", border:"none", fontSize : "20px"}}>Contact Us</Button></AnchorLink></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    )
}