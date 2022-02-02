import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Details from './pages/Details';
import Nav from './components/Navbar'

const Router= () => {
  return(
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={
            <>
              <h1>404 Not found</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;