import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { ArrowUpRight } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/propic.png'; // Import your default profile picture
//import { getCurrentPosition } from 'react-geolocation'; // Import the getCurrentPosition function from your geolocation library

export const Dashboard = () => {
  const history = useNavigate();
  const [userLocation, setUserLocation] = useState(null);

  const handleClick1 = () => {
    history('/leaderboard');
  };

  const handleClick2 = () => {
    history('/Learn');
  };

  const handleClick3 = () => {
    history('/Learn');
  };

  // Function to get user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to handle successful location retrieval
  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);
    setUserLocation({ latitude, longitude });
  };

  // Function to handle location retrieval errors
  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    // Call getLocation function when the component mounts
    getLocation();
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-item1">
        {/* Render default circular profile picture and user's name */}
        <img src={defaultProfilePic} alt="Profile" className="profile-pic" />
        <p className="user-name">User's Name</p>
        {/* Render user's location */}
        {userLocation && (
          <p className="user-location">
            Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
          </p>
        )}
      </div>
      <div className="grid-item2" onClick={handleClick1}>
        <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
          LeaderBoards <ArrowUpRight size={62} />
        </p>
      </div>
      <div className="grid-item3" onClick={handleClick2}>
        <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
          Learn <ArrowUpRight size={62} />
        </p>
      </div>
      <div className="grid-item4" onClick={handleClick3}>
        <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
          Browse Ecozone <ArrowUpRight size={62} />
        </p>
      </div>
    </div>
  );
};
