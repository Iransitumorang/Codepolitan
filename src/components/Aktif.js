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
                    <div className='nol'>2</div>
                    <div className='suka'>Suka</div>
                </div>
                <div>
                    <div className='nol2'>0</div>
                    <div className='jawaban'>Jawaban</div>
                </div>
            </div>
            <div>
                <div className='bagaimana'>Bagaimana cara menjalankan C++ di VSCode?</div>
                <p className='setelah'>Saya sudah melakukan install MinGW dan Vscode, sudah extensions C/C++ dan Code Runner. Tapi masih belu bisa menjalankan codenya</p>
            </div>
        </Container>

        <Container className='d-flex mt-4'>
            <div className='d-flex flex-fill gap-2 align-items-center'>
                <AiOutlineEye style={{fontSize: "20px"}}/>
                <h4>5</h4>
            </div>
            <div>
                <span> Aktivitas terakhir 5 jam yang lalu</span>
                <div>Nasrea Code</div>
            </div>
        </Container>
    </>
  )
}

export default Baru