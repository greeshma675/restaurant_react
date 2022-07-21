import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Card,ListGroup} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import Review from './Review'
function RestaurantDet() {
  const [data,setData]=useState([])
  const params=useParams()
 
    async function fetchData(){
      await fetch('/restaurants.json')
      .then((data)=>data.json())
      .then((res)=>setData(res.restaurants))
    }
    useEffect(()=>{
    fetchData()
  },[])
  const details=data.find((item)=>item.id==params.id)
  return (
   <> {
      details?(
        <Row className='my-3'>
          <Col md={3}>
        <Card style={{ width: '18rem',height:'430px'}}>
        <Card.Img variant="top" src={details.photograph} />
      </Card>
      </Col>
      <Col md={4}>
      <ListGroup>
        <ListGroup.Item><h3>{details.name}</h3></ListGroup.Item>
        <ListGroup.Item>{details.neighborhood}</ListGroup.Item>
        <ListGroup.Item>{details.address}</ListGroup.Item>
        <ListGroup.Item>{details.cuisine_type}</ListGroup.Item>


    </ListGroup>
      </Col>
      <Col md={4}>
      <ListGroup>
        <h4>Operating Hours</h4>
        <ListGroup.Item>Monday:{details.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday:{details.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday:{details.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday:{details.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday:{details.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday:{details.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday:{details.operating_hours.Sunday}</ListGroup.Item>

    </ListGroup>
      </Col>
      <Row>
        
        {
          <Card style={{border: '1px solid black'}}>
          <Review reviews={details.reviews}/> 
          </Card>

        }

      </Row>
      </Row>
      
      ):'null'
    }
    </>
  )
}

export default RestaurantDet
