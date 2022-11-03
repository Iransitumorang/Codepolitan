import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import HomeForum from '../components/HomeForum';
import "../assets/css/Home.css"
import idn from '../assets/img/idn.png'
import il1 from '../assets/img/illustrasi1.png'
import il2 from '../assets/img/illustrasi2.png'
import il3 from '../assets/img/illustrasi3.png'
import tele from '../assets/img/tele.svg'
import android from '../assets/img/android.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import css from '../assets/img/css.svg'
import codeigniter from '../assets/img/codeigniter.svg'
import firebase from '../assets/img/firebase.svg'
import git from '../assets/img/git.svg'
import html from '../assets/img/html.svg'
import java from '../assets/img/java.svg'
import jquery from '../assets/img/jquery.svg'
import js from '../assets/img/js.svg'
import kotlin from '../assets/img/kotlin.svg'
import node from '../assets/img/node.svg'
import php from '../assets/img/php.svg'
import react from '../assets/img/react.svg'
import python from '../assets/img/python.svg'
import swift from '../assets/img/swift.svg'
import sql from '../assets/img/sql.svg'
import yahoo from '../assets/img/yahoo.png'
import cnn from '../assets/img/CNN.png'
import lip6 from '../assets/img/liputan6.png'
import merdeka from '../assets/img/merdeka.jpeg'
import daylisocial from '../assets/img/dailysocial.png'
import Container from 'react-bootstrap/esm/Container';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import greendot from '../assets/img/greenDot.svg'

