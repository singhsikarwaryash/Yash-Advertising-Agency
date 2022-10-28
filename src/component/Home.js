import Typical from "react-typical"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col} from "react-bootstrap"
import pic from "./res/trianglebg.png";
import logo from "../logo.svg"
export default function Home() {
    let height = window.innerHeight-60
    let divst = {display : "flex", flexDirection : "column", justifyContent : "center", paddingTop : "20px",width: "100%", height: `${height}px`,overflow : "hidden"};

    return(
        <Container fluid = "true" className="ms-0 me-0 ps-0 pe-0 pt-0 pb-0" style={divst} id = "Home">
            
            <Row>
            <Col xs = {12} sm = {6} md = {6} lg = {6} className="profile-details-role" style = {{display : "flex",justifyContent : "center",alignItems : "center",paddingTop : "30px", paddingBottom : "10px"}}>
                <div>
                <h1 className="welcome-msg"><b>Yash Advertising Agency</b><br /> Welcomes You</h1>
                <div style = {{marginTop : "25px"}}>
                <h2>10+ Years</h2>
                <h2>100+ Happy Customers</h2>
                <h2>5000+ Projects</h2>
                </div>
                <span className="primary-text" style = {{color : "#32CD32"}}>
                    {" "}
                    <h1 className="mt-4">
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps= {[
                            "Glow Signs",2000,
                            "Hoardings",2000,
                            "Visiting Cards",2000,
                            "Many More",2000,
                        ]}
                        />
                    </h1>
                </span>
                </div>

            </Col>
            <Col xs = {12} sm = {6} md = {6} lg = {6} style = {{backgroundImage : `url(${pic})`,backgroundSize: "cover", backgroundRepeat : "no-repeat", height : `${height}px`,display : "flex",justifyContent : "center",alignItems : "center"}}>
            <img src={logo} alt="IMG Here"/>
            </Col>
            </Row>
        </Container>
    );
}