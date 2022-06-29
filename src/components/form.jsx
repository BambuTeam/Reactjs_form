import React from "react"; 
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

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
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Menú de selección</option>
                        <option value="1">Alta Verapaz</option>
                        <option value="2">Baja Verapaz</option>
                        <option value="3">Chimaltenango </option>
                        <option value="4">Chiquimula</option>
                        <option value="5"> El Progreso </option>
                        <option value="6"> Escuintla </option>
                        <option value="7"> Guatemala </option>


                    </Form.Select>
                </Form.Group>

            </Form>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo de Compañia*</Form.Label>
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
                    <Form.Label>Nombre de Contacto*</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de Contacto" />
                </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control type="text" placeholder="Municipio" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zona</Form.Label>
                    <Form.Control type="Departamento" placeholder="Zona" />
                </Form.Group>

            </Form>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono*</Form.Label>
                    <Form.Control type="tel" placeholder="Teléfono" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Celular*</Form.Label>
                    <Form.Control type="tel" placeholder="Nombre de Contacto" />
                </Form.Group>
            </Form>
            </Col>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tipo de Plan*</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecciona tu tipo de plan</option>
                        <option value="1">1 Pauta</option>
                        <option value="2">10 Pautas</option>
                        <option value="3">25 Pautas </option>
                        <option value="4"> 35 Pautas </option>
                        <option value="4"> 44 Pautas </option>
                        <option value="4">Otro </option>

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Duración</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecciona la Duración para tu pauta </option>
                        <option value="1">1 Mes</option>
                        <option value="2">3 Meses</option>
                        <option value="3">6 Meses </option>
                        <option value="4"> 9 Meses </option>
                        <option value="4"> 12 Meses </option>
                        <option value="4">Otro </option>
                    </Form.Select>
                </Form.Group>

            </Form>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo*</Form.Label>
                    <Form.Control type="mail" placeholder="Correo Electronico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Razón Social*</Form.Label>
                    <Form.Control type="tel" placeholder="Razón Social" />
                </Form.Group>
            </Form>
            </Col>
            <Col>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha Inicio*</Form.Label>
                <Form.Control type="date" placeholder="Correo Electronico" />
            </Form.Group>
            <br />
            <h6 className="location_text">Úbicaciones</h6>
            <Form>
                <Form.Check type="switch" id="custom-switch" label="Ciudad Cáyala" />
            </Form>
            <Form>
                <Form.Check type="switch" id="custom-switch" label="Cruz Verde" />
            </Form>
            <Form>
                <Form.Check type="switch" id="custom-switch" label="Farmacias Meykos" />
            </Form>
            </Col>
        </Row>
        
       
    </Container>
    <Container>
    <Button  className="button_send">
        Enviar Datos
      </Button>
    </Container>

    </div>

    

    

    )
  
  export default form;