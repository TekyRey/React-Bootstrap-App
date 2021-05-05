import React from 'react';
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb,Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
         <Row>
           <Col md>
           <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type='email' placeholder='example@gmail.com'/>
            <Form.Text className="text-muted">
              We'll never share your email adress trust us!
            </Form.Text>
          </Form.Group>
           </Col>
         
            <Col md>
            <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='********'/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
            </Col>
          </Row>
          <Button variant='success' type ='submit'>Submit</Button>

        </Form>
        <Card className='mb-3' style={{color:"#000"}}>

          <Card.Img src='https://picsum.photos/200/50'></Card.Img>
          <Card.Body>
          <Card.Title>Nature</Card.Title>
          <Card.Text>The world islike a fairy tale</Card.Text>
          </Card.Body>
          <Button variant='primary'>Read More</Button>
        </Card>
        {/* <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item active>Test2</Breadcrumb.Item>
        </Breadcrumb> */}
        <Alert variant ="success">Register to get daily updates!!</Alert>
        </Container>
      </header>
    </div>
  );
}

export default App;
