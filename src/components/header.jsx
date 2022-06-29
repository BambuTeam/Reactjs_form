import React from "react"; 
import { Container, Row} from 'react-bootstrap';
import logo from '../assets/media/logobcs.svg'

const header=()=>(
  
    <Container>
        <div className="logo">
        <Row>
        <img src={logo} alt='logo_bcs'/>
        </Row>
        </div>
        <div className="title_form">
        <Row>
        <h2>Completa tus datos a continuación</h2>
        </Row>
        </div>
    </Container>
    
  
  
  )
  
  export default header;