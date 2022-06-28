import React from "react"; 
import { Container, Row} from 'react-bootstrap';
import City from '../assets/media/CityBcs.svg'

const banner=()=>(
  
    <Container fluid>
        <div className="City">
        <Row>
        <img src={City} alt='logo_bcs'/>
        </Row>
        </div>
        
    </Container>
    
  
  
  )
  
  export default banner;