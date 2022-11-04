import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/Events.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Webinar from '../components/Webinar';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="mx-auto">
        <Modal.Title id="contained-modal-title-vcenter">
          Upcoming Webinar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Webinar />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="success">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Events() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Header />
       <Container className="mb-5">
            <div className='d=flex flex-column main-kkd text-center'>
                <h1>KOTAKODE <span className='live p-2 ms-2'>LIVE</span></h1>
                <div>Dapatkan wawasan seputar pemrograman <br /> melalui webinar Kotakode</div>
                <Button variant="success" className="my-4" onClick={() => setModalShow(true)}>Lihat Daftar Webinar</Button> <br />
                <Link to='' className='nominasi'>Nominasikan Pembicara</Link>
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className='text-center mt-5'>
                <h1>Acara Yang Akan Datang</h1>
                <p className='my-4' style={{fontSize: "24px"}}>Ayo segera daftar di acara terbaru dari Kotakode dan dapatkan wawasan <br /> menarik seputar pemrograman!</p>
                <h3 style={{color: "green"}}>Tunggu Acara Berikutnya...</h3>
            </div>
       </Container>
       <Footer />
    </>
  )
}

export default Events