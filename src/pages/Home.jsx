import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer } from 'react-toastify'

function Home() {
  // creating common state for interaction between add component and view component (siblings)
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>

    {/* first section */}
    <div className='container d-flex align-items-center justify-content-between mt-5'>
    <Add setUploadVideoStatus={setUploadVideoStatus}/>
    <Link style={{textDecoration:'none'}} to={'/watch'}>
    <span className='fs-5 fw-bold textStyle'>WATCH HISTORY <i className="fa-solid fa-clock ms-4"></i></span>
    </Link>
    </div>
    {/* second section */}
    <div className='container-fluid mt-5 w-100 mb-5'>
      <div className='row'>
        <div className='col-md-9 textStyle'>
         <View uploadVideoStatus={uploadVideoStatus}/>

        </div>
        <div className='col-md-3 textStyle'>
        <Category/>
        </div>

      </div>

    </div>
    <ToastContainer position="top-center"
      autoClose={1000} 
      theme="dark"
      draggable
pauseOnHover/>
    </>
  )
}

export default Home