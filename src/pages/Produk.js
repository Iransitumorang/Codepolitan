import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import "../assets/css/Produk.css"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Baru from '../components/Baru'
import Aktif from '../components/Aktif'
import BelumDijawab from '../components/BelumDijawab'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Produk() {
  return (
    <div>
      <Header />
      <Container className="d-flex mb-5 mt-5">
        <div className="leftbar d-flex flex-column">
          <Link to="#">Forum</Link>
          <Link to="#">Tags</Link>
          <Link to="#">Leaderboard</Link>
          <Link to="#">Blogs</Link>
        </div>
        <main className="mx-5">
          <div className="d-flex">
            <h3 className="d-flex flex-fill">Forum</h3>
            <Link to="">
              <Button variant="success" style={{ width: "12vw" }}>
                Buat Pertanyaan
              </Button>
            </Link>
          </div>
          <h5 className="my-3">
            Tempat berkomunikasi para programmer dengan cara mengajukan atau
            menjawab sebuah pertanyaan
          </h5>
          <div className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Ketik untuk mencari pertanyaan"
            />
            <Link to="">
              <Button variant="success" style={{ width: "10vw" }}>
                Telusuri
              </Button>
            </Link>
          </div>
          
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 mt-5"
            fill
          >
            <Tab eventKey="baru" title="Baru" className='tabsTitle'>
              <Baru />
              <Baru />
              <Baru />
              <Baru />
              <Baru />
            </Tab>
            <Tab eventKey="aktif" title="Aktif" className='tabsTitle'>
              <Aktif />
              <Aktif />
              <Aktif />
              <Aktif />
              <Aktif />
            </Tab>
            <Tab eventKey="belum-dijawab" title="Belum Dijawab" className='tabsTitle'>
              <BelumDijawab />
              <BelumDijawab />
              <BelumDijawab />
              <BelumDijawab />
              <BelumDijawab />
            </Tab>
          </Tabs>

        </main>
        <div className="col-3 rightbar p-5" style={{ height: "33vw" }}>
          <div>
            <b>Selamat Datang</b>
            <p>
              Ikuti{" "}
              <Link to="/www.facebook.com" target="blank">
                facebook
              </Link>
              , <Link to="#">telegram</Link> dan <Link to="#">instagram</Link>{" "}
              kami untuk update terbaru.
            </p>
            <p>
              Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan
              kamu ke grup Telegram atau FB untuk mengasih tahu para member di
              grup tersebut
            </p>
            <p>Ada yang tidak dimengerti? FAQ.</p>
          </div>
          <div>
            <b>User Teraktif</b> <br />
            <select class="custom-select my-2">
              <option value="1">Harian</option>
              <option value="2">Mingguan</option>
              <option value="3">Bulanan</option>
            </select>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Produk