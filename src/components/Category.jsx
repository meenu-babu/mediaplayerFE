import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, deleteVideoCategory, getAllCategories } from '../services/allApi';


function Category() {
   const [show, setShow] = useState(false);
  const [categories,setCategories]=useState([])
      const handleClose = () => 
        {
        setShow(false);
        setCategoryName("");
      }
      const handleShow = () => setShow(true);
      const [categoryName,setCategoryName]=useState("")
      const handleAddCategory=async()=>
      {
        if(!categoryName)
        {
          toast.warning("please fill the category name")
        }
        else{
          const body={
            categoryName:categoryName,
            allVideos:[]
          }
            const response=await addCategory(body)
            
            console.log("added category")
            console.log(response)
            if(response.status===201)
            {
              toast.success(`${categoryName} successfully saved`)
            }
            handleClose()
        }

      }
      const getCategories=async()=>
      {
        const response=await getAllCategories();
        console.log("getting all categories")
        console.log(response)
        const {data}=response;
        setCategories(data)

      }
      useEffect(()=>{
        getCategories()
      }
      )

      const deleteCategory=async(id)=>
      {
        // alert(id)
        await deleteVideoCategory(id)
        getCategories()
      }
  return (
   <>
   <div >
    <button className='btn btn-warning' onClick={handleShow}> ADD NEW CATEGORY</button>
   
    
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-film text-warning me-3"></i>ADD CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='textStyle fw-bolder'> Please fill the fields</p>
        <Form className="border border-secondary p-3 rounded">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
        <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>
      
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary"onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>
      {

categories?.map((item)=>(
<div className='border border-secondary rounded  m-3 p-3'>
  <div className='d-flex justify-content-between align-items-center '>
    <h6>{item.categoryName}</h6>
    <button className='btn btn-danger'onClick={()=>deleteCategory(item.id)}>
    <i class="fa-solid fa-trash"></i>
    </button>

  </div>

</div>
))
 }
      
   </>
  )
}

export default Category