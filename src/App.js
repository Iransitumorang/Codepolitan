import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Produk from './pages/Produk';
import Baru from './components/Baru';
import Login from './components/Login';
import Daftar from './components/Daftar';
import Faq from './pages/Faq';
import Events from './pages/Events';
import Partnership from './pages/Partnership';
import Academy from './pages/Academy';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/produk" element={<Produk />}></Route>
          <Route path="/baru" element={<Baru />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/partnership" element={<Partnership />}></Route>
          <Route path="/academy" element={<Academy />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/daftar" element={<Daftar />}></Route>
        </Routes>
      </Router>
  )
}

export default App