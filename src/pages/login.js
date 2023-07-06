
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
  
const Login = () => {
  return (

    <section  className='text'>
    <div className='container'>
    <div style={{alignItems:"center"}}>
      <h5>Welcome To Bazar</h5>
    </div>
    <div>
        <div>
            <label style={{fontSize:"16px"}}>Email or Phone Number</label>
            <input type="email" name='email' className='form-control mt-1 w-50' placeholder='exmple@mail.com' /><br />
            <label style={{fontSize:"16px"}} >Password</label>
            <input type="password" name='password' className='form-control mt-1 w-50' placeholder='*********' />
            <br />
            <button className='btn btn-danger w-50'><Link style={{textDecoration:"none",color:"black"}}>Login</Link></button>
            <div className='d-flex mt-4'>
                
                <p style={{marginLeft:"80px"}}>or</p><br /><br />
                
                
            </div><p>Don't have account? <Link to='/signup'>Sign Up</Link></p>

        </div>
    </div></div>
    </section>
  );
};
  
export default Login;