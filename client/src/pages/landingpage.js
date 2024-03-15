import React from 'react';
import './landingpage.css'; // Import CSS file for styling
import earth from '../assets/earth (1).png';
import fire from '../assets/fire.jpeg'; 
import colorful from '../assets/colorful.jpeg'; // Import CSS file for styling
import leaf from '../assets/earth (3).png'; // Import CSS file for styling
import desert from '../assets/earth.png'; // Import CSS file for styling

function Landingpage() {
  return (
    <div className="gallery-container">
      <div className="heading">Climato</div>

      <div className="stack1" style={{ backgroundColor: "black" }}>
        <div className="image-container">
          <img className='earth' src={earth} alt="Earth" />
         
        </div>
      </div>

      <div className="stack1" style={{ backgroundColor: "black" }}>
        <div className="image-container">
          <img className='earth' src={fire} alt="Fire" />
          
        </div>
      </div>

      <div className="photos-container">
        <div className="stack1" style={{ backgroundColor: "black" }}>
          <div className="image-container">
            <img className='stack2' src={earth} alt="Earth" />
          </div>
        </div>
        <div className="stack1" style={{ backgroundColor: "black" }}>
          <div className="image-container">
            <img className='stack2' src={colorful} alt="Colorful" />
          </div>
        </div>
        <div className="stack1" style={{ backgroundColor: "black" }}>
          <div className="image-container">
            <img className='stack2' src={leaf} alt="Leaf" />
          </div>
        </div>
        <div className="stack1" style={{ backgroundColor: "black" }}>
          <div className="image-container">
            <img className='stack2' src={desert} alt="Desert" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