function Home() {
    return (
      <>
        <Header />
        <Container className="mb-5 mt-5">
          <div className="d-flex">
            <div>
              <div className="jadilah">
                {" "}
                Jadilah Bagian dari <br /> Komunitas Tech Terbesar <br /> di
                Indonesia{" "}
              </div>{" "}
              <div className="my-md-4 ikutan">
                {" "}
                Ikutan diskusi forum tanya jawab, tulis blog dan <br />{" "}
                Membangun portofolio semua di Kotakode{" "}
              </div>{" "}
              <div className="btn-email mb-md-3">
                <input type="email" placeholder="Masukkan Email Kamu" />
                <Button className="btn-daftar ms-md-3"> Daftar </Button>{" "}
              </div>{" "}
              <div className="d-flex my-md-5">
                <div className="d-flex flex-column user-gabung">
                  <h1> 28555 </h1> <small> User Bergabung </small>{" "}
                </div>{" "}
                <div className="d-flex flex-column blog-ditulis mx-md-4">
                  <h1> 1024 </h1> <small> Blog Ditulis </small>{" "}
                </div>{" "}
                <div className="d-flex flex-column pertanyaan">
                  <h1> 18904 </h1>{" "}
                  <small>
                    {" "}
                    Total Pertanyaan <br /> & Jawaban{" "}
                  </small>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-md-5 ms-md-4">
              <img src={idn} alt="Indonesia" />
            </div>{" "}
          </div>
          <div className="d-flex mt-5 mb-5 description">
            <div>
              <div className="d-flex jawaban-group p-md-3 mb-md-5">
                <img src={il1} alt="" style={{ width: "7vw", height: "5vw" }} />{" "}
                <div className="px-md-3">
                  <div className="jawaban-title mb-md-3">
                    {" "}
                    Jawaban cepat, tepat & gratis{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    Dapatkan jawaban dalam hitungan menit dari ribuan programmer
                    lainnya.{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="d-flex gamifikasi p-md-3">
                <img src={il2} alt="" style={{ width: "7vw", height: "5vw" }} />{" "}
                <div className="px-md-3">
                  <div className="jawaban-title mb-md-3">
                    {" "}
                    Konsep <br /> Gamifikasi{" "}
                  </div>{" "}
                  <p>
                    {" "}
                    Dapatkan badge menarik yang akan meningkatkan personal
                    branding kamu sebagai seorang programmer.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="portofolio mx-md-5 p-md-5 text-center">
              <img src={il3} alt="" style={{ width: "13vw" }} />{" "}
              <div>
                <div className="jawaban-title my-md-4">
                  {" "}
                  Bangun Online Portofolio{" "}
                </div>{" "}
                <p>
                  {" "}
                  Portofolio ibaratkan sebuah aset yang berharga bagi setiap
                  orang.Semakin kamu aktif di dalam forum, semakin membuktikan
                  bahwa kamu adalah programmer yang berkualitas.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="alasan">
              <div className="mengapa mb-md-4">
                {" "}
                Mengapa perlu menggunakan Kotakode ?{" "}
              </div>{" "}
              <div className="ibarat">
                {" "}
                Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
                memberikan fasilitas guna mensejahterakan kehidupan penduduknya.{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="d-flex flex-row col-md-12 solusi">
            <div className="platform col-md-6">
              <div className="satu-platform">
                {" "}
                Satu Platform, <br /> Banyak Solusi{" "}
              </div>{" "}
              <div className="memfasilitasi mt-md-5">
                {" "}
                Kotakode memfasilitasi dengan memberikan <br /> berbagai fitur
                yang menarik dan terbaik untuk <br /> mengembangkan ekosistem IT
                anak bangsa.{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6 my-md-5">
              <HomeForum />
            </div>{" "}
          </div>
          <div className="text-center my-5 tele-grup">
            <Link to="https://web.telegram.org/k/">
              <img src={tele} alt="telegram" style={{ width: "7vw" }} />{" "}
            </Link>{" "}
            <div className='my-md-4 gabung'> Gabung Komunitas Telegram Kotakode </div>{" "}
            <div className='kolaborasi mb-md-3'>
              {" "}
              Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
              bersama mencapai tujuan yang besar{" "}
            </div>{" "}
            <Button className='btn-tele'> Ikutan Telegram! </Button>{" "}
          </div>{" "}
          <div className="text-center pemrograman">
            <div className="dapatkan mb-3">
              {" "}
              Dapatkan Bantuan dari <br /> Ribuan Ahli dan Professional <br />{" "}
              Programmer di Seluruh <br /> Indonesia{" "}
            </div>{" "}
            <div className="berbagai">
              {" "}
              Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan
              Contoh Pengembangan Proyek{" "}
            </div>{" "}
            <div>
              <div className="d-flex justify-content-center gap-3 mt-5 mb-3">
                <div className="d-flex flex-column">
                  <img src={android} alt="Android" className="android" />
                  <span className="text-center"> Android </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={bootstrap} alt="Bootstrap" className="bs" />
                  <span className="text-center"> Bootstrap </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={codeigniter} alt="Code Igniter" className="ci" />
                  <span className="text-center"> Code Igniter </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={css} alt="css" className="css" />
                  <span className="text-center"> CSS </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={firebase} alt="Firebase" className="fb" />
                  <span className="text-center"> Firebase </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={git} alt="Git" className="git" />
                  <span className="text-center"> Git </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={html} alt="HTML" className="html" />
                  <span className="text-center"> HTML </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={java} alt="Java" className="java" />
                  <span className="text-center"> Java </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={js} alt="Javascript" className="js" />
                  <span className="text-center"> Javascript </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={jquery} alt="Jquery" className="jq" />
                  <span className="text-center"> Jquery </span>{" "}
                </div>{" "}
              </div>
              <div className="d-flex justify-content-center gap-3 mb-3">
                <div className="d-flex flex-column">
                  <img src={kotlin} alt="Kotlin" className="kotlin" />
                  <span className="text-center"> Kotlin </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={node} alt="Node JS" className="node" />
                  <span className="text-center"> Node JS </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={python} alt="Python" className="py" />
                  <span className="text-center"> Python </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={php} alt="PHP" className="php" />
                  <span className="text-center"> PHP </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={react} alt="React JS" className="react" />
                  <span className="text-center"> React JS </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={sql} alt="SQL" className="sql" />
                  <span className="text-center"> SQL </span>{" "}
                </div>{" "}
                <div className="d-flex flex-column">
                  <img src={swift} alt="Swift" className="swift" />
                  <span className="text-center"> Swift </span>{" "}
                </div>{" "}
              </div>{" "}
              <Button className="btn-ajukan"> Ajukan Pertanyaan </Button>{" "}
            </div>{" "}
          </div>
          <div>
            <div className="text-center mt-5 mb-md-5 diliput">
              {" "}
              Diliput Oleh{" "}
            </div>{" "}
            <div className="d-flex justify-content-center gap-5">
              <Link to="https://dailysocial.id/post/kotakode-diluncurkan-sebagai-kanal-komunitas-dan-tanya-jawab-seputar-pemrograman">
                <img
                  src={daylisocial}
                  alt="daylisocial"
                  style={{ width: "15vw" }}
                />{" "}
              </Link>{" "}
              <Link to="https://www.liputan6.com/tekno/read/4453718/ambisi-kotakode-untuk-mengambil-ceruk-pasar-forum-pemrograman">
                <img src={lip6} alt="lip6" style={{ width: "15vw" }} />{" "}
              </Link>{" "}
              <Link to="https://id.berita.yahoo.com/ambisi-kotakode-untuk-mengambil-ceruk-233000971.html">
                <img src={yahoo} alt="yahoo" style={{ width: "15vw" }} />{" "}
              </Link>{" "}
              <Link to="https://www.cnnindonesia.com/teknologi/20210406154400-185-626667/adithya-bocah-16-tahun-majalengka-mentor-3000-programmer">
                <img
                  src={cnn}
                  alt="cnn"
                  style={{ width: "8vw", height: "5vw" }}
                />{" "}
              </Link>{" "}
              <Link to="https://www.merdeka.com/teknologi/pelajar-smk-ini-jadi-mentor-bantu-komunitas-pecahkan-rumitnya-koding.html">
                <img
                  src={merdeka}
                  alt="merdeka"
                  style={{ width: "15vw", height: "5vw" }}
                />{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </Container>

        <Footer />
      </>
    );
}

export default Home