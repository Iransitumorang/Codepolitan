import React from 'react'
// import Container from 'react-bootstrap/esm/Container'
import blok17 from '../assets/img/blok17.svg'
import google from '../assets/img/Google.svg'
import '../assets/css/Footer.css'
import { FaInstagram, FaLinkedin, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <footer className='py-md-5'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-row col-md-5'>
                    <div>
                        <span>BAGIAN DARI:</span> <br />
                        <img src={blok17} alt="blok" className='mt-md-2'/>
                    </div>
                        <img src={google} alt="google" className='w-50 google'/>
                </div>
                <div className='d-flex col-md-6 gap-5'>
                    <div className='d-flex flex-column me-md-5'>
                        <span>PRODUK</span>
                        <Link to='/'>Pertanyaan</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Pengguna</Link>
                        <Link to='/'>Events</Link>
                        <Link to='/'>Partnership</Link>
                    </div>
                    <div className='d-flex flex-column me-md-5'>
                        <span>PERUSAHAAN</span>
                        <Link to='/'>About</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Rules</Link>
                        <Link to='/'>Legal</Link>
                    </div>
                    <div>
                        <span>HUBUNGI KAMI</span>
                        <div className='email'>Petertanugraha@kotakode.com</div>
                        <div className='sosmed mt-md-1'>
                            <FaLinkedin className='me-md-2' />
                            <FaInstagram className='me-md-2' />
                            <FaTwitterSquare className='me-md-2' />
                            <FaFacebookSquare className='me-md-2' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 mb-5 digital'>
                <div>PT. Kota Digital Nusantara</div>
                <div>Copyright 2020 Kotakode. All rights reserved</div>
                <span>Made with in ID</span>
            </div>
        </footer>
  )
}

export default Footer