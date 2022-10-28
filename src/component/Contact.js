import "bootstrap/dist/css/bootstrap.min.css"
import "./contact.css"
import {Row,Col, Container} from 'react-bootstrap';
import phone from "./res/phone.png"
import email from "./res/email.png"
function Contact() {
  return (
    <Container fluid = "true" className="pt-2 pb-2 ms-0 me-0 ps-0 pe-0" style={{display : "inline-block", width: "90vw", minHeight : "40vw",height : "100%", borderRadius : "20px"}}>
      <Row style = {{padding : "10px",justifyContent:"center",minHeight : "40vw",height: "100%"}} className = "align-items-center">
        <Col xs = {{span : 12, order : "2"}} sm = {{span : 7, order : 1}} md = {8} lg = {8}>
        <form className = "mt-4 mb-4 pb-2 pt-2 ps-1 pe-2" id = "Contact">
        <h1 className='mb-2'>Contact US</h1>
        <hr className=' mt-2 mb-4' size = "7" width = "50%" color = "#32CD32" style = {{margin : "auto", opacity : "0.6", border : "none", borderRadius : "100px"}} />
        <Row>
        <Col className="ca" xs = {12} sm = {12} md = {6} lg = {6}>
        <div className="form-group mb-3">
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" style = {{borderRadius : "0",boder : "none", borderBottom : "2px solid black"}} placeholder="Enter Name" />
        </div>
        </Col>
        <Col className = "ca" xs = {12} sm = {12} md = {6} lg = {6}>
        <div className="form-group mb-3">
        <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" style = {{borderRadius : "0",boder : "none", borderBottom : "2px solid black"}} placeholder="Enter Phone  No" />
        </div>
        </Col>
        </Row>
        <div className="form-group mb-3">
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" style = {{borderRadius : "0",boder : "none", borderBottom : "2px solid black"}} placeholder="Enter Email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
        <textarea className="form-control" id="message" placeholder="Enter Your Message Here" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3" style = {{borderRadius : "7px"}}>Submit</button>
        </form> 
        </Col>

        <Col xs = {{span : 12, order : 1}} sm = {{span : 5, order : 2}} md = {4} lg = {4} style = {{paddingLeft : "5px", paddingRight : "5px",borderRadius: "10px", height: "100%"}}>
          <div>
            <div style = {{width : "100%"}}><div style={{display : "inline-block",height : "20px", width : "20px", marginRight : "8px"}}><img className='mw-100' src = {email}></img></div><p style={{display : "inline", fontSize : "18px"}}>yashadvt20@gmail.com</p></div><br />
            <div style = {{width : "100%"}}><div style={{display : "inline-block",height : "20px", width : "20px", marginRight : "8px"}}><img className='mw-100' src = {phone}></img></div><p style={{display : "inline", fontSize : "18px"}}>+91 9889297689</p></div><br />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;