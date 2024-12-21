import React from 'react'
import './NavBar.css';
import gymlogo from  "../assets/gymI1-preview.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className="navbar">
    <div className="divlogo">
    <Link to="/" className='linktext'>
    <img src={gymlogo} height="100%" width="100%"/>
    </Link>
    </div>
    <div className="menu">
        <Link to="/" className='linktext'>
        <div>Home</div>
        </Link>
        <div>About</div>
        <div>Our Services</div>
        <div>Benifits</div>
        <div>Blogs</div>
        <Link  className="linktext" to='/dietform'><div>Diet Form</div></Link>
        <Link  className="linktext" to='/personalizeform'><div>Personal Form</div></Link>

    </div>
    <div className="menu_end">
        <Link className="linktext" to='/personalizeform'>
        <div style={{color:'white'}}>Join US now</div>
        </Link>
    </div>
    </div>
    </>
  )
}
