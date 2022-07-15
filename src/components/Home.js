import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import {Row,Col} from 'react-bootstrap'
function Home() {
    const [restaurants,setRestaurant]=useState([])
                //res.restaurants..here restaurants is from json file

    useEffect(()=>{
        async function fetchData(){
            await fetch('/restaurants.json')
            .then((data)=>data.json())
            .then((res)=>setRestaurant(res.restaurants))
        }
        fetchData()
    },[])
    console.log("My data is",restaurants);
  return (
    
    <Row>
      {
        restaurants.map(item=>(
          <Col lg={6} sm={12} md={4} xl={3}>
            <RestaurantCard  item={item}/>
            </Col>
        ))
      }
    </Row>
    
  )
}

export default Home
