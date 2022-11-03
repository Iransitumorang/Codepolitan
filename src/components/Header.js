import Button from 'react-bootstrap/Button';
import React from 'react';
import kotakode from "../assets/img/kotakode.png";
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
// import NavLink from 'react-bootstrap/esm/NavLink';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
       <header className='sticky-top'>
       <Navbar bg="light" expand="lg" className='py-md-3 d-flex justify-content-center'>
            <Link to="/">
                <Navbar.Brand><img src={kotakode} alt='Kotakode' style={{width: "10vw", marginRight: "4vw"}}/> </Navbar.Brand>
            </Link>
            <div className='d-flex gap-4 me-5 menu-link'>
                <Link to='/about'>Tentang</Link>
                <Link to='/produk'>Produk</Link>
                <Link to='/faq'>FAQ</Link>  
                <Link to='/events'>Events</Link>
                <Link to='/partnership'>Partnership</Link>
                <Link to='/academy'>Academy</Link>
            </div>
            <div className='ms-5'>
                <Link to='/login'>
                    <Button variant="outline-success" className='me-4'>Masuk</Button>
                </Link>
                <Link to='/daftar'>
                    <Button variant="success">Daftar</Button>
                </Link>
            </div>
        </Navbar>
       </header>
  );
}

export default Header;