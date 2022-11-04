import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { AiOutlineEye } from 'react-icons/ai';
import "../assets/css/Produk.css"

function Baru() {
  return (
    <>
        <Container className='d-flex my-5'>
            <div className='text-center me-4'>
                <div>
                    <div className='nol'>1</div>
                    <div className='suka'>Suka</div>
                </div>
                <div>
                    <div className='nol2'>0</div>
                    <div className='jawaban'>Jawaban</div>
                </div>
            </div>
            <div>
                <div className='bagaimana'>Bagaimana cara menjalankan transisi di Vue?</div>
                <p className='setelah'>Saya memmpunyai masalah pada saat menggunakan transisi pada vue js</p>
            </div>
        </Container>

        <Container className='d-flex mt-4'>
            <div className='d-flex flex-fill gap-2 '>
                <AiOutlineEye style={{fontSize: "20px", marginTop: "6px"}}/>
                <h4>8</h4>
            </div>
            <div>
                <span> Aktivitas terakhir 6 jam yang lalu</span>
                <div>Zaenal Ahmad</div>
            </div>
        </Container>
    </>
  )
}

export default Baru