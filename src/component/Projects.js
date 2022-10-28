import "bootstrap/dist/css/bootstrap.min.css"
import {Carousel, Container} from "react-bootstrap"
import logo from "./res/pnbproject.jpg"
export default function Projects() {
    return(
      <Container  className="pt-3 pb-2 mt-4 mb-3" fluid = "true" style = {{borderRadius : "20px",position : "relative", "left" : "10vw", width : "80vw"}} id = "Projects">
          <h1 className = "mb-2" style={{fontFamily: "calibri, sans-serif"}}>What We Do</h1>
          <hr className=' mt-2 mb-4' size = "7" width = "40%" color = "#32CD32" style = {{margin : "auto", opacity : "0.6", border : "none", borderRadius : "100px"}} />
          <Carousel  variant="white">
      
      <Carousel.Item >
        <img
          style={{'height':"35vw", "width" : "70%", "position" : "relative" ,"left" : "15%"}}
          className="d-block "
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption variant = "dark">
          <h3>First slide label</h3>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'height':"35vw", "width" : "70%", "position" : "relative" ,"left" : "15%"}}
          className="d-block "
          src={logo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'height':"35vw", "width" : "70%", "position" : "relative" ,"left" : "15%"}}
          className="d-block "
          src={logo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
    
    )
}