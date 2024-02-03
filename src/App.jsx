import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './packages/Home/Home'

import './App.scss'
import Contact from './packages/Contact/Contact';


function App() {

  const [shouldLoadContact, setShouldLoadContact] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {

    
    // Eğer sayfanın en üstüne geldiyse, Contact sayfasına git
    if (window.scrollY === 0) {
      setShouldLoadContact(false); // Contact sayfasını yükleme durumunu sıfırla
      navigate('/');
    }

    // Eğer sayfanın altına geldiyse, Contact sayfasına git
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setShouldLoadContact(true);
      navigate('/contact');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top  '>
        <Container>
          <Navbar.Brand href="#home"><span>Rath</span></Navbar.Brand>
          <Nav className="ms-auto ">
            <NavLink to="/" className='text-decoration-none text-secondary-emphasis me-2 fw-semibold p-1 px-3 nav-links' exact activeClassName="active">Home</NavLink>
            <NavLink to="/contact" className='text-decoration-none text-secondary-emphasis ms-2 fw-semibold p-1 px-3 nav-links' exact activeClassName="active">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>





      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>

    
      





    </div>
  );
}

export default App;
