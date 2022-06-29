import React from "react"; 
import { Container, Row, Col, Form, Button, Dropdown} from 'react-bootstrap';

const form=()=>(
    <div className="form_data">
    <Container>
        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo de Cliente*</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Menú de selección</option>
                        <option value="1">Persona Individual</option>
                        <option value="2">Compañia / Sociedad</option>
                        <option value="3">Fundación / ONG </option>
                        <option value="4"> Estado </option>
                        <option value="4"> Otro </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo de Cliente*</Form.Label>
                    <Form.Control type="text" placeholder="Tipo de Cliente" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
    </div>
    )
  
  export default form;