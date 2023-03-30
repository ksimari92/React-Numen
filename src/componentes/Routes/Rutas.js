import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import CambiarImagen from '../CambiarImagen/CambiarImagen';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Theme from '../Theme/Theme';

const Rutas = () => {
  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<CambiarImagen/>}/>
            <Route path='/theme' element={<Theme/>}/>
            <Route path='/avatar' element={<Avatar/>}/>
          </Routes>
          <Footer/>
      </Router>
  )
}

export default Rutas