import React from 'react';
import './landingpage.css'; // Import CSS file for styling
import earth from '../assets/space.png';
import fire from '../assets/fire2.jpeg'; 
import colorful from '../assets/colorful.jpeg'; // Import CSS file for styling
import leaf from '../assets/earth (3).png'; // Import CSS file for styling
import desert from '../assets/earth.png'; // Import CSS file for styling
import Card from '../component/card.js';
import trash from '../assets/earth (4).png'

function Landingpage() {
  return (
    <div>
    <div className="text-white h-full flex p-5 ">
      <section
        className="w-screen  bg-center bg-cover bg-no-repeat   h-96  rounded-3xl  relative "
        style={{
          backgroundImage: `url(${earth})`,
        }}
      ></section>
      <div className="text-white flex flex-col mt-9 tracking-thighter leading-7 absolute ml-9">
        <h1 className="text-4xl font-sans font-bold mb-4 relative ">
          Climato knows there is no Plan<span className="text-slate-400">et</span> B
        </h1>
        <p className="font-mono text-xl ">
          Climato is here to redefine how you manage your e-waste and How you

        </p>
          <p className="font-mono text-xl leading-9">can participate help our planet because, this is all that we’ve got.</p>
      </div>
    </div>
    <div className="text-white h-full flex p-2 w-full rounded-3xl ">
      <section
        className="w-full   bg-center bg-cover bg-no-repeat  h-96  rounded-3xl relative rigth-10"
        style={{
          backgroundImage: `url(${fire})`,
        }}
      ></section>
      <div className="text-white flex flex-col mt-9 tracking-thighter leading-7 absolute ml-5">
        <h1 className="text-4xl font-sans font-bold mb-4">
          Let’s Check your EcoScore
        </h1>
        <p className="font-mono leading-9 text-xl">
          Track how much E-waste you produce or might produce and we will 
        </p>
        <p className="font-mono leading-10 text-xl">help
          you to reduce it</p>
      </div>
    </div>

    <div className="w-screen p-4 md:p-6 md:py-0.5 flex flex-wrap ">
      <div className="mt-1 flex flex-col md:flex-row justify-between mx-auto  p-1 items-center ">
        <Card
          read={"Our Mission"}
          image={trash}
          description={"Discover our driving force to save this planet."}
        />
        <Card
          read={"Rewards"}
          image={colorful}
          description={"Know How you can earn while helping the planet. "}
        />
        <Card
          read={"How it Works"}
          image={leaf}
          description={"Know what is Cliamto and why should you care."}
        />
        <Card
          read={"About Us"}
          image={desert}
          description={" Get in touch and know the the Team."}
        />
      </div>
    </div>
  </div>
);
}

export default Landingpage;
