import React from 'react';
import toast,{ Toaster } from 'react-hot-toast';

import Navbar from './Navbar';
import Footer from './Footer';
function Contact() {
  return(
  <div>
    <Navbar />
    <h1>Contact Page</h1>
    <p>Welcome to the Contact Page!</p>
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

export default Contact;
