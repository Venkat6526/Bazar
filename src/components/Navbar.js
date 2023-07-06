import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Typical from 'react-typical'
import '../App.css';
import { Link } from 'react-router-dom';


  
const Navbar = () => {
  return (
    <>
      <Nav id='home'>
        <Bars />
        
        <NavMenu>
          <NavLink activeStyle className="me-5">
          <img src="logo2.svg" alt=""  width="96px" height="44px"/> 
          </NavLink>
          <NavLink to='/Features' style={{marginLeft:"170px"}} activeStyle>
            Features
          </NavLink>
          <NavLink to='/Demo' activeStyle>
            Demo
          </NavLink>
          <NavLink to='/team' activeStyle>
            Technology
          </NavLink>
         
        
        </NavMenu>
        <NavBtn>
          <NavBtn  className="btn btn-outline-danger" style={{marginLeft:"185px"}}>Purchase Now</NavBtn>
        </NavBtn>
      </Nav>
      <section className='container'>
        <div>
            <h2 className='container' style={{color:"red",textAlign:"center",fontSize:"18px",marginTop:"100px"}}>Next.js Ecommerce Templete</h2>
        </div>
        <div className='container ' style={{textAlign:"center",fontSize:"40px"}}>
           <Typical loop={Infinity} wrapper='b' steps={[ "Multi vendor",
           3000,
           "Grocery",3000,
           "Furniture",3000,
           "Gift",3000,
           "Fashion",3000,
           "Health and Beauty",3000,
           "Gadget",3000,]}/>
        </div>
        <div className='container mt-5' style={{textAlign:'center'}}>
        <p>
         Powerful Multi-Purpose React/Next.js Template with Multiple Niches, <br/>
         Multi-Vendor & Single-Vendor Layouts and 150+ UI Features. Trusted
         by<br/> <span style={{color:"red"}}>450+</span> Users.
       </p>
        </div>
        <div className='container d-flux mt-3' style={{textAlign:"center"}}>
        <button className='btn btn-danger me-5'>Purchage Now</button>
        <button className='btn btn-outline-danger'>View Demos</button>
        
        </div>
        <div className='container mt-4' style={{textAlign:"center"}}>
          <a href="#"><u>I need a server and database</u></a>
        </div>
        <div>
          <img src="page-group-2.png" className='img-fluid mt-5 w-100' alt="" />
        </div>
        <div className='mt-5 mb-4'>
            <h1 style={{textAlign:"center"}}>What You Get?</h1>
        </div>
        
        <div style={{display:"flex"}} >
          <div className='container'id='demos' style={{display:"flex"}}>
            <div> <img src="niche-demos.png"  style={{width:"200px",height:"150px", borderRadius:"15px",padding:"10px"}} alt="" /></div>
            <div className='container'>
            
              <h4>Niche Demos</h4>
              <p style={{fontSize:"14px"}}>9 Niche shop demos for online store. Super store, Fashion, Electronic, Grocery and etc</p>
              </div>
          </div>
          <div className='container' style={{display:"flex"}}>
          <div><img src="niche-demos.png" style={{width:"200px",height:"150px", borderRadius:"15px",padding:"10px"}} alt="" /></div>
         <div className='container'>
          
            <h4>Niche Demos</h4>
            <p style={{fontSize:"14px"}}>9 Niche shop demos for online store. Super store, Fashion, Electronic, Grocery and etc</p>
            </div>
        </div>
        
        </div>
        
      </section><br /><br /><br />
      <section style={{alignItems:"center"}}>
      <div className='container d-flux mt-3' style={{textAlign:"center"}}>
        <button  className='btn btn-outline-secondary me-5'><Link to='/signup' style={{color:"black",textDecoration:"none"}}>Sign-Up</Link></button>
        <button  className='btn btn-primary'><Link to='/login' style={{color:"black",textDecoration:"none"}}>Login</Link></button>
        
        </div>

        
      </section>

    </>
  );
};
  
export default Navbar;