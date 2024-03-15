import React from 'react';
import './landingpage.css'; // Import CSS file for styling
import earth from '../assets/earth (1).png'
import fire from '../assets/fire.jpeg'; 
import colorful from '../assets/colorful.jpeg'; // Import CSS file for styling
import leaf from '../assets/earth (3).png'; // Import CSS file for styling
import desert from '../assets/earth.png'; // Import CSS file for styling
function landingpage() {
  return (
    <div className="gallery-container">
        <div className="heading"> 
Climato
        </div>

      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='earth' src={earth} />
      </div>

      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='earth' src={fire} />
      </div>
      <div className="photos-container">
      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='stack2' src={earth} />
      </div>
      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='stack2' src={colorful} />
      </div>
      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='stack2' src={leaf} />
    
      </div>
      <div className="stack1" style={{backgroundColor:"black"}}>
    <img className='stack2' src={desert} />
      </div>
      </div>
    </div>
  );
}

export default landingpage;
