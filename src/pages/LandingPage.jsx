import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
<>
{/* first section */}
    <Container  className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
      <Row>
        <Col>
        <h3 className='textStyle'>WELCOME TO  <span className='text-warning'>MEDIA PLAYER</span></h3>
        <p className='textStyle mt-3' style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni ratione totam laudantium doloribus aliquid aperiam tempora, libero accusantium nesciunt iste obcaecati id eos expedita natus nisi optio ipsam laboriosam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quia nulla accusamus, eos iure mollitia soluta ullam necessitatibus incidunt, cum laudantium fuga consequatur debitis earum. Ullam, dolorem nulla! Facere, eum!Lorem
        </p>
        <Link to={'/home'}><Button className='btn btn-warning mt-4'>GET STARTED<i class="fa-solid fa-arrow-right ms-2"></i></Button></Link>
        
        </Col>
        <Col>
        <img src='https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt='' width={'400px'} className='ms-5'/>
        </Col>
      </Row>
      </Container>
    {/* second section features */}
      <div className='container'>
        <h3 className='textStyle'>FEATURES</h3>
<div className='d-flex align-items-center justify-content-evenly mt-5'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/OiwgU0MtwOcAAAAC/213.gif" />
      <Card.Body>
        <Card.Title>ADD VIDEOS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/home'}>
        <Button variant="primary">ADD VIDEO</Button>
        </Link>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height="300px" src="https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" />
      <Card.Body>
        <Card.Title>VIEW VIDEOS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/home'}>
        <Button variant="primary">VIEW VIDEO</Button></Link>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/63/ea/7b/63ea7bc8ade0d560728dbe29a9bfe091.gif" />
      <Card.Body>
        <Card.Title>WATCH HISTORY</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/home'}><Button variant="primary">WATCH HISTORY</Button></Link>
        
      </Card.Body>
    </Card>
    
    
</div>
      </div>
      {/* third section */}
      <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
          <h3 className='textStyle'>Simple and Powerful</h3>
          <p className='textStyle'style={{textAlign:'justify'}}><span className='fs-5 fw-bolder me-3'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem. Laboriosam, impedit molestiae atque voluptatum eius perferendis corporis dolore tenetur expedita dignissimos possimus! Ducimus sapiente dignissimos nihil dolor voluptatum iusto.</p>
          <p className='textStyle' style={{textAlign:'justify'}}><span className='fs-5 fw-bolder me-3'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem. Laboriosam, impedit molestiae atque voluptatum eius perferendis corporis dolore tenetur expedita dignissimos possimus! Ducimus sapiente dignissimos nihil dolor voluptatum iusto.</p>
          <p className='textStyle' style={{textAlign:'justify'}}><span className='fs-5 fw-bolder me-3'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem. Laboriosam, impedit molestiae atque voluptatum eius perferendis corporis dolore tenetur expedita dignissimos possimus! Ducimus sapiente dignissimos nihil dolor voluptatum iusto.</p>

          </Col>
          <Col>
          <div>
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/PGqltBCo6cU" title="L2E Empuraan Trailer (Malayalam) | Mohanlal | Prithviraj Sukumaran | Murali Gopy | March 27 Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>
        </Row>
      </div>
      </>
  )
}

export default LandingPage