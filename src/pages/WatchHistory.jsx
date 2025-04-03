import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteWatchHistory, getHistory } from '../services/allApi';
import { useState, useEffect } from "react";


function WatchHistory() {
  const [allHistory,setAllHistory]=useState({})
  const getAllHistory=async()=>
  {
    const resp=await getHistory();
    console.log("History")
    console.log(resp)
    const {data}=resp;
    setAllHistory(data)
  }
  const deleteHistory=async(id)=>
  {
    // alert(id);
    // console.log(id)
    await deleteWatchHistory(id);
    getAllHistory()
  }
  useEffect(()=>
  {
    getAllHistory()
  },[])
  return (
    <>
    <div className='container mt-5  d-flex justify-content-between '>
      <h3 className="textStyle">
        WATCH HISTORY
      </h3>
      <Link style={{textDecoration:'none', color:'white'}} to={'/home'}>
      <i class="fa-solid fa-arrow-left me-3"></i>
      BACK TO HOME
    </Link>
    </div>
    <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
<thead>
  <tr> <th>#</th>
  <th>CAPTION</th>
  <th>URL</th>
  <th>TIME</th>
  <th>ACTION</th></tr>
 
</thead>
<tbody>
  {
    allHistory.length>0?
    allHistory.map((item)=>
    (
      <tr>
    <td>{item.id}</td>
    <td>{item.caption}</td>
    <td>{item.embededLink}</td>
    <td>{ item.timeStamp}</td>
    <td><Button variant="danger" onClick={()=>deleteHistory(item.id)}><i class="fa-solid fa-trash"></i></Button></td>
  </tr>
    )):
    <p className='m-5 text-danger'>NO HISTORY FOUND</p>
  }
  
</tbody>
    </table>
    </>
  )
}

export default WatchHistory