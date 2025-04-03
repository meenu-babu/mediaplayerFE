import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  addToHistory, deleteVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';


export default function VideoCard({displayVideo,setDeleteVideoStatus}) {
  console.log("each video item")
  console.log(displayVideo)
  const removeVideo=async(id)=>
  {
    const response=await deleteVideo(id)
    console.log("delete response")
    console.log(response)
    if(response.status=== 200)
    {
        toast.success(`${displayVideo.caption} successfully deleted`)
        setDeleteVideoStatus(response)
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => 
    {
      setShow(true)
      // display video contain all video details,from that we used to destructure caption and embedded link
    const {caption,embededLink}=displayVideo;
    const today=new Date();
    console.log(today)
    const year=today.getFullYear();
    const month=today.getMonth()+1;
    const day=today.getDate();
    console.log(year,month,day) ;
      const hour=today.getHours();
      const minute=String(today.getMinutes()).padStart(2,'0');
      const timeValue=day+'-'+month+'-'+year+'  ' +hour+':'+minute
      console.log(timeValue)
      const history={
        caption:caption,
        embededLink:embededLink,
        timeStamp:timeValue
      }
      console.log(history)
      await addToHistory(history)
     
    };

  return (
   <> 
   <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'200px'} onClick={handleShow}/>
      <Card.Body>
        <div className='d-flex justify-content-between'> <Card.Title>{displayVideo.caption.slice(0,12)}...</Card.Title>
        
        <Button variant="danger" onClick={()=>removeVideo(displayVideo.id)}><i class="fa-solid fa-trash"></i></Button></div>
       
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={displayVideo.embededLink}></iframe>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
     
   </>
  )
}
