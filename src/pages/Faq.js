import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import "../assets/css/Faq.css"
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <>
        <Header />
        <Container className="mb-5">
            <main>
                <div className='faq-teks text-center'>
                    <div className='pertanyaan-group'>
                        <h1>Pertanyaan & Jawaban terkait Kotakode</h1>
                        <p>Punya pertanyaan seputar produk dan layanan Kotakode? Temukan berbagai informasi yang tersedia di bawah ini.</p>
                    </div>
                </div> 
                <div className='faq-center text-center p-2'>FAQ</div>
                <div className='col-6 mt-5 accordion-group'>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Apa itu Kotakode?</Accordion.Header>
                            <Accordion.Body>
                                Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT terkini untuk menuntun terciptanya ekosistem yang inklusif bagi programmer tahu lebih lanjut mengenai pemrograman.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Bagaimana cara melakukan pendaftaran akun di Kotakode?</Accordion.Header>
                            <Accordion.Body>
                                Kamu dapat melakukan pendaftaran akun di Kotakode melalui 3 cara
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Bagaimana cara membuat pertanyaan di Kotakode?</Accordion.Header>
                            <Accordion.Body>
                            Kamu bisa mulai mencari pertanyaan yang serupa atau mirip dengan menggunakan kotak pencarian. Jika kamu tidak menemukan jawaban yang kamu cari atau ingin memutuskan untuk menambahkan pertanyaan kamu sendiri, cukup klik tombol “Tanya” pada halaman Pertanyaan.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Bagaimana cara agar pertanyaan cepat terjawab?</Accordion.Header>
                            <Accordion.Body>
                                Semakin jelas pertanyaan yang kamu ajukan, semakin mudah bagi user lainnya untuk memahami pertanyaan dan membantu memberikan jawaban secara cepat. Kami memberikan tips untuk kamu bagaimana caranya agar pertanyaan yang kamu ajilan dapat dengan cepat terjawab.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Bagaimana cara menjawab pertanyaan di Kotakode?</Accordion.Header>
                            <Accordion.Body>
                                Kamu bisa mulai dengan mencari pertanyaan yang akan dijawab melalui kotak pencarian. Setelah kamu menemukan pertanyaan yang akan dijawab, masuk ke halaman pertanyaan dan scroll ke bawah untuk mengakses kolom jawaban. Setelah kamu selesai menuliskan jawaban, klik tombol Kirim untuk mengirim jawaban.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Mengapa saya tidak bisa menghapus pertanyaan/jawaban di Kotakode?</Accordion.Header>
                            <Accordion.Body>
                                Karena situs Kotakode masih baru dan masih banyak yang perlu dikembangkan, kami belum memiliki fitur untuk mengizinkan user menghapus pertanyaan/jawaban yang telah mereka berikan. Sebagai alternatif, kamu dapat mengajukan permintaan tersebut menggunakan tombol “Minta admin untuk menghapus” dan tim kami akan segera mengecek permintaan kamu.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Mengapa saya tidak bisa menghapus pertanyaan/jawaban di Kotakode?</Accordion.Header>
                            <Accordion.Body>
                                Karena situs Kotakode masih baru dan masih banyak yang perlu dikembangkan, kami belum memiliki fitur untuk mengizinkan user menghapus pertanyaan/jawaban yang telah mereka berikan. Sebagai alternatif, kamu dapat mengajukan permintaan tersebut menggunakan tombol “Minta admin untuk menghapus” dan tim kami akan segera mengecek permintaan kamu.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Apa yang dimaksud dengan Poin Kredibilitas?</Accordion.Header>
                            <Accordion.Body>
                                Selain dapat digunakan sebagai tanda keaktifan seorang user, poin kredibilitas juga dapat digunakan untuk membantu para rekruiter dalam menyeleksi kandidat yang mendaftar di perusahaannya karena semakin tinggi poin yang didapatkan, maka seorang user akan dikenal sebagai seorang yang memiliki kemampuan programming yang baik.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </main>
        </Container>
        <Footer />
    </>
  )
}

export default Faq