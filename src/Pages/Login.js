import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'
import {FaGoogle,FaFacebook,FaLinkedin,FaTwitter, FaInstagram} from 'react-icons/fa'


function Login() {
    
  return (
    <div className='body'>
    <div className='login'>
        <h1>Sign In</h1>
        <br />
        <h5>New user?</h5> <Link className='link' to='./detail'><h5 > Create an account</h5></Link>
        
    <Form> 
  
    <label for="id"></label>
    <input type="text" id='id' name='id' placeholder='Username or email' />
    <br /><br />
    <label for="firstName"></label>
    <input type="text" id='firstName' name='firstName' placeholder='Password' />
    <br /><br />
    <input type={'checkbox'}/> <label for="id"><p> Keep me signed in</p></label>
    <br />
    <br />
    <Link to='./home'><Button className='button'>Sign In</Button></Link>
    <br /><br />
    <h6>-----Or Sign In With-----</h6>
    <div style={{textDecoration:"none"}} >
       <Link className='icons' to='https://www.thecompanycheck.com/company/subhaprada-holdings-private-limited/U65929AP2022PTC122882'><FaGoogle/></Link> 
       <Link className='icons' to='https://www.instagram.com/subhapradaholdings/'><FaInstagram/></Link> 
       <Link className='icons' to='https://subhaprada.com/#'><FaLinkedin/></Link>
        <FaTwitter/>
    </div>

    
    </Form>
    </div>
    
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-showing-user-login-page-in-website-or-application-1886527-1597938.png" alt="Image Unavailable" />
    
    

    </div>
   
  )
}

export default Login