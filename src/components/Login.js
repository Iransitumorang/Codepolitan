import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import kkd from "../assets/img/kotakode2.png"

import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email harus sesuai format').required('Required'),
  password: Yup.string().min(8).required('Required')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  return (
      <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Situmorang@mail.com" onChange={handleChange} isInvalid={!!errors.email}/>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone     else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} isInvalid={!!errors.password} />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button variant="success" type="submit" className=''>
                    Masuk
                </Button>
            </div>
        </Form>
      </>
  )
}

function Login() {
  return (
    <div>
        <Header />
        <Container className="my-5 d-flex flex-column align-items-center" style={{}}>
            <img src={kkd} alt="kotakode" style={{width: "10vw"}}/>
            <div className='d-flex flex-column gap-5' >
                <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}>
                {(props)=><AuthForm {...props} />}
                </Formik>
            </div>
        </Container>
        <Footer />
    </div>
  )
}

export default Login