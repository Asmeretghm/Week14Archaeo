import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1592488831370-fe3692a465a3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to ArchaeoDB</h1>

          <p className="py-10">
            ArchaeoDB App is all-in-one app. It provides users access to archaeological sites found around the world, It also allow users to enter their own site discoveries. It mainly focuses on archaeological sites found in African countries. Most African countries are still in need of database software that allow national museums to document and manage archaeological sites. This app will help institutions to store their sites as well as communicate with other institutions both nationally and regionally.
          </p>

          {/* <button className="btn btn-primary">Get Started</button> */}
          <Link to="/Archaeopage" className="btn btn-primary">Get Started</Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;