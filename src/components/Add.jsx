import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false)
      setvideoDetails({
        caption:'',
      thumbnailUrl:'',
      embededLink:''
      })
    };
    const handleShow = () => setShow(true);
    const [videoDetails,setvideoDetails]=useState({
      caption:'',
      thumbnailUrl:'',
      embededLink:''
    })
  const handleUpload=async()=>{
    console.log("upload video details")
    console.log(videoDetails)
    const {caption,thumbnailUrl,embededLink}=videoDetails;
  if(!caption || !thumbnailUrl || !embededLink)
  {
   toast.warning("Please fill the form completely")
  }
  else{
      const result=await uploadvideo(videoDetails)
      console.log("upload video result")
      console.log(result)
      if(result.status===201)
      {setUploadVideoStatus(result)
        toast.success("successfully uploaded");
        handleClose()
      }
      }
  }
  const setEmbededLink=(data)=>{
    // set embededLink
    const link=`https://www.youtube.com/embed/${data.slice(-11)}`
    console.log("embeded link")
    console.log(link)
    setvideoDetails({...videoDetails,embededLink:link})

  }
  
  return (
   <>
   <div>
    <h5 className='textStyle d-flex align-items-center fs-5'>
        UPLOAD NEW VIDEO
<button className='btn textStyle'onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up"></i></button>
    </h5>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-film text-warning m-3"></i>UPLOAD VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='textStyle fw-bolder'> Please fill the fields</p>
        <Form className="border border-secondary p-3 rounded">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
        <Form.Control type="text" placeholder="Video title"  onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
      <Form.Control type="text" placeholder="Video Thumbnail" onChange={(e)=>setvideoDetails({...videoDetails,thumbnailUrl:e.target.value})}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
      <Form.Control type="text" placeholder="Video Link" onChange={(e)=>setEmbededLink(e.target.value)}/>
    </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary"onClick={handleUpload}>UPLOAD</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add