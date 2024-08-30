import React from 'react';
import toast ,{ Toaster } from 'react-hot-toast';

import Navbar from './Navbar';
import Footer from './Footer';
function About (){
  return(
  <div>
    <Navbar />
    <h1>About Page</h1>
    <p>Welcome to the About Page!</p>
    <br/>
    <br/>
    <button type='button' onClick={()=>{
      toast.success("Loaded Successfuly...")
    }}>
      Toster Message
      </button>
    <Footer/>
    <Toaster/>
  </div>
  )
};

export default About;
