import './App.css';
import React from 'react';
import image1 from"./cat_pic.jpeg"
function App() {
  let X = "Your name here";
  return(
   <div> 
   <h1 style={{color: "red"}}>{X}</h1>
   <br ></br>
   <img src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png' alt='cat' ></img>
   <br></br> 
   {/* under src */}
   <img src={image1} alt='catt_img'/>
   <br/> 
   {/* under public */}
   <img src="/logo512.png" alt='catt_img'/>

   <video width="320" height="240" controls>
   <source src="myVideo.mp4" type="video/mp4" />
   </video>
   </div>
  
  );
}

export default App;
