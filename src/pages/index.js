import React from 'react';
import Navbar from '../components/Navbar';
import HeaderCard from '../components/HeaderCard';

function Home() {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Navbar />
      <div className="text-center mt-10 font-serif">
        <p className="text-5xl text-black font-bold">
          Hi, I am <span className="text-green-700">HALLA HAMIDI</span>, a Frontend Web Developer
        </p>
      </div>
      <HeaderCard />
    </div>
  );
}

export default Home;
