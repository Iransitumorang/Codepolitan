import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import "../assets/css/About.css"
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import englo from '../assets/img/englo.svg'
import carel from '../assets/img/carel.png'
import peter from '../assets/img/peter.svg'
import maskot from '../assets/img/maskot.svg'

function Data(props) {
  return <span className='nama'> {props.name}</span>
}

function Position(props) {
  return <span className='jabatan'>{props.jabatan}</span>
}

function Major(props) {
  return <span className='jurusan'>{props.jurusan}</span>
}

function Exp(props) {
  return <span className='spesialisai mb-2'>{props.spesialisai}</span>
}

function About() {
  return (
    <>
      <Header />
      <Container className="mb-5">
        <main>
          <div className='dukungan'>
            <div className='ekosistem text-center'>
              Dukung kami dalam menciptakan ekosistem yang <br/> inklusif bagi programmer di seluruh Indonesia
            </div>
          </div>

          <div className='kotakode-main text-center'>
            <h3>Tentang Kotakode</h3>
            <span>Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT terkini untuk mendukung memberikan pertumbuhan perekonomian di Indonesia.</span>
          </div>

          <div className='mt-5 ms-5'>
            <h1 className='text-center'>Tim Kotakode</h1>
            <div className='d-flex mb-5 mt-5 gap-5'>
              <img src={peter} alt='Peter' style={{width: "19%", borderRadius: "15vw"}}/>
                <div className='d-flex flex-column'>
                  <Data name="Peter Tanugraha"/>
                  <Position jabatan="Cofounder & CEO"/>
                  <Exp spesialisai="Computer Engineering @University of Toronto 2019"/>
                  <Major jurusan="• Deep Learning Engineer @IBM Canada (1.5 years)"/>
                  <Major jurusan="• Deep Learning Engineer / Software Engineer @Nightingtale.ai Canada (1.5 years)"/>
                  <div className='konek mt-2'>
                    <BsGithub className='me-2' />
                    <BsLinkedin />
                  </div>
                </div>
            </div>
            <div className='d-flex mb-5 gap-5'>
              <img src={englo} alt='Michael Englo' style={{width: "19%", borderRadius: "15vw"}} />
                <div className='d-flex flex-column'>
                  <Data name="Michael Englo"/>
                  <Position jabatan="Cofounder & CTO"/>
                  <Exp spesialisai="Computer Science @University of British Columbia 2020"/>
                  <Major jurusan="• Software Engineer @Google Canada (Currently)"/>
                  <Major jurusan="• Software Engineer @Google Sillcon Valley (4 month)"/>
                  <Major jurusan="• Software Engineer @Optimal Efficiency (1.6 years)"/>
                  <div className='konek mt-2'>
                    <BsGithub className='me-2' />
                    <BsLinkedin />
                  </div>
                </div>
            </div>
            <div className='d-flex mb-5 gap-5'>
              <img src={carel} alt='Anncarel Sanchiabarca' style={{width: "19%", borderRadius: "15vw"}} />
                <div className='d-flex flex-column'>
                  <Data name="Anncarel Sanchiabarca"/>
                  <Position jabatan="Cofounder & CBO"/>
                  <Exp spesialisai="Computing & Information Systems @University of London 2019"/>
                  <Major jurusan="• Software Engineer @Crowde (3 months)"/>
                  <Major jurusan="• CEO @Egglab.id"/>
                  <div className='konek mt-2'>
                    <BsGithub className='me-2'/>
                    <BsLinkedin />
                  </div>
                </div>
            </div>
          </div>

          <div className='d-flex maskot p-5 mb-5'>
            <div className='maskot-group'>
              <div className='maskot-head'>Maskot Kotakode</div>
              <div className='kucing'>Kucing Robot Koko!</div>
              <p>Banyak dari kita yang menyukai kucing, termasuk para programmer. Koko merupakan sebuah robot berbentuk kucing dengan kombinasi warna hijau dan putih. Koko adalah sebuah robot yang fanatik terhadap teknologi, khususnya di bidang IT. Ia datang dari masa depan dan diprogram untuk membantu orang-orang yang memiliki semangat yang sama dengan dirinya. Sama seperti Koko, Kotakode memiliki semangat untuk membantu para fanatik IT di Indonesia untuk mengembangkan ekosistem yang menyenangkan untuk mempelajari hal-hal yang berkaitan dengan dunia IT terkini.</p>
            </div>
            <img src={maskot} alt='maskot' />
          </div>

          <div className='text-center'>
            <h1 className='mb-3'>Punya Pertanyaan Mengenai Kotakode?</h1>
            <div className='mb-4' style={{margin: "auto 20vw", fontSize: "18px"}}>Kotakode merupakan platform yang dibuat untuk mengatasi permasalahan bagi para pegiat IT di Indonesia. Kami menyadari bahwa kami sangat membutuhkan kontribusi pengguna dalam membangun Kotakode. Agar setiap fitur, tombol, dan warna yang kami buat sesuai dengan kebutuhan pengguna. Oleh karena itu jika kamu memiliki pertanyaan, saran, atau tawaran kerjasama yang ingin ditanyakan dan diskusikan dengan kami. Silakan hubungi kami melalui:</div>

            <div>
              <h4>Kotakode:</h4>
              <p>Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,<br /> Kuningan Timur, Setiabudi, Jakarta Selatan 12950</p>
            </div>
           
           <div>
            <h4>Email:</h4>
            <div >petertanugraha@kotakode.com</div>
           </div>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default About