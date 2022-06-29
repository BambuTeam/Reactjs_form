import React from "react"; 
import { Container, Row} from 'react-bootstrap';
import TV from '../assets/media/marca.svg';

const tv=()=>(
  
    <Container fluid>
        <div className="tv">
        <Row>
        <img src={TV} alt='tv_demo'/>
        </Row>
        </div>
        
    </Container>
    
  
  
  )
  
  export default tv;