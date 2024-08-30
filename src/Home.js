import toast, { Toaster } from 'react-hot-toast';

import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return(
  <div>
    <Navbar />
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
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

export default Home;
