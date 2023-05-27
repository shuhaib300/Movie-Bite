import  Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Card, Carousel, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { newcontext } from '../App';
import {imageUrl} from '../Assets/Api';

function Main({movies})
 {
    const {array,setarray}=useContext(newcontext)

    const [test, settest]=useState([]);
    useEffect(()=>{
    Axios.get(movies).then((response)=>settest(response.data.results));
   setarray(test)
    },[movies,test])
            console.log(test)
  return (
    <div className='row m-1 p-4' style={{backgroundColor:"black", marginTop:"20px"}}>
        
    {test.map((item)=>{
      return(
      
        <div className='card'>
        <Card className='m-3 col-1 col-2 col-3 col-4 col-5 col-6 col-7 col-8 col-9 col-10 col-11 col-12' style={{ width: '16rem', height:'35rem'}}>
        
          <Carousel className='border'>
        
  <Carousel.Item className='border'>
    <img style={{height:'10rem'}}
      className="images"
      src={imageUrl+item.backdrop_path}
      alt="First slide"
    />
   </Carousel.Item>
        
   
    </Carousel>
    

        <Card.Body className='cardbody'>
          <Card.Title className='cardbody'>{item.title || item.name}</Card.Title>
          <Card.Text className='cardbody'>
            Language:- {item.original_language}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='cardbody'> Popularity:- {item.popularity}</ListGroup.Item>
          <ListGroup.Item className='cardbody'>Vote:-{item.vote_average}</ListGroup.Item>
          
        </ListGroup>
       
        <Card.Body className='cardbody'>
         <Link to={`/detail/${item.id}`}><button style={{color:"white", backgroundColor:"#E50914", borderColor:"#E50914",borderRadius:"5"}}><h5>Details</h5></button></Link>
          
        </Card.Body>
        
      </Card>
      </div>
      )

    })}
    
    
</div>
  )
}


export default Main
