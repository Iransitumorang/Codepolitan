import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Header from '../components/Header'
import Footer from '../components/Footer';
import sidegbr from '../assets/img/sidegbr.svg'
import "../assets/css/Partnership.css"
import { Link } from 'react-router-dom';

function Partnership() {
  return (
    <>
    <Header />
    <Container className="mb-5 mt-3">
        <div className='d-flex'>
            <img src={sidegbr} alt='side gambar' />
            <div className='kkd-rightbar mt-5 ms-3'>
                <h4>Kotakode Partnership</h4>
                <h1>Bersama Membangun <br /> Talenta Digital di Indonesia</h1>
                <h4 className='my-3'>Kotakode membuka peluang kolaborasi dengan berbagai institusi untuk mendukung ekosistem digital di Indonesia</h4>
                <Link to="/login">
                  <Button variant="success" className='gabung'>Gabung Sekarang!</Button>
                </Link>
            </div>
        </div>

        <div className='mt-5'>
          <div className='text-center'>
            <h2>Mengapa bermitra dengan Kotakode?</h2>
            <p className='my-3 bermitra'>Bermitra dengan kami dapat berarti apa saja, mulai dari sponsor acara sederhana hingga kolaborasi jangka <br /> panjang. Bergabung dengan Kotakode memberikan manfaat nyata bagi mitra kami.</p>
          </div>

          <div className='d-flex col-12 jangkau-grup mt-3'>
            <div className='col-4'>
              <h5>Jangkau Ribuan Programmer Di Indonesia</h5>
              <p>Kotakode adalah tempat tujuan programmer Indonesia. Dengan bekerjasama dengan Kotakode, Anda dapat menjangkau puluhan ribu programmer Indonesia untuk meningkatkan acara Anda berikutnya.</p>
            </div>
            <div className='col-4'>
              <h5>Tingkatkan Kredibilitas Brand Anda</h5>
              <p>Kotakode adalah salah satu pemimpin di bidang teknologi Indonesia. Ketika Anda menjadi partner kami, brand Anda akan secara otomatis dipercayai oleh komunitas tech di Indonesia.</p>
            </div>
          </div>
        </div>
    </Container>
    <Footer />
    </>
  )
}

export default Partnership