import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import kkd from "../assets/img/kotakode2.png"

function Login() {
  return (
    <div>
        <Header />
        <Container className="my-5 d-flex flex-column align-items-center" style={{}}>
            <img src={kkd} alt="kotakode" style={{width: "10vw"}}/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email / Username</Form.Label>
                    <Form.Control type="email" placeholder="Situmorang@mail.com" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Masuk
                </Button>
            </Form>
        </Container>
        <Footer />
    </div>
  )
}

export default Login