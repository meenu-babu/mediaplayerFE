import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function Header() {
  return (
    <> <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand >
       <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>
       <i className="fa-solid fa-video fa-beat text-warning me-3"></i> 
       <span style={{color:'white',fontWeight:700}}>MEDIA PLAYER</span></Link>
       
      </Navbar.Brand>
    </Container>
  </Navbar>
    </>
    
  )
}

export default Header