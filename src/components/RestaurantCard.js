import React from 'react'
import { Card } from 'react-bootstrap'
function RestaurantCard({item}) {
  return (
    <div>
    <Card style={{ width: '18rem',height:'500px'}}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.address}
        </Card.Text>
        <Card.Text>
          {item.neighbourhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default RestaurantCard
// function RestaurantCard(props) {

 /* <Card style={{ width: '18rem',height:'1200px'}}>
      <Card.Img variant="top" src={props.item.photograph} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          {props.item.address}
        </Card.Text>
        <Card.Text>
          {props.item.neighbourhood}
        </Card.Text>
      </Card.Body>
    </Card> */