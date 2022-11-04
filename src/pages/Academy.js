import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/Academy.css"
import acd from "../assets/img/partnership.svg"
import { Link } from 'react-router-dom';

function Academy() {
  return (
    <>
    <Header />
    <Container className="mb-5 mt-5">
        <div className='d-flex academy'>
            <div className='me-5'>
                <h1>Belajar kursus IT <br /> lebih murah, <br /> hanya di Kotakode <br /> Academy</h1>
                <div className='solusimu my-3'>Kotakode Academy, solusimu untuk bisa mahir di bidang <br /> IT. Ratusan hingga ribuan kursus pilihan yang menarik <br /> dengan berbagai tingkatan berbeda. Yuk, tingkat skills mu <br /> bersama Kotakode Academy.</div>
                <Link to="/login">
                <Button variant="success">Mulai Sekarang!</Button>
                </Link>
            </div>
            <img src={acd} alt='acd' />
        </div>
    </Container>
    <Footer />
    </>
  )
}

export default Academy