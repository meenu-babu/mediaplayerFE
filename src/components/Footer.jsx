import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
      <div className='d-flex' align-items-center justify-content-evenly>
    <div className='overview' style={{width:'400px'}}>
    <h5><i className="fa-solid fa-video fa-beat text-warning me-3"></i> 
    <span style={{color:'white',fontWeight:'700'}}>MEDIA PLAYER

      </span> </h5>
      {/* <i class="fa-solid fa-video fa-beat" style="color: #FFD43B;"></i> */}
      {/* */}
      <p style={{color:'white',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio laudantium, ullam perspiciatis numquam consectetur corrupti. Saepe aspernatur recusandae at quo eaque dolores rerum numquam officiis blanditiis, modi consectetur laboriosam?</p>

    </div>
    <div className='links d-flex flex-column ms-3' style={{color:'white'}}>
      <h4>
        LINKS
      </h4>
      <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>LANDING PAGE</Link>
      <Link to={'/home'}style={{textDecoration:'none' ,color:'white'}}>HOME</Link>
     <Link to={'/watch'}style={{textDecoration:'none' ,color:'white'}}>
     WATCH HISTORY</Link>

    </div>
    <div className='links d-flex flex-column ms-4' style={{color:'white'}}>
    <h4>
        GUIDES
      </h4>
REACT      <br/>
      REACT BOOTSTRAP
      <br/>
FONT AWESOME    </div>
<div className='contact us d-flex flex-column ms-4' style={{color:'white'}}>
  <h4>CONTACT US</h4>
  <div className='d-flex '>
    <input type="text" name="" placeholder="Enter  your Email" className='form-control'/> 
    <button className='btn btn-warning ms-4'>SUBSCRIBE</button> 
    </div>
    <div className="d-flex justify-content-evenly align-items-center mt-3">
    <i class="fa-brands fa-instagram fa-2x"></i>
    <i class="fa-brands fa-twitter fa-2x"></i>
    <i class="fa-brands fa-facebook fa-2x"></i>
    <i class="fa-brands fa-reddit fa-2x"></i>
    <i class="fa-brands fa-whatsapp fa-2x"></i>

    </div>

</div>
    </div>
    </div>
    <p className='text-center mt-5'>
   COPY RIGHT0 ©2025 MEDIA PLAYER built with REACT
    </p>
    </>
  )
}

export default Footer