import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../App.css"
import { Button, Form } from 'react-bootstrap';
import { newcontext } from '../App';


function Home() {
  const {array,setarray}=useContext(newcontext)

  const [input,setinput]=useState("")
  const [data,setdata]=useState("")
// console.log(array);
// const filter =array.filter((res)=>res.original_title.toLowerCase().includes(data.toLowerCase()));

console.log(array);
  const searchtrack=(fn)=>{
    setinput(fn.target.value);   
    console.log(input);
  }
  const search=(e)=>{
    e.preventDefault();
    setdata(input);
    
    console.log(data);
  }
  return (
    <div>
         <Navbar className='p-4' style={{backgroundColor:"#E50914"}} expand="lg">
      <Container>
        <Navbar.Brand className='text-light' href="#welcome"><Link style={{textDecoration:'none', color:'white'}} to="/welcome"><h1>Movie Bite</h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#contact"><Link style={{textDecoration:'none', color:'white'}}  to="/latestmovies"><h5 className='hover'> Latest Movies</h5></Link></Nav.Link>
            <Nav.Link href="#contact"><Link style={{textDecoration:'none', color:'white'}}  to="/comedymovies"><h5 className='hover'> Comedy Movies</h5></Link></Nav.Link>
            
          </Nav>

          <Form className="d-flex" onChange={searchtrack}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button className='button' onClick={search} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    </div>
  )
}

export default Home