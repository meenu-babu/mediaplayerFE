import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'

function View({uploadVideoStatus}) {
  // creating state for viewing updated deleted video
  const [deleteVideoStatus,setDeleteVideoStatus]=useState([])
  const[allVideos,setAllVideos]=useState([])
  const getVideos=async()=>{
    const resp=await getAllVideos();
    const {data}=resp  //destructuring "data" from the entire resp
    setAllVideos(data)
  }
  useEffect(()=>{
    getVideos()
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
    <Row style={{gap:'50px'}}>
      {
        allVideos?.map((item=>(<Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>)))
      }
      
    </Row>
    </>
  )
}

export default View