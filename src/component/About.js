import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col} from "react-bootstrap"
import logo from "./res/logo512.png";
import star from "./res/star.png";
import years from "./res/years.png";
import ad from "./res/advertisement.png";
export default function  About() {
    return(
        <Container fluid = "true" className="pt-2 pb-2 ms-0 me-0 ps-0 pe-0" style={{display : "inline-block", width: "90vw", minHeight : "40vw",height : "100%", borderRadius : "20px",  fontFamily: "calibri, serif"}} id = "About">
            <Row style = {{padding : "10px",justifyContent:"center",minHeight : "40vw",height: "100%"}} className = "align-items-center">
                <Col xs = {9} sm = {4} md = {5} lg = {5} style = {{paddingLeft : "10px", paddingRight : "10px",borderRadius: "10px", height: "100%"}}>
                    <div style = {{ borderRadius: "10px", backgroundColor : "white", padding : "10px", width : "100%"}}>
                        <img className="mw-100" src = {logo}  styles = {{}} alt = "IMG here" />
                        
                    </div>
                </Col>
                <Col xs = {12} sm = {8} md = {7} lg = {7} style = {{paddingLeft : "10px", paddingRight : "10px",overflow: "auto",borderRadius: "10px"}}>
                    <h1>About Us</h1>
                    <hr className=' mt-2 mb-4' size = "7" width = "50%" color = "#32CD32" style = {{margin : "auto", opacity : "0.6", border : "none", borderRadius : "100px"}} />
                    <div style = {{borderRadius: "10px", backgroundColor : "white", padding : "10px"}}>
                        <p style = {{fontSize : "1.25rem"}}>
                        Yash Advertising Agency is an Advertising Firm founded by Shree Sanjeev Kumar Singh to cater the needs of companies in field of Advertisement. 
                        With the vision of providing Quality Advertising Solutions to the Companies, the Yash Advertising Agency was founded in Year 2010. 
                        Since 12 years we are giving continuous innovation in the field of Advertisement to provide the Clients with Quality, Economical and Creative Advertisement Solutions, 
                        In 12 years we expanded our service reach constantly and as a result today we are proudly serving "Happy Clients" from all over Gorakhpur, Basti, Ambedkar Nagar, Siddharth Nagar, Kushinagar and other neighbouring Districts.
                        Today we can proudly say that we are a decade long firm with 100+ Happy Customers and 5000+ Projects
                        </p>
                    </div>
                    <Row className="ms-0 me-0">
                        <Col xs = {4} sm = {4} md = {4} lg = {4} >
                            <div>
                                <img src = {ad} style = {{boxShadow : "6px 6px #606060"}} />
                                <h5 className="mt-2">5000+ Projects</h5>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4}>
                            <div>
                                <img src = {star} style = {{boxShadow : "6px 6px #606060"}}/>
                                <h5 className="mt-2">100+ Happy Customers</h5>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4}>
                            <div >
                                <img src = {years} style = {{boxShadow : "6px 6px #606060" ,width : "64px", height : "64px"}} />
                                <h5 className="mt-2">10+ Years</h5>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}