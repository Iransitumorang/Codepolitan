import React from 'react'
import Button from 'react-bootstrap/Button';
import lg1 from '../assets/img/landingGraphic4.svg'
import lg2 from '../assets/img/landingGraphic5.svg'
import lg3 from '../assets/img/landingGraphic6.svg'
import '../assets/css/HomeForum.css'

function Data(props) {
    return <span className='title'> {props.title}</span>
  }

function Value(props) {
    return <div className='desc'> {props.desc}</div>
  }

function HomeForum() {
  return (
    <div className='homeforum'>
        <div className='d-flex'>
            <img src={lg1} alt='online-grup' />
            <div className='online-grup'>
                <Data title="Online Forum"/> <br />
                <Value desc="Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas"/> <br />
                <Button className='orange'>Tanya Sekarang</Button>
            </div>
        </div>
        <div className='d-flex my-md-5'>
            <img src={lg2} alt='micro-grup' style={{marginRight: "-3vw"}}/>
            <div className='micro-grup'>
                <Data title="Microblogging"/> <br />
                <Value desc="Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT"/> <br />
                <Button className='orange'>Tulis Sekarang</Button>
            </div>
        </div>
        <div className='d-flex'>
            <img src={lg3} alt='job-grup' />
            <div className='job-grup'>
                <Data title="Job Hiring"/> <br />
                <Value desc="Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan"/> <br />
                <Button variant="secondary">Cari Kerja</Button>
            </div>
        </div>
    </div>
  )
}

export default HomeForum